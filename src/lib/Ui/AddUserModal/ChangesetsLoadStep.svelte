<script lang="ts">
    import { onMount } from "svelte";

    import type { User } from '../../types/user';

    import { Spinner } from 'sveltestrap';

    export let canContinue: boolean;
    export let user: User;

    let loading = true;
    $: canContinue = !loading;

    async function loadChangesets() {
        const url = `https://www.openstreetmap.org/api/0.6/changesets.json?display_name=${user.osmProfile.username}`;

        const response = await fetch(url);
        const data = await response.json();

        const changesets = data["changesets"];
    }

    onMount(function() {
        loadChangesets();
    });
</script>

{#if loading}
    <h2>Loading..</h2>
    <Spinner/>
{/if}