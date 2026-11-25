/* Portfolio interactions — vanilla JavaScript */
(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".links");
  const progressBar = document.querySelector("#scroll-progress");
  const backToTop = document.querySelector(".back-to-top");

  // Accessible mobile navigation
  menuButton?.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuButton.textContent = isOpen ? "✕" : "☰";
  });
  navigation?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton?.setAttribute("aria-expanded", "false");
      if (menuButton) { menuButton.textContent = "☰"; menuButton.setAttribute("aria-label", "Open navigation"); }
    });
  });

  // Reading progress and back-to-top control
  const updateScrollUI = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    if (progressBar) progressBar.style.width = progress + "%";
    backToTop?.classList.toggle("show", window.scrollY > 450);
  };
  window.addEventListener("scroll", updateScrollUI, { passive: true });
  updateScrollUI();
  backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Reveal content as it enters the viewport
  const revealTargets = document.querySelectorAll(".section-head, .panel, .card, .contact-card, .fact, .timeline-item");
  revealTargets.forEach(element => element.classList.add("reveal"));
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(element => observer.observe(element));
  } else {
    revealTargets.forEach(element => element.classList.add("visible"));
  }

  // Filter project cards by their visible technology/category labels
  const filterButtons = document.querySelectorAll("[data-project-filter]");
  const projectCards = document.querySelectorAll("[data-project-category]");
  filterButtons.forEach(button => button.addEventListener("click", () => {
    const selected = button.dataset.projectFilter;
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    projectCards.forEach(card => {
      card.hidden = selected !== "all" && card.dataset.projectCategory !== selected;
    });
  }));

  // Footer year stays current without a manual yearly edit
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  // Copy contact email when the visitor chooses the copy control
  document.querySelectorAll("[data-copy-email]").forEach(button => {
    button.addEventListener("click", async () => {
      const email = button.dataset.copyEmail;
      try {
        await navigator.clipboard.writeText(email);
        const original = button.textContent;
        button.textContent = "Copied!";
        window.setTimeout(() => { button.textContent = original; }, 1600);
      } catch {
        window.location.href = "mailto:" + email;
      }
    });
  });
})();
