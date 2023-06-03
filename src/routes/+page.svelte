<script lang="ts">
    import { mapboxglAccessToken } from "../config";
    
    import Map from "../lib/Map.svelte";
</script>

<Map accessToken={mapboxglAccessToken}/>