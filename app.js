const data = window.LEARNING_DATA || [];

const state = {
  weekIndex: 0,
  dayIndex: 0,
  mode: "words",
  query: "",
  practiceIndex: 0,
  practiceRevealed: false,
};

const storageKey = "medien-lernen-progress-v1";
const progress = loadProgress();

const weekTabs = document.querySelector("#weekTabs");
const dayTabs = document.querySelector("#dayTabs");
const daySummary = document.querySelector("#daySummary");
const content = document.querySelector("#content");
const searchInput = document.querySelector("#searchInput");
const progressCircle = document.querySelector("#progressCircle");
const progressPercent = document.querySelector("#progressPercent");
const modeTabs = [...document.querySelectorAll(".mode-tab")];
const progressCode = document.querySelector("#progressCode");
const syncStatus = document.querySelector("#syncStatus");
const exportProgressButton = document.querySelector("#exportProgressButton");
const importProgressButton = document.querySelector("#importProgressButton");

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
  renderProgress();
}

function encodeProgress(value) {
  return btoa(JSON.stringify(value));
}

function decodeProgress(code) {
  return JSON.parse(atob(code.trim()));
}

function setSyncStatus(message) {
  if (syncStatus) syncStatus.textContent = message;
}

async function exportProgress() {
  const code = encodeProgress(progress);
  progressCode.value = code;
  try {
    await navigator.clipboard.writeText(code);
    setSyncStatus("Code wurde erstellt und kopiert.");
  } catch {
    setSyncStatus("Code wurde erstellt. Bitte manuell kopieren.");
  }
}

function importProgress() {
  try {
    const imported = decodeProgress(progressCode.value);
    if (!imported || typeof imported !== "object" || Array.isArray(imported)) {
      throw new Error("Invalid progress code");
    }
    Object.keys(progress).forEach((key) => delete progress[key]);
    Object.assign(progress, imported);
    saveProgress();
    render();
    setSyncStatus("Fortschritt wurde importiert.");
  } catch {
    setSyncStatus("Der Code ist nicht gültig.");
  }
}

function currentWeek() {
  return data[state.weekIndex];
}

function currentDay() {
  return currentWeek().days[state.dayIndex];
}

function itemKey(type, id) {
  return `${currentWeek().id}:${currentDay().id}:${type}:${id}`;
}

function isDone(type, id) {
  return Boolean(progress[itemKey(type, id)]);
}

function toggleDone(type, id) {
  const key = itemKey(type, id);
  if (progress[key]) {
    delete progress[key];
  } else {
    progress[key] = Date.now();
  }
  saveProgress();
  render();
}

function allItemsCount() {
  return data.reduce((total, week) => {
    return total + week.days.reduce((sum, day) => sum + day.words.length + day.questions.length, 0);
  }, 0);
}

function renderProgress() {
  const total = allItemsCount();
  const done = Object.keys(progress).length;
  const percent = total ? Math.round((done / total) * 100) : 0;
  progressPercent.textContent = `${percent}%`;
  const offset = 126 - (126 * percent) / 100;
  progressCircle.style.strokeDashoffset = String(offset);
}

function includesQuery(...values) {
  if (!state.query) return true;
  const haystack = values.join(" ").toLowerCase();
  return haystack.includes(state.query.toLowerCase());
}

function renderWeekTabs() {
  weekTabs.innerHTML = "";
  data.forEach((week, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = week.title;
    button.className = index === state.weekIndex ? "active" : "";
    button.addEventListener("click", () => {
      state.weekIndex = index;
      state.dayIndex = 0;
      state.practiceIndex = 0;
      state.practiceRevealed = false;
      render();
    });
    weekTabs.append(button);
  });
}

function renderDayTabs() {
  dayTabs.innerHTML = "";
  currentWeek().days.forEach((day, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `day-tab${index === state.dayIndex ? " active" : ""}`;
    button.textContent = day.label;
    button.addEventListener("click", () => {
      state.dayIndex = index;
      state.practiceIndex = 0;
      state.practiceRevealed = false;
      render();
    });
    dayTabs.append(button);
  });
}

function renderSummary() {
  const day = currentDay();
  const wordDone = day.words.filter((item) => isDone("word", item.id)).length;
  const questionDone = day.questions.filter((item) => isDone("question", item.id)).length;
  daySummary.innerHTML = `
    <p class="eyebrow">${currentWeek().title} · ${day.label}</p>
    <h2>${escapeHtml(day.topic)}</h2>
    <div class="stats-row">
      <div class="stat-pill"><strong>${day.words.length}</strong><span>Wörter</span></div>
      <div class="stat-pill"><strong>${day.questions.length}</strong><span>Fragen</span></div>
      <div class="stat-pill"><strong>${wordDone + questionDone}</strong><span>Gelernt</span></div>
    </div>
  `;
}

function renderModeTabs() {
  modeTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });
}

function renderWords() {
  const day = currentDay();
  const words = day.words.filter((item) => includesQuery(item.word, item.translation, item.explanation));
  content.innerHTML = "";
  if (!words.length) {
    renderEmpty();
    return;
  }
  words.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-header">
        <div>
          <span class="tag">Wort ${index + 1}</span>
          <h3 class="word-title">${escapeHtml(item.word)}</h3>
          <p class="translation">${escapeHtml(item.translation)}</p>
        </div>
        <button class="mark-button${isDone("word", item.id) ? " done" : ""}" type="button" aria-label="Wort gelernt">✓</button>
      </div>
      <p class="explanation">${escapeHtml(item.explanation)}</p>
    `;
    card.querySelector("button").addEventListener("click", () => toggleDone("word", item.id));
    content.append(card);
  });
}

function renderQuestions() {
  const day = currentDay();
  const questions = day.questions.filter((item) => includesQuery(item.question, item.answer, item.translation));
  content.innerHTML = "";
  if (!questions.length) {
    renderEmpty();
    return;
  }
  questions.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-header">
        <div>
          <span class="tag">Frage ${index + 1}</span>
          <h3 class="question-title">${escapeHtml(item.question)}</h3>
        </div>
        <button class="mark-button${isDone("question", item.id) ? " done" : ""}" type="button" aria-label="Frage gelernt">✓</button>
      </div>
      <p class="answer">${escapeHtml(item.answer)}</p>
      <p class="ua-text">${escapeHtml(item.translation)}</p>
    `;
    card.querySelector("button").addEventListener("click", () => toggleDone("question", item.id));
    content.append(card);
  });
}

function practiceItems() {
  const day = currentDay();
  return [
    ...day.words.map((item) => ({ type: "word", id: item.id, front: item.word, back: `${item.translation}\n${item.explanation}` })),
    ...day.questions.map((item) => ({ type: "question", id: item.id, front: item.question, back: `${item.answer}\n${item.translation}` })),
  ].filter((item) => includesQuery(item.front, item.back));
}

function renderPractice() {
  const items = practiceItems();
  content.innerHTML = "";
  if (!items.length) {
    renderEmpty();
    return;
  }
  if (state.practiceIndex >= items.length) state.practiceIndex = 0;
  const item = items[state.practiceIndex];
  const card = document.createElement("article");
  card.className = "practice-card";
  card.innerHTML = `
    <div>
      <div class="practice-top">
        <span class="practice-kind">${item.type === "word" ? "Wortkarte" : "Fragekarte"}</span>
        <span class="tag">${state.practiceIndex + 1} / ${items.length}</span>
      </div>
      <h3 class="practice-title">${escapeHtml(item.front)}</h3>
      <p class="practice-detail">${state.practiceRevealed ? escapeHtml(item.back).replace(/\n/g, "<br>") : "Antwort verdeckt"}</p>
    </div>
    <div class="practice-actions">
      <button class="primary-action" type="button" data-action="reveal">${state.practiceRevealed ? "Antwort ausblenden" : "Antwort zeigen"}</button>
      <button class="small-action" type="button" data-action="again">Noch einmal</button>
      <button class="small-action strong" type="button" data-action="known">Kann ich</button>
    </div>
  `;
  card.querySelector('[data-action="reveal"]').addEventListener("click", () => {
    state.practiceRevealed = !state.practiceRevealed;
    renderPractice();
  });
  card.querySelector('[data-action="again"]').addEventListener("click", () => {
    state.practiceIndex = (state.practiceIndex + 1) % items.length;
    state.practiceRevealed = false;
    renderPractice();
  });
  card.querySelector('[data-action="known"]').addEventListener("click", () => {
    progress[itemKey(item.type, item.id)] = Date.now();
    saveProgress();
    state.practiceIndex = (state.practiceIndex + 1) % items.length;
    state.practiceRevealed = false;
    renderPractice();
  });
  content.append(card);
}

function renderEmpty() {
  content.innerHTML = `<div class="empty-state">Keine passenden Einträge gefunden.</div>`;
}

function render() {
  renderWeekTabs();
  renderDayTabs();
  renderSummary();
  renderModeTabs();
  renderProgress();
  if (state.mode === "words") renderWords();
  if (state.mode === "questions") renderQuestions();
  if (state.mode === "practice") renderPractice();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

modeTabs.forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    state.practiceRevealed = false;
    render();
  });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  state.practiceIndex = 0;
  state.practiceRevealed = false;
  render();
});

exportProgressButton.addEventListener("click", exportProgress);
importProgressButton.addEventListener("click", importProgress);

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker
    .register("./sw.js?v=6")
    .then((registration) => registration.update())
    .catch(() => {});
}

render();
