const lessons = [
  {
    id: "procreate-start",
    week: 1,
    app: "Procreate",
    level: "старт",
    time: "20-30 хв",
    title: "Procreate Beginners Series: Part One",
    description: "Офіційний старт Procreate: інтерфейс, жести, колір, шари й перший контроль Apple Pencil.",
    skills: ["Video", "YouTube", "Beginner", "шари"],
    badges: ["Video", "YouTube", "Official"],
    project: "Після відео намалюй 3 прості форми й один маленький фрукт зі світлом.",
    source: "YouTube · Procreate",
    url: "https://www.youtube.com/watch?v=Vn8bj0YpZg4",
  },
  {
    id: "procreate-character-pop",
    week: 2,
    app: "Procreate",
    level: "кисті",
    time: "18 хв",
    title: "Procreate Beginners Series: Painting Tools",
    description: "Офіційне відео про кисті, малювання, стирання, smudge і базовий живий workflow.",
    skills: ["Video", "YouTube", "кисті", "малювання"],
    badges: ["Video", "YouTube", "Official"],
    project: "Зроби 4 маленькі фрукти різними кистями: м'яка, текстурна, чорнильна, олівець.",
    source: "YouTube · Procreate",
    url: "https://www.youtube.com/watch?v=e5F7em-hGwc",
  },
  {
    id: "procreate-anime",
    week: 2,
    app: "Procreate",
    level: "інструменти",
    time: "20 хв",
    title: "Procreate Beginners Series: Editing Tools",
    description: "Офіційне відео про виділення, трансформації й редагування, які потрібні для чистих стікерів.",
    skills: ["Video", "YouTube", "маски", "редагування"],
    badges: ["Video", "YouTube", "Official"],
    project: "Перероби один фрукт у стікер: перемісти елементи, додай контур і виправ форму.",
    source: "YouTube · Procreate",
    url: "https://www.youtube.com/watch?v=EqQjjxcNd1o",
  },
  {
    id: "procreate-lovable",
    week: 2,
    app: "Procreate",
    level: "емоції",
    time: "35-50 хв",
    title: "Procreate Character Camp: How to Draw Emotions",
    description: "Відео Bardot Brush про емоції персонажа: очі, рот, брови, форма обличчя.",
    skills: ["Video", "YouTube", "Character", "емоції"],
    badges: ["Video", "YouTube", "Character"],
    project: "Намалюй фрукт-маскот у 4 емоціях: happy, tired, angry, shy.",
    source: "YouTube · Bardot Brush",
    url: "https://www.youtube.com/watch?v=JMO9CCoMr0E",
  },
  {
    id: "procreate-glow",
    week: 3,
    app: "Procreate",
    level: "персонаж",
    time: "45-60 хв",
    title: "Procreate Character Camp: Putting it All Together",
    description: "Відео про те, як зібрати персонажа з форми, обличчя, деталей і стилю.",
    skills: ["Video", "YouTube", "Character", "маскот"],
    badges: ["Video", "YouTube", "Character"],
    project: "Збери одного маскота для стікерпаку й зроби 2 варіанти пози.",
    source: "YouTube · Bardot Brush",
    url: "https://www.youtube.com/watch?v=qMisSJs3A7U",
  },
  {
    id: "procreate-fruit-stickers",
    week: 1,
    app: "Procreate",
    level: "стікери",
    time: "30-45 хв",
    title: "How to Draw Stickers in Procreate",
    description: "Відео про створення стікерів у Procreate: контур, стиль, підготовка до друку або PNG.",
    skills: ["Video", "YouTube", "Sticker", "контур"],
    badges: ["Video", "YouTube", "Sticker"],
    project: "Зроби 6 фруктових стікерів із білим контуром і однаковою палітрою.",
    source: "YouTube · Bardot Brush",
    url: "https://www.youtube.com/watch?v=XEk1GwL2YV4",
  },
  {
    id: "illustrator-ipad-demo",
    week: 1,
    app: "Procreate",
    level: "стікери",
    time: "40-60 хв",
    title: "How to Make Stickers with Procreate",
    description: "Відео про handmade sticker workflow: Procreate art, контур, друк і вирізання.",
    skills: ["Video", "YouTube", "Sticker", "друк"],
    badges: ["Video", "YouTube", "Sticker"],
    project: "Створи один тестовий стікер і підготуй його до друку або PNG-експорту.",
    source: "YouTube · Bardot Brush",
    url: "https://www.youtube.com/watch?v=x3Eg0Afv79c",
  },
  {
    id: "illustrator-essentials",
    week: 3,
    app: "Illustrator",
    level: "база",
    time: "20-35 хв",
    title: "Vectoring on the iPad",
    description: "Відео про перетворення ескізу або JPG у редагований вектор в Illustrator на iPad.",
    skills: ["Video", "YouTube", "Vector", "iPad"],
    badges: ["Video", "YouTube", "Vector"],
    project: "Перенеси один Procreate-стікер у вектор і прибери зайві вузли.",
    source: "YouTube · Illustrator iPad",
    url: "https://www.youtube.com/watch?v=oTNG_eM_3k0",
  },
  {
    id: "illustrator-graphic-figures",
    week: 3,
    app: "Illustrator",
    level: "вектор",
    time: "25-40 хв",
    title: "Making Vector Art on the iPad",
    description: "Відео про створення чистого vector art на iPad у Illustrator.",
    skills: ["Video", "YouTube", "Vector", "форми"],
    badges: ["Video", "YouTube", "Vector"],
    project: "Зроби 3 векторні іконки в одному стилі: фрукт, предмет, міні-маскот.",
    source: "YouTube · Illustrator iPad",
    url: "https://www.youtube.com/watch?v=BQcZMzMoXl0",
  },
  {
    id: "illustrator-brush",
    week: 4,
    app: "Illustrator",
    level: "інструменти",
    time: "45-60 хв",
    title: "Adobe Illustrator iPad: Pen, Brush, Shape, Text",
    description: "Відео-урок по головних інструментах Illustrator на iPad: Pen, Brush, Shape і Type.",
    skills: ["Video", "YouTube", "Tools", "Pen"],
    badges: ["Video", "YouTube", "Tools"],
    project: "Намалюй фруктову етикетку: форма, напис, маленька іконка.",
    source: "YouTube · Illustrator iPad",
    url: "https://www.youtube.com/watch?v=7CF4G5w5k6Q",
  },
  {
    id: "illustrator-export",
    week: 4,
    app: "Illustrator",
    level: "їжа/стікер",
    time: "35-50 хв",
    title: "Cheesy Pizza in Adobe Illustrator on iPad",
    description: "Веселе food-illustration відео: Procreate sketch + Illustrator iPad vector finish.",
    skills: ["Video", "YouTube", "Food", "Vector"],
    badges: ["Video", "YouTube", "Food"],
    project: "Повтори піцу або заміни її на фрукт: лимон, полуниця чи авокадо.",
    source: "YouTube · Illustrator iPad",
    url: "https://www.youtube.com/watch?v=92EemktB_gE",
  },
  {
    id: "photoshop-ipad-role",
    week: 4,
    app: "Photoshop",
    level: "старт",
    time: "35-50 хв",
    title: "Adobe Photoshop for iPad 2026",
    description: "Свіжий beginner video tutorial по Photoshop на iPad: інтерфейс, шари, основні дії.",
    skills: ["Video", "YouTube", "Beginner", "iPad"],
    badges: ["Video", "YouTube", "Beginner"],
    project: "Відкрий один стікер і зроби міні-постер із фоном та тінню.",
    source: "YouTube · Photoshop iPad",
    url: "https://www.youtube.com/watch?v=p1tCslFdOKk",
  },
  {
    id: "photoshop-dark-scene",
    week: 4,
    app: "Photoshop",
    level: "малювання",
    time: "20-35 хв",
    title: "Basic Digital Drawing in Photoshop on iPad",
    description: "Відео про базове цифрове малювання в Photoshop на iPad.",
    skills: ["Video", "YouTube", "Drawing", "шари"],
    badges: ["Video", "YouTube", "Drawing"],
    project: "Намалюй простий предмет або фрукт і додай 2 шари тіней.",
    source: "YouTube · Photoshop iPad",
    url: "https://www.youtube.com/watch?v=cqYAoL0u6QE",
  },
  {
    id: "photoshop-character-colour",
    week: 4,
    app: "Photoshop",
    level: "drawing",
    time: "25-40 хв",
    title: "How to Draw on iPad with Photoshop",
    description: "Відео-урок про малювання на iPad у Photoshop: пензлі, шари, базовий процес.",
    skills: ["Video", "YouTube", "Drawing", "Brush"],
    badges: ["Video", "YouTube", "Drawing"],
    project: "Перефарбуй одного маскота в 3 настрої: sweet, spooky, neon.",
    source: "YouTube · Photoshop iPad",
    url: "https://www.youtube.com/watch?v=Wnp5JeoI4Ws",
  },
  {
    id: "photoshop-cutout",
    week: 4,
    app: "Photoshop",
    level: "beginner",
    time: "45-60 хв",
    title: "Adobe Photoshop for iPad 2022",
    description: "Beginner video tutorial: базовий Photoshop iPad workflow, шари, інструменти, редагування.",
    skills: ["Video", "YouTube", "Beginner", "шари"],
    badges: ["Video", "YouTube", "Beginner"],
    project: "Зроби обкладинку для свого стікерпаку: фон, заголовок, 3 стікери.",
    source: "YouTube · Photoshop iPad",
    url: "https://www.youtube.com/watch?v=0mOvVavP0mU",
  },
  {
    id: "photoshop-sticker-sheet",
    week: 4,
    app: "Photoshop",
    level: "огляд",
    time: "20-30 хв",
    title: "Photoshop on iPad for Digital Artists",
    description: "Відео для художників: що реально зручно робити в Photoshop на iPad і як включити його у workflow.",
    skills: ["Video", "YouTube", "Workflow", "artist"],
    badges: ["Video", "YouTube", "Workflow"],
    project: "Фінал: сторінка з 9 стікерами + фонова обкладинка для портфоліо.",
    source: "YouTube · Photoshop iPad",
    url: "https://www.youtube.com/watch?v=pyn_kH7h0wQ",
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

const appVersion = "ipad-art-v2";
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
          ${(lesson.badges || []).map((badge) => `<span class="tag">${escapeHtml(badge)}</span>`).join("")}
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
