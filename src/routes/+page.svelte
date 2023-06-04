<script lang="ts">
    import { mapboxglAccessToken } from "../config";
    
    import Ui from "../lib/Ui/Ui.svelte";
    import Map from "../lib/Map.svelte";
</script>

<Ui/>
<Map accessToken={mapboxglAccessToken}/>