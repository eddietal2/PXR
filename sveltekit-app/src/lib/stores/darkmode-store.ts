import { getContext, setContext, hasContext } from 'svelte';
import { readable, writable } from 'svelte/store';

export const brightnessModelStore = writable('LIGHT')
