import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './pages/Hero';
import QuizPage from './pages/QuizPage';
import RoadmapList from './pages/RoadmapList';
import RoadmapDetail from './pages/RoadmapDetail';
import Button from './components/ui/Button';

export default function App() {
  const [view, setView] = useState('home');
  const [selectedRoadmap, setSelectedRoadmap] = useState({ type: null, subType: null });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleQuizFinish = (result) => {
    setSelectedRoadmap({ type: result.main, subType: result.sub });
    setView('roadmap_detail');
  };

  const handleSelectRoadmap = (key) => {
    setSelectedRoadmap({ type: key, subType: null });
    setView('roadmap_detail');
  };

  const NavLink = ({ target, children }) => (
    <button
      onClick={() => { setView(target); setMobileMenuOpen(false); }}
      className={`text-sm font-medium hover:text-cyan-400 transition-colors ${view === target ? 'text-white' : 'text-slate-400'}`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">

      {}
      <nav className={`sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg ${view !== 'home' ? 'border-b border-white/5' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => setView('home')}
            >
              <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-cyan-500/20 transition-all">
                D
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                DevRoad<span className="animate-pulse text-cyan-400">_</span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <NavLink target="home">Início</NavLink>
              <NavLink target="roadmap_list">Trilhas</NavLink>
              <Button variant="outline" className="h-9 px-4 text-sm" onClick={() => setView('quiz')}>
                Quiz Vocacional
              </Button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-400 hover:text-white">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-900 p-4 space-y-4">
            <button onClick={() => { setView('home'); setMobileMenuOpen(false); }} className="block w-full text-left text-slate-300 py-2">Início</button>
            <button onClick={() => { setView('roadmap_list'); setMobileMenuOpen(false); }} className="block w-full text-left text-slate-300 py-2">Trilhas</button>
            <button onClick={() => { setView('quiz'); setMobileMenuOpen(false); }} className="block w-full text-left text-cyan-400 font-bold py-2">Fazer Quiz</button>
          </div>
        )}
      </nav>

      {}
      <main className={view === 'home' ? 'flex-1 flex flex-col' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'}>

        {view === 'home' && (
          <Hero
            onStartQuiz={() => setView('quiz')}
            onBrowse={() => setView('roadmap_list')}
          />
        )}

        {view === 'quiz' && (
          <QuizPage onFinish={handleQuizFinish} />
        )}

        {view === 'roadmap_list' && (
          <RoadmapList onSelectRoadmap={handleSelectRoadmap} />
        )}

        {view === 'roadmap_detail' && selectedRoadmap.type && (
          <RoadmapDetail
            type={selectedRoadmap.type}
            subType={selectedRoadmap.subType}
            onBack={() => setView('roadmap_list')}
          />
        )}

      </main>

      <footer className={`${view !== 'home' ? 'border-t border-white/5 bg-slate-950' : 'bg-transparent'} py-8 md:py-12 mt-auto`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-xs font-bold text-white">D</div>
            <span className="text-slate-400 font-medium">DevRoad Project</span>
          </div>
          <p className="text-slate-600 text-sm text-center md:text-right">
            Feito com React e Tailwind <br/>
            Conteúdo 100% gratuito para a comunidade.
          </p>
        </div>
      </footer>
    </div>
  );
}
