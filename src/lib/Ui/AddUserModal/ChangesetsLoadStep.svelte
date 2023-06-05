<script lang="ts">
    import { _ } from 'svelte-i18n';
    import { onMount } from "svelte";

    import type { User } from '../../types/user';
    import { Changeset } from "../../types/changeset";

    import { Spinner } from 'sveltestrap';

    export let canContinue: boolean;
    export let user: User;

    let stage = "loading";
    $: canContinue = stage == "success";

    interface ApiResponse {
        version: string;
        generator: string;
        copyright: string;
        attribution: string;
        license: string;
        changesets: Changeset[];
    }

    interface Changeset {
        id: number;
        created_at: string;
        open: boolean;
        comments_count: number;
        changes_count: number;
        closed_at: string;
        min_lat: number;
        min_lon: number;
        max_lat: number;
        max_lon: number;
        uid: number;
        user: string;
        tags: unknown;
    }

    async function loadChangesets() {
        const url = `https://www.openstreetmap.org/api/0.6/changesets.json?display_name=${user.osmProfile.username}`;

        const response = await fetch(url);
        const data: ApiResponse = await response.json();

        const changesetsData = data["changesets"];

        changesetsData.forEach(function(changesetData) {
            const lon = changesetData["min_lon"];
            const lat = changesetData["min_lat"];
            const id = changesetData["id"];
            const timestamp = new Date(changesetData["created_at"]).getTime();

            if (timestamp >= user.track.startTime && timestamp <= user.track.endTime) {
                const changeset = new Changeset(lon, lat, id, timestamp);
                user.changesets.addChangeset(changeset);
            }
        });
    }

    onMount(async function() {
        try {
            await loadChangesets();
            stage = "success";
        }
        catch {
            stage = "error";
        }
    });
</script>

{#if stage == "loading"}
    <h2>{$_("addUserModal.changesetLoading.loading")}</h2>
    <Spinner/>

{:else if stage == "error"}
    <h2>{$_("addUserModal.changesetLoading.failure")}</h2>
    <p>{$_("addUserModal.changesetLoading.makeSureAdblockIsOff")}</p>

{:else if stage == "success"}
    <h2>{$_("addUserModal.changesetLoading.success")}</h2>
    <p>{$_("addUserModal.changesetLoading.continueToFinish")}</p>
{/if}