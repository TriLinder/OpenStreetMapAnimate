<script lang="ts">
    import { _ } from 'svelte-i18n';
    import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from "sveltestrap";

    export let isOpen = false;

    function toggle() {
        isOpen =! isOpen;
    }
</script>

<Modal isOpen={isOpen}>
    <ModalHeader {toggle}> {$_("addUserModal.title")} </ModalHeader>

    <ModalBody>
        <p>Step 1</p>
    </ModalBody>

    <ModalFooter>
        <Button color="danger" on:click={toggle}>{$_("addUserModal.cancelButton")}</Button>
        <Button color="primary">{$_("addUserModal.continueButton")}</Button>
    </ModalFooter>
</Modal>