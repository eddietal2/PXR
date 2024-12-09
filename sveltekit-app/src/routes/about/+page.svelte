<script lang="ts">
  import { onMount } from 'svelte';
  import { brightnessModelStore } from '$lib/stores/darkmode-store';

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
      <a href="#section-3" aria-label="Third Section">
        <div class="nav-bullet" data-current-section="s3"></div>
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
          src={$brightnessModelStore === "LIGHT" ? 
            "https://ik.imagekit.io/je4p51xox/pxr_textlogo_dark.png?updatedAt=1733435870334"
            : 
            "https://ik.imagekit.io/je4p51xox/pxr_textlogo_light.png?updatedAt=1733435843631"}>
            <h2 class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
              <span class="text-3xl font-bold">About</span>
            </h2>
            <p class="sm:text-xl xl:text-xl block my-4 ml-6 text-left">
                <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
                  Partner with Paradigm XR to turn your XR dreams into reality. We'll help you take your ideas from concept to a functional MVP [minimum viable product], with ongoing development services to scale your project as needed.
                </span>
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
              <h2 class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>01. Ideation</h2>
            </span>
            <p class="sm:text-xl xl:text-xl block my-4 ml-0 lg:ml-6">
                <span class={$brightnessModelStore === "LIGHT" ? lightText : darkText}>
                  Transform your XR vision into a tangible concept with Paradigm XR's collaborative ideation process. Our experienced team will work closely with you to explore your ideas, conduct thorough research, and validate your concept's potential in the market.
                </span>
            </p>
          </div>
          <!-- Image -->
          <div class="w-1/2 lg:w-2/4 mt-20 lg:mt-0 mx-auto bg-[#9999990] content-center">
            <div class="h-full w-1/2 mx-auto">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                  viewBox="0 0 513.856 513.855"
                  xml:space="preserve">
                  <g>
                    <g>
                      <!-- Outer Path -->
                      <path fill={$brightnessModelStore === 'DARK'? "#ffffff80" : "#11111180"} d="M302.37,0.179C179.871-4.066,51.109,67.132,62.235,204.885c0.292,9.6,11.341,52.496-31.806,87.397
                        c-15.351,12.467-11.289,36.597,10.316,48.489c7.165,3.956,14.658,6.592,22.437,8.425c-1.602,8.627-0.81,17.356,3.344,25.562
                        c-10.161,19.804,3.41,37.851,15.282,42.116c5.581,2.758,1.275,12.751,1.892,21.13c1.731,24.039,30.399,35.698,48.947,32.788
                        c33.248-5.388,70.64-3.676,83.131,32.845c2.496,7.292,8.797,9.287,15.6,10.095c15.089,1.849,188.122-17.641,193.321-20.789
                        c7.252-2.26,13.106-10.38,8.425-19.129c-39.974-74.524,40.034-153.645,55.405-225.233C514.452,130.782,413.994,0.179,302.37,0.179
                        z M464.119,239.958c-16.696,76.596-89.957,150.648-60.956,230.85c-54.477,7.394-164.512,18.966-164.887,19.022
                        c-19.609-43.646-65.242-51.48-110.393-44.646c-5.964,1.179-18.725-0.203-18.385-11.836c3.712-25.649-12.756-40.345-19.261-41.924
                        c-2.445-0.798-1.424-2.001-1.462-1.966c12.263-13.781-6.198-26.339,3.168-44.097c5.708-10.826-1.627-18.027-13.688-19.692
                        c-15.021-1.625-22.952-7.257-28.157-9.562c-2.521-1.199-3.499-3.393-1.181-5.967c47.73-43.331,39.608-104.688,39.562-105.249
                        C77.694,71.416,214.071,18.633,303.685,26.422C409.712,35.974,482.039,139.996,464.119,239.958z"/>
                      
                      <!-- Lightbulb -->
                      <path fill="#00CF68" d="M234.434,138.562c-34.777,20.962-42.051,63.048-27.68,98.871c3.433,8.559,8.95,16.021,13.182,24.163
                        c12.34,23.755,4.062,21.643,4.172,30.682c0.119,10.593,2.775,29.889,3.895,35.089c0.899,5.667,5.053,10.734,12.469,10.734
                        c85.45,0,86.872,5.286,91.518-4.854c2.742-4.626,1.762-7.83,1.762-36.054c0-13.508-13.868-1.711,11.648-36.424
                        c6.5-8.839,12.939-17.367,17.164-27.574c8.993-21.751,7.51-46.492-4.215-66.976C333.564,122.833,274.298,114.545,234.434,138.562z
                        M307.564,312.96c-18.514-0.762-37.043-0.93-55.581-0.98c-0.391-2.859-0.719-5.718-1.003-8.582
                        c18.92-0.355,37.754,0.549,56.583,2.442V312.96z M331.044,237.458c-7.57,7.914-18.945,20.035-25.526,41.962
                        c-4.515-0.432-9.028-0.803-13.543-1.117c0.035-5.2-2.895-15.671,2.147-35.224c0.158-0.604,0.219-1.171,0.27-1.731l13.563-13.566
                        c9.155-9.143-4.718-23.056-13.878-13.883l-6.668,6.66c-2.025-3.41-4.225-6.728-6.723-9.938
                        c-6.236-8.018-23.539,1.442-13.884,13.888c3.326,4.271,5.799,9.313,8.211,14.203c-3.209,12.868-3.904,25.621-2.392,38.687
                        c-6.87-0.192-13.749-0.3-20.634-0.173c-1.226-14.051-6.792-23.663-12.172-31.765c-3.255-5.294-37.534-56.939,11.641-86.582
                        c27.487-16.562,60.175-7.066,81.71,13.733C359.014,207.256,335.275,232.768,331.044,237.458z"/>
                      
                      <path fill="#ffcb0a" d="M175.639,185.518c-11.347-0.079-22.63-1.031-33.923-2.054c-11.893-1.082-11.789,17.44,0,18.509
                        c11.293,1.026,22.576,1.978,33.923,2.057C187.572,204.105,187.567,185.594,175.639,185.518z"/>
                      
                      <path fill="#ffcb0a" d="M228.863,109.912c-6.566-9.849-13.238-19.624-20.979-28.604c-7.805-9.06-20.83,4.09-13.088,13.088
                        c6.708,7.782,12.395,16.316,18.085,24.854C219.474,129.124,235.51,119.862,228.863,109.912z"/>
                      
                      <path fill="#ffcb0a" d="M346.076,114.106c4.891-7.825,9.79-15.645,14.391-23.643c5.962-10.367-10.028-19.68-15.975-9.344
                        c-4.606,8.003-9.501,15.828-14.396,23.644C323.753,114.924,339.769,124.201,346.076,114.106z"/>
                      
                      <path fill="#ffcb0a" d="M391.951,192.386c11.796-3.306,23.109-7.863,34.083-13.269c10.704-5.284,1.32-21.236-9.333-15.98
                        c-9.572,4.717-19.394,8.523-29.666,11.402C375.558,177.753,380.444,195.61,391.951,192.386z"/>
                    </g>
                  </g>
                </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Us -->
    <section data-current-section="s3">
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
  