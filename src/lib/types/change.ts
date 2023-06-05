import { TimestampGeoPoint } from "./timestamp_geo_point";

export class Change extends TimestampGeoPoint {
    public id: string;

    constructor(id: string, lon: number, lat: number, timestamp: number) {
        super(lon, lat, timestamp);

        this.id = id;
    }
}