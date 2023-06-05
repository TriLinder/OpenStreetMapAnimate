<script lang="ts">
	import { onMount } from 'svelte';
    import { mainMap } from '../../stores';
	import mapboxgl from 'mapbox-gl';

    export let accessToken: string;
    export let style = "mapbox://styles/mapbox/streets-v12";
    export let center: mapboxgl.LngLatLike = [0, 0];
    export let zoom = 0;

	onMount(function() {
		mapboxgl.accessToken = accessToken;

		mainMap.set(new mapboxgl.Map({
			container: "map",
			style: style,
			center: center,
			zoom: zoom
		}));
	});
</script>

<style>
    #map {
        position: absolute; 
        top: 0; 
        bottom: 0; 
        width: 100%; 
    }
</style>

<div id="map"/>