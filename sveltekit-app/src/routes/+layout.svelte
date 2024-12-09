<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { writable } from 'svelte/store';
  import { brightnessModelStore } from '$lib/stores/darkmode-store';
  import { page } from '$app/stores'; 
	let { children } = $props();

	// TailWind$page.url.pathnames
  let activeLink = 'text-md text-[#00CF68] mx-2 border-b-4 border-[#00CF68] transition duration-150';
  let inactiveLink = 'text-md text-[#999] mx-2 transition duration-150';

	let lightNav = 'backdrop-blur-lg bg-[#fff]/30 h-16 drop-shadow-lg fixed w-full bottom-0 md:top-0 content-center z-50 transition duration-150';
	let lightText = 'text-black transition duration-150';

	let darkText = 'text-white transition duration-150';
	let darkNav = 'backdrop-blur-lg text-white bg-[#000]/70 h-16 drop-shadow-lg fixed w-full bottom-0 md:top-0 content-center z-50 transition duration-150';

  /**
   * Dark Mode
   * Check the user's device to see what their bightness mode is
   */
   export const brightnessModel = writable();
  function getInitialBrightnessModel() {
    let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'DARK' : 'LIGHT';
    return isDarkMode
  }
  function toggleDarkModel() {
    brightnessModelStore.update(currentModel => {
      return currentModel === 'LIGHT' ? 'DARK' : 'LIGHT';
    });
  }

  onMount(() => {
    $brightnessModelStore = getInitialBrightnessModel();
    console.log($brightnessModelStore.valueOf());
	});

</script>

  <!-- Navbar -->
<div class={$brightnessModelStore === "LIGHT" ? lightNav : darkNav}>
    <div class="md:w-4/5 lg:w-3/5 mx-auto grid grid-cols-2 md:grid-cols-2">
      <!-- Logo -->
      <div class="col-span-1 content-center">
        <a 
        href="/">
        <img 
          class="h-16" 
          alt="PXR Logo"
          src={$brightnessModelStore === "LIGHT" ? 
            "https://ik.imagekit.io/je4p51xox/pxr_logo_light.png?updatedAt=1733432273643"
            : 
            "https://ik.imagekit.io/je4p51xox/pxr_logo_dark.png?updatedAt=1733432273575"}>
      </a>
      </div>
      <!-- Links -->
      <div class="col-span-1 text-right content-center">
        <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
          <a class={$page.url.pathname === '/' ? activeLink : inactiveLink} href="/" aria-label="Home Link">
          HOME
        </a>
      </span>
        <a class={$page.url.pathname === '/process' ? activeLink : inactiveLink} href="/process" aria-label="Process Link">
          PROCESS
        </a>
        <a class={$page.url.pathname === '/projects' ? activeLink : inactiveLink} href="/projects" aria-label="Projects Link">
          PROJECTS
        </a>
        <a class={$page.url.pathname === '/about' ? activeLink : inactiveLink} href="/about" aria-label="About Us Link">
          ABOUT US
        </a>
        
        <button data-popover-target="popover-default" id="popover-trigger" aria-label="Light/Dark Button" class={$brightnessModelStore === "LIGHT" ? lightText : darkText}  type="button">
          <ion-icon class="text-lg lg:text-xl p-0.5 relative top-1"  name="moon-outline" ></ion-icon>
        </button>

        <div data-popover id="popover-default" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
            <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                <h3 class="font-semibold text-gray-900 dark:text-white">Dark / Light Mode</h3>
            </div>
            <div class="px-3 py-2">
                <p class="py-1">You are curretly in <b>{$brightnessModel}</b> mode.</p>
                <label class="inline-flex items-center cursor-pointer">
                  <input onclick={toggleDarkModel} type="checkbox" value="" class="sr-only peer">
                  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
                </label>
            </div>
            <div data-popper-arrow></div>
        </div>
      </div>
    </div>
</div>
<main>
	{@render children()}
</main>

