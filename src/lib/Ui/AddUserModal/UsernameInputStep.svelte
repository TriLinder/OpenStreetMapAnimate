<script lang="ts">
    import { _ } from 'svelte-i18n';
    import type { User } from "../../types/user";
    
    import { Icon, Input } from "sveltestrap";

    export let canContinue: boolean;
    export let user: User;

    function updateUserColor() {
        user.osmProfile.setColorFromUsername();
    }

    $: canContinue = user.osmProfile.username.length >= 1;
</script>

<style>
    .profile {
        font-size: 5em;
        text-align: center;
    }
</style>

<div class="profile">
    <Icon name="person" style="color: {user.osmProfile.color};"/>
</div>

<Input type="text" placeholder={$_("addUserModal.usernameInput.osmUsername")} bind:value={user.osmProfile.username} on:change={updateUserColor} on:input={updateUserColor}/>