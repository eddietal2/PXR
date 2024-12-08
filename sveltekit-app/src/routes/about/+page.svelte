<script lang="ts">
    import { onMount } from 'svelte';

    
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

  /**
   * TailwindCSS Classes
   */
  // Light Mode
  let lightText = 'text-black transition duration-150';
  let lightHeader = 'p-1 text-[#fff] bg-[#99999910] text-2xl font-bold transition duration-150';
  let lightBG = 'bg-[#fff] content-center transition duration-150';
  let lightButton = 'bg-[#00000020] text-[#00CF68] hover:bg-[#00CF68] hover:text-[#fff] transition duration-1 py-1 px-4';
	let lightInput = 'text-[#111]';

  // Dark Mode
  let darkText = 'text-white transition duration-150';
  let darkHeader = 'p-1 text-[#fff] bg-[#99999910] text-2xl font-bold transition duration-150';
  let darkBG = 'bg-[#222] content-center transition duration-150';
  let darkButton = 'bg-[#ffffff20] text-[#00CF68] hover:bg-[#00CF68] hover:text-[#fff] transition duration-1 py-1 px-4';
	let darkInput = 'text-[#fff]';

  onMount(() => {
    setSnapScrolling();
    setDailyDarkModePopover();

    // #1 Snap Scroll Behavior Desktop
    function setSnapScrolling() {
      const options = {
      root: document.getElementById('wrapper'), // Use a specific container as the viewport
      threshold: [0.25], // Trigger at 25% and 75% visibility
      };

    function updateNavbar(activeSection: any) {
      const navBullets = document.querySelectorAll('.nav-bullet');
      navBullets.forEach((bullet: any) => {
        if (bullet.dataset.currentSection === activeSection) {
          // console.log(activeSection);
          // Active Section, red square
          bullet.innerHTML = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="10" height="10" fill="#00CF68"/>
              </svg>`
        } else {
          // Inactive Section, white circle.
          bullet.innerHTML = `
              <svg width="10" height="10" viewBox="0 0 10 10" fill="#000" xmlns="http://www.w3.org/2000/svg"> 
                <circle cx="5" cy="5" r="5" fill="#999"/>
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
    // const modelViewerParameters = document.querySelector("model-viewer#xr-devices-hero") as any;
    //   modelViewerParameters.addEventListener("load", (ev: any) => {
    //   // TODO: When this loads, hide loading
    //   // TODO: Add loading spinner
    //   let material = modelViewerParameters['model'].materials[0];
    //   console.log(material);
      
    // })

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

    //   if (!hasShownToday) {
    //     const popover = new Popover(popoverEl, popoverTrigger);
    //     popover.show();
    //     setTimeout(() => {
    //       popover.hide();
    //     }, 10000);
    //   }
    }

  });
</script>

<main>
 <!-- Section Nav (Desktop) -->
 <nav id="sectionation-lg" class={brightnessMode === "LIGHT" ? darkBG : lightBG}>
    <ul >
        <li>
            <div class="nav-bullet" data-current-section="s1" aria-label="First Section"></div>
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
        <li>
            <div class="nav-bullet" data-current-section="s5" aria-label="Second Section"></div>
        </li>
        <li>
            <div class="nav-bullet" data-current-section="s6" aria-label="Third Section"></div>
        </li>
        <li>
            <div class="nav-bullet" data-current-section="s7" aria-label="Fourth Section"></div>
        </li>
        <li>
            <div class="nav-bullet" data-current-section="s8" aria-label="Fourth Section"></div>
        </li>
    </ul>
</nav>

  <div id="wrapper">
    <!-- How We Do Intro -->
    <section data-current-section="s1">
      <div id="section-1" class={brightnessMode === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-3/5 mx-auto text-center">
          <div class="h-40 w-40 mx-auto">
            <svg fill="#00CF68" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 502.643 502.643" xml:space="preserve">
              <g>
                <g>
                  <path d="M251.256,237.591c37.166,0,67.042-30.048,67.042-66.977c0.043-37.037-29.876-66.999-67.042-66.999
                    c-36.908,0-66.869,29.962-66.869,66.999C184.387,207.587,214.349,237.591,251.256,237.591z"/>
                  <path d="M305.032,248.506H197.653c-19.198,0-34.923,17.602-34.923,39.194v107.854c0,1.186,0.604,2.243,0.669,3.473h175.823
                    c0.129-1.229,0.626-2.286,0.626-3.473V287.7C339.912,266.108,324.187,248.506,305.032,248.506z"/>
                  <path d="M431.588,269.559c29.832,0,53.754-24.008,53.754-53.668s-23.922-53.711-53.754-53.711
                    c-29.617,0-53.582,24.051-53.582,53.711C377.942,245.53,401.972,269.559,431.588,269.559z"/>
                  <path d="M474.708,278.317h-86.046c-15.445,0-28.064,14.107-28.064,31.472v86.413c0,0.928,0.453,1.812,0.518,2.826h141.03
                    c0.065-1.014,0.496-1.898,0.496-2.826v-86.413C502.707,292.424,490.11,278.317,474.708,278.317z"/>
                  <path d="M71.011,269.559c29.789,0,53.733-24.008,53.733-53.668S100.8,162.18,71.011,162.18c-29.638,0-53.603,24.051-53.603,53.711
                    S41.373,269.559,71.011,269.559L71.011,269.559z"/>
                  <path d="M114.109,278.317H27.977C12.576,278.317,0,292.424,0,309.789v86.413c0,0.928,0.453,1.812,0.539,2.826h141.03
                    c0.065-1.014,0.475-1.898,0.475-2.826v-86.413C142.087,292.424,129.489,278.317,114.109,278.317z"/>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
              </g>
              </svg>
          </div>
          <!-- <img 
          class="w-1/2 mx-auto" 
          alt="PXR Text Logo"
          src={brightnessMode === "LIGHT" ? 
            "https://ik.imagekit.io/je4p51xox/pxr_textlogo_dark.png?updatedAt=1733435870334"
            : 
            "https://ik.imagekit.io/je4p51xox/pxr_textlogo_light.png?updatedAt=1733435843631"}> -->
          <img 
          class="w-1/2 mx-auto" 
          alt="PXR Text Logo"
          src={brightnessMode === "LIGHT" ? 
            "https://ik.imagekit.io/je4p51xox/pxr_textlogo_dark.png?updatedAt=1733435870334"
            : 
            "https://ik.imagekit.io/je4p51xox/pxr_textlogo_light.png?updatedAt=1733435843631"}>
            <h2 class={brightnessMode === "LIGHT" ? lightText : darkText}>
              <span class="text-3xl font-bold">About</span>
            </h2>
            <p class="sm:text-xl xl:text-xl block my-4 ml-6 text-left">
                <span class={brightnessMode === "LIGHT" ? lightText : darkText}>
                  Partner with Paradigm XR to turn your XR dreams into reality. We'll help you take your ideas from concept to a functional MVP [minimum viable product], with ongoing development services to scale your project as needed.
                </span>
            </p>
        </div>
      </div>
    </section>

    <!-- 1. Ideation -->
    <section data-current-section="s2">
      <div id="section-1" class={brightnessMode === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-3/5 mx-auto lg:flex flex-row gap-10">
          <div class="w-full lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <h2 class={brightnessMode === "LIGHT" ? lightText : darkText}>
              <span class="text-5xl font-bold">1. Ideation</span>
            </h2>
            <p class="sm:text-xl xl:text-xl block my-4 ml-6">
                <span class={brightnessMode === "LIGHT" ? lightText : darkText}>
                  Partner with Paradigm XR to turn your XR dreams into reality. We'll help you take your ideas from concept to a functional MVP [minimum viable product], with ongoing development services to scale your project as needed.
                </span>
            </p>
          </div>
          <!-- Text -->
          <div class="w-11/12 lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <img 
              class="w-full" 
              alt="PXR Text Logo"
              src={brightnessMode === "LIGHT" ? 
                "https://ik.imagekit.io/je4p51xox/pxr_textlogo_dark.png?updatedAt=1733435870334"
                : 
                "https://ik.imagekit.io/je4p51xox/pxr_textlogo_light.png?updatedAt=1733435843631"}>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 2. Define the Scope -->
    <section data-current-section="s3">
      <div id="section-2" class={brightnessMode === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-3/5 mx-auto lg:flex flex-row gap-10">
          <div class="w-full lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <h2 class={brightnessMode === "LIGHT" ? lightText : darkText}>
              <span class="text-5xl font-bold">2. Define the Scope</span>
            </h2>
            <p class="sm:text-xl xl:text-xl block my-4 ml-6">
                <span class={brightnessMode === "LIGHT" ? lightText : darkText}>
                  Partner with Paradigm XR to turn your XR dreams into reality. We'll help you take your ideas from concept to a functional MVP [minimum viable product], with ongoing development services to scale your project as needed.
                </span>
            </p>
          </div>
          <!-- Text -->
          <div class="w-11/12 lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <img 
              class="w-full" 
              alt="PXR Text Logo"
              src={brightnessMode === "LIGHT" ? 
                "https://ik.imagekit.io/je4p51xox/pxr_textlogo_dark.png?updatedAt=1733435870334"
                : 
                "https://ik.imagekit.io/je4p51xox/pxr_textlogo_light.png?updatedAt=1733435843631"}>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. UI/UX Design -->
    <section data-current-section="s4">
      <div id="section-3" class={brightnessMode === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-3/5 mx-auto lg:flex flex-row gap-10">
          <div class="w-full lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <h2 class={brightnessMode === "LIGHT" ? lightText : darkText}>
              <span class="text-5xl font-bold">4. UI/UX Design</span>
            </h2>
            <p class="sm:text-xl xl:text-xl block my-4 ml-6">
                <span class={brightnessMode === "LIGHT" ? lightText : darkText}>
                  Partner with Paradigm XR to turn your XR dreams into reality. We'll help you take your ideas from concept to a functional MVP [minimum viable product], with ongoing development services to scale your project as needed.
                </span>
            </p>
          </div>
          <!-- Text -->
          <div class="w-11/12 lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <img 
              class="w-full" 
              alt="PXR Text Logo"
              src={brightnessMode === "LIGHT" ? 
                "https://ik.imagekit.io/je4p51xox/pxr_textlogo_dark.png?updatedAt=1733435870334"
                : 
                "https://ik.imagekit.io/je4p51xox/pxr_textlogo_light.png?updatedAt=1733435843631"}>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Development -->
    <section data-current-section="s5">
      <div id="section-4" class={brightnessMode === "LIGHT" ? lightBG : darkBG}>      
        <div class="md:w-4/5 lg:w-3/5 mx-auto lg:flex flex-row gap-10">
          <div class="w-full lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <h2 class={brightnessMode === "LIGHT" ? lightText : darkText}>
              <span class="text-5xl font-bold">4. Development</span>
            </h2>
            <p class="sm:text-xl xl:text-xl block my-4 ml-6">
                <span class={brightnessMode === "LIGHT" ? lightText : darkText}>
                  Partner with Paradigm XR to turn your XR dreams into reality. We'll help you take your ideas from concept to a functional MVP [minimum viable product], with ongoing development services to scale your project as needed.
                </span>
            </p>
          </div>
          <!-- Text -->
          <div class="w-11/12 lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <img 
              class="w-full" 
              alt="PXR Text Logo"
              src={brightnessMode === "LIGHT" ? 
                "https://ik.imagekit.io/je4p51xox/pxr_textlogo_dark.png?updatedAt=1733435870334"
                : 
                "https://ik.imagekit.io/je4p51xox/pxr_textlogo_light.png?updatedAt=1733435843631"}>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Launch -->
    <section data-current-section="s6">
      <div id="section-5" class={brightnessMode === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-3/5 mx-auto lg:flex flex-row gap-10">
          <div class="w-full lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <h2 class={brightnessMode === "LIGHT" ? lightText : darkText}>
              <span class="text-5xl font-bold">5. Launch</span>
            </h2>
            <p class="sm:text-xl xl:text-xl block my-4 ml-6">
                <span class={brightnessMode === "LIGHT" ? lightText : darkText}>
                  Partner with Paradigm XR to turn your XR dreams into reality. We'll help you take your ideas from concept to a functional MVP [minimum viable product], with ongoing development services to scale your project as needed.
                </span>
            </p>
          </div>
          <!-- Text -->
          <div class="w-11/12 lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <img 
              class="w-full" 
              alt="PXR Text Logo"
              src={brightnessMode === "LIGHT" ? 
                "https://ik.imagekit.io/je4p51xox/pxr_textlogo_dark.png?updatedAt=1733435870334"
                : 
                "https://ik.imagekit.io/je4p51xox/pxr_textlogo_light.png?updatedAt=1733435843631"}>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Maintenance -->
    <section data-current-section="s7">
      <div id="section-6" class={brightnessMode === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-3/5 mx-auto lg:flex flex-row gap-10">
          <div class="w-full lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <h2 class={brightnessMode === "LIGHT" ? lightText : darkText}>
              <span class="text-5xl font-bold">6. Maintenance</span>
            </h2>
            <p class="sm:text-xl xl:text-xl block my-4 ml-6">
                <span class={brightnessMode === "LIGHT" ? lightText : darkText}>
                  Partner with Paradigm XR to turn your XR dreams into reality. We'll help you take your ideas from concept to a functional MVP [minimum viable product], with ongoing development services to scale your project as needed.
                </span>
            </p>
          </div>
          <!-- Text -->
          <div class="w-11/12 lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <img 
              class="w-full" 
              alt="PXR Text Logo"
              src={brightnessMode === "LIGHT" ? 
                "https://ik.imagekit.io/je4p51xox/pxr_textlogo_dark.png?updatedAt=1733435870334"
                : 
                "https://ik.imagekit.io/je4p51xox/pxr_textlogo_light.png?updatedAt=1733435843631"}>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Us -->
    <section data-current-section="s8">
      <div id="section-8" class={brightnessMode === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-full mx-auto mb-8">
        <!-- Header -->
        <div class="text-center content-center">
          <h1 class={brightnessMode === "LIGHT" ? lightText : darkText} style="font-size: 2em; font-weight: 600;">CONTACT US</h1>
          <span style="font-size: 5em;" class={brightnessMode === "LIGHT" ? lightText : darkText}>
          <!-- PXR Logo -->
          
          <img 
          class="h-32 mx-auto" 
          alt="PXR Logo"
          src={brightnessMode === "LIGHT" ? 
            "https://ik.imagekit.io/je4p51xox/pxr_logo_light.png?updatedAt=1733432273643"
            : 
            "https://ik.imagekit.io/je4p51xox/pxr_logo_dark.png?updatedAt=1733432273575"}>
            </span>
            
        </div>
        <div>
          <!-- https://ik.imagekit.io/je4p51xox/Gemini_Generated_Image_6euxcz6euxcz6eux.jpg?updatedAt=1732768747586 -->
        </div>
    
        <!-- Form -->
        <div class="ion-text-center w-11/12 lg:w-1/2 text-center mx-auto">
          <!-- https://formsubmit.co/ -->
          <!-- https://www.youtube.com/watch?v=iSobU_DjNN4 -->
          <form action="https://formsubmit.co/f6e4bbd318fdd3193043ce91e88f6bfd" method="POST">
            <span class={brightnessMode === "LIGHT" ? lightInput : darkInput}>
            <input class="w-full my-1 h-10 p-2" type="text" style="background: none;" required placeholder="First & Last Name" name="name">
            </span>
            <span class={brightnessMode === "LIGHT" ? lightInput : darkInput}>
            <input class="w-full my-1 h-10 p-2" type="text" style="background: none;" required placeholder="Email Address" name="email">
            </span>
            <span class={brightnessMode === "LIGHT" ? lightInput : darkInput}>
            <textarea class="my-1 mx-auto p-2 w-full" style="background: none;" rows="6" required placeholder="Want to collaborate or have a suggestion?" name="message"></textarea>
            </span>
            <button class={brightnessMode === "LIGHT" ? lightButton : darkButton} type="submit">
              SEND MESSAGE
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
  
  /* Animation */
  .greetings-anim-1 {
    opacity: 0;
    animation: greeting-slide-1 500ms cubic-bezier(0.075, 0.82, 0.165, 1) 1500ms forwards;
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
  /* Snap Scrolling Indicator */
  #sectionation-lg {
      /* background: #b1b1b153; */
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
  #section-4,
  #section-5,
  #section-6,
  #section-7,
  #section-8
   {
      width: 100%;
      height: 100vh;
      scroll-snap-align: start;
  }
  @media (max-width: 1000px)  {
      #wrapper,
      #section-1,
      #section-2,
      #section-3,
      #section-4,
      #section-5,
      #section-6,
      #section-7,
      #section-8    {
          scroll-snap-type: none;
          scroll-snap-align: none;
          height: auto;
      }
  
      #section-8 {
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
 
  
  
</style>
  