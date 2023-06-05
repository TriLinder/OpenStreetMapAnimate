import { TrackPoint } from "./track_point";

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
    
    public getInterpolatedPointFromTimestamp(timestamp: number): TrackPoint {
        const firstPoint = this.points[0];
        const lastPoint = this.points[this.points.length - 1];
        
        if (timestamp <= firstPoint.timestamp) {
            return firstPoint;
        }

        if (timestamp >= lastPoint.timestamp) {
            return lastPoint;
        }

        for (let i = 0; i < this.points.length - 1; i++) {
            const currentPoint = this.points[i];
            const nextPoint = this.points[i + 1];

            if (timestamp >= currentPoint.timestamp && timestamp <= nextPoint.timestamp) {
                const timeDiff = nextPoint.timestamp - currentPoint.timestamp;
                const lonDiff = nextPoint.lon - currentPoint.lon;
                const latDiff = nextPoint.lat - currentPoint.lat;

                const timestampDiff = timestamp - currentPoint.timestamp;
                const lonIncrement = (lonDiff / timeDiff) * timestampDiff;
                const latIncrement = (latDiff / timeDiff) * timestampDiff;

                const interpolatedPoint = new TrackPoint(currentPoint.lon + lonIncrement, currentPoint.lat + latIncrement, timestamp);  

                return interpolatedPoint;
            }
        }

        return this.points[0];
    }

    public getPointClosestToTimestamp(timestamp: number) {
        let closestPointTimeDifference = Infinity;
        let closestPoint = this.points[0];

        this.points.forEach(function (point) {
            const timeDifference = Math.abs(timestamp - point.timestamp);

            if (timeDifference <= closestPointTimeDifference) {
                closestPointTimeDifference = timeDifference;
                closestPoint = point;
            }
        });

        return closestPoint;
    }
}