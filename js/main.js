document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section-anchor");
  const navLinks = document.querySelectorAll("[data-nav-link]");

  const sectionMap = new Map();
  navLinks.forEach((link) => {
    const targetId = link.getAttribute("href")?.replace("#", "");
    if (targetId) {
      sectionMap.set(targetId, link);
    }
  });

  const setActiveLink = (id) => {
    navLinks.forEach((link) => link.classList.remove("active"));
    const activeLink = sectionMap.get(id);
    if (activeLink) activeLink.classList.add("active");
  };

  if (sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0.1
      }
    );

    sections.forEach((section) => observer.observe(section));
    setActiveLink(sections[0].id);
  }

  const beforeAfterModules = document.querySelectorAll("[data-before-after]");
  beforeAfterModules.forEach((module) => {
    const slider = module.querySelector("[data-before-after-slider]");
    const afterLayer = module.querySelector("[data-after-layer]");
    const divider = module.querySelector("[data-divider-line]");

    if (!slider || !afterLayer || !divider) return;

    const updateSplit = () => {
      const value = Number(slider.value);
      afterLayer.style.width = `${value}%`;
      divider.style.left = `${value}%`;
    };

    slider.addEventListener("input", updateSplit);
    updateSplit();
  });
});
