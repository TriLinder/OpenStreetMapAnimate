<script lang="ts">
    import type { User } from "../../types/user";

    import { Icon } from "sveltestrap";
    
    export let user: User;
</script>

<div class="content">
    <h3><Icon name="circle-fill" style="color: {user.osmProfile.color};"/> {user.osmProfile.username}</h3>
</div>