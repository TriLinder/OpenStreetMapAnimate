<script lang="ts">
    import { _ } from 'svelte-i18n';
    import type { User } from "../../types/user";
    
    import { Icon, Input } from "sveltestrap";

    export let canContinue: boolean;
    export let user: User;

    $: user.osmProfile.setColorFromUsername();
    $: canContinue = (user.osmProfile.username.length >= 1) && (/^[a-zA-Z_][a-zA-Z0-9_]{1,254}$/.test(user.osmProfile.username));
</script>

<Icon name="person" style="color: {user.osmProfile.color}; font-size: 5em;"/>
<Input type="text" placeholder={$_("addUserModal.usernameInput.osmUsername")} bind:value={user.osmProfile.username} />