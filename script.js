 const display = document.getElementById("display");
const equals = document.getElementById("equals");
const sciSection = document.getElementById("scientific");
const toggleSci = document.getElementById("toggleSci");

const themeToggle = document.getElementById("themeToggle");
const historyList = document.getElementById("historyList");
const clearHistory = document.getElementById("clearHistory");

// =====================
// THEME (DARK/LIGHT)
// =====================

if (localStorage.getItem("theme") === "light") {
  document.documentElement.setAttribute("data-theme", "light");
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const newTheme = current === "light" ? "" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme || "dark");
});

// =====================
// SCIENTIFIC MODE TOGGLE
// =====================

toggleSci.addEventListener("click", (e) => {
  e.preventDefault();
  sciSection.style.display =
    sciSection.style.display === "grid" ? "none" : "grid";
});

// =====================
// CALCULATOR INPUT
// =====================

document.querySelectorAll("[data-key]").forEach(btn => {
  btn.addEventListener("click", () => {
    display.value += btn.dataset.key;
  });
});

document.querySelectorAll("[data-func]").forEach(btn => {
  btn.addEventListener("click", () => {
    const func = btn.dataset.func;
    if (func === "pi") display.value += Math.PI;
    else if (func === "e") display.value += Math.E;
    else display.value += func + "(";
  });
});

// =====================
// HISTORY MODULE
// =====================

function loadHistory() {
  return JSON.parse(localStorage.getItem("history") || "[]");
}

function saveHistory(list) {
  localStorage.setItem("history", JSON.stringify(list.slice(0, 50)));
}

function renderHistory() {
  const items = loadHistory();
  historyList.innerHTML = items.length
    ? items.map(i => `<div class="history-item">${i}</div>`).join("")
    : `<div class="history-item">No history</div>`;
}

clearHistory.addEventListener("click", () => {
  localStorage.removeItem("history");
  renderHistory();
});

// =====================
// EVALUATION
// =====================

equals.addEventListener("click", () => calculate());

function calculate() {
  try {
    let expr = display.value;

    // Replace ^ with JS exponent operator
    expr = expr.replace(/\^/g, "**");

    const result = eval(expr);

    if (result !== undefined) {
      const entry = `${expr} = ${result}`;
      const hist = loadHistory();
      hist.unshift(entry);
      saveHistory(hist);
      renderHistory();

      display.value = result;
    }
  } catch {
    display.value = "Error";
  }
}

// =====================
// KEYBOARD SUPPORT
// =====================

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    calculate();
  } else if (e.key === "Escape") {
    display.value = "";
  } else {
    display.value += /^[0-9+\-*/().%^]$/.test(e.key) ? e.key : "";
  }
});

// Initialize history on load
renderHistory();
