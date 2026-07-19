import { germanGrammarTopics } from "@/data/language-practice";
import { LanguagePracticeView } from "@/components/languages/language-practice-view";

export default function DeutschGrammatikPage() {
  return (
    <LanguagePracticeView
      eyebrow="Deutsch Grammatik"
      title="Німецька граматика A1-B1"
      description="Окрема легка вкладка для граматики: короткі правила, приклади, галочки і тести з вибором. Добре для Alltag, Berufsschule і Fachgespräch."
      topics={germanGrammarTopics}
      progressCollection="germanGrammarProgress"
      quizCollection="germanGrammarQuizResults"
    />
  );
}
