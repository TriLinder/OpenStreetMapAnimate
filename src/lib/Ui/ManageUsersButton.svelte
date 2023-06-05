<script lang="ts">
    import { Button, Icon } from "sveltestrap";
    import type { ButtonSize } from "sveltestrap/src/Button";
    
    import ManageUsersOffcanvas from "./ManageUsersOffcanvas/ManageUsersOffcanvas.svelte";

    export let size: ButtonSize = "sm";

    let isOpen = false;

    function toggle() {
        isOpen = !isOpen;
    }
</script>

<ManageUsersOffcanvas bind:isOpen={isOpen}/>

<Button color="secondary" size={size} on:click={toggle}>
    <Icon name="person-check-fill"/>
</Button>