<script lang="ts">
    import { _ } from 'svelte-i18n';
    import { User } from '../../types/user';

    import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from "sveltestrap";

    import IntroductionStep from './IntroductionStep.svelte';
    import GpxUploadStep from './GpxUploadStep.svelte';
    import UsernameInputStep from './UsernameInputStep.svelte';
    import FinalStep from './FinalStep.svelte';

    export let isOpen = false;
    
    let step = 0;
    let canContinue = true;

    let user: User;

    function toggle() {
        isOpen =! isOpen;
        reset();
    }

    function reset() {
        user = new User();
        canContinue = true;
    }

    function nextStep() {
        step += 1;

        if (step == 4) {
            isOpen = false;
            console.log(user)
        }
    }
    
    reset();
</script>

<Modal isOpen={isOpen}>
    <ModalHeader {toggle}> {$_("addUserModal.title")} </ModalHeader>

    <ModalBody>
        {#if step == 0}
            <IntroductionStep/>
        {:else if step == 1}
            <GpxUploadStep bind:canContinue={canContinue} bind:user={user}/>
        {:else if step == 2}
            <UsernameInputStep bind:canContinue={canContinue} bind:user={user}/>
        {:else if step == 3}
            <FinalStep/>
        {/if}
    </ModalBody>

    <ModalFooter>
        <Button color="danger" on:click={toggle}>{$_("addUserModal.cancelButton")}</Button>
        <Button color="primary" on:click={nextStep} disabled={!canContinue}>{$_("addUserModal.continueButton")}</Button>
    </ModalFooter>
</Modal>