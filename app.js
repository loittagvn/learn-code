// Theme
function setTheme(mode) {
  localStorage.setItem("theme", mode);
  applyTheme();
}

function applyTheme() {
  const mode = localStorage.getItem("theme") || "dark";
  document.body.className = mode;
}

// Language
function setLang(lang) {
  localStorage.setItem("lang", lang);
  location.reload();
}

function getLang() {
  return localStorage.getItem("lang") || "en";
}

// Navigation
function go(page) {
  window.location.href = page;
}

// Progress
function saveProgress(key, value) {
  localStorage.setItem(key, value);
}

function getProgress(key) {
  return localStorage.getItem(key) || 0;
}

window.onload = applyTheme;