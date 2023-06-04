<script lang="ts">
    import gpxParser from "gpxparser";

    import type { User } from '../../types/user';
    import { TrackPoint } from '../../types/track_point';

    import { Input } from "sveltestrap";

    export let user: User;

    function handleFileSelection(event: Event) {
        const file = (event.target as HTMLInputElement).files![0];
        const reader = new FileReader();

        reader.addEventListener("load", function(event) {
            parseGpxString((event.target!.result as string));
        });

        reader.readAsText(file);
    }

    function parseGpxString(gpxString: string) {
        const gpx = new gpxParser();
        gpx.parse(gpxString);
        
        const track = gpx.tracks[0];
        
        user.track.reset();

        track.points.forEach(function(point) {
            user.track.addTrackPoint(new TrackPoint(point.lon, point.lat, point.time.getTime()));
        });
    }
</script>

<Input type="file" on:change={handleFileSelection}/>