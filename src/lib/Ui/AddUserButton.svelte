<script lang="ts">
    import { Button, Icon } from "sveltestrap";
    import type { ButtonSize } from "sveltestrap/src/Button";
    
    import AddUserModal from "./AddUserModal/AddUserModal.svelte";

    export let size: ButtonSize = "sm";

    let isOpen = false;

    function toggle() {
        isOpen = !isOpen;
    }
</script>

{#if isOpen}
    <AddUserModal bind:isOpen={isOpen}/>
{/if}

<Button color="secondary" size={size} on:click={toggle}>
    <Icon name="person-plus-fill"/>
</Button>