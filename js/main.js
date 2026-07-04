(() => {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const toast = document.querySelector(".toast");
  const toastMessage = toast?.querySelector(".toast__message");
  let toastTimer;

  const showToast = (message) => {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
  };

  // Os endereços vivem no HTML. Cada data-link recebe sua variável correspondente.
  document.querySelectorAll("[data-link]").forEach((anchor) => {
    const variable = document.querySelector(`meta[name="social-link-${anchor.dataset.link}"]`);
    const url = variable?.getAttribute("content")?.trim();
    if (url) anchor.setAttribute("href", url);
  });

  // Evita que dados de demonstração levem o visitante para destinos errados.
  const isPlaceholderLink = (anchor) => {
    const href = anchor.getAttribute("href")?.trim() || "";
    if (!href || href === "#" || href.includes("5500000000000")) return true;

    try {
      const url = new URL(href, window.location.href);
      const emptyProfiles = ["instagram.com", "www.instagram.com", "facebook.com", "www.facebook.com"];
      return emptyProfiles.includes(url.hostname) && (url.pathname === "/" || url.pathname === "");
    } catch {
      return true;
    }
  };

  document.querySelectorAll("a[href]").forEach((anchor) => {
    if (!isPlaceholderLink(anchor)) return;
    anchor.classList.add("is-placeholder");
    anchor.setAttribute("aria-disabled", "true");
    anchor.title = "Link aguardando configuração";
    anchor.addEventListener("click", (event) => {
      event.preventDefault();
      const label = anchor.dataset.channel || anchor.getAttribute("aria-label") || anchor.querySelector("strong")?.textContent?.trim() || "Este canal";
      showToast(`${label} ainda não foi configurado. Edite o link no index.html.`);
    });
  });

  const revealItems = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
  }

  // Microinteração visual: não interfere na abertura dos links.
  document.querySelectorAll(".link-card").forEach((card) => {
    card.addEventListener("pointerdown", (event) => {
      if (reducedMotion) return;
      const rect = card.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.2;
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
      card.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
    });
  });
})();
