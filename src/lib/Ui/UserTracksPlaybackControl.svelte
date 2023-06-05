<script lang="ts">
    import PlaybackControl from "./PlaybackControl.svelte";
    import { users } from '../../stores';
    import { playbackCurrentTime } from '../../stores';

    let startTime = 0;
    let endTime = 0;

    users.subscribe(function(users) {
        startTime = Infinity;
        endTime = -Infinity;

        users.forEach(function(user) {
            startTime = Math.min(startTime, user.track.startTime);
            endTime = Math.max(endTime, user.track.endTime);

        });
    });
</script>

<PlaybackControl bind:startTime={startTime} bind:endTime={endTime} bind:currentTime={$playbackCurrentTime}/>