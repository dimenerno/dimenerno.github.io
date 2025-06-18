function updateLanguageUI(lang) {
    const isEnglish = lang === "en";
    document.querySelectorAll(".lang-ko").forEach(el => {
      el.style.display = isEnglish ? "none" : "block";
    });
    document.querySelectorAll(".lang-en").forEach(el => {
      el.style.display = isEnglish ? "block" : "none";
    });
  
    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.checked = isEnglish;
    }
  }
  
  function waitForToggleAndInit() {
    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
      const savedLang = localStorage.getItem("lang") || "ko";
      updateLanguageUI(savedLang);
  
      toggle.addEventListener("change", () => {
        const newLang = toggle.checked ? "en" : "ko";
        localStorage.setItem("lang", newLang);
        updateLanguageUI(newLang);
      });
    } else {
      requestAnimationFrame(waitForToggleAndInit);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    waitForToggleAndInit();
  });