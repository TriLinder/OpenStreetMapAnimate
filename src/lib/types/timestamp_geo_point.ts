import type { FeatureCollection, Geometry, GeoJsonProperties } from 'geojson';

export class TimestampGeoPoint {
    public lon: number;
    public lat: number;
    public timestamp: number;

    constructor(lon: number, lat: number, timestamp: number) {
        this.lon = lon;
        this.lat = lat;
        this.timestamp = timestamp;
    }

    public toGeoJson() {
        const geoJson: FeatureCollection = {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [this.lon, this.lat]
                    },
                    "properties": {}
                }
            ]
        }

        return geoJson;
    }
}