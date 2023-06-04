<script lang="ts">
    import { Input } from "sveltestrap";

    function handleFileSelection(event: Event) {
        const file = (event.target as HTMLInputElement).files![0];
        const reader = new FileReader();

        reader.addEventListener("load", function(event) {
            console.log(event.target?.result);
        });

        reader.readAsText(file);
    }
</script>

<Input type="file" on:change={handleFileSelection}/>