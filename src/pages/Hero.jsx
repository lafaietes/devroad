import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

function Hero({ onStartQuiz, onBrowse }) {
  return (
    <div className="relative flex flex-col justify-center items-center text-center px-4 flex-1 w-full">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[128px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/30 rounded-full blur-[128px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-4xl space-y-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-xs md:text-sm text-cyan-400 mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Guia Open Source de Educação Tech 2025
        </div>

        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white">
          Sua jornada dev <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            começa aqui.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          O <strong>DevRoad</strong> é um guia gratuito, direto e atualizado para iniciar na programação. Sem cursos caros, apenas o caminho das pedras.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button onClick={onStartQuiz} className="text-lg px-8 py-4">
            Descobrir minha área <ArrowRight size={20} />
          </Button>
          <Button variant="secondary" onClick={onBrowse} className="text-lg px-8 py-4">
            Ver Trilhas
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
