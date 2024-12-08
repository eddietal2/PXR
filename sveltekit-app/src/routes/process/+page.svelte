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
        <li>
            <a href="#section-5" aria-label="Fifth Section">
            <div class="nav-bullet" data-current-section="s5"></div>
          </a>
        </li>
        <li>
            <a href="#section-6" aria-label="Sixth Section">
            <div class="nav-bullet" data-current-section="s6"></div>
          </a>
        </li>
        <li>
            <a href="#section-7" aria-label="Seventh Section">
            <div class="nav-bullet" data-current-section="s7"></div>
          </a>
        </li>
        <li>
            <a href="#section-8" aria-label="Eigth Section">
            <div class="nav-bullet" data-current-section="s8"></div>
          </a>
        </li>
    </ul>
</nav>

  <div id="wrapper">
    <!-- How We Do Intro -->
    <section data-current-section="s1">
      <div id="section-1" class={brightnessMode === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-3/5 mx-auto text-center">
          <div class="h-40 w-40 mx-auto">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 295.239 295.239" xml:space="preserve">
              <defs>
                <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="50%" stop-color="#ffffff" />
                  <stop offset="100%" stop-color="#ffcb0a" />
                </linearGradient>
              </defs>
            <g>
              <g>
                <g>
                  <path fill="url(#myGradient)" d="M228.572,123.81v14.286h-51.257l-24.933-12.467v-16.105h7.143c6.562,0,11.905-5.338,11.905-11.905
                    c0-3.876-1.89-7.29-4.762-9.462v-5.062c6.081-5.438,9.524-13.029,9.524-21.186c0-15.757-12.814-28.571-28.571-28.571
                    c-15.757,0-28.571,12.814-28.571,28.571c0,8.157,3.443,15.752,9.524,21.186v5.062c-2.871,2.176-4.762,5.59-4.762,9.462
                    c0,6.567,5.343,11.905,11.905,11.905h7.143v16.105l-34.459,17.228l34.457,17.229v16.105H38.096v-14.286h28.571V123.81H0.001
                    v38.095h28.571v14.286v4.762V200H0.001v38.095h66.667V200H38.096v-14.286h104.762V200h-28.571v38.095h28.571v19.048h-9.524
                    c-10.505,0-19.048,8.543-19.048,19.048s8.543,19.048,19.048,19.048h28.571c10.505,0,19.048-8.543,19.048-19.048
                    s-8.543-19.048-19.048-19.048h-9.524v-19.048h28.571V200h-28.571v-14.286v-9.524v-16.105l24.933-12.467h51.257v14.286h28.571
                    v38.771c-8.19,2.129-14.286,9.519-14.286,18.371c0,10.505,8.543,19.048,19.048,19.048c10.505,0,19.048-8.543,19.048-19.048
                    c0-8.852-6.095-16.243-14.286-18.371v-38.771h28.573V123.81H228.572z M57.144,209.523v19.048H9.524v-19.048H57.144z
                    M9.524,152.381v-19.048h47.619v19.048H9.524z M147.62,42.857c10.505,0,19.048,8.543,19.048,19.048
                    c0,5.957-2.781,11.476-7.633,15.143l-1.89,1.424v7.243h-4.762v-10.4c5.529-1.971,9.524-7.21,9.524-13.41
                    c0-7.876-6.41-14.286-14.286-14.286c-7.876,0-14.286,6.41-14.286,14.286c0,6.2,3.995,11.438,9.524,13.41v10.4h-4.762v-7.243
                    l-1.89-1.429c-4.852-3.662-7.633-9.181-7.633-15.138C128.571,51.4,137.115,42.857,147.62,42.857z M152.381,61.905
                    c0,2.629-2.138,4.762-4.762,4.762c-2.624,0-4.762-2.134-4.762-4.762c0-2.629,2.138-4.762,4.762-4.762
                    C150.243,57.143,152.381,59.276,152.381,61.905z M135.714,100c-1.314,0-2.381-1.071-2.381-2.381s1.067-2.381,2.381-2.381h23.81
                    c1.314,0,2.381,1.071,2.381,2.381S160.839,100,159.524,100H135.714z M161.906,266.666c5.252,0.001,9.524,4.272,9.524,9.524
                    s-4.271,9.524-9.524,9.524h-28.571c-5.252,0-9.524-4.271-9.524-9.524c0-5.252,4.271-9.524,9.524-9.524H161.906z M171.43,209.523
                    v19.048h-47.619v-19.048H171.43z M147.62,151.819l-17.924-8.962l17.924-8.962l17.924,8.962L147.62,151.819z M271.43,219.048
                    c0,5.252-4.271,9.524-9.524,9.524s-9.524-4.271-9.524-9.524c0-5.253,4.271-9.524,9.524-9.524S271.43,213.795,271.43,219.048z
                    M285.714,152.381h-47.619v-19.048h0h47.619V152.381z"/>
                  <path fill="#00CF68" d="M85.714,28.571c6.2,0,11.438-3.995,13.41-9.524H117.6c-12.271,8.624-20.69,22.353-22.119,38.096h-9.767v28.571h28.571
                    V57.143h-9.243c2.381-21.395,20.557-38.095,42.576-38.095c22.019,0,40.2,16.7,42.576,38.095h-9.243v28.571h28.571V57.143h-9.767
                    c-1.429-15.743-9.843-29.471-22.119-38.095h18.476c1.971,5.529,7.21,9.524,13.41,9.524c7.876,0,14.286-6.41,14.286-14.286
                    C223.809,6.41,217.401,0,209.524,0c-6.2,0-11.438,3.995-13.41,9.524h-96.99C97.152,3.995,91.915,0,85.714,0
                    c-7.876,0-14.286,6.41-14.286,14.286C71.428,22.162,77.839,28.571,85.714,28.571z M104.763,76.19h-9.524v-9.524h9.524V76.19z
                    M190.477,66.666h9.524v9.524h-9.524V66.666z M209.524,9.524c2.624,0,4.762,2.133,4.762,4.762c0,2.629-2.138,4.762-4.762,4.762
                    c-2.624,0-4.762-2.133-4.762-4.762C204.763,11.657,206.901,9.524,209.524,9.524z M85.714,9.524c2.624,0,4.762,2.133,4.762,4.762
                    c0,2.629-2.138,4.762-4.762,4.762c-2.624,0-4.762-2.133-4.762-4.762C80.953,11.657,83.091,9.524,85.714,9.524z"/>
                </g>
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
              <span class="text-3xl text-[#ffcb0a] font-bold">XR Application Production Process</span>
            </h2>
            <p class="sm:text-xl xl:text-xl block my-4 ml-6 text-left">
                <span class={brightnessMode === "LIGHT" ? lightText : darkText}>
                  Navigating the XR landscape can be complex. Paradigm XR guides you from initial concept to a polished launch, combining your vision with our deep XR expertise to create immersive experiences that solve real-world challenges.
                </span>
            </p>
        </div>
      </div>
    </section>

    <!-- 1. Ideation -->
    <section data-current-section="s2">
      <div id="section-2" class={brightnessMode === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-3/5 mx-auto lg:flex flex-row gap-10">
          <div class="w-full lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <h2 class={brightnessMode === "LIGHT" ? lightText : darkText}>
              <span class="text-5xl font-bold">01. Ideation</span>
            </h2>
            <p class="sm:text-xl xl:text-xl block my-4 ml-6">
                <span class={brightnessMode === "LIGHT" ? lightText : darkText}>
                  Transform your XR vision into a tangible concept with Paradigm XR's collaborative ideation process. Our experienced team will work closely with you to explore your ideas, conduct thorough research, and validate your concept's potential in the market.
                </span>
            </p>
          </div>
          <div class="w-11/12 lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <div class="h-full w-full">
              <div class="h-full w-1/2 mx-auto">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                  viewBox="0 0 513.856 513.855"
                  xml:space="preserve">
                  <g>
                    <g>
                      <!-- Outer Path -->
                      <path fill="#ffffff80" d="M302.37,0.179C179.871-4.066,51.109,67.132,62.235,204.885c0.292,9.6,11.341,52.496-31.806,87.397
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
      </div>
    </section>
    
    <!-- 2. Define the Scope -->
    <section data-current-section="s3">
      <div id="section-3" class={brightnessMode === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-3/5 mx-auto lg:flex flex-row gap-10">
          <div class="w-full lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <h2 class={brightnessMode === "LIGHT" ? lightText : darkText}>
              <span class="text-5xl font-bold">02. Define Scope</span>
            </h2>
            <p class="sm:text-xl xl:text-xl block my-4 ml-6">
                <span class={brightnessMode === "LIGHT" ? lightText : darkText}>
                  Every XR project needs a clear roadmap to guide its development. Paradigm XR collaborates closely with you to define the scope of your XR experience, including feature sets, target platforms (iOS, Android, Meta Quest), and a realistic timeline to ensure a successful launch.                </span>
            </p>
          </div>
          <div class="w-11/12 lg:w-2/4 mx-auto bg-[#9999990] content-center">       
            <div class="h-full w-1/2 mx-auto">
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 415.881 415.881"
                xml:space="preserve">
              <g>
                <g>
                    <!-- Inner Circle -->
                    <path fill="#ffcb0a" d="M179.641,189.565c2.455,0,4.869,0.193,7.223,0.561l36.999-36.998c-13.193-7.048-28.249-11.051-44.221-11.051
                    c-51.92,0-94.162,42.241-94.162,94.162c0,51.921,42.242,94.162,94.162,94.162s94.161-42.241,94.161-94.162
                    c0-15.973-4.002-31.027-11.051-44.22l-36.997,36.999c0.367,2.354,0.56,4.766,0.56,7.222c0,25.736-20.937,46.674-46.672,46.674
                    c-25.736,0-46.674-20.938-46.674-46.674S153.905,189.565,179.641,189.565z"/>

                    <!-- Outer Circle -->
                    <path fill="#ffffff80" d="M290.454,164.316c13.488,20.712,21.338,45.417,21.338,71.922c0,72.87-59.281,132.153-132.15,132.153
                    c-72.869,0-132.153-59.283-132.153-132.152s59.283-132.153,132.152-132.153c26.508,0,51.211,7.851,71.924,21.34l34.104-34.104
                    c-29.738-21.817-66.402-34.724-106.027-34.724c-99.055,0-179.641,80.587-179.641,179.641c0,99.054,80.586,179.642,179.641,179.642
                    c99.054,0,179.638-80.588,179.638-179.642c0-39.626-12.904-76.29-34.721-106.026L290.454,164.316z"/>

                    <!-- Arrow -->
                    <path fill="#00CF68" d="M415.415,56.64c-1.119-3.539-4.119-6.157-7.775-6.793l-35.449-6.157l-6.156-35.45c-0.637-3.656-3.256-6.655-6.793-7.774
                    c-3.537-1.122-7.402-0.178-10.027,2.447l-27.412,27.411c-1.863,1.864-2.91,4.393-2.912,7.029l0.002,40.896l-148.1,148.096
                    c-5.176,5.177-5.176,13.566,0,18.743c5.178,5.175,13.568,5.177,18.744,0L337.632,96.991h40.896c2.635,0,5.164-1.047,7.027-2.911
                    l27.412-27.413C415.593,64.044,416.536,60.177,415.415,56.64z"/>
                </g>
              </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. UI/UX Design -->
    <section data-current-section="s4">
      <div id="section-4" class={brightnessMode === "LIGHT" ? lightBG : darkBG}>
        <div class="md:w-4/5 lg:w-3/5 mx-auto lg:flex flex-row gap-10">
          <div class="w-full lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <h2 class={brightnessMode === "LIGHT" ? lightText : darkText}>
              <span class="text-5xl font-bold">03. UI/UX Design</span>
            </h2>
            <p class="sm:text-xl xl:text-xl block my-4 ml-6">
                <span class={brightnessMode === "LIGHT" ? lightText : darkText}>
                  <b>We prioritize user experience in every XR project.</b> Paradigm XR's designers meticulously craft intuitive interfaces and engaging interactions, ensuring your XR application is both user-friendly and visually captivating.                
                </span>
            </p>
          </div>
          <div class="w-11/12 lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <div class="h-full w-1/2 mx-auto">
              <svg viewBox="0 0 375 334" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="375" height="334" />
                <g fill="#ffffff80" clip-path="url(#clip0_363_494)">
                <path d="M75.5 75.3333L75.0125 75.3625C74.0824 75.4722 73.2164 75.892 72.5542 76.5542C71.892 77.2164 71.4722 78.0824 71.3625 79.0125L71.3333 79.5V104.5H29.6583C28.5584 104.502 27.5026 104.068 26.7229 103.292C25.9431 102.516 25.5033 101.462 25.5 100.363V33.6375C25.5 31.3542 27.3542 29.5 29.6375 29.5H96.3625C98.6458 29.5 100.5 31.3625 100.5 33.6625V75.3333H75.5ZM100.5 83.6667L79.6667 104.488V83.6667H100.5Z"/>
                </g>
                <g fill="#ffffff80">
                <path d="M75.5 175.333L75.0125 175.363C74.0824 175.472 73.2164 175.892 72.5542 176.554C71.892 177.216 71.4722 178.082 71.3625 179.013L71.3333 179.5V204.5H29.6583C28.5584 204.502 27.5026 204.068 26.7229 203.292C25.9431 202.516 25.5033 201.462 25.5 200.363V133.638C25.5 131.354 27.3542 129.5 29.6375 129.5H96.3625C98.6458 129.5 100.5 131.363 100.5 133.663V175.333H75.5ZM100.5 183.667L79.6667 204.488V183.667H100.5Z"/>
                </g>
                <g fill="#ffffff80">
                <path d="M75.5 275.333L75.0125 275.363C74.0824 275.472 73.2164 275.892 72.5542 276.554C71.892 277.216 71.4722 278.082 71.3625 279.013L71.3333 279.5V304.5H29.6583C28.5584 304.502 27.5026 304.068 26.7229 303.292C25.9431 302.516 25.5033 301.462 25.5 300.363V233.638C25.5 231.354 27.3542 229.5 29.6375 229.5H96.3625C98.6458 229.5 100.5 231.363 100.5 233.663V275.333H75.5ZM100.5 283.667L79.6667 304.488V283.667H100.5Z"/>
                </g>
                <g fill="#ffcb0a">
                <path d="M200.5 75.3333L200.012 75.3625C199.082 75.4722 198.216 75.892 197.554 76.5542C196.892 77.2164 196.472 78.0824 196.362 79.0125L196.333 79.5V104.5H154.658C153.558 104.502 152.503 104.068 151.723 103.292C150.943 102.516 150.503 101.462 150.5 100.363V33.6375C150.5 31.3542 152.354 29.5 154.637 29.5H221.362C223.646 29.5 225.5 31.3625 225.5 33.6625V75.3333H200.5ZM225.5 83.6667L204.667 104.488V83.6667H225.5Z"/>
                </g>
                <g fill="#ffcb0a">
                <path d="M200.5 175.333L200.012 175.363C199.082 175.472 198.216 175.892 197.554 176.554C196.892 177.216 196.472 178.082 196.362 179.013L196.333 179.5V204.5H154.658C153.558 204.502 152.503 204.068 151.723 203.292C150.943 202.516 150.503 201.462 150.5 200.363V133.638C150.5 131.354 152.354 129.5 154.637 129.5H221.362C223.646 129.5 225.5 131.363 225.5 133.663V175.333H200.5ZM225.5 183.667L204.667 204.488V183.667H225.5Z"/>
                </g>
                <g fill="#ffcb0a">
                <path d="M200.5 275.333L200.012 275.363C199.082 275.472 198.216 275.892 197.554 276.554C196.892 277.216 196.472 278.082 196.362 279.013L196.333 279.5V304.5H154.658C153.558 304.502 152.503 304.068 151.723 303.292C150.943 302.516 150.503 301.462 150.5 300.363V233.638C150.5 231.354 152.354 229.5 154.637 229.5H221.362C223.646 229.5 225.5 231.363 225.5 233.663V275.333H200.5ZM225.5 283.667L204.667 304.488V283.667H225.5Z"/>
                </g>
                <g fill="#00CF68">
                <path d="M325.5 75.3333L325.012 75.3625C324.082 75.4722 323.216 75.892 322.554 76.5542C321.892 77.2164 321.472 78.0824 321.362 79.0125L321.333 79.5V104.5H279.658C278.558 104.502 277.503 104.068 276.723 103.292C275.943 102.516 275.503 101.462 275.5 100.363V33.6375C275.5 31.3542 277.354 29.5 279.637 29.5H346.362C348.646 29.5 350.5 31.3625 350.5 33.6625V75.3333H325.5ZM350.5 83.6667L329.667 104.488V83.6667H350.5Z"/>
                </g>
                <g fill="#00CF68">
                <path d="M325.5 175.333L325.012 175.363C324.082 175.472 323.216 175.892 322.554 176.554C321.892 177.216 321.472 178.082 321.362 179.013L321.333 179.5V204.5H279.658C278.558 204.502 277.503 204.068 276.723 203.292C275.943 202.516 275.503 201.462 275.5 200.363V133.638C275.5 131.354 277.354 129.5 279.637 129.5H346.362C348.646 129.5 350.5 131.363 350.5 133.663V175.333H325.5ZM350.5 183.667L329.667 204.488V183.667H350.5Z"/>
                </g>
                <g fill="#00CF68">
                <path d="M325.5 275.333L325.012 275.363C324.082 275.472 323.216 275.892 322.554 276.554C321.892 277.216 321.472 278.082 321.362 279.013L321.333 279.5V304.5H279.658C278.558 304.502 277.503 304.068 276.723 303.292C275.943 302.516 275.503 301.462 275.5 300.363V233.638C275.5 231.354 277.354 229.5 279.637 229.5H346.362C348.646 229.5 350.5 231.363 350.5 233.663V275.333H325.5ZM350.5 283.667L329.667 304.488V283.667H350.5Z"/>
                </g>
                <defs>
                <clipPath id="clip0_363_494">
                <rect width="100" height="100" fill="#ffffff80" transform="translate(13 17)"/>
                </clipPath>
                <clipPath id="clip1_363_494">
                <rect width="100" height="100" fill="#ffffff80" transform="translate(13 117)"/>
                </clipPath>
                <clipPath id="clip2_363_494">
                <rect width="100" height="100" fill="#ffffff80" transform="translate(13 217)"/>
                </clipPath>
                <clipPath id="clip3_363_494">
                <rect width="100" height="100" fill="#ffffff80" transform="translate(138 17)"/>
                </clipPath>
                <clipPath id="clip4_363_494">
                <rect width="100" height="100" fill="#ffffff80" transform="translate(138 117)"/>
                </clipPath>
                <clipPath id="clip5_363_494">
                <rect width="100" height="100" fill="#ffffff80" transform="translate(138 217)"/>
                </clipPath>
                <clipPath id="clip6_363_494">
                <rect width="100" height="100" fill="#ffffff80" transform="translate(263 17)"/>
                </clipPath>
                <clipPath id="clip7_363_494">
                <rect width="100" height="100" fill="#ffffff80" transform="translate(263 117)"/>
                </clipPath>
                <clipPath id="clip8_363_494">
                <rect width="100" height="100" fill="#ffffff80" transform="translate(263 217)"/>
                </clipPath>
                </defs>
                </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Development -->
    <section data-current-section="s5">
      <div id="section-5" class={brightnessMode === "LIGHT" ? lightBG : darkBG}>      
        <div class="md:w-4/5 lg:w-3/5 mx-auto lg:flex flex-row gap-10">
          <div class="w-full lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <h2 class={brightnessMode === "LIGHT" ? lightText : darkText}>
              <span class="text-5xl font-bold">04. Development</span>
            </h2>
            <p class="sm:text-xl xl:text-xl block my-4 ml-6">
                <span class={brightnessMode === "LIGHT" ? lightText : darkText}>
                  We bring your XR vision to life with meticulous attention to detail and user experience. Our skilled developers create immersive and engaging applications for iOS, Android, and Meta Quest, ensuring smooth performance and intuitive interactions. We also offer full-stack web development to seamlessly integrate your XR experience with a user-friendly web app if needed.                
                </span>
            </p>
          </div>
          <div class="w-11/12 lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <div class="h-full w-1/2 mx-auto">
              <svg viewBox="-0.95 0 117.858 117.858" xmlns="http://www.w3.org/2000/svg">

                <g transform="translate(-33.522 -376.821)"> 
                 <!-- Body -->
                <path d="M62.649,430.7a18.075,18.075,0,0,0,2.809,8.7l5.192,8.124a19.482,19.482,0,0,0,16.415,8.991h8.869a19.481,19.481,0,0,0,16.415-8.991l5.193-8.124a18.084,18.084,0,0,0,2.808-8.7" fill="#ffffff80" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                <path d="M62.85,399.275a24.227,24.227,0,0,1,24.018-20.954h9.273a24.226,24.226,0,0,1,24.009,20.954" fill="#ffffff80" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                <path d="M75.65,452.923v9.79a4.222,4.222,0,0,1-2.755,3.958l-29.946,11.1a12.148,12.148,0,0,0-7.927,11.391v4.021H147.978v-4.021a12.148,12.148,0,0,0-7.927-11.391l-29.946-11.1a4.222,4.222,0,0,1-2.755-3.958v-9.79" fill="#ffffff80" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>

                <!-- VR Headset -->
                <path d="M57.446,402.162v25.429a2.891,2.891,0,0,0,2.639,2.88l16.157,1.414a6.482,6.482,0,0,0,5.263-1.993l6.588-6.934a4.7,4.7,0,0,1,6.814,0l6.588,6.934a6.48,6.48,0,0,0,5.263,1.993l16.157-1.414a2.891,2.891,0,0,0,2.639-2.88V402.162a2.892,2.892,0,0,0-2.891-2.891H60.337A2.891,2.891,0,0,0,57.446,402.162Z" fill="none" stroke="#00CF68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>             
                <path d="M115,405.281H68a3.087,3.087,0,1,0,0,6.175H115a3.087,3.087,0,1,0,0-6.175Z" fill="none" stroke="#ffcb0a" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>   
                <path d="M53.432,408.369a.518.518,0,0,0-.518.518V422.9a.518.518,0,0,0,.518.518h4.014V408.369Z" fill="#00CF68" stroke="#00CF68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>            
                <path d="M129.568,423.422a.518.518,0,0,0,.518-.518V408.887a.518.518,0,0,0-.518-.518h-4.014v15.053Z" fill="#00CF68" stroke="#00CF68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                </g>
                
                </svg>
            </div>
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
              <span class="text-5xl font-bold">05. Launch</span>
            </h2>
            <p class="sm:text-xl xl:text-xl block my-4 ml-6">
                <span class={brightnessMode === "LIGHT" ? lightText : darkText}>
                  Launching your XR experience is a crucial step, and Paradigm XR is here to guide you. We'll help you prepare your marketing materials, optimize your app store presence, and ensure a smooth launch on iOS, Android, and Meta Quest platforms.                </span>
            </p>
          </div>
          <div class="w-11/12 lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <div class="h-full w-1/2 mx-auto">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 512 512" xml:space="preserve">
              <polygon style="fill:#00CF68;" points="121.796,269.608 73.119,344.219 167.78,438.881 242.391,390.203 "/>
              <polygon style="fill:#00CF68;" points="403.094,264.221 247.778,108.905 110.445,130.358 25.05,215.753 136.255,220.429 
                291.571,375.745 296.246,486.95 381.641,401.555 "/>
              <path style="fill:#CCC4C1;" d="M504.825,7.176c-91.794-25.474-177.32,22.004-217.459,62.143
                c-11.993,11.992-191.31,191.309-191.31,191.309l155.316,155.316c0,0,162.336-162.336,191.309-191.309
                C482.819,184.496,530.298,98.969,504.825,7.176z"/>
              <path style="fill:#00CF68;" d="M152.269,359.731c-4.628-4.628-4.628-12.133,0-16.761l164.787-164.787
                c4.628-4.628,12.133-4.628,16.761,0c4.628,4.628,4.628,12.133,0,16.761L169.03,359.731
                C164.401,364.359,156.897,364.36,152.269,359.731z"/>
              <circle style="fill:#ffffff80;" cx="403.105" cy="108.895" r="43.796"/>

              <!-- Fire -->
              <g>
                <path style="fill:#ffcb0a;" d="M3.471,432.083c-4.628-4.628-4.628-12.133,0-16.761l45.234-45.234
                  c4.628-4.628,12.133-4.628,16.761,0c4.628,4.628,4.628,12.133,0,16.761l-45.234,45.234C15.604,436.711,8.099,436.712,3.471,432.083
                  z"/>
                <path style="fill:#ffcb0a;" d="M79.917,508.528c-4.628-4.628-4.628-12.133,0-16.761l45.234-45.234
                  c4.628-4.628,12.133-4.628,16.761,0s4.628,12.133,0,16.761l-45.234,45.234C92.049,513.157,84.545,513.157,79.917,508.528z"/>
                <path style="fill:#ffcb0a;" d="M22.632,487.679c-4.628-4.628-4.628-12.133,0-16.761l63.45-63.45c4.628-4.628,12.133-4.628,16.761,0
                  c4.628,4.628,4.628,12.133,0,16.761l-63.45,63.45C34.765,492.307,27.261,492.307,22.632,487.679z"/>
              </g>
              </svg>
            </div>
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
              <span class="text-5xl font-bold">06. Maintenance</span>
            </h2>
            <p class="sm:text-xl xl:text-xl block my-4 ml-6">
                <span class={brightnessMode === "LIGHT" ? lightText : darkText}>
                  Launching your XR experience is just the beginning. Paradigm XR offers strategic guidance and support to help you scale your project, analyze user data, and optimize your XR application for continued growth and success in the dynamic XR market.                </span>
            </p>
          </div>
          <div class="w-11/12 lg:w-2/4 mx-auto bg-[#9999990] content-center">
            <div class="h-full w-1/2 mx-auto">
              <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 32 32" xml:space="preserve">
              <style type="text/css">
                .st0{fill:none;stroke:#00CF68;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10; z-index:999;}
                .st1{fill:none;stroke:#ffcb0a;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}
                .st2{fill:none;stroke:#ffffff;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;}
              </style>
            
              <path class="st1" d="M18.9,16.1l2.7-2.7c1.9,0.7,4.2,0.4,5.7-1.2c1.5-1.5,1.9-3.8,1.2-5.7l-2.6,2.6l-2.4-0.6l-0.6-2.4l2.6-2.6
                c-1.9-0.7-4.2-0.4-5.7,1.2c-1.5,1.5-1.9,3.8-1.2,5.7l-2.7,2.7"/>
              <path class="st1" d="M12.7,16.3l-2.3,2.3c-1.9-0.7-4.2-0.4-5.7,1.2c-1.5,1.5-1.9,3.8-1.2,5.7l2.6-2.6l2.4,0.6l0.6,2.4l-2.6,2.6
                c1.9,0.7,4.2,0.4,5.7-1.2c1.5-1.5,1.9-3.8,1.2-5.7l2.4-2.4"/>
                <path class="st0" d="M27.8,28.2L27.8,28.2c-1.3,1.3-3.3,1.3-4.6,0L17,22l4.6-4.6l6.2,6.2C29.1,24.8,29.1,26.9,27.8,28.2z"/>
                <polygon class="st0" points="6.2,3.5 3.2,6.6 5.5,10.5 9.3,12.8 17.8,21.3 20.9,18.2 12.4,9.7 10.1,5.8 "/>
              </svg>
            </div>
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
          <div class="inline-block mx-auto p-2 border border-[#ffcb0a] bg-[#ffcb0a]/20 text-xl">
            <h1 class={brightnessMode === "LIGHT" ? lightText : darkText}>Connect with us for a Free Consultation!</h1>
          </div>
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
  