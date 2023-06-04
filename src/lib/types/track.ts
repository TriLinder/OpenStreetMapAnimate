import type { TrackPoint } from "./track_point";

export class Track {
    public points: TrackPoint[];

    constructor() {
        this.points = [];
        
        this.reset();
    }

    public reset() {
        this.points = [];
    }

    public addTrackPoint(trackPoint: TrackPoint) {
        this.points.push(trackPoint);
    }
}