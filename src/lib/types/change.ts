import { TimestampGeoPoint } from "./timestamp_geo_point";

export class Change extends TimestampGeoPoint {
    public id: number;

    constructor(id: number, lon: number, lat: number, timestamp: number) {
        super(lon, lat, timestamp);

        this.id = id;
    }
}