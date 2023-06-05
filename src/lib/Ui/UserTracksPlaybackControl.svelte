<script lang="ts">
    import PlaybackControl from "./PlaybackControl.svelte";
    import { users } from '../../stores';
    import { playbackCurrentTime } from '../../stores';

    let startTime = Infinity;
    let endTime = -Infinity;

    users.subscribe(function(users) {
        users.forEach(function(user) {
            startTime = Math.min(startTime, user.track.startTime);
            endTime = Math.max(endTime, user.track.endTime);

        });

        console.log(startTime);
        console.log(endTime);
    });
</script>

<PlaybackControl bind:startTime={startTime} bind:endTime={endTime} bind:currentTime={$playbackCurrentTime}/>