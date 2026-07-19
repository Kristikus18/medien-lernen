import { englishTopics } from "@/data/language-practice";
import { LanguagePracticeView } from "@/components/languages/language-practice-view";

export default function EnglishPage() {
  return (
    <LanguagePracticeView
      eyebrow="English"
      title="Англійська A1-A2"
      description="Маленькі вправи з англійської для базової граматики і роботи: правила, приклади, галочки і тести тільки з вибором."
      topics={englishTopics}
      progressCollection="englishProgress"
      quizCollection="englishQuizResults"
    />
  );
}
