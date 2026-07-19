import { germanDictationTasks, germanGrammarTopics, germanLearningResources } from "@/data/language-practice";
import { LanguagePracticeView } from "@/components/languages/language-practice-view";

export default function DeutschGrammatikPage() {
  return (
    <LanguagePracticeView
      eyebrow="Deutsch Grammatik"
      title="Німецька граматика A1-B2"
      description="Окрема вкладка для граматики, B2-курсу, читання, слухання, диктантів і власного словника. Правила прості, але з прикладами для Alltag, Berufsschule і Fachgespräch."
      topics={germanGrammarTopics}
      progressCollection="germanGrammarProgress"
      quizCollection="germanGrammarQuizResults"
      resources={germanLearningResources}
      dictations={germanDictationTasks}
    />
  );
}
