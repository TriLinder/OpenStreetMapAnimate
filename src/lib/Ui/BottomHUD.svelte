<script lang="ts">
    import PlaybackControl from "./PlaybackControl.svelte";
    import AddUserButton from "./AddUserButton.svelte";
</script>

<style>
    div {
        display: flex;
        z-index: 1;

        position: absolute;
        top: 90%;
        left: 50%;
        
        transform: translate(-50% , 0);
        
        margin-top: 1em;
        padding-bottom: .5em;
        
        background-color: rgba(250, 250, 250, .25);
        text-align: center;

        padding-top: 0.5em;
        padding-right: 4vw;
        padding-left: 4vw;

        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
    }
</style>

<div>
    <PlaybackControl startTime={1685873858 * 1000} endTime={(1685873858 + 1*60*60) * 1000}/>
    <AddUserButton/>
</div>