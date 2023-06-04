<script lang="ts">
    import { Input } from "sveltestrap";
    import gpxParser from "gpxparser";

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
    }
</script>

<Input type="file" on:change={handleFileSelection}/>