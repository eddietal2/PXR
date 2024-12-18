<script lang="ts">
    import { onMount } from 'svelte';
    import { brightnessModelStore } from '$lib/stores/darkmode-store';
    let metaQuestWebsiteLink = 'https://www.meta.com/quest/quest-3/?utm_source=gg&utm_medium=ps&utm_campaign=18854243668&utm_term=meta%20quest&utm_content=714674249906&utm_ad=149056889952&utm_location=9016891&utm_location2=&utm_placement=kwd-1459933427178&utm_device=c&utm_matchtype=e&utm_feed=&utm_adposition=&utm_product=&&gad_source=1&gclid=Cj0KCQiAsOq6BhDuARIsAGQ4-zgfZnIpJ94RoWh822Rv7F5f1ELKQ7jKmN-zVvC-RvkkV08dFjQEWCQaAgdGEALw_wcB&gclsrc=aw.ds'

  /**
   * TailwindCSS Classes
   */
  // Light Mode
  let lightText = 'text-black transition duration-150';
  let lightBG = 'bg-[#fff] content-center transition duration-150';
  let lightBGFooter = "bg-[#fff] content-center transition duration-150";
  let lightButton = 'bg-[#00000020] text-[#00CF68] hover:bg-[#00CF68] hover:text-[#fff] transition duration-1 py-1 px-4';
	let lightInput = 'text-[#111]';

  // Dark Mode
  let darkText = 'text-white transition duration-150';
  let darkBG = 'bg-[#222] content-center transition duration-150';
  let darkBGFooter = "bg-[#111] content-center transition duration-150";
  let darkButton = 'bg-[#ffffff20] text-[#00CF68] hover:bg-[#00CF68] hover:text-[#fff] transition duration-1 py-1 px-4';
	let darkInput = 'text-[#fff]';

  onMount(() => {
    setSnapScrolling();

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
        <a href="#footer" aria-label="Third Section">
          <div class="nav-bullet" data-current-section="s3"></div>
        </a>
      </li>
    </ul>
  </nav>

  <div id="wrapper">
    <!-- How We Do Intro -->
    <section data-current-section="s1">
      <div id="section-1" class={$brightnessModelStore === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-2/5 mx-auto text-center">
          <!-- Icon -->
          <div class="h-40 w-40 mx-auto">
            <svg viewBox="0 0 24 24" fill="#00CF68" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  {#if $brightnessModelStore === 'DARK'}
                  <stop offset="50%" stop-color="#ffffff" />
                  {:else}
                  <stop offset="50%" stop-color="#111111" />
                  {/if}
                  <stop offset="100%" stop-color="#ffcb0a" />
                </linearGradient>
              </defs>
              <path fill="url(#myGradient)" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z" fill-opacity=".16" stroke="url(#myGradient)" stroke-width="1.5" stroke-miterlimit="10"/>
              <path d="M12 12V6M7 14V6M17 16V6" stroke="#00CF68" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
            </svg>
          </div>
          <h1 class="text-xl lg:text-3xl text-[#ffcb0a] font-bold">#PROJECTS</h1>
          <p class="sm:text-xl xl:text-xl block my-4 ml-6">
            <!-- <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
            Partner with Paradigm XR to turn your XR dreams into reality. We'll help you take your ideas from concept to a functional MVP [minimum viable product], with ongoing development services to scale your project as needed.
            </span> -->
          </p>
        </div>
      </div>
    </section>

    <!-- Section 1 -->
    <section data-current-section="s2">
      <div id="section-2" class={$brightnessModelStore === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-3/5 mx-auto lg:flex flex-row gap-10">
          <div class="w-11/12 lg:w-2/4 mt-20 lg:mt-0 mx-auto border-t-2 border-[#fff] pt-10 content-center">
            <span class="text-5xl font-bold w-full block">
              <h2 class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
                <img 
                  src="https://ik.imagekit.io/2ax1lblqa/Slice_1__1_-removebg-preview.png?updatedAt=1732343747682" 
                  class="h-20 inline" 
                  alt="Project Logo">
                HARP</h2>
            </span>
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
              <a aria-label="Project Link" target="_blank" href="https://www.harp-rose.org/" class="bg-[#ffcb0a]/10 mt-1 p-1 inline-block hover:border-b-2 hover:border-[#ffcb0a] hover:text-[#ffcb0a] transition duration-150">
                <span class={$brightnessModelStore === 'DARK'? "text-[#ffcb0a] text-sm font-bold" : "text-[#111] text-sm font-bold"}>PROJECT WEBSITE</span>
              </a>
            <p class="sm:text-xl xl:text-xl block my-4">
                <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
                  Transform your XR vision into a tangible concept with Paradigm XR's collaborative ideation process. Our experienced team will work closely with you to explore your ideas, conduct thorough research, and validate your concept's potential in the market.
                </span>
            </p>
          </div>
          <!-- Image -->
          <div class="w-1/2 lg:w-2/4 mt-20 lg:mt-0 mx-auto bg-[#9999990] content-center">
            <div class="mx-auto content-center">
              <!-- svelte-ignore a11y_media_has_caption -->
              <video 
                src="https://ik.imagekit.io/je4p51xox/videos/Harp_Init_Demo%20-%20Made%20with%20Clipchamp%20(2).mp4?updatedAt=1733445896479" 
                autoplay
                controls
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Us -->
    <section data-current-section="s3">
      <div id="footer" class={$brightnessModelStore === "LIGHT" ? lightBGFooter : darkBGFooter}>
        <div class="md:w-4/5 lg:w-full mx-auto mb-8">
        <!-- Header -->
        <div class="text-center content-center mx-4 sm:mx-0">
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
  #footer,
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
      #footer,
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
  