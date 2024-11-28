<script lang="ts">
  import { onMount } from 'svelte';
  import { Popover } from 'flowbite';

  let projects = [
        {
            "name": "HARP",
            "image": "https://ik.imagekit.io/2ax1lblqa/Slice_1__1_-removebg-preview.png?updatedAt=1732343747682",
            "video": "VR Developer",
            "role": "VR Developer",
            "type": "Professional",
            "link": "https://www.harp-rose.org/",
            "text": "VR Enhanced Therapy, powered by Unreal Engine.",
            "description": "VR Startup that aims to make therapy more accessible and innovative. I am the lead software developer for this MVP. This is being built with Unreal Engine 5, while I outsource things like 3D Model creation, audio, etc."
        }
      ]
  /**
 * Table of Contents
 * - #1 Snap Scroll Behavior Desktop
 * - #3 Landing Header SVG Animation 
 * - #4 Scroll to Contact Section via hitting Contact Us Icon in Navbar
 * - #5 Generate Projects UI
 * - #6 Dark / Light Mode
 * - #7 Project Description Popover
 */

// #5 Generate Projects UI
interface Project {
  name: string,
  image: string,
  role: string,
  type: string,
  link: string,
  description: string,
}

// #6 Dark / Light Mode
/**
 * Check the user's device to see what their bightness mode is
 */
let brightnessMode = null;
function getBrightnessMode() {
    let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(isDarkMode === false) {
      brightnessMode = 'LIGHT'
    } else {
      brightnessMode = 'DARK'
    }
    return isDarkMode;
}
function toggleBrightnessMode() {
  if(brightnessMode === 'LIGHT') {
      brightnessMode = 'DARK'
    } else {
      brightnessMode = 'LIGHT'
    }
}
getBrightnessMode();


  /**
   * TailwindCSS Classes
   */
  // Light Mode
  let lightNav = 'backdrop-blur-lg bg-[#fff]/30 h-16 drop-shadow-lg fixed w-full bottom-0 md:top-0 content-center z-50 transition duration-150';
  let lightText = 'text-black transition duration-150';
  let lightHeader = 'text-[#fff] bg-[#111] text-6xl font-bold transition duration-150';
  let lightBG = 'bg-[#fff] content-center transition duration-150';
  let lightButton = 'bg-[#00000020] text-[#1cb6fc] hover:bg-[#dd0000] hover:text-[#ffd24d] transition duration-1 p-0.5';

  // Dark Mode
  let darkNav = 'backdrop-blur-lg text-white bg-[#000]/70 h-16 drop-shadow-lg fixed w-full bottom-0 md:top-0 content-center z-50 transition duration-150';
  let darkText = 'text-white transition duration-150';
  let darkHeader = 'text-[#111] bg-[#fff] text-6xl font-bold transition duration-150';
  let darkBG = 'bg-[#222] content-center transition duration-150';
  let darkButton = 'bg-[#ffffff20] text-[#1cb6fc] hover:bg-[#dd0000] hover:text-[#ffd24d] transition duration-1 p-0.5';

  onMount(() => {
    setSnapScrolling();
    setDailyDarkModePopover();

    // #1 Snap Scroll Behavior Desktop
    function setSnapScrolling() {
      const options = {
      root: document.getElementById('wrapper'), // Use a specific container as the viewport
      threshold: [0.25], // Trigger at 25% and 75% visibility
      };

    function updateNavbar(activeSection) {
      const navBullets = document.querySelectorAll('.nav-bullet');
      navBullets.forEach((bullet: any) => {
        if (bullet.dataset.currentSection === activeSection) {
          // console.log(activeSection);
          // Active Section, red square
          bullet.innerHTML = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="10" height="10" fill="#dd0000"/>
              </svg>`
        } else {
          // Inactive Section, white circle.
          bullet.innerHTML = `
              <svg width="10" height="10" viewBox="0 0 10 10" fill="#000" xmlns="http://www.w3.org/2000/svg"> 
                <circle cx="5" cy="5" r="5" fill="#ffffff50"/>
              </svg>`
        }
      });
    }
    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
            const activeSection = entry.target.dataset.currentSection;
            // console.log(activeSection);
            updateNavbar(activeSection);
        }
    });
    }, options);
    const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
      observer.observe(section);
    });
    }

    // #3 Model Viewer Landing Header SVG Animation 
    const modelViewerParameters = document.querySelector("model-viewer#xr-devices-hero");
    modelViewerParameters.addEventListener("load", (ev) => {
      // TODO: When this loads, hide loading
      // TODO: Add loading spinner
      let material = modelViewerParameters['model'].materials[0];
      console.log(material);
      
    })

    // #7 Handle Project Description Popover
    /**
     * Show the Dark/Light mode popover for 5 seconds when the page loads. 
     * I am doing this just to learn how to do it, and a small bit of UX in
     * case someone refreshed they page. No need to see the popover again If you have already
     * seen it once
     */
    function setDailyDarkModePopover() {
      const popoverEl = document.getElementById('popover-default');
      const popoverTrigger = document.getElementById('popover-trigger');

      const today = new Date().toLocaleDateString();
      const storageKey = `popoverShownToday-${today}`;
      const hasShownToday = localStorage.getItem(storageKey);
      localStorage.setItem(storageKey, 'true');

      if (!hasShownToday) {
        const popover = new Popover(popoverEl, popoverTrigger);
        popover.show();
        setTimeout(() => {
          popover.hide();
        }, 10000);
      }
    }

  });
</script>

<main>
  <!-- Navbar -->
  <div class={brightnessMode === "LIGHT" ? lightNav : darkNav}>
    <div class="md:w-4/5 lg:w-3/5 mx-auto grid grid-cols-2 md:grid-cols-3">
      <div class="col-span-1 content-center">
        <b class="text-md">
          PARADIGM XR
        </b>
      </div>
      <div class="hidden md:block col-span-1 content-center">
        <!-- Space that goes in between both sides -->
      </div>
      <div class="col-span-1 text-right content-center">
        <a class="mx-1" href="#section-2"  aria-label="Contact Me Link">
            Services
        </a>
        <a class="mx-1" href="#section-3"  aria-label="Contact Me Link">
            Projects
        </a>
        <a class="mx-1" href="#section-4"  aria-label="Contact Me Link">
            Contact Us
        </a>
        
        <button data-popover-target="popover-default" id="popover-trigger" aria-label="Light/Dark Button" class={brightnessMode === "LIGHT" ? lightText : darkText}  type="button">
          <ion-icon class="text-2xl p-0.5 relative top-1"  name="moon-outline" ></ion-icon>
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

  <!-- Section Nav (Desktop) -->
  <nav id="sectionation-lg">
    <ul>
        <li>
            <div class="nav-bullet" data-current-section="s1" aria-label="First Section">
              
            </div>
        </li>
        <li>
            <div class="nav-bullet" data-current-section="s2" aria-label="Second Section"></div>
        </li>
        <li>
            <div class="nav-bullet" data-current-section="s3" aria-label="Third Section"></div>
        </li>
        <li>
            <div class="nav-bullet" data-current-section="s4" aria-label="Fourth Section"></div>
        </li>
    </ul>
  </nav>

  <div id="wrapper">

    <!-- Landing Intro -->
    <section data-current-section="s1">
      <div id="section-1" class={brightnessMode === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-3/5 mx-auto lg:flex flex-row gap-10">
          <!-- 3D Models -->
          <div class="w-full lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <model-viewer 
              id="xr-devices-hero"
              class="mx-auto relative bottom-10 h-[400px]" 
              style="transform: scale(1.3)"
              auto-rotate 
              rotation-per-second="50deg"
              auto-rotate-delay="3000"
              min-camera-orbit="0deg 75deg 10%"
              src="https://ik.imagekit.io/je4p51xox/3D%20Models/hero-anim.glb?updatedAt=1732764059609"
              
              >
            </model-viewer>
          </div>
          <!-- Text -->
          <div class="w-11/12 lg:w-2/4 mx-auto bg-[#9999990]">
            <h1 class={brightnessMode === "LIGHT" ? lightHeader : darkHeader}>
              PARADIGM XR
            </h1>
            <div class="my-2"></div>
            <p class="landing-text">
              <span class="text-xl lg:text-3xl">
                <span class='text-[#BB0000] font-bold'>
                  <span class="greetings-anim-1 inline-block">NEED XR?</span>
                  <span class="greetings-anim-2 inline-block">WE</span>
                  <span class="greetings-anim-3 inline-block">GOT YOU.</span>
                </span> 
              </span>
              <br>
              <span class="sm:text-xl xl:text-xl block my-4">
                <span class={brightnessMode === "LIGHT" ? lightText : darkText}>
                  As a versatile developer and designer, I specialize in turning innovative ideas into tangible software. 
                  From web applications to immersive XR experiences, my expertise spans web development, responsive design, CSS & SVG animation, UI/UX design, and even video game development using Unreal Engine. With a focus on creating high-performing and effective software, I've successfully delivered MVPs and beyond on numerous projects.
                </span>
          </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Our Services-->
    <section data-current-section="s2">
      <div id="section-2" class={brightnessMode === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-3/5 p-4 mx-auto md:flex flex-row gap-8">
          <!-- Header -->
          <div class="w-11/12 lg:w-2/4 mt-20 md:mt-0">
              <h1 class={brightnessMode === "LIGHT" ? lightHeader : darkHeader}>
                OUR SERVICES
              </h1>
          </div>
          <!-- Services -->
          <div class="w-11/12 lg:w-2/4 content-center">
            <ul class={brightnessMode === "LIGHT" ? lightText : darkText}>
              <li>VR, AR, and MR Development</li>
              <li>Web Development</li>
              <li>Consultation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section data-current-section="s3">
      <div id="section-3" class={brightnessMode === "LIGHT" ? lightBG : darkBG}>
        <!-- Header -->
        <div class="md:w-4/5 lg:w-3/5 p-4 mx-auto lg:mb-4 content-center">
          <h1 class={brightnessMode === "LIGHT" ? lightHeader : darkHeader}>
            PROJECTS
          </h1>
        </div>
        <!-- Project -->
        <div class="md:w-4/5 lg:w-3/5 p-4 gap-8 mx-auto">
          {#each projects as project, index}
            <div class="flex flex-row gap-2 p-2 my-2 lg:my-0">
              <div class="content-center w-full bg-[#dd000010]">
                <img src={project.image} class="h-24" alt="Project Logo">
                
                <span class="text-xs">
                  <p class={brightnessMode === "LIGHT" ? lightText : darkText}>{project.name}</p>
                </span>
                <!-- Link & Description Buttons -->
                <span class={brightnessMode === "LIGHT" ? lightText : darkText}>
                  <button class={brightnessMode === "LIGHT" ? lightButton : darkButton}>
                    <a href={project.link} target="_blank">Link</a>
                  </button>
                  <button data-popover-target="popover-description-{index}" type="button" class={brightnessMode === "LIGHT" ? lightButton : darkButton}>Description</button>
                  <div data-popover id="popover-description-{index}" role="tooltip" class="absolute z-10 invisible inline-block w-96 text-sm transition-opacity duration-300 border border-gray-200 rounded-lg shadow-sm opacity-0">
                    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                        <h3 class="font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                    </div>
                    <div class={brightnessMode === "LIGHT" ? lightBG : darkBG} style="padding: 1em;">
                        <p class={brightnessMode === "LIGHT" ? lightText : darkText}>{project.description}</p>
                    </div>
                  </div>
                </span>
              </div>
              <div class="content-center w-full bg-[#00ff0010]">
                <!-- Project Card Text -->
                <span class="text-xs">
                  <p class={brightnessMode === "LIGHT" ? lightText : darkText}>{project.role} / 2023 - 2024</p>
                </span>
                <p style="font-size: 1.2em;" class={brightnessMode === "LIGHT" ? lightText : darkText}>
                  {project.text}
                </p>
              </div>
            </div>
          {/each }
        </div>
      </div>
    </section>

    <!-- Contact Us -->
    <section data-current-section="s4">
      <div id="section-4" class={brightnessMode === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-3/5 mx-auto mb-8">
          <!-- Header -->
          <div class="text-center content-center">
            <h1 class={brightnessMode === "LIGHT" ? lightText : darkText} style="font-size: 2em; font-weight: 600;">CONTACT ME</h1>
            <span style="font-size: 5em;" class={brightnessMode === "LIGHT" ? lightText : darkText}>
              <!-- Mail Icon -->
              📬
            </span>
            
          </div>

        <!-- Form -->
        <div class="ion-text-center w-11/12 lg:w-1/2 text-center mx-auto">
            <!-- https://formsubmit.co/ -->
            <!-- https://www.youtube.com/watch?v=iSobU_DjNN4 -->
            <form action="https://formsubmit.co/f6e4bbd318fdd3193043ce91e88f6bfd" method="POST">
                <input class="text-lg text-[#111] w-full my-1 h-10 p-2 border-2 border-[#999]" type="text" required placeholder="First & Last Name" name="name">
                <input class="text-lg text-[#111] w-full my-1 h-10 p-2 border-2 border-[#999]" type="text" required placeholder="Email Address" name="email">
                <textarea class="text-lg text-[#111] my-1 mx-auto p-2 w-full border-2 border-[#999]" rows="5" required placeholder="Want to collaborate or have a suggestion?" name="message"></textarea>
                <button class={brightnessMode === "LIGHT" ? lightButton : darkButton} style="padding: 0.75em; font-size: 1.2em;" type="submit">
                    Send Message
                </button>
            </form>
        </div>

        </div>
      </div>
    </section>

  </div>
</main>

<style>
/* General */
:global(body) {
  overflow: hidden; 
}

/* Greetings Animation */
.color-header {
  display: inline-block;
  padding: 0.2em;
}
.greetings-anim-1 {
  opacity: 0;
  animation: greeting-slide-1 500ms cubic-bezier(0.075, 0.82, 0.165, 1) 1500ms forwards;
}
.greetings-anim-2 {
  opacity: 0;
  animation: greeting-slide-2 500ms cubic-bezier(0.075, 0.82, 0.165, 1) 2500ms forwards;
}
.greetings-anim-3 {
  opacity: 0;
  animation: greeting-slide-2 500ms cubic-bezier(0.075, 0.82, 0.165, 1) 3000ms forwards;
}
@keyframes greeting-slide-1 {
  0% {
    transform: translateY(50px);
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes greeting-slide-2 {
  0% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

/* Snap Scrolling Indicator */
#sectionation-lg {
    /* background: #b1b1b153; */
    background: #191123;
    z-index: 9999;
    width: auto;
    height: auto;
    padding: 0.35em;
    position: fixed;
    right: 3%;
    bottom: 20%;
    text-align: center;
    border-radius: 10px;
}
#sectionation-lg ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
}
#sectionation-lg ul li {
    justify-content: center;
    display: flex;
}
.nav-bullet {
    /* background-image: url('./assets/icons/nav-bullet.svg'); */
    /* background-repeat: no-repeat; */
    margin: 0.54em 0;
    width: 10px;
    height: 10px;
    transition: 1s;
    animation: nav-change-section 1s ease forwards;
}
@media (max-width: 1000px)  {
    #sectionation-lg{
        display: none;
    }
}
@keyframes nav-change-section {
    0% {
        rotate: 0deg;
    }
    100% {
        rotate: 360deg;
    }
}

/* For Snap Scrolling Sections on Desktop */
#wrapper {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
}
::-webkit-scrollbar {
  width: 0px; /* Set the opacity (0 = fully transparent, 1 = fully opaque) */
}
#section-1,
#section-2,
#section-3,
#section-4
 {
    width: 100%;
    height: 100vh;
    scroll-snap-align: start;
}
@media (max-width: 1000px)  {
    #wrapper,
    #section-1,
    #section-2,
    #section-3 {
        scroll-snap-type: none;
        scroll-snap-align: none;
        height: auto;
    }

    #section-4 {
        scroll-snap-type: none;
        scroll-snap-align: none;
        height: auto;
        padding: 10em 0 5em 0;
    }
}

/* Projects */
#popover {
  /* Style the popover as you wish */
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  display: none;
}

#popover:target {
  display: block;
}

/* Contact Form */
input:focus, textarea:focus {
  border: 2px solid #999;
}
/* Swiper */
.swiper {
    width: 100%;
    /* height: ; */
  }
.swiper-wrapper {
    margin: 0em;
}
@media (max-width: 600px)  {
    .swiper {
        margin: 3em auto;
        width: 100%
    }
}


</style>
