import { TimestampGeoPoint } from "./timestamp_geo_point";

export class Changeset extends TimestampGeoPoint {
    public id: number;

    constructor(lon: number, lat: number, id: number, timestamp: number) {
        super(lon, lat, timestamp);

        this.id = id;
    }
}