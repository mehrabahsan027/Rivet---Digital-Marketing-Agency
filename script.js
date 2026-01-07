


const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');

// Open menu → hide hamburger
hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  hamburger.style.display = 'none';  // ← This hides it
});

// Close menu → show hamburger again
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  hamburger.style.display = 'block';  // ← This shows it again
});

// Optional: close menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    hamburger.style.display = 'block';
  });
});



let h1 = document.querySelector('#hero-heading')
let headingText = h1.textContent
let splittedText = headingText.split('')

let textConnect = ""

splittedText.forEach(function (elem) {

  textConnect += `<span>${elem}</span>`

})

h1.innerHTML = textConnect


document.getElementById('current-year').textContent = new Date().getFullYear();





document.addEventListener("DOMContentLoaded", (event) => {





  // Initialize Lenis smooth scroll
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  })

  // Get scroll value for GSAP ScrollTrigger
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  // Integrate Lenis with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

  // Handle anchor links with Lenis smooth scroll

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href')
      if (href !== '#' && href !== '') {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          lenis.scrollTo(target, {
            offset: -100,
            duration: 3
          })
        }
      }
    })
  })

 



  gsap.from('#companies', {
    scrollTrigger: '#companies', // start animation when "#companies" enters the viewport
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: 'power2.out'
  });


  // out story 

  gsap.timeline({
    scrollTrigger: {
      trigger: "#our-story",
      start: "top 80%",     // Animation starts when the top of the section hits 80% from the top of the viewport
      end: "bottom 90%",
      scrub: 1,
      
    }
  })
    .from("#our-story .container ", {
      y: -50,




      duration: 1,
      ease: "power3.out",
      stagger: 0.2
    })
    .from("#our-story h4", {

      x: 30,


      duration: 0.8,
      ease: "power3.out"
    }, "-=0.8")  // Overlap with previous
    .from("#our-story p", {
      x: 30,

      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15   // Nice staggered reveal for paragraphs
    }, "-=0.6");



    // contact

 gsap.from("#contact h2", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out"
    });

    // Subtle fade-in for info section
    gsap.from(".info", {
        scrollTrigger: {
            trigger: ".info",
            start: "top 85%",
        },
        opacity: 0,
        y: 15,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2
    });

    // Subtle fade-in for form section
    gsap.from(".form-div", {
        scrollTrigger: {
            trigger: ".form-div",
            start: "top 85%",
        },
        opacity: 0,
        y: 15,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3
    });

    // Minimal hover effect for social icons
    document.querySelectorAll('.social a').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                y: -3,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // Minimal button hover effect
    const button = document.querySelector('button');
    
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            y: -2,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });





  let mm = gsap.matchMedia();

  let gtl = gsap.timeline()

  gsap.to('.container  .elem', {

    opacity: 1,
    duration: 0.8,
    delay: 1,

    stagger: 1,



    ease: "power2.out",
    scrollTrigger: {
      trigger: '.elem',







    }
  });







  mm.add("(min-width: 800px)", () => {



    gtl.from('.logo', {
      x: 500,
      y: 500,


      opacity: 0,
      delay: 0.3,

      scale: 5,
      duration: 2,
      ease: 'circ'
    })
    gtl.from('.navbar', {
      opacity: 0,
      duration: 0.6

    }, '=-1')
    gtl.from('#hero-heading span', {
      y: 40,
      opacity: 0,
      duration: 0.3,




      stagger: 0.1
    }, '=-1')
    gtl.from('.text p', {
      y: 30,
      opacity: 0,
      duration: 0.3
    })
    gtl.from('.image', {
      opacity: 0
    })
    gtl.from('.text .button-div', {
      y: 20,
      opacity: 0,  // ← Correct spelling
      duration: 0.6,  // Recommended: add a duration for smoother control
      ease: 'power2.out'
    })


    let servicestl = gsap.timeline({
      scrollTrigger: {
        trigger: "#services",
        start: "top 80%",



      }
    });

    servicestl.from("#services .services-heading-para h3", {
      x: -300,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power2.out"
    })
      .from("#services .services-heading-para p", {
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      }, "-=0.8")

















  });


  // for tablet and mobile

  mm.add("(max-width:799px)", () => {

    let gtlMobile = gsap.timeline()

    gtlMobile.from('.logo', {
      x: 250,
      y: 250,
      opacity: 0,


      scale: 3,
      duration: 2,

    })
   
    gtlMobile.from('#hero-heading span', {
      y: 40,
      opacity: 0,
      duration: 0.3,




      stagger: 0.1
    }, '=-1')
    gtlMobile.from('.text p', {
      y: 30,
      opacity: 0,
      duration: 0.3
    })
    gtlMobile.from('.hero .text .button-div', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    })
    gtlMobile.from('.hero .image', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    })

  })
  




});