<script lang="ts">
    import { mapboxglAccessToken } from "../config";
    
    import Ui from "../lib/Ui/Ui.svelte";
    import Map from "../lib/map/Map.svelte";

    if ((mapboxglAccessToken as unknown) == "[Please set your Mapbox.com access token here]") {
        alert("Please set your Mapbox.com access token in the config file.\nRefer to the README for more instructions.");
    }
</script>

<svelte:head>
    <title>OpenStreetMap Animate</title>
</svelte:head>

<Ui/>
<Map accessToken={mapboxglAccessToken}/>