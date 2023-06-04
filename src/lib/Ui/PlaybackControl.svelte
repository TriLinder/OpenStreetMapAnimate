<script lang="ts">
    import { onMount } from 'svelte';

    import { Icon, Input } from "sveltestrap";
    import Counter from "./Counter.svelte";

    export let startTime: number;
    export let endTime: number;

    export let currentTime = startTime;

    let playing = false;
    let playbackSpeed = 10;

    let previousUpdateTimestamp: number;

    function timestampToLocaleTimeString(timestamp: number) {
        const date = new Date(timestamp);

        return date.toLocaleTimeString("cs-CZ");
    }

    function togglePlayback() {
        playing = !playing;

        // Restart the playback if it ended
        if (playing && currentTime >= endTime) {
            currentTime = 0;
        }
    }

    function handleKeyDown(event: KeyboardEvent) {
        if(event.key == " ") {
            togglePlayback();
        }
    }

    function updatePlayback(timestamp: any) {
        const elapsed = timestamp - previousUpdateTimestamp;

        if (playing) {
            currentTime += elapsed * playbackSpeed;
        }

        // Pause the playback on end
        if (currentTime >= endTime) {
            currentTime = endTime;
            playing = false;
        }

        // Make sure we can't end up before the startTime (this could happen with a negative speed value)
        if (currentTime <= startTime) {
            currentTime = startTime;
            playing = false;
        }

        previousUpdateTimestamp = timestamp;
        requestAnimationFrame(updatePlayback);
    }

    onMount(function() {
        requestAnimationFrame(updatePlayback);
    });
</script>

<style>
    .controls {
        display: flex;
        align-items: center;
        width: 100%;
    }

    #togglePlaybackButton {
        font-size: 2rem;
        background-color: transparent;
        margin: 0;
        padding: 0;
        border: 0;
    }

    #timeControl {
        width: 50vw !important;
    }

    #currentTimeText {
        padding-left: 1em;
        margin-right: 3.5em;
        width: 2vw;
    }
</style>

<svelte:window on:keydown={handleKeyDown} />

<div class="controls">
    <Counter bind:value={playbackSpeed} baseValue={10}/>

    <button id="togglePlaybackButton" on:click={togglePlayback}>
        {#if playing}
            <Icon name="pause-fill"/>
        {:else}
            <Icon name="play-fill"/>
        {/if}
    </button>

    <div id="timeControl">
        <Input type="range" min={startTime} max={endTime} step={1} bind:value={currentTime}/>
    </div>

    <span id="currentTimeText">{timestampToLocaleTimeString(currentTime)}</span>
</div>