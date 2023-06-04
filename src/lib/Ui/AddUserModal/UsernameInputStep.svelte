<script lang="ts">
    import { _ } from 'svelte-i18n';
    import type { User } from "../../types/user";
    
    import { Input } from "sveltestrap";

    export let canContinue: boolean;
    export let user: User;

    $: canContinue = user.osmProfile.username.length >= 1;
</script>

<Input type="text" placeholder={$_("addUserModal.usernameInput.osmUsername")} bind:value={user.osmProfile.username}/>