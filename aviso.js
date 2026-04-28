(function () {

  function createAnalyticsNotice() {

    const banner = document.createElement("div");

    banner.innerHTML = `
      <div class="vh-cookie-banner">
        <div class="vh-cookie-text">
          This website uses analytics to understand how users interact with the 3D experience.
          No personal data is collected or shared with third parties.
        </div>

        <button class="vh-cookie-btn">
          Got it
        </button>
      </div>
    `;

    const style = document.createElement("style");
    style.innerHTML = `
      .vh-cookie-banner{
        position: fixed;
        bottom: 20px;
        left: 20px;
        right: 20px;
        background: #0f0f0f;
        color: #fff;
        padding: 14px 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 99999;
        font-family: Arial, sans-serif;
        border: 1px solid rgba(255,255,255,0.1);
      }

      .vh-cookie-text{
        font-size: 12px;
        line-height: 1.4;
        opacity: 0.85;
        max-width: 80%;
      }

      .vh-cookie-btn{
        background: #fff;
        color: #000;
        border: none;
        padding: 8px 12px;
        font-size: 12px;
        cursor: pointer;
      }

      .vh-cookie-btn:hover{
        opacity: 0.8;
      }
    `;

    document.head.appendChild(style);
    document.body.appendChild(banner);

    banner.querySelector(".vh-cookie-btn").addEventListener("click", () => {
      banner.remove();
    });
  }

  // mostrar siempre al entrar (demo mode)
  window.addEventListener("DOMContentLoaded", createAnalyticsNotice);

})();
