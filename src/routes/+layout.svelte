<script lang="ts">
    import { addMessages, init } from 'svelte-i18n';

    import enUS from "../lang/en-US.json";

    addMessages("en-US", enUS);

    init({
        fallbackLocale: "en-US",
        initialLocale: "en-US"
    });
</script>

<slot/>