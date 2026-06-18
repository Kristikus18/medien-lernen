const course = window.LEARNING_DATA || [];
const appVersion = "medien-praxis-v1";
const storageKey = "medien-praxis-progress-v1";
const selectionKey = "medien-praxis-selection-v1";

const state = {
  weekIndex: getInitialWeekIndex(),
  dayIndex: 0,
  mode: "task",
  query: "",
};

state.dayIndex = getInitialDayIndex(state.weekIndex);

const progress = loadJson(storageKey);

const weekTabs = document.querySelector("#weekTabs");
const dayTabs = document.querySelector("#dayTabs");
const daySummary = document.querySelector("#daySummary");
const content = document.querySelector("#content");
const searchInput = document.querySelector("#searchInput");
const modeTabs = [...document.querySelectorAll(".mode-tab")];
const progressValue = document.querySelector("#progressValue");

const groupProfiles = [
  {
    match: ["Grafik", "Print", "Publishing"],
    role: "Grafik, Print und Publishing",
    scenario: "Ти працюєш над візуальним матеріалом для клієнта і маєш підготувати чистий, зрозумілий Entwurf.",
    tools: ["Photoshop", "Illustrator", "InDesign", "PDF Export"],
    output: "один макет або короткий PDF з результатом",
  },
  {
    match: ["Medienfirma", "Arbeitsabläufe"],
    role: "Agenturorganisation",
    scenario: "Ти отримуєш внутрішнє агентурне завдання і організовуєш роботу так, щоб команда могла швидко продовжити.",
    tools: ["Ordnerstruktur", "Briefing", "Checkliste", "Projektablage"],
    output: "структурований проєктний документ або папка",
  },
  {
    match: ["Zielgruppen", "Marktanalyse"],
    role: "Analyse und Strategie",
    scenario: "Клієнт хоче краще зрозуміти ринок, Zielgruppe і конкурентів перед створенням кампанії.",
    tools: ["Persona", "Recherche", "Tabelle", "Analysebericht"],
    output: "короткий Analysebericht з висновками",
  },
  {
    match: ["Marketing", "Branding"],
    role: "Marketing und Marke",
    scenario: "Клієнт хоче чіткішу Markenwirkung і зрозумілу Werbebotschaft для своєї аудиторії.",
    tools: ["Brand Board", "AIDA", "Marketing-Mix", "Kampagnenanalyse"],
    output: "коротке Marken- або Kampagnenkonzept",
  },
  {
    match: ["Kommunikationsstrategie", "Kampagnen"],
    role: "Kampagnenplanung",
    scenario: "Ти плануєш Kampagne: ціль, канали, бюджет, час і зрозумілий Ablauf для клієнта.",
    tools: ["Mediaplan", "Budget", "Zeitplan", "Kanalstrategie"],
    output: "таблиця або презентація з Kampagnenplan",
  },
  {
    match: ["Texten", "PR"],
    role: "Text und Public Relations",
    scenario: "Ти пишеш професійний текст для реклами, Social Media або Pressearbeit і перевіряєш Tonalität.",
    tools: ["Headline", "Slogan", "Storytelling", "Pressemitteilung"],
    output: "готовий текстовий Entwurf з коротким поясненням",
  },
  {
    match: ["Kundenkommunikation", "Projektmanagement"],
    role: "Kundenarbeit und Projektsteuerung",
    scenario: "Ти спілкуєшся з клієнтом, уточнюєш Briefing, плануєш Aufgaben і готуєш зрозумілу Präsentation.",
    tools: ["Briefing", "Protokoll", "Meilensteine", "Präsentation"],
    output: "Briefing, Protokoll або Kundenpräsentation",
  },
  {
    match: ["Medien, Sponsoring", "Kooperationen"],
    role: "Kooperation und Produktion",
    scenario: "Ти плануєш співпрацю, Werbematerialien або Produktionsablauf з партнером чи Druckerei.",
    tools: ["Partnerliste", "Materialliste", "Freigabe", "Produktionsplan"],
    output: "Kooperations- або Produktionsplan",
  },
  {
    match: ["Digitales Marketing"],
    role: "Digital Marketing",
    scenario: "Ти аналізуєш цифровий канал і плануєш Maßnahmen для SEO, Social Media, Newsletter або Reporting.",
    tools: ["SEO", "Analytics", "Content Plan", "Newsletter"],
    output: "digitaler Maßnahmenplan або kurzer Report",
  },
  {
    match: ["Software", "Digitale Werkzeuge"],
    role: "Software und Umsetzung",
    scenario: "Ти тренуєш конкретний інструмент і створюєш маленький результат, який можна показати в Portfolio.",
    tools: ["Excel", "PowerPoint", "Adobe", "WordPress", "Google Ads"],
    output: "практичний файл або Screenshot з поясненням",
  },
  {
    match: ["Abschlussprojekt", "Portfolio"],
    role: "Abschlussprojekt und Portfolio",
    scenario: "Ти збираєш фінальний клієнтський проєкт: Analyse, Strategie, Kampagne, Planung und Präsentation.",
    tools: ["Analyse", "Strategie", "Kampagne", "Portfolio"],
    output: "частина фінальної Kundenpräsentation",
  },
];

function loadJson(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
  renderProgress();
}

function loadSelection() {
  return loadJson(selectionKey);
}

function saveSelection() {
  localStorage.setItem(selectionKey, JSON.stringify({
    weekId: currentWeek().id,
    dayId: currentDay().id,
  }));
}

function getInitialWeekIndex() {
  const params = new URLSearchParams(window.location.search);
  const week = params.get("week");
  if (week) {
    const index = course.findIndex((item) => item.id === week || item.title.toLowerCase() === week.toLowerCase());
    if (index >= 0) return index;
  }
  const saved = loadSelection();
  if (saved.weekId) {
    const index = course.findIndex((item) => item.id === saved.weekId);
    if (index >= 0) return index;
  }
  return 0;
}

function getInitialDayIndex(weekIndex) {
  const week = course[weekIndex];
  if (!week) return 0;
  const params = new URLSearchParams(window.location.search);
  const day = params.get("day");
  if (day) {
    const index = week.days.findIndex((item) => item.id === day || item.label.toLowerCase() === day.toLowerCase());
    if (index >= 0) return index;
  }
  const saved = loadSelection();
  if (saved.dayId) {
    const index = week.days.findIndex((item) => item.id === saved.dayId);
    if (index >= 0) return index;
  }
  return 0;
}

function currentWeek() {
  return course[state.weekIndex];
}

function currentDay() {
  return currentWeek().days[state.dayIndex];
}

function groupName(week, day) {
  return day.group || week.group || "Praxis";
}

function profileFor(group) {
  return groupProfiles.find((profile) => profile.match.some((part) => group.includes(part))) || groupProfiles[0];
}

function difficultyFor(weekIndex) {
  if (weekIndex < 8) return "Basis";
  if (weekIndex < 16) return "Aufbau";
  return "Projekt";
}

function taskKey(weekId, dayId) {
  return `${weekId}:${dayId}:complete`;
}

function checkKey(weekId, dayId, index) {
  return `${weekId}:${dayId}:check:${index}`;
}

function isComplete(weekId, dayId) {
  return Boolean(progress[taskKey(weekId, dayId)]);
}

function toggleComplete(weekId, dayId) {
  const key = taskKey(weekId, dayId);
  if (progress[key]) {
    delete progress[key];
  } else {
    progress[key] = Date.now();
  }
  saveProgress();
  render();
}

function toggleCheck(weekId, dayId, index) {
  const key = checkKey(weekId, dayId, index);
  if (progress[key]) {
    delete progress[key];
  } else {
    progress[key] = Date.now();
  }
  saveProgress();
  render();
}

function youtubeSearch(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function buildVideos(topic, group, day) {
  const uaTerms = (day.words || [])
    .slice(0, 5)
    .map((item) => item.translation)
    .join(" ");
  return [
    {
      language: "Українська",
      badge: "головне",
      title: "Основне відео українською",
      description: "Почни з українського пояснення. Відкриється YouTube-пошук по темі; вибери найзрозуміліше відео, подивись 10-20 хвилин і випиши 5 Fachwörter.",
      url: youtubeSearch(`${topic} ${uaTerms} українською туторіал медіадизайн маркетинг`),
      primary: true,
    },
    {
      language: "Deutsch",
      badge: "додатково",
      title: "Додаткове відео німецькою",
      description: "Відкриється німецький YouTube-пошук. Використай його для професійних слів і формулювань, які потрібні в Ausbildung.",
      url: youtubeSearch(`${topic} ${group} Deutsch Tutorial Mediengestaltung Ausbildung`),
      primary: false,
    },
    {
      language: "English",
      badge: "додатково",
      title: "Додаткове відео англійською",
      description: "Відкриється англійський YouTube-пошук. Використай його для international terms, software tutorials і digital marketing vocabulary.",
      url: youtubeSearch(`${topic} ${group} English tutorial graphic design marketing agency`),
      primary: false,
    },
  ];
}

function buildTask(week, day, dayIndex) {
  const group = groupName(week, day);
  const profile = profileFor(group);
  const topic = day.topic;
  return {
    week,
    day,
    group,
    profile,
    difficulty: difficultyFor(course.indexOf(week)),
    goal: `Потренувати професійну дію з теми "${topic}" і створити маленький результат для Portfolio.`,
    scenario: profile.scenario,
    steps: [
      `Прочитай тему "${topic}" і сформулюй коротке Mini-Briefing: Ziel, Zielgruppe, Format, Abgabe.`,
      `Знайди 2-3 приклади або референси. Запиши, що в них добре працює і що можна покращити.`,
      `Створи практичний Entwurf: таблицю, макет, текст, план або коротку презентацію залежно від теми.`,
      `Перевір якість: чи зрозумілий результат, чи підходить Zielgruppe, чи є правильна Datei/Struktur.`,
      `Зроби коротку Reflexion: що було легко, що складно, які 3 Fachwörter треба повторити.`,
    ],
    deliverable: `${profile.output}: ${topic}. Назва файлу: Woche_${week.title.replace(/\D/g, "")}_Tag_${dayIndex + 1}_${topic.replaceAll(" ", "_")}.`,
    checklist: [
      "Briefing або ціль записані",
      "Зроблена коротка Recherche",
      "Створений практичний Entwurf",
      "Перевірені Qualität, Format і Abgabe",
      "Результат доданий у Portfolio-Mappe",
    ],
    tools: profile.tools,
    videos: buildVideos(topic, group, day),
  };
}

function allTasks() {
  return course.flatMap((week) => week.days.map((day, dayIndex) => buildTask(week, day, dayIndex)));
}

function includesQuery(...values) {
  if (!state.query) return true;
  const haystack = values.join(" ").toLowerCase();
  return haystack.includes(state.query.toLowerCase());
}

function renderWeekTabs() {
  weekTabs.innerHTML = "";
  course.forEach((week, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = week.title;
    button.className = index === state.weekIndex ? "active" : "";
    button.addEventListener("click", () => {
      state.weekIndex = index;
      state.dayIndex = 0;
      saveSelection();
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
      saveSelection();
      render();
    });
    dayTabs.append(button);
  });
}

function renderSummary() {
  const week = currentWeek();
  const day = currentDay();
  const task = buildTask(week, day, state.dayIndex);
  daySummary.innerHTML = `
    <p class="eyebrow">${escapeHtml(week.title)} · ${escapeHtml(day.label)}</p>
    <h2>${escapeHtml(day.topic)}</h2>
    <p>${escapeHtml(task.goal)}</p>
    <div class="summary-meta">
      <span class="pill">${escapeHtml(task.group)}</span>
      <span class="pill green">${escapeHtml(task.difficulty)}</span>
      <span class="pill amber">${task.videos.length} Video-Links</span>
    </div>
  `;
}

function renderModeTabs() {
  modeTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });
}

function renderProgress() {
  const total = course.reduce((sum, week) => sum + week.days.length, 0);
  const done = allTasks().filter((task) => isComplete(task.week.id, task.day.id)).length;
  progressValue.textContent = `${done}/${total}`;
}

function renderTask() {
  const task = buildTask(currentWeek(), currentDay(), state.dayIndex);
  content.innerHTML = "";

  const intro = document.createElement("article");
  intro.className = "task-panel wide";
  intro.innerHTML = `
    <h3 class="section-title">Професійна ситуація</h3>
    <p>${escapeHtml(task.scenario)}</p>
  `;
  content.append(intro);

  const steps = document.createElement("article");
  steps.className = "task-panel wide";
  steps.innerHTML = `
    <h3 class="section-title">Що зробити сьогодні</h3>
    <ol class="step-list">
      ${task.steps.map((step, index) => `
        <li>
          <span class="step-number">${index + 1}</span>
          <span>${escapeHtml(step)}</span>
        </li>
      `).join("")}
    </ol>
  `;
  content.append(steps);

  const output = document.createElement("article");
  output.className = "card";
  output.innerHTML = `
    <h3 class="section-title">Результат для Abgabe</h3>
    <p>${escapeHtml(task.deliverable)}</p>
  `;
  content.append(output);

  const tools = document.createElement("article");
  tools.className = "card";
  tools.innerHTML = `
    <h3 class="section-title">Інструменти</h3>
    <div class="summary-meta">
      ${task.tools.map((tool) => `<span class="pill">${escapeHtml(tool)}</span>`).join("")}
    </div>
  `;
  content.append(tools);

  const checklist = document.createElement("article");
  checklist.className = "task-panel wide";
  checklist.innerHTML = `
    <h3 class="section-title">Checkliste</h3>
    <div class="check-list">
      ${task.checklist.map((item, index) => {
        const done = Boolean(progress[checkKey(task.week.id, task.day.id, index)]);
        return `
          <button class="check-row${done ? " done" : ""}" type="button" data-check="${index}">
            <span class="check-mark">${done ? "✓" : ""}</span>
            <span>${escapeHtml(item)}</span>
          </button>
        `;
      }).join("")}
    </div>
  `;
  checklist.querySelectorAll("[data-check]").forEach((button) => {
    button.addEventListener("click", () => toggleCheck(task.week.id, task.day.id, Number(button.dataset.check)));
  });
  content.append(checklist);

  const complete = document.createElement("article");
  complete.className = "card wide";
  const done = isComplete(task.week.id, task.day.id);
  complete.innerHTML = `
    <button class="complete-button${done ? " done" : ""}" type="button">
      ${done ? "Завдання виконано" : "Позначити день як виконаний"}
    </button>
  `;
  complete.querySelector("button").addEventListener("click", () => toggleComplete(task.week.id, task.day.id));
  content.append(complete);
}

function renderVideos() {
  const task = buildTask(currentWeek(), currentDay(), state.dayIndex);
  content.innerHTML = "";

  const guide = document.createElement("article");
  guide.className = "card wide";
  guide.innerHTML = `
    <h3 class="section-title">Як працювати з відео</h3>
    <p>Спочатку відкрий українське відео. Потім німецьке для Fachsprache і англійське для software або digital marketing terms. Після перегляду запиши 5 нових слів і 1 практичну ідею.</p>
  `;
  content.append(guide);

  const grid = document.createElement("section");
  grid.className = "video-grid wide";
  task.videos.forEach((video) => {
    const card = document.createElement("article");
    card.className = "video-card";
    card.innerHTML = `
      <div class="video-top">
        <div>
          <span class="pill${video.primary ? " green" : ""}">${escapeHtml(video.language)} · ${escapeHtml(video.badge)}</span>
          <h3 class="video-title">${escapeHtml(video.title)}</h3>
        </div>
      </div>
      <p>${escapeHtml(video.description)}</p>
      <a class="video-link${video.primary ? "" : " secondary"}" href="${video.url}" target="_blank" rel="noopener">Відкрити YouTube</a>
    `;
    grid.append(card);
  });
  content.append(grid);

  const weekVideos = document.createElement("article");
  weekVideos.className = "task-panel wide";
  weekVideos.innerHTML = `
    <h3 class="section-title">Відео для всього тижня</h3>
    <div class="check-list">
      ${currentWeek().days.map((day, index) => {
        const item = buildTask(currentWeek(), day, index);
        return `
          <div class="check-row">
            <span class="check-mark">${index + 1}</span>
            <span>
              <strong>${escapeHtml(day.topic)}</strong><br>
              <a href="${item.videos[0].url}" target="_blank" rel="noopener">українською</a> ·
              <a href="${item.videos[1].url}" target="_blank" rel="noopener">Deutsch</a> ·
              <a href="${item.videos[2].url}" target="_blank" rel="noopener">English</a>
            </span>
          </div>
        `;
      }).join("")}
    </div>
  `;
  content.append(weekVideos);
}

function renderPortfolio() {
  content.innerHTML = "";
  const tasks = allTasks().filter((task) =>
    includesQuery(task.week.title, task.day.label, task.day.topic, task.group, task.deliverable, task.profile.role)
  );
  if (!tasks.length) {
    renderEmpty();
    return;
  }
  tasks.forEach((task) => {
    const row = document.createElement("article");
    const done = isComplete(task.week.id, task.day.id);
    row.className = `portfolio-row${done ? " done" : ""}`;
    row.innerHTML = `
      <div class="portfolio-top">
        <div>
          <p class="eyebrow">${escapeHtml(task.week.title)} · ${escapeHtml(task.day.label)}</p>
          <h3 class="portfolio-title">${escapeHtml(task.day.topic)}</h3>
        </div>
        <span class="pill${done ? " green" : " amber"}">${done ? "fertig" : "offen"}</span>
      </div>
      <p>${escapeHtml(task.deliverable)}</p>
    `;
    content.append(row);
  });
}

function renderEmpty() {
  content.innerHTML = `<div class="empty-state">Нічого не знайдено.</div>`;
}

function render() {
  if (!course.length) {
    content.innerHTML = `<div class="empty-state">Дані курсу не завантажені.</div>`;
    return;
  }
  renderWeekTabs();
  renderDayTabs();
  renderSummary();
  renderModeTabs();
  renderProgress();
  if (state.mode === "task") renderTask();
  if (state.mode === "videos") renderVideos();
  if (state.mode === "portfolio") renderPortfolio();
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
    render();
  });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  if (state.mode !== "portfolio") state.mode = "portfolio";
  render();
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker
    .register("./sw.js?v=1")
    .then((registration) => registration.update())
    .catch(() => {});
}

render();
