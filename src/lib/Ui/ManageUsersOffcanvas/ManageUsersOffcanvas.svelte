<script lang="ts">
    import { get } from 'svelte/store'
    import { users } from '../../../stores';

    import { Offcanvas } from "sveltestrap";
    import User from './User.svelte';

    export let isOpen = false;

    function toggle() {
        isOpen = !isOpen;
    }
</script>

<Offcanvas isOpen={isOpen} {toggle} header="Manage users" placement="start">
    {#each $users as user (user.osmProfile.username)}
        <User user={user}/>
    {:else}
        <h2>No users.</h2>
    {/each}
</Offcanvas>