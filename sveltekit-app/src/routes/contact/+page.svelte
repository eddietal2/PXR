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

<main class={$brightnessModelStore === "LIGHT" ? lightBGFooter : darkBGFooter} >
    <!-- Contact Us -->
    <section class="h-screen">
        <div class="md:w-4/5 lg:w-full mx-auto mb-8">
        <!-- Header -->
        <div class="text-center content-center mt-10 mx-4 sm:mx-0">
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
    </section>
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

  /* Contact Form */
  input:focus, textarea:focus {
    border: 2px solid #999;
  }
 
  
  
</style>
  