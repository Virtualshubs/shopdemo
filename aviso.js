(function () {

  let analyticsEnabled = false;

  function track(event, params = {}) {
    if (!analyticsEnabled) return;

    if (typeof gtag === "function") {
      gtag('event', event, params);
    }
  }

  function showConsentModal() {

    const overlay = document.createElement("div");

    overlay.innerHTML = `
      <div class="vh-cookie-overlay">
        <div class="vh-cookie-modal">

          <h3>Analytics & Cookies</h3>

          <p>
            We use analytics to understand how users interact with this 3D experience.
            No personal data is collected or shared with third parties.
          </p>

          <div class="vh-cookie-actions">
            <button class="vh-cookie-accept">Accept</button>
            <button class="vh-cookie-reject">Reject</button>
          </div>

        </div>
      </div>
    `;

    const style = document.createElement("style");
    style.innerHTML = `
      .vh-cookie-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.6);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99999;
      }

      .vh-cookie-modal {
        background: #f1f1f1;
        color: #000;
        padding: 28px;
        max-width: 420px;
        width: 90%;
        border: 1px solid rgba(0,0,0,0.2);
        font-family: Arial, sans-serif;
      }

      .vh-cookie-modal h3 {
        margin-bottom: 12px;
        font-size: 16px;
      }

      .vh-cookie-modal p {
        font-size: 12px;
        line-height: 1.5;
        margin-bottom: 20px;
        opacity: 0.9;
      }

      .vh-cookie-actions {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
      }

      .vh-cookie-actions button {
        padding: 8px 12px;
        font-size: 12px;
        cursor: pointer;
        border: 1px solid black;
        background: white;
      }

      .vh-cookie-actions button:hover {
        opacity: 0.7;
      }
    `;

    document.head.appendChild(style);
    document.body.appendChild(overlay);

    const acceptBtn = overlay.querySelector(".vh-cookie-accept");
    const rejectBtn = overlay.querySelector(".vh-cookie-reject");

    acceptBtn.addEventListener("click", () => {
      analyticsEnabled = true;
      localStorage.setItem("vh_tracking", "accepted");
      overlay.remove();
    });

    rejectBtn.addEventListener("click", () => {
      analyticsEnabled = false;
      localStorage.removeItem("vh_tracking"); // 🔥 clave para re-preguntar
      overlay.remove();
    });
  }

  function initConsent() {

    const saved = localStorage.getItem("vh_tracking");

    if (saved === "accepted") {
      analyticsEnabled = true;
    } else {
      analyticsEnabled = false;
      showConsentModal();
    }
  }

  window.addEventListener("DOMContentLoaded", initConsent);

  window.VHAnalytics = { track };

})();
