<script lang="ts">
    import { Button, ButtonGroup } from "sveltestrap";
    import type { ButtonSize } from "sveltestrap/src/Button";

    export let baseValue = 0;
    export let value = 0;
    export let step = 1;

    export let size: ButtonSize = "sm";
</script>

<ButtonGroup>
    <Button color="secondary" size={size} on:click={function() {value -= step}}>-</Button>
    <Button color="secondary" size={size} on:click={function() {value = baseValue}}>{value}x</Button>
    <Button color="secondary" size={size} on:click={function() {value += step}}>+</Button>
</ButtonGroup>