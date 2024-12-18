<script lang="ts">
  import { onMount } from 'svelte';
  import { brightnessModelStore } from '$lib/stores/darkmode-store';

  let metaQuestWebsiteLink = 'https://www.meta.com/quest/quest-3/?utm_source=gg&utm_medium=ps&utm_campaign=18854243668&utm_term=meta%20quest&utm_content=714674249906&utm_ad=149056889952&utm_location=9016891&utm_location2=&utm_placement=kwd-1459933427178&utm_device=c&utm_matchtype=e&utm_feed=&utm_adposition=&utm_product=&&gad_source=1&gclid=Cj0KCQiAsOq6BhDuARIsAGQ4-zgfZnIpJ94RoWh822Rv7F5f1ELKQ7jKmN-zVvC-RvkkV08dFjQEWCQaAgdGEALw_wcB&gclsrc=aw.ds'
  /**
   * TailwindCSS Classes
   */
  // Light Mode
  let lightText = 'text-black transition duration-150';
  let lightHeader = 'p-1 text-[#fff] bg-[#99999910] text-2xl font-bold transition duration-150';
  let lightBG = 'bg-[#fff] content-center transition duration-150';
  let lightBGFooter = "bg-[#fff] content-center transition duration-150";
  let lightButton = 'bg-[#00000020] text-[#00CF68] hover:bg-[#00CF68] hover:text-[#fff] transition duration-1 py-1 px-4';
	let lightInput = 'text-[#111]';

  // Dark Mode
  let darkText = 'text-white transition duration-150';
  let darkHeader = 'p-1 text-[#fff] bg-[#99999910] text-2xl font-bold transition duration-150';
  let darkBG = 'bg-[#222] content-center transition duration-150';
  let darkBGFooter = "bg-[#111] content-center transition duration-150";
  let darkButton = 'bg-[#ffffff20] text-[#00CF68] hover:bg-[#00CF68] hover:text-[#fff] transition duration-1 py-1 px-4';
	let darkInput = 'text-[#fff]';

  // 
  let loadingModel = true;
  setTimeout(() => {
    loadingModel = false;
  }, 2000);

  onMount(() => {
    setSnapScrolling();

    // Snap Scroll Behavior Desktop
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

  });
</script>

<main>
 <!-- Section Nav (Desktop) -->
 <nav id="sectionation-lg" class={$brightnessModelStore === "LIGHT" ? darkBG : lightBG}>
    <ul >
      <li>
        <a href="#section-1" aria-label="First Section">
          <div class="nav-bullet" data-current-section="s1"></div>
        </a>
    </li>
    <li>
      <a href="#section-2" aria-label="Second Section">
        <div class="nav-bullet" data-current-section="s2"></div>
      </a>
    </li>
    <li>
      <a href="#section-3" aria-label="Third Section">
        <div class="nav-bullet" data-current-section="s3"></div>
      </a>
    </li>
    <li>
      <a href="#footer" aria-label="Fourth Section">
        <div class="nav-bullet" data-current-section="s4"></div>
      </a>
    </li>
    </ul>
</nav>

  <div id="wrapper">

    <!-- Landing Intro -->
    <section data-current-section="s1">
      <div id="section-1" class={$brightnessModelStore === "LIGHT" ? lightBG : darkBG}>
        <div class="sm:w-11/12 md:w-4/5 lg:w-3/5 mt-20 lg:mt-0 mx-auto lg:flex flex-row gap-10">
          <!-- 3D Models -->   
          <div class="w-full lg:w-2/4 mx-auto bg-[#9999990] content-center">
            {#if loadingModel === true} 
            <div class="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <svg class="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24">
              <path
                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path
                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-900">
              </path>
            </svg>
            </div>
           {:else}
             <model-viewer 
              id="xr-devices-hero"
              class="mx-auto relative bottom-10 h-[300px] scale-150"
              auto-rotate 
              rotation-per-second="50deg"
              auto-rotate-delay="3000"
              min-camera-orbit="0deg 75deg 0%"
              src="https://ik.imagekit.io/je4p51xox/3D%20Models/hero-anim.glb?updatedAt=1732764059609"
              >
            </model-viewer>
           {/if }
          </div>
          <!-- Text -->
          <div class="lg:w-2/4 pb-40 lg:pb-0 mx-auto bg-[#9999990]">
            <img 
              class="w-full" 
              alt="PXR Text Logo"
              src={$brightnessModelStore === "LIGHT" ? 
                "https://ik.imagekit.io/je4p51xox/pxr_textlogo_dark.png?updatedAt=1733435870334"
                : 
                "https://ik.imagekit.io/je4p51xox/pxr_textlogo_light.png?updatedAt=1733435843631"}>
            <p class="landing-text">
              <span class="text-lg lg:text-2xl ml-6">
                <span class='text-[#00CF68] font-bold'>
                  <span class="greetings-anim-1 inline-block">NEED XR?</span>
                  <span class="greetings-anim-2 inline-block">WE</span>
                  <span class="greetings-anim-3 inline-block">GOT YOU.</span>
                </span> 
              </span>
              <br>
              <span class="sm:text-xl xl:text-xl block my-4 ml-6">
                <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
                  Partner with Paradigm XR to turn your XR dreams into reality. We'll help you take your ideas from concept to a functional MVP [minimum viable product], with ongoing development services to scale your project as needed.
                </span>
            </p>
            <a href="#footer" 
              class="block text-center ml-6 mt-4 text-[#fff] border-2 border-[#fff] p-2 font-bold hover:bg-[#00CF6820] hover:text-[#fff]">CONTACT US
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Our Services-->
    <section data-current-section="s2">
      <div id="section-2" class={$brightnessModelStore === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-3/5 p-4 mx-auto mb-20 lg:mb-0">
          <!-- Header -->
          <div class="mt-20 md:mt-0">
              <h1 class={$brightnessModelStore === "LIGHT" ? lightHeader : darkHeader}>
                <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
                  OUR SERVICES
                </span>
                <a href="/contact" aria-label="About Us Link" class="float-right text-xs mt-2 mr-2">
                  <span class="px-1 py-0.5 border-2 border-[#00CF68] text-[#00CF68] hover:border-[#ffcb0a] hover:text-[#ffcb0a] transition duration-150">
                    FREE CONSULTATION
                  </span>
                </a>
              </h1>
          </div>
          <!-- Services -->
          <div class="content-center">
            <div class="lg:grid lg:grid-cols-3 lg:gap-4 pt-4">
              <!-- Design -->
              <div class="bg-[#99999910] text-white p-4 my-2 lg:my-0 s2-active:translate-y-0">
                <div class="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 mx-auto" viewBox="0 0 512 512">
                    <path 
                        stroke={$brightnessModelStore === 'DARK'? "#ffcb0a" : "#00CF68"}
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="32" 
                        d="M364.13 125.25L87 403l-23 45 44.99-23 277.76-277.13-22.62-22.62zM420.69 68.69l-22.62 22.62 22.62 22.63 22.62-22.63a16 16 0 000-22.62h0a16 16 0 00-22.62 0z"/>
                    </svg>
                  <h2 class="font-bold text-xl text-left mt-4 text-[#00CF68]">Design</h2>
                  <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
                    <p class="text-left text-sm lg:text-md">Just as an architect meticulously plans before construction begins, Paradigm XR's design team lays the foundation for captivating XR experiences.  We blend UX/UI, interaction, 3D, and graphic design to craft intuitive and visually stunning solutions.
                    </p>
                  </span>                
                </div>
              </div>
              <!-- Development -->
              <div class="bg-[#99999910] text-white p-4">
                <div class="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 mx-auto" viewBox="0 0 512 512">
                    <path 
                        fill="none" 
                        stroke={$brightnessModelStore === 'DARK'? "#ffcb0a" : "#00CF68"}
                        stroke-linecap="round" 
                        stroke-linejoin="round"
                         stroke-width="32" 
                        d="M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"/>
                  </svg>
                  <h2 class="font-bold text-xl text-left mt-4 text-[#00CF68]">Development</h2>
                  <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
                    <p class="text-left text-sm lg:text-md">Just as a skilled construction crew brings an architect's blueprint to life, Paradigm XR's development team builds high-performance applications for iOS, Android, and Meta Quest powered by 
                      <a href="https://www.unrealengine.com/en-US" class="text-[#00CF68] py-0.5 hover:text-[#ffcb0a] hover:border-b-2 hover:border-[#ffcb0a] transition duration-150" target="_blank">
                        Unreal Engine.
                      </a>
                    </p>
                  </span>
                </div>
              </div>
              <!-- Consultation -->
              <div class="bg-[#99999910] text-white p-4 my-2 lg:my-0">
                <div class="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 mx-auto" viewBox="0 0 512 512">
                    <path 
                        d="M304 384v-24c0-29 31.54-56.43 52-76 28.84-27.57 44-64.61 44-108 0-80-63.73-144-144-144a143.6 143.6 0 00-144 144c0 41.84 15.81 81.39 44 108 20.35 19.21 52 46.7 52 76v24M224 480h64M208 432h96M256 384V256" 
                        stroke={$brightnessModelStore === 'DARK'? "#ffcb0a" : "#00CF68"}
                        fill="none"
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="32"/>
                    <path 
                        d="M294 240s-21.51 16-38 16-38-16-38-16" 
                        stroke={$brightnessModelStore === 'DARK'? "#ffcb0a" : "#00CF68"}
                        fill="none"
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="32"/>
                  </svg>
                  <h2 class="font-bold text-xl text-left mt-4 text-[#00CF68]">Consultation</h2>
                  <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
                    <p class="text-left text-sm lg:text-md">Facing challenges in your XR journey? Paradigm XR's consultants provide strategic guidance and solutions to overcome obstacles and achieve your project objectives. We'll help you navigate technology choices, optimize development workflows, and ensure your XR experience delivers exceptional results.</p>
                  </span>                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section data-current-section="s3">
      <div id="section-3" class={$brightnessModelStore === "LIGHT" ? lightBG : darkBG}>
        <!-- Header -->
        <div class="md:w-4/5 lg:w-3/5 p-4 lg:px-0 mx-auto content-center">
          <h1 class={$brightnessModelStore === "LIGHT" ? lightHeader : darkHeader}>
            <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
              LATEST PROJECTS
            </span>
          </h1>
          
        </div>
        <!-- Project -->
        <div class="md:w-4/5 lg:w-3/5 p-4 mx-auto lg:grid lg:grid-cols-2 lg:gap-8 content-center">
          <!-- Video -->
          <div class="relative content-center">
            <!-- svelte-ignore a11y_media_has_caption -->
            <video 
              src="https://ik.imagekit.io/je4p51xox/videos/Harp_Init_Demo%20-%20Made%20with%20Clipchamp%20(2).mp4?updatedAt=1733445896479" 
              autoplay
              controls
            >
          </div>
          <!-- Text -->
          <div>
            <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
              <img 
              src="https://ik.imagekit.io/2ax1lblqa/Slice_1__1_-removebg-preview.png?updatedAt=1732343747682" 
              class="h-20 mt-8 lg:mt-0" 
              alt="Project Logo">
              <h1 class="text-3xl font-bold text-[#00CF68]">HARP</h1>
              <a aria-label="Meta Quest Website" target="_blank" href={metaQuestWebsiteLink} class="bg-[#ffcb0a]/10 mt-1 p-1 inline-block hover:border-b-2 hover:border-[#ffcb0a] hover:text-[#ffcb0a] transition duration-150">
                <!-- Meta Logo -->
                <svg class="h-4 inline-block" fill="#fff" viewBox="0 0 32 32" version="1.1">
                  <path 
                  stroke={$brightnessModelStore === 'DARK'? "#ffcb0a" : "#111"}
                  fill={$brightnessModelStore === 'DARK'? "#ffcb0a" : "#111"}
                  d="M5,19.5c0-4.6,2.3-9.4,5-9.4c1.5,0,2.7,0.9,4.6,3.6c-1.8,2.8-2.9,4.5-2.9,4.5c-2.4,3.8-3.2,4.6-4.5,4.6  C5.9,22.9,5,21.7,5,19.5 M20.7,17.8L19,15c-0.4-0.7-0.9-1.4-1.3-2c1.5-2.3,2.7-3.5,4.2-3.5c3,0,5.4,4.5,5.4,10.1  c0,2.1-0.7,3.3-2.1,3.3S23.3,22,20.7,17.8 M16.4,11c-2.2-2.9-4.1-4-6.3-4C5.5,7,2,13.1,2,19.5c0,4,1.9,6.5,5.1,6.5  c2.3,0,3.9-1.1,6.9-6.3c0,0,1.2-2.2,2.1-3.7c0.3,0.5,0.6,1,0.9,1.6l1.4,2.4c2.7,4.6,4.2,6.1,6.9,6.1c3.1,0,4.8-2.6,4.8-6.7  C30,12.6,26.4,7,22.1,7C19.8,7,18,8.8,16.4,11"/>
                </svg>
                <span class={$brightnessModelStore === 'DARK'? "text-[#ffcb0a] text-sm font-bold" : "text-[#111] text-sm font-bold"}>QUEST 2-3</span>
              </a>
              <a aria-label="Meta Quest Website" target="_blank" href={metaQuestWebsiteLink} class="bg-[#ffcb0a]/10 mt-1 p-1 inline-block hover:border-b-2 hover:border-[#ffcb0a] hover:text-[#ffcb0a] transition duration-150">
                <span class={$brightnessModelStore === 'DARK'? "text-[#ffcb0a] text-sm font-bold" : "text-[#111] text-sm font-bold"}>PROJECT WEBSITE</span>
              </a>
              <p class="lg:mt-2 lg:pt-2 lg:border-t-2 border-[#99999980]">
                Facing challenges in your XR journey? Paradigm XR's consultants provide strategic guidance and solutions to overcome obstacles and achieve your project objectives. We'll help you navigate technology choices, optimize development workflows, and ensure your XR experience delivers exceptional results.
              </p>
            </span>
          </div>
        </div>
        <!-- View All Button -->
         <div class="md:w-4/5 lg:w-3/5 p-4 mx-auto my-10 lg:my-0 text-center">
          <a href="/projects" aria-label="About Us Link" class="text-xs mt-2 mr-2">
            <span class="w-full lg:w-auto inline-block px-2 py-1.5 border-2 border-[#00CF68] text-[#00CF68] hover:border-[#ffcb0a] hover:text-[#ffcb0a] transition duration-150">
              VIEW ALL PROJECTS
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- Contact Us -->
    <section data-current-section="s4">
      <div id="footer" class={$brightnessModelStore === "LIGHT" ? lightBGFooter : darkBGFooter}>
        <div class="md:w-4/5 lg:w-full mx-auto mb-8">
        <!-- Header -->
        <div class="text-center content-center">
          <div class="inline-block mx-auto p-2 border border-[#ffcb0a] bg-[#ffcb0a]/20 text-xl">
            <h1 class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>Connect with us for a Free Consultation!</h1>
          </div>
          <span style="font-size: 5em;" class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
          <!-- PXR Logo -->
          
          <img 
          class="h-32 mx-auto" 
          alt="PXR Logo"
          src={$brightnessModelStore === "LIGHT" ? 
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
            <span class={$brightnessModelStore === "LIGHT" ? lightInput : darkInput}>
            <input class="w-full my-1 h-10 p-2" type="text" style="background: none;" required placeholder="First & Last Name" name="name">
            </span>
            <span class={$brightnessModelStore === "LIGHT" ? lightInput : darkInput}>
            <input class="w-full my-1 h-10 p-2" type="text" style="background: none;" required placeholder="Email Address" name="email">
            </span>
            <span class={$brightnessModelStore === "LIGHT" ? lightInput : darkInput}>
            <textarea class="my-1 mx-auto p-2 w-full" style="background: none;" rows="6" required placeholder="Want to collaborate or have a suggestion?" name="message"></textarea>
            </span>
            <button class={$brightnessModelStore === "LIGHT" ? lightButton : darkButton} type="submit">
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
      z-index: 9998;
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
          /* display: none; */
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
  #footer
   {
      width: 100%;
      height: 100vh;
      scroll-snap-align: start;
  }
  @media (max-width: 1000px)  {
      #section-1,
      #section-2,
      #section-3,
      #footer
       {
          scroll-snap-type: none;
          scroll-snap-align: none;
          height: 100%;
      }
  
      #footer {
          padding: 10em 0 5em 0;
      }
  }


  
  /* Contact Form */
  input:focus, textarea:focus {
    border: 2px solid #999;
  }
  
</style>
  