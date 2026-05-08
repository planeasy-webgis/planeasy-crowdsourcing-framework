/* SmartUrbanity - FULL INIT LOADER */
(async function () {
  const LOCAL_BASE = "./";

  const FILES = {
    template: "smarturbanity-web-template.html",
    style: "smarturbanity-web-style.css"
  };

  function buildURL(base, file) {
    return base + file;
  }

  async function fetchLocal(filename) {
    const local = buildURL(LOCAL_BASE, filename);
    try {
      const r = await fetch(local, { cache: "no-cache" });
      if (r.ok) return r.text();
    } catch (e) {}

    console.error("Cannot load:", filename);
    return null;
  }

  function loadCSS() {
    const cssURL = buildURL(LOCAL_BASE, FILES.style);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssURL;
    document.head.appendChild(link);
  }

  window.initLangToggle = function initLangToggle() {
    const btn = document.getElementById("toggleLang");
    const main = document.querySelector("main");
    const lang = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    window.currentLang = lang.startsWith("it") ? "it" : "en";

    function showLang(l) {
      document.querySelectorAll("[data-lang]").forEach((el) => {
        el.style.display = el.getAttribute("data-lang") === l ? "block" : "none";
      });

      if (main) main.setAttribute("lang", l);
      window.currentLang = l;

      if (btn) {
        btn.textContent = l.toUpperCase();
        btn.setAttribute("aria-label", `Change language. Current: ${l === "en" ? "English" : "Italiano"}`);
      }
    }

    window.setLang = showLang;
    showLang(window.currentLang);

    if (btn) {
      btn.addEventListener("click", () => showLang(window.currentLang === "en" ? "it" : "en"));
    }
  };

  async function loadTemplate() {
    const html = await fetchLocal(FILES.template);
    if (!html) return;

    const parser = new DOMParser();
    const tpl = parser.parseFromString(html, "text/html");
    const header = tpl.querySelector("header");
    const footer = tpl.querySelector("footer");

    if (header) document.getElementById("smarturbanity-header").innerHTML = header.outerHTML;
    if (footer) document.getElementById("smarturbanity-footer").innerHTML = footer.outerHTML;

    window.initLangToggle();
  }

  loadCSS();
  await loadTemplate();
})();
