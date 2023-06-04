<script lang="ts">
    import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from "sveltestrap";

    export let isOpen = false;

    function toggle() {
        isOpen =! isOpen;
    }
</script>

<Modal isOpen={isOpen}>
    <ModalHeader {toggle}> Add user </ModalHeader>

    <ModalBody>
        <p>Step 1</p>
    </ModalBody>

    <ModalFooter>
        <Button color="danger" on:click={toggle}>Cancel</Button>
        <Button color="primary">Continue</Button>
    </ModalFooter>
</Modal>