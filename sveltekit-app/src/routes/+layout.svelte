<script lang="ts">
	import '../app.css';
	let { children } = $props();
  let activeLink = '/'; // Variable to store the active link

  // Function to update the active link based on the current route
  function handleNavigation() {
    activeLink = window.location.pathname; 
    console.log('Active Link: ' + activeLink);
    
  }
	// TailWindCSS Classes
	let lightNav = 'backdrop-blur-lg bg-[#fff]/30 h-16 drop-shadow-lg fixed w-full bottom-0 md:top-0 content-center z-50 transition duration-150';
	let lightText = 'text-black transition duration-150';
	let lightBG = 'bg-[#fff] content-center transition duration-150';
	let lightButton = 'bg-[#00000020] text-[#00CF68] hover:bg-[#00CF68] hover:text-[#fff] transition duration-1 py-1 px-4';

	let darkText = 'text-white transition duration-150';
	let darkNav = 'backdrop-blur-lg text-white bg-[#000]/70 h-16 drop-shadow-lg fixed w-full bottom-0 md:top-0 content-center z-50 transition duration-150';
	let darkBG = 'bg-[#222] content-center transition duration-150';
	let darkButton = 'bg-[#ffffff20] text-[#00CF68] hover:bg-[#00CF68] hover:text-[#fff] transition duration-1 py-1 px-4';

// #6 Dark / Light Mode
/**
 * Check the user's device to see what their bightness mode is
 */
let brightnessMode: string | null = null;
function getBrightnessMode() {
    // let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // if(isDarkMode === false) {
    //   brightnessMode = 'LIGHT'
    // } else {
    //   brightnessMode = 'DARK'
    // }
    // return isDarkMode;
}
function toggleBrightnessMode() {
  if(brightnessMode === 'LIGHT') {
      brightnessMode = 'DARK'
    } else {
      brightnessMode = 'LIGHT'
    }
}
getBrightnessMode();
</script>

  <!-- Navbar -->
<div class={brightnessMode === "LIGHT" ? lightNav : darkNav}>
    <div class="md:w-4/5 lg:w-3/5 mx-auto grid grid-cols-2 md:grid-cols-2">
      <div class="col-span-1 content-center">
        <a 
        href="/">
        <img 
          class="h-16" 
          alt="PXR Logo"
          src={brightnessMode === "LIGHT" ? 
            "https://ik.imagekit.io/je4p51xox/pxr_logo_light.png?updatedAt=1733432273643"
            : 
            "https://ik.imagekit.io/je4p51xox/pxr_logo_dark.png?updatedAt=1733432273575"}>
      </a>
      </div>
     
      <div class="col-span-1 text-right content-center">
        <a class="mx-2.5 text-xs" href="/" aria-label="Home Link">
            Home
        </a>
        <a class="mx-2.5 text-xs" href="/process" aria-label="Process Link">
          Process
        </a>
        <a class="mx-2.5 text-xs" href="/projects" aria-label="Projects Link">
          Projects
        </a>
        <a class="mx-2.5 text-xs" href="/about" aria-label="About Us Link">
          About Us
        </a>
        
        <button data-popover-target="popover-default" id="popover-trigger" aria-label="Light/Dark Button" class={brightnessMode === "LIGHT" ? lightText : darkText}  type="button">
          <ion-icon class="text-lg p-0.5 relative top-1"  name="moon-outline" ></ion-icon>
        </button>

        <div data-popover id="popover-default" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
            <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                <h3 class="font-semibold text-gray-900 dark:text-white">Dark / Light Mode</h3>
            </div>
            <div class="px-3 py-2">
                <p class="py-1">You are curretly in <b>{brightnessMode}</b> mode.</p>
                <label class="inline-flex items-center cursor-pointer">
                  <input on:click={toggleBrightnessMode} type="checkbox" value="" class="sr-only peer">
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
  


<style>
	
</style>
<svelte:window on:load={handleNavigation} /> 
