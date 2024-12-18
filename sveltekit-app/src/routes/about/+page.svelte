<script lang="ts">
  import { onMount } from 'svelte';
  import { brightnessModelStore } from '$lib/stores/darkmode-store';

  interface Teammate {
    name: string,
    role: string,
    info: string,
    photo: string
  }

  let team: Teammate[] = [
    {
      name: "Eddie Taliaferro II",
      role: "Owner / XR Developer",
      info: "I am a driven entrepreneur, Founder and CEO of Final Boss Studios, a dynamic startup attempting to 'evolutionize' the world of gaming and interactive entertainment. With a diverse background as a Tech Educator for five years and extensive experience as a skilled software developer, I combine my passion for technology and education to lead my team in creating innovative and immersive gaming experiences.",
      photo: "https://ik.imagekit.io/je4p51xox/headshot.jpg?updatedAt=1733970199791",
    }
  ]

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
              </svg>`;
          
              // Section Animations
              // s2
              activeSection == 's2'
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
  <ul>
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
    <!-- How We Do Intro -->
    <section data-current-section="s1">
      <div id="section-1" class={$brightnessModelStore === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-3/5 mx-auto text-center">
          <div class="h-40 w-40 mx-auto">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 502.643 502.643" xml:space="preserve">
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
              <g>
                <g>
                  <path fill="url(#myGradient)" d="M251.256,237.591c37.166,0,67.042-30.048,67.042-66.977c0.043-37.037-29.876-66.999-67.042-66.999
                    c-36.908,0-66.869,29.962-66.869,66.999C184.387,207.587,214.349,237.591,251.256,237.591z"/>
                  <path fill="url(#myGradient)" d="M305.032,248.506H197.653c-19.198,0-34.923,17.602-34.923,39.194v107.854c0,1.186,0.604,2.243,0.669,3.473h175.823
                    c0.129-1.229,0.626-2.286,0.626-3.473V287.7C339.912,266.108,324.187,248.506,305.032,248.506z"/>
                  <path fill="url(#myGradient)" d="M431.588,269.559c29.832,0,53.754-24.008,53.754-53.668s-23.922-53.711-53.754-53.711
                    c-29.617,0-53.582,24.051-53.582,53.711C377.942,245.53,401.972,269.559,431.588,269.559z"/>
                  <path fill="url(#myGradient)" d="M474.708,278.317h-86.046c-15.445,0-28.064,14.107-28.064,31.472v86.413c0,0.928,0.453,1.812,0.518,2.826h141.03
                    c0.065-1.014,0.496-1.898,0.496-2.826v-86.413C502.707,292.424,490.11,278.317,474.708,278.317z"/>
                  <path fill="url(#myGradient)" d="M71.011,269.559c29.789,0,53.733-24.008,53.733-53.668S100.8,162.18,71.011,162.18c-29.638,0-53.603,24.051-53.603,53.711
                    S41.373,269.559,71.011,269.559L71.011,269.559z"/>
                  <path fill="url(#myGradient)" d="M114.109,278.317H27.977C12.576,278.317,0,292.424,0,309.789v86.413c0,0.928,0.453,1.812,0.539,2.826h141.03
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
          <h2 class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
            <span class="text-xl lg:text-3xl text-[#ffcb0a] font-bold">#ABOUT</span>
          </h2>
        </div>
      </div>
    </section>

    <!-- Eddie -->
    <section data-current-section="s2">
      <div id="section-2" class={$brightnessModelStore === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-3/5 mx-auto lg:flex flex-row gap-10">
          <div class="w-11/12 lg:w-2/4 mt-20 lg:mt-0 mx-auto border-t-2 border-[#fff] pt-10 content-center">
            <span class="text-5xl font-bold w-full block">
              <h2 class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>{team[0].name}</h2>
            </span>
            <p class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
              <span class="bg-[#ffcb0a]/10 border-[#ffcb0a] border-2 px-1 py-0.5 mt-1 inline-block">{team[0].role}</span>
            </p>
            <p class="sm:text-xl xl:text-xl block my-4">
                <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
                  {team[0].info}
                </span>
            </p>
          </div>
          <!-- Image -->
          <div class="w-1/2 lg:w-2/4 mt-20 lg:mt-0 mx-auto bg-[#9999990] content-center">
            <div class="h-full w-1/2 mx-auto content-center">
              <img src={team[0].photo} class="rounded-full" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Teammate #2 -->
    <section data-current-section="s3">
      <div id="section-2" class={$brightnessModelStore === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-3/5 mx-auto lg:flex flex-row gap-10">
          <div class="w-11/12 lg:w-2/4 mt-20 lg:mt-0 mx-auto border-t-2 border-[#fff] pt-10 content-center">
            <span class="text-5xl font-bold w-full block">
              <h2 class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>{team[0].name}</h2>
            </span>
            <p class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
              <span class="bg-[#ffcb0a]/10 border-[#ffcb0a] border-2 px-1 py-0.5 mt-1 inline-block">{team[0].role}</span>
            </p>
            <p class="sm:text-xl xl:text-xl block my-4">
                <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
                  {team[0].info}
                </span>
            </p>
          </div>
          <!-- Image -->
          <div class="w-1/2 lg:w-2/4 mt-20 lg:mt-0 mx-auto bg-[#9999990] content-center">
            <div class="h-full w-1/2 mx-auto content-center">
              <img src={team[0].photo} class="rounded-full" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Us -->
    <section data-current-section="s4">
      <div id="section-3" class={$brightnessModelStore === "LIGHT" ? lightBGFooter : darkBGFooter}>
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
  