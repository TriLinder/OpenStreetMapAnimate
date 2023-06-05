<script lang="ts">
    import { _ } from 'svelte-i18n';
    import type { User } from "../../types/user";

    import { Icon } from "sveltestrap";
    
    export let user: User;
</script>

<style>
    #content {
        padding: 1em;
        margin-top: 1em;
        margin-bottom: 1em;

        border-width: 0.2rem;
        border-radius: 1rem;
        border-color: black;
        border-style: solid;
    }

    #username {
        font-size: 2em;
        font-weight: bold;
    }
</style>

<div id="content">
    <span id="username"> <Icon name="circle-fill" style="color: {user.osmProfile.color};"/> {user.osmProfile.username}</span>
    <p>{$_("manageUsersOffcanvas.user.changes")}: {user.changesetCollection.getTotalChangeCount()}</p>
</div>