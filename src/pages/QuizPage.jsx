import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { QUIZ_QUESTIONS, QUIZ_RESULT_MAPPING } from '../data/quiz';

function QuizPage({ onFinish }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState({});

  const handleAnswer = (optionScore) => {
    const newScores = { ...scores };
    Object.entries(optionScore).forEach(([key, value]) => {
      newScores[key] = (newScores[key] || 0) + value;
    });
    setScores(newScores);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      let winner = "web";
      let maxScore = 0;

      Object.entries(newScores).forEach(([key, value]) => {
        if (value > maxScore) {
          maxScore = value;
          winner = key;
        }
      });

      const result = QUIZ_RESULT_MAPPING[winner] || { main: 'web', sub: 'fullstack' };
      onFinish(result);
    }
  };

  const question = QUIZ_QUESTIONS[currentStep];

  return (
    <div className="py-8 md:py-12 px-4 animate-fade-in">
      <div className="w-full max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>Questão {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
            <span>{Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}%</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500"
              style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>

        <Card className="space-y-6 md:space-y-8 p-6 md:p-10 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white leading-tight">{question.question}</h2>
          <div className="grid gap-3 md:gap-4">
            {question.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt.score)}
                className="w-full text-left p-4 md:p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300 group flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <span className="text-slate-200 text-base md:text-lg group-hover:text-white transition-colors">{opt.text}</span>
                <ChevronRight className="text-slate-600 group-hover:text-indigo-400 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default QuizPage;
