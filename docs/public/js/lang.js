function updateLanguageUI(lang) {
  const isEnglish = lang === "en";
  document.querySelectorAll(".lang-ko").forEach((el) => {
    el.style.display = isEnglish ? "none" : "block";
  });
  document.querySelectorAll(".lang-en").forEach((el) => {
    el.style.display = isEnglish ? "block" : "none";
  });

  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.placeholder = isEnglish ? "Search" : "검색";
  }

  const titleEl = document.querySelector("title[data-title-en]");
  if (titleEl) {
    document.title = isEnglish ? titleEl.dataset.titleEn : titleEl.dataset.titleKo;
  }

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.checked = !isEnglish;
  }
}

function maybeRedirectOnLang(lang) {
  const currentPath = window.location.pathname;
  const postPattern = /^\/(\d{4}\/\d{2}\/\d{2}\/[^\/]+)(\/en)?\/?$/;
  const match = currentPath.match(postPattern);

  console.log("🔍 currentPath:", currentPath);
  console.log("🧪 match result:", match);

  if (match) {
    const baseSlug = match[1]; // e.g., "2025/06/18/bell-rocket"
    const isEnglishPath = !!match[2];

    const basePath = `/${baseSlug}`;

    if (lang === "ko" && isEnglishPath) {
      console.log("🇰🇷 Redirecting to KO version:", basePath);
      window.location.replace(basePath);
    } else if (lang === "en" && !isEnglishPath) {
      const enPath = basePath + "/en";
      console.log("🇺🇸 Redirecting to EN version:", enPath);
      window.location.replace(enPath);
    }
  }
}

function waitForToggleAndInit() {
  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    const savedLang = localStorage.getItem("lang") || "en";
    updateLanguageUI(savedLang);
    maybeRedirectOnLang(savedLang);

    toggle.addEventListener("change", () => {
      const newLang = toggle.checked ? "ko" : "en";
      localStorage.setItem("lang", newLang);
      updateLanguageUI(newLang);
      maybeRedirectOnLang(newLang);
    });
  } else {
    requestAnimationFrame(waitForToggleAndInit);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  waitForToggleAndInit();
});
