// =============================================================================
// AUTO ATELIER — UI
// - Mobile nav toggle
// - Reveal on scroll (IntersectionObserver)
// =============================================================================

document.addEventListener("DOMContentLoaded", () => {
  // ---------------------------
  // Mobile navigation
  // ---------------------------
  const nav = document.querySelector("nav");
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("navMenu");

  if (nav && toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu on link click
    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---------------------------
  // Reveal on scroll
  // ---------------------------
  const revealItems = document.querySelectorAll(".reveal");

  if (revealItems.length) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    revealItems.forEach((el) => observer.observe(el));
  }
});
