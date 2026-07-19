import { englishIrregularVerbs, englishLearningResources, englishTopics } from "@/data/language-practice";
import { LanguagePracticeView } from "@/components/languages/language-practice-view";

export default function EnglishPage() {
  return (
    <LanguagePracticeView
      eyebrow="English"
      title="Англійська A1-A2"
      description="Практична англійська A1-A2 для роботи, дизайну, клієнтів і простих повідомлень: правила, приклади, галочки, тести з вибором і таблиця irregular verbs."
      topics={englishTopics}
      progressCollection="englishProgress"
      quizCollection="englishQuizResults"
      resources={englishLearningResources}
      irregularVerbs={englishIrregularVerbs}
    />
  );
}
