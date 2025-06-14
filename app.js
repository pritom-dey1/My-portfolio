  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
  }
  document.querySelectorAll('#mobileMenu .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('active');
  });
});



document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const preloader = document.querySelector(".preloader");
  const counter = document.querySelector(".counter");
  const progressBar = document.querySelector(".progress-bar-fill");
  const content = document.querySelector(".content");
  const title = document.querySelector(".content h1");
  const paragraph = document.querySelector(".content p");
  const horizontalLines = document.querySelectorAll(".horizontal-line");
  const verticalLines = document.querySelectorAll(".vertical-line");
  const dots = document.querySelectorAll(".dot");
  const message = document.querySelector(".message");
  const particlesContainer = document.getElementById("particles-container");

  // Messages to display during loading
  const messages = [
    "Initializing",
    "Loading assets",
    "Preparing interface",
    "Almost ready",
    "Finalizing"
  ];

  // Create particles
  for (let i = 0; i < 30; i++) {
    createParticle();
  }

  function createParticle() {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    particle.style.left = `${x}%`;
    particle.style.top = `${y}%`;

    particlesContainer.appendChild(particle);
  }

  // Initialize GSAP timeline
  const tl = gsap.timeline();

  // Show counter
  tl.to(counter, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  })

    // Show message
    .to(
      message,
      {
        opacity: 0.7,
        duration: 1,
        ease: "power2.out"
      },
      "<"
    )

    // Animate horizontal lines
    .to(horizontalLines, {
      scaleX: 1,
      duration: 2,
      stagger: 0.2,
      ease: "power1.inOut",
      onComplete: function () {
        animateParticles();
      }
    })

    // Animate vertical lines
    .to(
      verticalLines,
      {
        scaleY: 1,
        duration: 2,
        stagger: 0.2,
        ease: "power1.inOut"
      },
      "-=1.8"
    )

    // Animate dots
    .to(dots, {
      opacity: 1,
      duration: 0.3,
      stagger: 0.1,
      ease: "power1.out"
    })

    // Animate loading progress
    .to(
      progressBar,
      {
        width: "100%",
        duration: 4,
        ease: "power1.inOut",
        onUpdate: function () {
          // Update counter based on progress
          const progress = Math.round(this.progress() * 100);
          counter.textContent = progress;

          // Update message based on progress
          updateMessage(progress);

          // Update colors based on progress
          updateColors(progress);
        }
      },
      "-=4"
    )

    // Transition to main content
    .to(preloader, {
      y: "-100vh",
      duration: 1.2,
      ease: "power3.inOut",
      delay: 0.8
    })
    .set(
      content,
      {
        visibility: "visible"
      },
      "<"
    )
    .to(
      content,
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      },
      "<0.3"
    )
    .to(
      [title, paragraph],
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      },
      "<0.2"
    )
    .set(preloader, {
      display: "none"
    });

  // Function to animate particles
  function animateParticles() {
    const particles = document.querySelectorAll(".particle");

    particles.forEach((particle) => {
      // Random movement
      const xMove = (Math.random() - 0.5) * 50;
      const yMove = (Math.random() - 0.5) * 50;
      const delay = Math.random() * 5;

      gsap.to(particle, {
        opacity: 0.7,
        duration: 0.5,
        delay: delay
      });

      gsap.to(particle, {
        x: xMove,
        y: yMove,
        duration: 10 + Math.random() * 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: delay
      });
    });
  }

  // Function to update message
  function updateMessage(progress) {
    const messageIndex = Math.min(
      Math.floor(progress / 25),
      messages.length - 1
    );
    const currentMessage = messages[messageIndex];

    if (message.textContent !== currentMessage) {
      gsap.to(message, {
        opacity: 0,
        duration: 0.5,
        onComplete: function () {
          message.textContent = currentMessage;
          gsap.to(message, {
            opacity: 0.7,
            duration: 0.5
          });
        }
      });
    }
  }

  // Function to update colors based on progress
  function updateColors(progress) {
    const stage = Math.min(Math.floor(progress / 25), 3);
    const colorStages = [
      { accent: "#163b28", bg: "#081a10" }, // Stage 1
      { accent: "#22543a", bg: "#0a1f13" }, // Stage 2
      { accent: "#2e6d4a", bg: "#0d2517" }, // Stage 3
      { accent: "#3a8558", bg: "#112c1c" } // Stage 4
    ];

    document.documentElement.style.setProperty(
      "--color-dark",
      colorStages[stage].bg
    );
    document.documentElement.style.setProperty(
      "--color-accent-3",
      colorStages[stage].accent
    );
  }
}); 







// document.addEventListener('contextmenu', event => event.preventDefault());

// document.addEventListener('keydown', function(e) {
//     if (e.key === "F12" || 
//         (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "C")) || 
//         (e.ctrlKey && e.key === "U")) {
//         e.preventDefault();
//     }
// });


  const sections = document.querySelectorAll("#about, #projects, #contact");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });




// EmailJS initialize with your User ID (Account Settings > API keys)
  emailjs.init("DWOrfNv1jS_lKep9k"); // Replace with your public key

  const form = document.getElementById("myForm");
  const button = document.getElementById("send-btn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    button.innerText = "Sending..."; // Optional: Loading state

    emailjs.sendForm("service_k3wvyl3", "template_k3jg1nr", this)
      .then(() => {
        button.innerText = "Got it! 👍 "; // Success
        button.disabled = true; // Optional: Prevent resubmit
      })
      .catch((error) => {
        button.innerText = "Failed ❌"; // Error
        console.error(error);
      });
  });


  setTimeout(() => {
  button.innerText = "Send";
  button.disabled = false;
  form.reset();
}, 5000); // Reset after 5s

 gsap.from(".hero_center",{
           y:100,
           filter: "blur(5px)",
           opacity:0,
            duration:1.5,
            delay:6.1,
            ease: "power4.inOut",
        })


  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
  }