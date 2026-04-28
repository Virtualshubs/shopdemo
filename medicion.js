(function () {

  // 🔒 helper seguro (no rompe si gtag no existe)
  function track(event, params = {}) {
    if (typeof gtag === "function") {
      gtag('event', event, params);
    }
  }

  function getCardData(card) {
    return {
      scene: card?.dataset.scene || "",
      title: card?.querySelector(".card-title")?.textContent || "",
      price: card?.querySelector(".card-price")?.textContent || ""
    };
  }

  let lastScene = null;
  let sceneStartTime = null;

  /* =========================
     SCENE LOAD (hook VH.init)
  ========================= */

  if (window.VH && typeof window.VH.init === "function") {

    const originalInit = window.VH.init;

    window.VH.init = function (options) {

      const container = document.getElementById(options.containerId);
      const scene = container?.dataset.scene;

      // tiempo en escena anterior
      if (lastScene && sceneStartTime) {
        const duration = Math.round((Date.now() - sceneStartTime) / 1000);

        track("scene_time", {
          scene_id: lastScene,
          duration
        });
      }

      sceneStartTime = Date.now();
      lastScene = scene;

      track("scene_load", {
        scene_id: scene
      });

      return originalInit.apply(this, arguments);
    };
  }

  /* =========================
     CLICK CARDS
  ========================= */

  document.addEventListener("click", (e) => {

    const card = e.target.closest("[data-scene]");
    if (!card) return;

    const data = getCardData(card);

    if (e.target.classList.contains("vh-add-to-cart")) {
      track("add_to_cart_click", data);
      return;
    }

    track("product_click", data);
  });

  /* =========================
     SEARCH
  ========================= */

  const searchInput = document.querySelector(".search input");

  if (searchInput) {
    let timeout;

    searchInput.addEventListener("input", (e) => {

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        const query = e.target.value.trim();
        if (!query) return;

        track("search", { query });
      }, 500);
    });
  }

  /* =========================
     EXPLORE BUTTON
  ========================= */

  const exploreBtn = document.getElementById("explore-btn");

  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      track("explore_click");
    });
  }

  /* =========================
     SLIDER
  ========================= */

  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.addEventListener("click", () => {
      track("hero_slide_click", { slide_index: i });
    });
  });

  /* =========================
     VIEWER VISIBILITY
  ========================= */

  let viewerSeen = false;

  window.addEventListener("scroll", () => {
    if (viewerSeen) return;

    const viewer = document.querySelector("#vh-main-container");
    if (!viewer) return;

    const rect = viewer.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      viewerSeen = true;
      track("viewer_seen");
    }
  });

})();
