
import { get } from 'svelte/store'
import { mainMap, users, playbackCurrentTime } from '../../stores';

import type { GeoJSONSource } from 'mapbox-gl';

export class UserRenderer {
    constructor() {
        requestAnimationFrame(this.update.bind(this));    
    }

    private update() {
        const map = get(mainMap);

        if (map) {
            get(users).forEach(function(user) {
                const userSourceId = `userSource-${user.osmProfile.username}`;
                const userLayerId = `userLayer-${user.osmProfile.username}`;
                
                // Add the user's source and layer to the map
                // Then add all their changes
                if (!user.addedToMap) {
                    map.addSource(userSourceId, {
                        "type": "geojson"
                    });

                    map.addLayer({
                        "id": userLayerId,
                        "source": userSourceId,
                        "type": "circle",
                        "paint": {
                            "circle-radius": 15,
                            "circle-color": user.osmProfile.color
                        }
                    });

                    
                    user.changesetCollection.changesets.forEach(function(changeset) {
                        changeset.changes.forEach(function(change) {
                            const changeSourceId = `changeSource-${change.id}`;
                            const changeLayerId = `changeLayer-${change.id}`;

                            console.log(changeSourceId);
                            map.addSource(changeSourceId, {
                                "type": "geojson",
                                "data": change.toGeoJson()
                            });


                            map.addLayer({
                                "id": changeLayerId,
                                "source": changeSourceId,
                                "type": "circle",
                                "paint": {
                                    "circle-radius": 7,
                                    "circle-color": user.osmProfile.color
                                },
                                "layout": {
                                    "visibility": "visible"
                                }
                            }); 
                        });
                    });

                    user.addedToMap = true;
                }

                // Update user's source location
                const trackPoint = user.track.getInterpolatedPointFromTimestamp(get(playbackCurrentTime)); 
                const geojson = trackPoint.toGeoJson();

                (map.getSource(userSourceId) as GeoJSONSource).setData(geojson);

                // Update changes' layer visibility
                user.changesetCollection.changesets.forEach(function(changeset) {
                    changeset.changes.forEach(function(change) {
                        const changeLayerId = `changeLayer-${change.id}`;
    
                        const visible = get(playbackCurrentTime) >= change.timestamp;

                        map.setLayoutProperty(changeLayerId, "visibility", visible ? "visible" : "none");
                    });
                });
            });
        }

        requestAnimationFrame(this.update.bind(this));
    }
}