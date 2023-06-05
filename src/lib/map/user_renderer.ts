
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
                // Then add all their changesets
                if (!user.addedToMap) {
                    map.addSource(userSourceId, {
                        "type": "geojson"
                    });

                    map.addLayer({
                        "id": userLayerId,
                        "source": userSourceId,
                        "type": "circle",
                        "paint": {
                            "circle-radius": 10,
                            "circle-color": "#007cbf"
                        }
                    });

                    /*
                    user.changesets.changesets.forEach(function(changeset) {
                        const changesetSourceId = `changesetSource-${changeset.id}`;
                        const changesetLayerId = `changesetLayer-${changeset.id}`;

                        map.addSource(changesetSourceId, {
                            "type": "geojson",
                            "data": changeset.toGeoJson()
                        });

                        
                        map.addLayer({
                            "id": changesetLayerId,
                            "source": changesetSourceId,
                            "type": "circle",
                            "paint": {
                                "circle-radius": 10,
                                "circle-color": "#61f46b"
                            },
                            "layout": {
                                "visibility": "visible"
                            }
                        }); 
                    }); */

                    user.addedToMap = true;
                }

                // Update user's source location
                const trackPoint = user.track.getInterpolatedPointFromTimestamp(get(playbackCurrentTime)); 
                const geojson = trackPoint.toGeoJson();

                (map.getSource(userSourceId) as GeoJSONSource).setData(geojson);

                /*
                // Update changesets' layer visibility
                user.changesets.changesets.forEach(function(changeset) {
                    const changesetLayerId = `changesetLayer-${changeset.id}`;
 
                    const visible = get(playbackCurrentTime) >= changeset.timestamp;

                    map.setLayoutProperty(changesetLayerId, "visibility", visible ? "visible" : "none");
                });
                */
            });
        }

        requestAnimationFrame(this.update.bind(this));
    }
}