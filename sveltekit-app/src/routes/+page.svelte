<script lang="ts">
  import { onMount } from 'svelte';
  import { brightnessModelStore } from '$lib/stores/darkmode-store';
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

    // Model Viewer Landing Header SVG Animation 
    const modelViewerParameters = document.querySelector("model-viewer#xr-devices-hero") as any;
      modelViewerParameters.addEventListener("load", (ev: any) => {
      // TODO: When this loads, hide loading
      // TODO: Add loading spinner
      let material = modelViewerParameters['model'].materials[0];
      console.log(material);
      
    })

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
      <a href="#section-4" aria-label="Fourth Section">
        <div class="nav-bullet" data-current-section="s4"></div>
      </a>
    </li>
    </ul>
</nav>

  <div id="wrapper">

    <!-- Landing Intro -->
    <section data-current-section="s1">
      <div id="section-1" class={$brightnessModelStore === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-3/5 mx-auto lg:flex flex-row gap-10">
          <!-- 3D Models -->
          <div class="w-full lg:w-2/4 mx-auto bg-[#9999990] content-center">
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
          </div>
          <!-- Text -->
          <div class="w-11/12 lg:w-2/4 mx-auto bg-[#9999990]">
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
            <a href="#section-4" 
              class="ml-6 mt-4 text-[#00CF68] border-2 border-[#00CF68] p-2 font-bold hover:bg-[#00CF6820] hover:text-[#fff]">CONTACT US
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Our Services-->
    <section data-current-section="s2">
      <div id="section-2" class={$brightnessModelStore === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-3/5 p-4 mx-auto">
          <!-- Header -->
          <div class="mt-20 md:mt-0">
              <h1 class={$brightnessModelStore === "LIGHT" ? lightHeader : darkHeader}>
                <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
                  OUR SERVICES
                </span>
                <a href="#section-4" 
                  class="float-right text-xs text-[#00CF68] p-2 font-bold hover:bg-[#00CF6820] hover:text-[#fff]">CONTACT US
                </a>
              </h1>
          </div>
          <!-- Services -->
          <div class="content-center">
            <!-- <ul class={brightnessMode === "LIGHT" ? lightText : darkText}>
              <li>VR, AR, and MR Development</li>
              <li>Web Development</li>
              <li>Consultation</li>
            </ul> -->
            <div class="grid grid-cols-3 gap-4 pt-4">
              <div class="bg-[#99999910] text-white p-4">
                <div class="text-center">
                  <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
                    <ion-icon style="font-size: 70px;"  name="pencil-outline"></ion-icon>
                  </span>
                  <h2 class="font-bold text-3xl text-left mt-4 text-[#00CF68]">Design</h2>
                  <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
                    <p class="text-left text-md">Just as an architect meticulously plans before construction begins, Paradigm XR's design team lays the foundation for captivating XR experiences.  We blend UX/UI, interaction, 3D, and graphic design to craft intuitive and visually stunning solutions.
                    </p>
                  </span>                
                </div>
              </div>
              <div class="bg-[#99999910] text-white p-4">
                <div class="text-center">
                  <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
                    <ion-icon style="font-size: 70px;"  name="code-slash-outline"></ion-icon>
                  </span>
                  <h2 class="font-bold text-3xl text-left mt-4 text-[#00CF68]">Development</h2>
                  <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
                    <p class="text-left text-md">Just as a skilled construction crew brings an architect's blueprint to life, Paradigm XR's development team builds high-performance applications for iOS, Android, and Meta Quest powered by 
                      <a href="https://www.unrealengine.com/en-US" class="text-[#00CF68] hover:border-bottom" target="_blank">
                        Unreal Engine.
                      </a>
                    </p>
                  </span>
                </div>
              </div>
              <div class="bg-[#99999910] text-white p-4">
                <div class="text-center">
                  <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
                    <ion-icon style="font-size: 70px;"  name="bulb-outline"></ion-icon>
                  </span>
                  <h2 class="font-bold text-3xl text-left mt-4 text-[#00CF68]">Consultation</h2>
                  <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
                    <p class="text-left text-md">Facing challenges in your XR journey? Paradigm XR's consultants provide strategic guidance and solutions to overcome obstacles and achieve your project objectives. We'll help you navigate technology choices, optimize development workflows, and ensure your XR experience delivers exceptional results.</p>
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
        <div class="md:w-4/5 lg:w-3/5 mx-auto content-center">
          <h1 class={$brightnessModelStore === "LIGHT" ? lightHeader : darkHeader}>
            LATEST PROJECT
            
            <img 
            src="https://ik.imagekit.io/2ax1lblqa/Slice_1__1_-removebg-preview.png?updatedAt=1732343747682" 
            class="p-2 h-10 float-right" 
            alt="Project Logo">
          <a
            href="https://www.harp-rose.org/"
            class="float-right text-xs text-[#00CF68] p-2 font-bold hover:bg-[#00CF6820] hover:text-[#fff]"
            target="_blank"
            >
            HARP Website
          </a>
          <span class="float-right text-[#ffffff20]">|</span>
          <button 
            data-popover-target="popover-description" type="button" class={$brightnessModelStore === "LIGHT" ? lightButton : darkButton}>
            Project Summary
          </button>
          </h1>
          
        </div>
        <!-- Project -->
        <div class="md:w-4/5 lg:w-3/5 mx-auto">
          <div class="relative">
              <span class="p-2 absolute top-0 right-0">
                  <button class={$brightnessModelStore === "LIGHT" ? lightButton : darkButton}>
                    <a target="_blank">Link</a>
                  </button>
                  <button data-popover-target="popover-description" type="button" class={$brightnessModelStore === "LIGHT" ? lightButton : darkButton}>Description
                    
                  </button>
              </span>

            <!-- svelte-ignore a11y_media_has_caption -->
            <video 
              src="https://ik.imagekit.io/je4p51xox/videos/Harp_Init_Demo%20-%20Made%20with%20Clipchamp%20(2).mp4?updatedAt=1733445896479" 
              autoplay

            >
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Us -->
    <section data-current-section="s4">
      <div id="section-4" class={$brightnessModelStore === "LIGHT" ? lightBGFooter : darkBGFooter}>
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
      #section-1,
      #section-2,
      #section-3,
      #section-4
       {
          scroll-snap-type: none;
          scroll-snap-align: none;
          height: auto;
      }
  
      #section-4 {
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
  