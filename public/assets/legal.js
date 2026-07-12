(() => {
  const STORAGE_KEY = "aesthetica-legal-language";
  const buttons = [...document.querySelectorAll("[data-set-language]")];
  const documents = [...document.querySelectorAll("[data-language]")];
  const localized = [...document.querySelectorAll("[data-copy-en][data-copy-el]")];

  function normalizeLanguage(value) {
    return value === "el" || value === "gr" ? "el" : "en";
  }

  function setLanguage(language, persist = true) {
    const lang = normalizeLanguage(language);
    document.documentElement.lang = lang;
    document.body.dataset.language = lang;

    buttons.forEach((button) => {
      const active = button.dataset.setLanguage === lang;
      button.setAttribute("aria-pressed", String(active));
    });

    documents.forEach((node) => {
      node.hidden = node.dataset.language !== lang;
    });

    localized.forEach((node) => {
      node.textContent = lang === "el" ? node.dataset.copyEl : node.dataset.copyEn;
    });

    document.title = lang === "el"
      ? (document.body.dataset.titleEl || document.title)
      : (document.body.dataset.titleEn || document.title);

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* storage may be blocked */ }
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.setLanguage));
  });

  let initial = "en";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    initial = stored ? normalizeLanguage(stored) : ((navigator.language || "en").toLowerCase().startsWith("el") ? "el" : "en");
  } catch (_) {
    initial = (navigator.language || "en").toLowerCase().startsWith("el") ? "el" : "en";
  }

  setLanguage(initial, false);
})();
