
import { get } from 'svelte/store'
import { mainMap, users } from '../../stores';

import type { GeoJSONSource } from 'mapbox-gl';

export class UserRenderer {
    constructor() {
        requestAnimationFrame(this.update.bind(this));    
    }

    private update() {
        const map = get(mainMap);

        if (map) {
            get(users).forEach(function(user) {
                const sourceId = `userSource-${user.osmProfile.username}`;
                const layerId = `userLayer-${user.osmProfile.username}`;
                
                // Add the user's source and layer to the map
                if (!user.addedToMap) {
                    map.addSource(sourceId, {
                        "type": "geojson"
                    });

                    map.addLayer({
                        "id": layerId,
                        "source": sourceId,
                        "type": "circle",
                        "paint": {
                            "circle-radius": 10,
                            "circle-color": "#007cbf"
                        }
                    });

                    user.addedToMap = true;
                }

                // Update user's source location
                const geojson = user.track.points[0].toGeoJson();

                (map.getSource(sourceId) as GeoJSONSource).setData(geojson);
            });
        }

        requestAnimationFrame(this.update.bind(this));
    }
}