import type { TrackPoint } from "./track_point";

export class Track {
    public points: TrackPoint[];
    
    public startTime = Infinity;
    public endTime = -Infinity;

    constructor() {
        this.points = [];
        
        this.reset();
    }

    public reset() {
        this.points = [];
    }

    public addTrackPoint(trackPoint: TrackPoint) {
        this.points.push(trackPoint);

        this.startTime = Math.min(this.startTime, trackPoint.timestamp);
        this.endTime = Math.max(this.endTime, trackPoint.timestamp);
    }
}