<script lang="ts">
    import { Button, Icon } from "sveltestrap";
    import type { ButtonSize } from "sveltestrap/src/Button";

    export let size: ButtonSize = "sm";
</script>

<Button color="secondary" size={size}>
    <Icon name="person-plus-fill"/>
</Button>