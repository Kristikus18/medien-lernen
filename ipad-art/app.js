const lessons = [
  {
    id: "procreate-start",
    week: 1,
    app: "Procreate",
    level: "старт",
    time: "20-30 хв",
    title: "Старт на iPad: лінія, шари, кисті",
    description: "Розігрів руки, базові форми, прості тіні й перші маленькі фрукти.",
    skills: ["Apple Pencil", "шари", "кисті", "форми"],
    project: "4 фрукти у Procreate: лимон, полуниця, авокадо, персик.",
    source: "Creative Bloq: How to draw on iPad",
    url: "https://www.creativebloq.com/features/how-to-draw-on-the-ipad",
  },
  {
    id: "procreate-character-pop",
    week: 2,
    app: "Procreate",
    level: "персонаж",
    time: "45-60 хв",
    title: "How to add pop to your character art",
    description: "Силует, вираз, палітра й форма персонажа, яка читається навіть маленькою.",
    skills: ["силует", "палітра", "емоція", "контраст"],
    project: "Портрет маскота з 2 емоціями: спокійний і драматичний.",
    source: "Creative Bloq / Alix Harris",
    url: "https://www.creativebloq.com/how-to/add-pop-to-your-character-art",
  },
  {
    id: "procreate-anime",
    week: 2,
    app: "Procreate",
    level: "line art",
    time: "60-90 хв",
    title: "Draw an anime character in Procreate",
    description: "Чиста лінія, маски, колір і простий фон для персонажа-стікера.",
    skills: ["line art", "маски", "колір", "фон"],
    project: "Персонаж-стікер у стилі anime/kawaii.",
    source: "Creative Bloq / Paul Kwon",
    url: "https://www.creativebloq.com/how-to/draw-an-anime-character-in-procreate",
  },
  {
    id: "procreate-lovable",
    week: 2,
    app: "Procreate",
    level: "маскот",
    time: "60 хв",
    title: "Lovable character for animation",
    description: "Прості форми, action line і персонаж, який може жити в серії стікерів.",
    skills: ["поза", "маскот", "емоції", "серія"],
    project: "Маскот із 4 маленькими позами або емоціями.",
    source: "Creative Bloq / Brian Weisz",
    url: "https://www.creativebloq.com/art/character-design/how-to-design-and-draw-a-lovable-character-for-animation-using-procreate",
  },
  {
    id: "procreate-glow",
    week: 3,
    app: "Procreate",
    level: "ефекти",
    time: "40-60 хв",
    title: "Glowing light effects in Procreate",
    description: "Blend modes, м'яке світло й атмосфера без складної сцени.",
    skills: ["світло", "blend modes", "тінь", "настрій"],
    project: "Нічний fruit sticker: лимон-лампа або полуниця зі світінням.",
    source: "Creative Bloq / Pauline Voss",
    url: "https://www.creativebloq.com/art/digital-art/how-to-create-ethereal-glowing-light-effects-in-procreate",
  },
  {
    id: "procreate-fruit-stickers",
    week: 1,
    app: "Procreate",
    level: "стікери",
    time: "30-45 хв",
    title: "Fruit & sticker sprint",
    description: "Маленькі фрукти з білим контуром, милими деталями й PNG-експортом.",
    skills: ["стікерпак", "контур", "PNG", "серія"],
    project: "6 фруктів: полуниця, авокадо, лимон, вишня, груша, персик.",
    source: "YouTube: Art with Flo / Bardot Brush search",
    url: "https://www.youtube.com/results?search_query=Art+with+Flo+Bardot+Brush+Procreate+fruit+sticker+tutorial",
  },
  {
    id: "illustrator-ipad-demo",
    week: 3,
    app: "Illustrator",
    level: "старт",
    time: "15-25 хв",
    title: "Illustrator for iPad workflow demo",
    description: "iPad-інтерфейс, touch workflow і перші векторні форми.",
    skills: ["вектор", "форми", "iPad UI", "експорт"],
    project: "Повтори один фрукт як чисту векторну іконку.",
    source: "Creative Bloq pick / YouTube",
    url: "https://youtu.be/eS5pEx9U5UE",
  },
  {
    id: "illustrator-essentials",
    week: 3,
    app: "Illustrator",
    level: "база",
    time: "45 хв",
    title: "Illustrator tutorials: essentials",
    description: "Головні інструменти Illustrator для чистих форм і маленьких іконок.",
    skills: ["Pen", "Pencil", "Shape Builder", "artboards"],
    project: "6 простих форм, які складаються в один фрукт.",
    source: "Creative Bloq Illustrator tutorials",
    url: "https://www.creativebloq.com/digital-art/adobe-illustrator-tutorials-1232697",
  },
  {
    id: "illustrator-graphic-figures",
    week: 3,
    app: "Illustrator",
    level: "персонаж",
    time: "45-60 хв",
    title: "Design graphic figures in Illustrator",
    description: "Геометричні персонажі, пропорції, поза й прості читабельні форми.",
    skills: ["персонаж", "геометрія", "пропорції", "стиль"],
    project: "Маленький векторний маскот із руками/ногами.",
    source: "Creative Bloq / Ben OBrien",
    url: "https://www.creativebloq.com/how-to/how-to-design-graphic-figures",
  },
  {
    id: "illustrator-brush",
    week: 4,
    app: "Illustrator",
    level: "стиль",
    time: "25-35 хв",
    title: "Create a calligraphic brush",
    description: "Свій векторний пензель для написів, лінії й декоративних штрихів.",
    skills: ["brush", "lettering", "лінія", "деталі"],
    project: "Напис fresh або cute поруч із фруктовим стікером.",
    source: "Creative Bloq / Chris Rathbone",
    url: "https://www.creativebloq.com/how-to/create-your-own-calligraphic-brush-in-illustrator",
  },
  {
    id: "illustrator-export",
    week: 4,
    app: "Illustrator",
    level: "експорт",
    time: "20 хв",
    title: "Sticker export: SVG + PNG",
    description: "Artboards, прозорий PNG, SVG і акуратна підготовка стікерів.",
    skills: ["SVG", "PNG", "artboards", "контур"],
    project: "3 стікери: PNG для чатів, SVG для вектора.",
    source: "Creative Bloq Illustrator export sections",
    url: "https://www.creativebloq.com/digital-art/adobe-illustrator-tutorials-1232697",
  },
  {
    id: "photoshop-ipad-role",
    week: 4,
    app: "Photoshop",
    level: "старт",
    time: "15 хв",
    title: "Photoshop on iPad: where it shines",
    description: "Шари, виділення, cloud PSD і фінальна обробка робіт.",
    skills: ["шари", "виділення", "маски", "PSD"],
    project: "Візьми один стікер і зроби з нього міні-постер.",
    source: "Creative Bloq Photoshop for iPad review",
    url: "https://www.creativebloq.com/reviews/photoshop-for-ipad-review",
  },
  {
    id: "photoshop-dark-scene",
    week: 4,
    app: "Photoshop",
    level: "сцена",
    time: "45-60 хв",
    title: "Dark fantasy scene technique",
    description: "Value structure, gradient map, атмосфера й глибина сцени.",
    skills: ["value", "gradient map", "глибина", "світло"],
    project: "Фон-постер для персонажа: 3 плани глибини + світло.",
    source: "Creative Bloq / Photoshop digital art",
    url: "https://www.creativebloq.com/art/digital-art/my-proven-technique-for-drawing-dark-and-mysterious-fantasy-scenes-in-photoshop",
  },
  {
    id: "photoshop-character-colour",
    week: 4,
    app: "Photoshop",
    level: "колір",
    time: "45 хв",
    title: "Colour for dramatic character art",
    description: "Контрольована палітра, greyscale-to-colour і різні настрої персонажа.",
    skills: ["колір", "Color Balance", "матеріали", "настрій"],
    project: "Перефарбуй маскота в 3 настрої: sweet, spooky, neon.",
    source: "Creative Bloq / character colour",
    url: "https://www.creativebloq.com/art/digital-art/how-to-use-colour-to-create-dramatic-character-art-in-photoshop",
  },
  {
    id: "photoshop-cutout",
    week: 4,
    app: "Photoshop",
    level: "колаж",
    time: "30-45 хв",
    title: "Cutout sticker + texture overlay",
    description: "Фото, виділення, маски, текстури й домальоване обличчя.",
    skills: ["cutout", "маски", "texture", "shadow"],
    project: "Фото лимона + намальоване лице + паперова текстура.",
    source: "YouTube practice search",
    url: "https://www.youtube.com/results?search_query=Photoshop+on+iPad+cutout+sticker+texture+tutorial",
  },
  {
    id: "photoshop-sticker-sheet",
    week: 4,
    app: "Photoshop",
    level: "полірування",
    time: "20-30 хв",
    title: "Final polish for a sticker sheet",
    description: "Curves, noise, shadow і фінальний вигляд сторінки зі стікерами.",
    skills: ["Curves", "noise", "shadow", "export"],
    project: "Сторінка з 9 стікерами + фонова обкладинка.",
    source: "YouTube: Photoshop iPad sticker sheet",
    url: "https://www.youtube.com/results?search_query=Photoshop+on+iPad+sticker+sheet+export+PNG+tutorial",
  },
];

const projectPlan = [
  {
    id: "fruit-pack",
    title: "Стікерпак з фруктів",
    week: 1,
    app: "Procreate",
    result: "6 PNG-стікерів із білим контуром і однією палітрою.",
  },
  {
    id: "mascot-emotions",
    title: "Маскот з емоціями",
    week: 2,
    app: "Procreate",
    result: "Один персонаж у 4 емоціях або позах.",
  },
  {
    id: "vector-icons",
    title: "Векторна міні-серія",
    week: 3,
    app: "Illustrator",
    result: "3 SVG-іконки й один чистий маскот.",
  },
  {
    id: "poster-sheet",
    title: "Постер + сторінка стікерів",
    week: 4,
    app: "Photoshop",
    result: "Одна презентабельна сторінка для портфоліо.",
  },
];

const stepLabels = [
  { key: "watch", label: "Подивилась урок" },
  { key: "copy", label: "Повторила вправу" },
  { key: "own", label: "Зробила свій варіант" },
];

const appVersion = "ipad-art-v1";
const progressKey = "ipad-art-progress-v1";
const noteKey = "ipad-art-notes-v1";
const selectionKey = "ipad-art-selection-v1";

const state = {
  app: "all",
  week: "all",
  status: "all",
  mode: "lessons",
  query: "",
};

const progress = loadJson(progressKey, {});
const notes = loadJson(noteKey, {});
Object.assign(state, loadJson(selectionKey, {}));

const appTabs = document.querySelector("#appTabs");
const weekTabs = document.querySelector("#weekTabs");
const searchInput = document.querySelector("#searchInput");
const quickFilters = [...document.querySelectorAll(".quick-filter")];
const modeTabs = [...document.querySelectorAll(".mode-tab")];
const content = document.querySelector("#content");
const progressCircle = document.querySelector("#progressCircle");
const progressPercent = document.querySelector("#progressPercent");
const doneCount = document.querySelector("#doneCount");
const lessonCount = document.querySelector("#lessonCount");
const projectCount = document.querySelector("#projectCount");
const focusTitle = document.querySelector("#focusTitle");
const focusText = document.querySelector("#focusText");
const todayBadge = document.querySelector("#todayBadge");
const nextLessonButton = document.querySelector("#nextLessonButton");
const progressCode = document.querySelector("#progressCode");
const syncStatus = document.querySelector("#syncStatus");
const exportProgressButton = document.querySelector("#exportProgressButton");
const importProgressButton = document.querySelector("#importProgressButton");
const emptyTemplate = document.querySelector("#emptyTemplate");

function loadJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function saveSelection() {
  saveJson(selectionKey, {
    app: state.app,
    week: state.week,
    status: state.status,
    mode: state.mode,
  });
}

function lessonStepKey(lessonId, step) {
  return `lesson:${lessonId}:${step}`;
}

function projectKey(projectId) {
  return `project:${projectId}`;
}

function isStepDone(lessonId, step) {
  return Boolean(progress[lessonStepKey(lessonId, step)]);
}

function isLessonDone(lesson) {
  return stepLabels.every((step) => isStepDone(lesson.id, step.key));
}

function toggleStep(lessonId, step) {
  const key = lessonStepKey(lessonId, step);
  if (progress[key]) {
    delete progress[key];
  } else {
    progress[key] = Date.now();
  }
  persistProgress();
}

function toggleProject(projectId) {
  const key = projectKey(projectId);
  if (progress[key]) {
    delete progress[key];
  } else {
    progress[key] = Date.now();
  }
  persistProgress();
}

function persistProgress() {
  saveJson(progressKey, progress);
  render();
}

function totalStepCount() {
  return lessons.length * stepLabels.length + projectPlan.length;
}

function completedStepCount() {
  const lessonSteps = lessons.reduce((sum, lesson) => {
    return sum + stepLabels.filter((step) => isStepDone(lesson.id, step.key)).length;
  }, 0);
  const projects = projectPlan.filter((project) => progress[projectKey(project.id)]).length;
  return lessonSteps + projects;
}

function filteredLessons() {
  return lessons.filter((lesson) => {
    if (state.app !== "all" && lesson.app !== state.app) return false;
    if (state.week !== "all" && lesson.week !== Number(state.week)) return false;
    if (state.status === "done" && !isLessonDone(lesson)) return false;
    if (state.status === "open" && isLessonDone(lesson)) return false;
    if (!state.query) return true;
    const haystack = [
      lesson.title,
      lesson.description,
      lesson.app,
      lesson.level,
      lesson.project,
      lesson.source,
      ...lesson.skills,
    ].join(" ").toLowerCase();
    return haystack.includes(state.query.toLowerCase());
  });
}

function firstOpenLesson() {
  return lessons.find((lesson) => !isLessonDone(lesson)) || lessons[0];
}

function renderFilters() {
  const apps = ["all", ...new Set(lessons.map((lesson) => lesson.app))];
  appTabs.innerHTML = "";
  apps.forEach((app) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = state.app === app ? "active" : "";
    button.textContent = app === "all" ? "Усі" : app;
    button.addEventListener("click", () => {
      state.app = app;
      saveSelection();
      render();
    });
    appTabs.append(button);
  });

  const weeks = ["all", ...new Set(lessons.map((lesson) => lesson.week))];
  weekTabs.innerHTML = "";
  weeks.forEach((week) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `week-tab${String(state.week) === String(week) ? " active" : ""}`;
    button.textContent = week === "all" ? "Всі тижні" : `Тиждень ${week}`;
    button.addEventListener("click", () => {
      state.week = week;
      saveSelection();
      render();
    });
    weekTabs.append(button);
  });

  quickFilters.forEach((button) => {
    button.classList.toggle("active", button.dataset.status === state.status);
  });

  modeTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });
}

function renderStats() {
  const done = completedStepCount();
  const total = totalStepCount();
  const percent = total ? Math.round((done / total) * 100) : 0;
  const offset = 138 - (138 * percent) / 100;
  progressPercent.textContent = `${percent}%`;
  progressCircle.style.strokeDashoffset = String(offset);
  doneCount.textContent = `${done}/${total}`;
  lessonCount.textContent = String(lessons.length);
  projectCount.textContent = `${projectPlan.filter((project) => progress[projectKey(project.id)]).length}/${projectPlan.length}`;

  const focus = firstOpenLesson();
  if (focus) {
    todayBadge.textContent = isLessonDone(focus) ? "Повторення" : `Тиждень ${focus.week}`;
    focusTitle.textContent = focus.title;
    focusText.textContent = `${focus.app}: ${focus.project}`;
  }
}

function renderLessons() {
  const items = filteredLessons();
  content.innerHTML = "";
  if (!items.length) {
    renderEmpty();
    return;
  }
  items.forEach((lesson) => content.append(createLessonCard(lesson)));
}

function createLessonCard(lesson) {
  const article = document.createElement("article");
  article.className = "lesson-card";
  article.innerHTML = `
    <div class="lesson-accent" style="background:${accentFor(lesson.app)}"></div>
    <div class="lesson-body">
      <div class="lesson-top">
        <div class="tag-list">
          <span class="tag ${appClass(lesson.app)}">${escapeHtml(lesson.app)}</span>
          <span class="tag">Тиждень ${lesson.week}</span>
          <span class="tag">${escapeHtml(lesson.time)}</span>
          <span class="tag">${escapeHtml(lesson.level)}</span>
        </div>
      </div>
      <div class="card-title-row">
        <h2>${escapeHtml(lesson.title)}</h2>
      </div>
      <p class="lesson-description">${escapeHtml(lesson.description)}</p>
      <div class="skill-list">
        ${lesson.skills.map((skill) => `<span>${escapeHtml(skill)}</span>`).join("")}
      </div>
      <div class="steps">
        ${stepLabels.map((step, index) => stepTemplate(lesson, step, index + 1)).join("")}
      </div>
      <div class="lesson-footer">
        <p class="source-name">${escapeHtml(lesson.source)}<br>${escapeHtml(lesson.project)}</p>
        <a class="source-link" href="${lesson.url}" target="_blank" rel="noreferrer">Відкрити</a>
      </div>
    </div>
  `;
  article.querySelectorAll("[data-step]").forEach((button) => {
    button.addEventListener("click", () => toggleStep(lesson.id, button.dataset.step));
  });
  return article;
}

function stepTemplate(lesson, step, index) {
  const done = isStepDone(lesson.id, step.key);
  return `
    <div class="step-row${done ? " done" : ""}">
      <div>
        <span class="step-label">Крок ${index}</span>
        <strong>${escapeHtml(step.label)}</strong>
      </div>
      <button class="step-button" type="button" data-step="${step.key}" aria-label="${done ? "Зняти позначку" : "Позначити крок"}">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12.5l4.2 4.2L19 7"></path>
        </svg>
      </button>
    </div>
  `;
}

function renderProjects() {
  const projects = projectPlan.filter((project) => {
    if (state.app !== "all" && project.app !== state.app) return false;
    if (state.week !== "all" && project.week !== Number(state.week)) return false;
    if (state.status === "done" && !progress[projectKey(project.id)]) return false;
    if (state.status === "open" && progress[projectKey(project.id)]) return false;
    if (!state.query) return true;
    return [project.title, project.result, project.app].join(" ").toLowerCase().includes(state.query.toLowerCase());
  });

  content.innerHTML = "";
  if (!projects.length) {
    renderEmpty();
    return;
  }
  projects.forEach((project) => {
    const done = Boolean(progress[projectKey(project.id)]);
    const card = document.createElement("article");
    card.className = `project-card${done ? " done" : ""}`;
    card.innerHTML = `
      <div class="project-meta">
        <div class="tag-list">
          <span class="tag ${appClass(project.app)}">${escapeHtml(project.app)}</span>
          <span class="tag">Тиждень ${project.week}</span>
        </div>
        <span class="project-status">${done ? "Готово" : "У роботі"}</span>
      </div>
      <h2>${escapeHtml(project.title)}</h2>
      <p>${escapeHtml(project.result)}</p>
      <button class="source-link" type="button">${done ? "Зняти позначку" : "Позначити готовим"}</button>
    `;
    card.querySelector("button").addEventListener("click", () => toggleProject(project.id));
    content.append(card);
  });
}

function renderNotes() {
  const items = filteredLessons();
  content.innerHTML = "";
  if (!items.length) {
    renderEmpty();
    return;
  }
  items.forEach((lesson) => {
    const card = document.createElement("article");
    card.className = "note-card";
    card.innerHTML = `
      <div class="tag-list">
        <span class="tag ${appClass(lesson.app)}">${escapeHtml(lesson.app)}</span>
        <span class="tag">Тиждень ${lesson.week}</span>
      </div>
      <h2>${escapeHtml(lesson.title)}</h2>
      <p>${escapeHtml(lesson.project)}</p>
      <textarea data-note="${lesson.id}" placeholder="Що вийшло? Що повторити? Яку ідею зробити своєю?">${escapeHtml(notes[lesson.id] || "")}</textarea>
      <div class="note-actions">
        <button class="reset-note" type="button" data-reset="${lesson.id}">Очистити</button>
      </div>
    `;
    const textarea = card.querySelector("textarea");
    textarea.addEventListener("input", () => {
      notes[lesson.id] = textarea.value;
      saveJson(noteKey, notes);
    });
    card.querySelector("[data-reset]").addEventListener("click", () => {
      delete notes[lesson.id];
      saveJson(noteKey, notes);
      renderNotes();
    });
    content.append(card);
  });
}

function renderEmpty() {
  content.innerHTML = "";
  content.append(emptyTemplate.content.cloneNode(true));
}

function accentFor(app) {
  if (app === "Procreate") return "var(--leaf)";
  if (app === "Illustrator") return "var(--blue)";
  return "var(--gold)";
}

function appClass(app) {
  if (app === "Procreate") return "procreate";
  if (app === "Illustrator") return "illustrator";
  return "photoshop";
}

function exportProgress() {
  const payload = {
    progress,
    notes,
    exportedAt: new Date().toISOString(),
  };
  const code = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
  progressCode.value = code;
  if (!navigator.clipboard) {
    setSyncStatus("Код створено. Можна скопіювати вручну.");
    return;
  }
  navigator.clipboard
    .writeText(code)
    .then(() => setSyncStatus("Код створено і скопійовано."))
    .catch(() => setSyncStatus("Код створено. Можна скопіювати вручну."));
}

function importProgress() {
  try {
    const payload = JSON.parse(decodeURIComponent(escape(atob(progressCode.value.trim()))));
    if (!payload || typeof payload !== "object") throw new Error("Invalid payload");
    Object.keys(progress).forEach((key) => delete progress[key]);
    Object.assign(progress, payload.progress || {});
    Object.keys(notes).forEach((key) => delete notes[key]);
    Object.assign(notes, payload.notes || {});
    saveJson(progressKey, progress);
    saveJson(noteKey, notes);
    setSyncStatus("Прогрес імпортовано.");
    render();
  } catch {
    setSyncStatus("Код не підходить. Перевір, чи він вставлений повністю.");
  }
}

function setSyncStatus(message) {
  syncStatus.textContent = message;
}

function render() {
  renderFilters();
  renderStats();
  if (state.mode === "lessons") renderLessons();
  if (state.mode === "projects") renderProjects();
  if (state.mode === "notes") renderNotes();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

quickFilters.forEach((button) => {
  button.addEventListener("click", () => {
    state.status = button.dataset.status;
    saveSelection();
    render();
  });
});

modeTabs.forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    saveSelection();
    render();
  });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  render();
});

nextLessonButton.addEventListener("click", () => {
  const focus = firstOpenLesson();
  if (!focus) return;
  state.app = focus.app;
  state.week = focus.week;
  state.status = "open";
  state.mode = "lessons";
  saveSelection();
  render();
  document.querySelector(".content-stack")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

exportProgressButton.addEventListener("click", exportProgress);
importProgressButton.addEventListener("click", importProgress);

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker
    .register("./sw.js?v=1")
    .then((registration) => registration.update())
    .catch(() => {});
}

if ("caches" in window) {
  caches.keys().then((keys) => {
    keys.filter((key) => key.startsWith("ipad-art-") && key !== appVersion).forEach((key) => caches.delete(key));
  });
}

render();
