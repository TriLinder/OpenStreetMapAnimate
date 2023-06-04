export class TimestampGeoPoint {
    public lon: number;
    public lat: number;
    public timestamp: number;

    constructor(lon: number, lat: number, timestamp: number) {
        this.lon = lon;
        this.lat = lat;
        this.timestamp = timestamp;
    }
}