<script lang="ts">
    import type { User } from "../../types/user";
    
    import { Input } from "sveltestrap";

    export let canContinue: boolean;
    export let user: User;

    $: canContinue = user.osmProfile.username.length >= 1;
</script>

<Input type="text" placeholder="OSM Username" bind:value={user.osmProfile.username}/>