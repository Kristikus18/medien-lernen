export type SaveStatus = "idle" | "saving" | "saved" | "error";

export type StudyStatus = "Neu" | "Lernen" | "Unsicher" | "Gelernt";

export type ModuleBlockKey =
  | "lernziele"
  | "kundenbrief"
  | "lap"
  | "theorie"
  | "fachwoerter"
  | "phrases"
  | "english"
  | "research"
  | "moodboard"
  | "sketches"
  | "drawing"
  | "software"
  | "ai"
  | "project"
  | "bonus"
  | "correction"
  | "deliverables"
  | "quality"
  | "delivery"
  | "time"
  | "quiz"
  | "reflection"
  | "ausbildungsnachweis"
  | "learned"
  | "selfAssessment"
  | "competencies";

export interface LearningModule {
  id: string;
  number: number;
  title: string;
  client: string;
  field: string;
  summary: string;
  software: string[];
  finalDeliverables: string[];
  progress?: number;
}

export interface ModuleBlock {
  key: ModuleBlockKey;
  title: string;
  eyebrow: string;
  items: string[];
}

export interface CustomerBrief {
  company: string;
  industry: string;
  targetGroup: string;
  request: string;
  avoid: string;
  pages?: string;
}

export interface VocabularyWord {
  id: string;
  german: string;
  article: string;
  plural: string;
  ukrainian: string;
  english: string;
  simpleGerman: string;
  exampleGerman: string;
  exampleUkrainian: string;
  category: string;
  moduleId: string;
  status: StudyStatus;
  difficulty: "A1" | "A2" | "B1" | "B2";
  ownSentence?: string;
  lastReviewedAt?: string;
  createdAt?: unknown;
  updatedAt?: unknown;
  userId?: string;
}

export interface ProfessionalPhrase {
  id: string;
  german: string;
  ukrainian: string;
  english: string;
  category: string;
  status: StudyStatus;
  ownExample?: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
  done?: boolean;
  note?: string;
  fileId?: string;
  ready?: boolean;
}

export interface ResearchCompetitor {
  id: string;
  name: string;
  link: string;
  logo: string;
  colors: string;
  fonts: string;
  targetGroup: string;
  likes: string;
  dislikes: string;
  inspiration: string;
  difference: string;
}

export interface MoodboardItem {
  id: string;
  type: "image" | "link" | "color" | "font" | "note";
  title: string;
  value: string;
  order: number;
  filePath?: string;
}

export interface ProjectFile {
  id: string;
  name: string;
  type: string;
  size: number;
  downloadUrl: string;
  storagePath: string;
  moduleId: string;
  createdAt?: unknown;
  updatedAt?: unknown;
  userId?: string;
}

export interface TimeEntry {
  id: string;
  category: TimeCategory;
  plannedMinutes: number;
  actualMinutes: number;
  startedAt?: string;
  running: boolean;
  note?: string;
  moduleId: string;
  createdAt?: unknown;
  updatedAt?: unknown;
  userId?: string;
}

export interface DrawingProgress {
  id: string;
  taskId: string;
  done: boolean;
  note?: string;
  createdAt?: unknown;
  updatedAt?: unknown;
  userId?: string;
}

export type TimeCategory =
  | "Research"
  | "Moodboard"
  | "Sketches"
  | "Illustrator"
  | "Photoshop"
  | "Mockups"
  | "Presentation"
  | "Language Learning"
  | "Theory"
  | "Corrections"
  | "iPad Drawing"
  | "Hand Drawing"
  | "WordPress"
  | "Elementor"
  | "Figma"
  | "InDesign";

export interface QuizQuestion {
  id: string;
  type: "single" | "article" | "translation" | "trueFalse" | "fachgespraech";
  question: string;
  options: string[];
  answer: string;
  help: string;
}

export interface QuizResult {
  id: string;
  moduleId: string;
  score: number;
  percent: number;
  total: number;
  mistakes: string[];
  createdAt?: unknown;
  updatedAt?: unknown;
  userId?: string;
}

export interface NoteItem {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  createdAt?: unknown;
  updatedAt?: unknown;
  userId?: string;
}

export interface SelfAssessment {
  id: string;
  ratings: Record<string, number>;
  reflection: string;
  createdAt?: unknown;
  updatedAt?: unknown;
  userId?: string;
}

export interface ModuleProgressState {
  moduleId: string;
  checkedTasks: Record<string, boolean>;
  blockNotes: Record<string, string>;
  reflection: Record<string, string>;
  learned: string;
  selfAssessment: Record<string, number>;
  updatedAt?: unknown;
  userId?: string;
}
