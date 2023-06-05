<script lang="ts">
    import { _ } from 'svelte-i18n';
    import { users } from '../../../stores';

    import { Offcanvas } from "sveltestrap";
    import User from './User.svelte';

    export let isOpen = false;

    function toggle() {
        isOpen = !isOpen;
    }
</script>

<Offcanvas isOpen={isOpen} {toggle} header={$_("manageUsersOffcanvas.title")} placement="start">
    {#each $users as user (user.osmProfile.username)}
        <User user={user}/>
    {:else}
        <h2>{$_("manageUsersOffcanvas.noUsers")}</h2>
    {/each}
</Offcanvas>