<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { writable } from 'svelte/store';
  import { brightnessModelStore } from '$lib/stores/darkmode-store';
  import { page } from '$app/stores'; 
	let { children } = $props();

	// TailWindCSS Classes
  let activeLink = 'text-xs text-[#00CF68] pb-0.5 mx-2 border-b-2 border-[#00CF68] transition duration-150';
  let inactiveLink = 'text-xs text-[#999] pb-0.5 mx-2 hover:border-b-2 hover:border-[#ffcb0a] hover:text-[#ffcb0a] transition duration-150';

	let lightNav = 'backdrop-blur-lg bg-[#fff]/30 h-16 drop-shadow-lg fixed w-full bottom-0 md:top-0 content-center z-50 transition duration-150';
	let lightText = 'text-black transition duration-150';

	let darkText = 'text-white transition duration-150';
	let darkNav = 'backdrop-blur-lg text-white bg-[#000]/80 h-16 drop-shadow-lg fixed w-full bottom-0 md:top-0 content-center z-50 transition duration-150';

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
    <div class="px-4 lg:px-0 md:w-4/5 lg:w-3/5 mx-auto grid grid-cols-2 md:grid-cols-[20%_80%]">
      <!-- Logo -->
      <div>
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
      <div class="text-right content-center hidden md:inline-block">
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
        <a class={$page.url.pathname === '/contact' ? activeLink : inactiveLink} href="/contact" aria-label="About Us Link">
          <span class="px-1 py-0.5 border-2 border-[#00CF68] text-[#00CF68] hover:border-[#ffcb0a] hover:text-[#ffcb0a] transition duration-150">
            FREE CONSULTATION
          </span>
        </a>
        
        <!-- Light/Dark Icon Button -->
        <button data-popover-target="popover-default" id="popover-trigger" aria-label="Light/Dark Button" class={$brightnessModelStore === "LIGHT" ? lightText : darkText}  type="button">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-lg lg:text-xl p-0.5 relative top-1 h-6" viewBox="0 0 512 512">
            <path 
              d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
              fill={$brightnessModelStore === 'DARK'? "#ffcb0a" : "#11111150"}
              stroke={$brightnessModelStore === 'DARK'? "#ffcb0a" : "#11111"} stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
          </svg>
        </button>
        <!-- Popover -->
        <div data-popover id="popover-default" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
            <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                <h3 class="font-semibold text-gray-900 dark:text-white">Dark / Light Mode</h3>
            </div>
            <div class="px-3 py-2">
                <p class="py-1">You are curretly in <b>{$brightnessModelStore}</b> mode.</p>
                <label class="inline-flex items-center cursor-pointer">
                  <input onclick={toggleDarkModel} type="checkbox" value="" class="sr-only peer">
                  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
                </label>
            </div>
            <div data-popper-arrow></div>
        </div>
      </div>
      <!-- Mobile Hamburger Menu -->
       <div class="inline-block md:hidden text-right content-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="float-right h-8" viewBox="0 0 512 512">
          <path 
            fill={$brightnessModelStore === 'DARK'? "#ffcb0a" : "#11111150"}
            stroke={$brightnessModelStore === 'DARK'? "#ffcb0a" : "#11111"} stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/>
        </svg>
       </div>
    </div>
</div>
<main>
	{@render children()}
</main>

