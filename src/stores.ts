import { writable } from 'svelte/store';

import type mapboxgl from 'mapbox-gl';
import type { User } from "./lib/types/user"

export const map = writable<mapboxgl.Map | undefined>(undefined);
export const users = writable<User[]>([]);

export const playbackCurrentTime = writable<number>(0);