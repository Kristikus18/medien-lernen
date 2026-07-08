const progressKey = "cases-courses-progress-v1";
const selectedKey = "cases-courses-selected-v1";

const courses = [
  {
    id: "indesign",
    title: "Робота з InDesign",
    url: "https://cases.media/learning/course/indesign-basics",
    priority: "critical",
    focus: "Print, Broschüre, Layout, PDF",
    why: "Критично для Prüfung Grafik/Print: брошури, сітка, Satzspiegel, Druckdaten.",
    result: "Зробити 4-8 сторінок mini brochure для одного клієнта.",
    german: ["das Layout", "der Satzspiegel", "die Musterseite", "der Beschnitt", "das PDF/X"],
  },
  {
    id: "illustrator",
    title: "Робота з Illustrator",
    url: "https://cases.media/learning/course/illustrator-basics",
    priority: "critical",
    focus: "Logo, Vektor, Formen",
    why: "Потрібно для логотипів, icons, vector assets і clean exports.",
    result: "Створити 1-3 logo versions і одну фінальну SVG/PDF/PNG версію.",
    german: ["die Vektorgrafik", "die Form", "die Wortmarke", "die Skalierbarkeit", "der Export"],
  },
  {
    id: "typography",
    title: "Типографія в графічному дизайні",
    url: "https://cases.media/learning/course/typography-design",
    priority: "critical",
    focus: "Typografie, Lesbarkeit, Hierarchie",
    why: "Дуже важливо для Prüfung і для всіх print/web робіт.",
    result: "Зробити typography sheet: H1, H2, Fließtext, Abstand, hierarchy.",
    german: ["die Typografie", "die Lesbarkeit", "die Hierarchie", "das Kerning", "die Laufweite"],
  },
  {
    id: "photoshop2",
    title: "Photoshop. Рівень ІІ",
    url: "https://cases.media/learning/course/photoshop-advanced",
    priority: "critical",
    focus: "Bildbearbeitung, Mockups, Social",
    why: "Корисно для social media, mockups, image correction і portfolio presentation.",
    result: "Підготувати 2 mockups і 1 social media visual для клієнтського sprint.",
    german: ["die Bildbearbeitung", "die Retusche", "die Maske", "die Auflösung", "das Mockup"],
  },
  {
    id: "webdesign",
    title: "Основи вебдизайну",
    url: "https://cases.media/learning/course/webdesign-basics",
    priority: "critical",
    focus: "Website, UI, Struktur",
    why: "Потрібно для Figma website design і WordPress/Elementor роботи.",
    result: "Зробити структуру 5-сторінкового сайту і дизайн головної сторінки.",
    german: ["die Webseite", "die Navigation", "der Call-to-Action", "responsive", "die Benutzeroberfläche"],
  },
  {
    id: "figma-text",
    title: "Робота з текстом у Figma",
    url: "https://cases.media/learning/course/figma-text",
    priority: "critical",
    focus: "Figma text, styles, hierarchy",
    why: "Допоможе робити чисті layouts і website screens у Figma.",
    result: "Створити text styles для H1, H2, body, button, caption.",
    german: ["der Textstil", "die Überschrift", "der Fließtext", "die Ausrichtung", "die Hierarchie"],
  },
  {
    id: "figma-auto",
    title: "Авторозмітки у Figma",
    url: "https://cases.media/learning/course/figma-auto-layouts",
    priority: "critical",
    focus: "Auto Layout, components",
    why: "Критично для швидкого Figma workflow і responsive layouts.",
    result: "Створити button, card, navigation і form field через Auto Layout.",
    german: ["die Komponente", "das Auto Layout", "der Abstand", "die Ausrichtung", "responsive Design"],
  },
  {
    id: "wireframes",
    title: "Схематичні макети та інтерактивні прототипи",
    url: "https://cases.media/learning/course/layouts-interactive-prototypes",
    priority: "critical",
    focus: "Wireframe, Prototyping, UX",
    why: "Допоможе швидко робити структуру сайту перед дизайном.",
    result: "Зробити wireframe 5 сторінок і simple clickable prototype.",
    german: ["der Wireframe", "der Prototyp", "die Struktur", "die Nutzerführung", "der Ablauf"],
  },
  {
    id: "design-system",
    title: "Дизайн-системи у Figma",
    url: "https://cases.media/learning/course/figma-design-system",
    priority: "critical",
    focus: "Design system, UI kit",
    why: "Потрібно для сильного portfolio: показує системність, не просто красиву картинку.",
    result: "Створити mini UI kit: colors, text styles, buttons, cards, form fields.",
    german: ["das Designsystem", "die Komponente", "die Konsistenz", "die Variante", "die Dokumentation"],
  },
  {
    id: "ai-figma",
    title: "Штучний інтелект у Figma: від дослідження до прототипу",
    url: "https://cases.media/learning/course/ai-figma-research-to-prototype",
    priority: "useful",
    focus: "AI, research, prototype",
    why: "Корисно для швидкої роботи, research, ідей і прототипів.",
    result: "Зробити AI-assisted moodboard або прототип для одного клієнта.",
    german: ["die Recherche", "der Prototyp", "die Idee", "der Prompt", "die Optimierung"],
  },
  {
    id: "frontend",
    title: "Основи фронтенду. HTML та CSS",
    url: "https://cases.media/learning/course/frontend-basics",
    priority: "useful",
    focus: "HTML, CSS, web basics",
    why: "Не треба йти глибоко в програмування, але базу для WordPress і web треба знати.",
    result: "Зрозуміти HTML structure, CSS spacing, responsive basics.",
    german: ["HTML", "CSS", "die Struktur", "der Abstand", "der Breakpoint"],
  },
  {
    id: "drawing-tablet",
    title: "Основи рисунка на графічному планшеті",
    url: "https://cases.media/learning/course/drawing-tablet-basics",
    priority: "useful",
    focus: "Drawing, sketching, iPad/tablet",
    why: "Допоможе для logo sketches, characters і ручної впевненості.",
    result: "Зробити 6 logo sketches або 10 character/body studies.",
    german: ["die Skizze", "die Linie", "die Form", "die Proportion", "die Figur"],
  },
  {
    id: "smm",
    title: "Основи SMM",
    url: "https://cases.media/learning/course/smm-basics",
    priority: "useful",
    focus: "Social media, content, campaign",
    why: "Корисно для social posts у клієнтських sprint.",
    result: "Зробити 3 post ideas + 2 stories для одного клієнта.",
    german: ["die Kampagne", "die Zielgruppe", "der Kanal", "der Beitrag", "der Call-to-Action"],
  },
  {
    id: "job",
    title: "Пошук роботи мрії: найкращі практики та стратегії",
    url: "https://cases.media/learning/course/finding-dream-job",
    priority: "useful",
    focus: "Portfolio, Bewerbung, LinkedIn",
    why: "Корисно після того, як будуть 2-3 portfolio cases.",
    result: "Оновити LinkedIn headline і написати 2 project descriptions.",
    german: ["die Bewerbung", "das Portfolio", "das Kurzprofil", "die Stelle", "die Erfahrung"],
  },
  {
    id: "javascript",
    title: "Основи JavaScript. Базовий синтаксис, умови та цикли",
    url: "https://cases.media/learning/course/javascript-basics",
    priority: "later",
    focus: "JavaScript basics",
    why: "Не критично для Prüfung Grafik/Print. Проходити легко, без занурення.",
    result: "Зрозуміти, що таке variable, condition, loop. Не витрачати багато часу.",
    german: ["die Variable", "die Bedingung", "die Schleife", "die Funktion", "der Code"],
  },
  {
    id: "blender",
    title: "Blender та основи 3D-моделювання",
    url: "https://cases.media/learning/course/blender-intensive-workshop",
    priority: "later",
    focus: "3D basics",
    why: "Можна пізніше. Для твоєї цілі зараз важливіші Adobe, Figma, WordPress, Print.",
    result: "Зробити 1 simple 3D object або просто пройти вступ.",
    german: ["das 3D-Modell", "die Szene", "das Licht", "das Material", "das Rendering"],
  },
  {
    id: "cinema4d",
    title: "Робота з Cinema 4D",
    url: "https://cases.media/learning/course/cinema4d-basics",
    priority: "later",
    focus: "3D, motion",
    why: "Можна пізніше. Не пріоритет перед Prüfung.",
    result: "Пройти базу або залишити як optional.",
    german: ["das 3D-Programm", "die Animation", "das Objekt", "das Material", "das Rendering"],
  },
];

const weeks = [
  ["indesign"],
  ["illustrator"],
  ["typography"],
  ["photoshop2"],
  ["figma-text", "figma-auto"],
  ["wireframes"],
  ["design-system"],
  ["webdesign"],
  ["frontend"],
  ["ai-figma"],
  ["drawing-tablet"],
  ["smm"],
  ["job"],
  ["javascript"],
  ["blender"],
  ["cinema4d"],
];

const state = {
  selected: localStorage.getItem(selectedKey) || courses[0].id,
};

const progress = loadProgress();

const courseList = document.querySelector("#courseList");
const courseTitle = document.querySelector("#courseTitle");
const courseLink = document.querySelector("#courseLink");
const courseDetail = document.querySelector("#courseDetail");
const criticalList = document.querySelector("#criticalList");
const usefulList = document.querySelector("#usefulList");
const laterList = document.querySelector("#laterList");
const weekPlan = document.querySelector("#weekPlan");
const doneCount = document.querySelector("#doneCount");
const progressBar = document.querySelector("#progressBar");
const resetButton = document.querySelector("#resetButton");

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(progressKey)) || {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(progressKey, JSON.stringify(progress));
}

function currentCourse() {
  return courses.find((course) => course.id === state.selected) || courses[0];
}

function priorityLabel(priority) {
  if (priority === "critical") return "критично";
  if (priority === "useful") return "корисно";
  return "пізніше";
}

function priorityTone(priority) {
  if (priority === "critical") return "critical";
  if (priority === "useful") return "useful";
  return "later";
}

function isDone(course) {
  return Boolean(progress[course.id]);
}

function toggleDone(id) {
  if (progress[id]) delete progress[id];
  else progress[id] = Date.now();
  saveProgress();
  render();
}

function selectCourse(id) {
  state.selected = id;
  localStorage.setItem(selectedKey, id);
  render();
}

function list(items) {
  return `<ul class="list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderProgress() {
  const done = courses.filter(isDone).length;
  doneCount.textContent = `${done}/${courses.length}`;
  progressBar.style.width = `${Math.round((done / courses.length) * 100)}%`;
}

function renderCourseList() {
  courseList.innerHTML = courses.map((course, index) => `
    <button class="course-button ${state.selected === course.id ? "active" : ""}" type="button" data-course="${course.id}">
      <span>${index + 1}. ${course.title}</span>
      <small>${priorityLabel(course.priority)} · ${isDone(course) ? "завершено" : "ще пройти"}</small>
    </button>
  `).join("");

  courseList.querySelectorAll("[data-course]").forEach((button) => {
    button.addEventListener("click", () => selectCourse(button.dataset.course));
  });
}

function renderDetail() {
  const course = currentCourse();
  courseTitle.textContent = course.title;
  courseLink.href = course.url;
  courseDetail.innerHTML = `
    <div class="detail-head">
      <div>
        <span class="pill ${priorityTone(course.priority)}">${priorityLabel(course.priority)}</span>
        <h3>${course.focus}</h3>
        <p>${course.why}</p>
      </div>
      <button class="done-button ${isDone(course) ? "done" : ""}" type="button" data-done="${course.id}">
        ${isDone(course) ? "Завершено" : "Позначити завершеним"}
      </button>
    </div>
    <div class="detail-grid">
      <section>
        <h4>Що зробити після курсу</h4>
        <p>${course.result}</p>
      </section>
      <section>
        <h4>Fachwörter для повторення</h4>
        ${list(course.german)}
      </section>
    </div>
  `;

  courseDetail.querySelector("[data-done]").addEventListener("click", () => toggleDone(course.id));
}

function renderPriorityBoard() {
  criticalList.innerHTML = renderMiniList("critical");
  usefulList.innerHTML = renderMiniList("useful");
  laterList.innerHTML = renderMiniList("later");
}

function renderMiniList(priority) {
  return courses.filter((course) => course.priority === priority).map((course) => `
    <button type="button" data-mini-course="${course.id}">
      <span>${course.title}</span>
      <small>${course.focus}</small>
    </button>
  `).join("");
}

function bindMiniLists() {
  document.querySelectorAll("[data-mini-course]").forEach((button) => {
    button.addEventListener("click", () => selectCourse(button.dataset.miniCourse));
  });
}

function renderWeeks() {
  weekPlan.innerHTML = weeks.map((ids, index) => {
    const weekCourses = ids.map((id) => courses.find((course) => course.id === id)).filter(Boolean);
    return `
      <article class="week-card">
        <div>
          <strong>Тиждень ${index + 1}</strong>
          <span>${weekCourses.map((course) => course.title).join(" + ")}</span>
        </div>
        <p><b>Session A:</b> подивитися уроки і зробити нотатки.</p>
        <p><b>Session B:</b> зробити маленький результат для portfolio або Prüfung.</p>
        <div class="week-actions">
          ${weekCourses.map((course) => `<button type="button" data-mini-course="${course.id}">${course.title}</button>`).join("")}
        </div>
      </article>
    `;
  }).join("");
}

function render() {
  renderProgress();
  renderCourseList();
  renderDetail();
  renderPriorityBoard();
  renderWeeks();
  bindMiniLists();
}

resetButton.addEventListener("click", () => {
  if (!confirm("Скинути прогрес CASES курсів?")) return;
  Object.keys(progress).forEach((key) => delete progress[key]);
  saveProgress();
  render();
});

render();
