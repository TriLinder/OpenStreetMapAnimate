<script lang="ts">
    import { Input } from "sveltestrap";

    export let startTime: number;
    export let endTime: number;

    export let currentTime = startTime;

    function timestampToLocaleTimeString(timestamp: number) {
        const date = new Date(timestamp);

        return date.toLocaleTimeString("cs-CZ");
    }
</script>

<style>
    .controls {
        display: flex;
        align-items: center;
        width: 100%;
    }

    #timeControl {
        width: 50vw !important;
    }

    #currentTimeText {
        padding-left: 1em;
        width: 2vw;
    }
</style>

<div class="controls">
    <div id="timeControl">
        <Input type="range" min={startTime} max={endTime} step={1} bind:value={currentTime}/>
    </div>

    <span id="currentTimeText">{timestampToLocaleTimeString(currentTime)}</span>
</div>