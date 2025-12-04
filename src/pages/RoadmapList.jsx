import { Award, Globe, ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import Card from '../components/ui/Card';
import { ROADMAPS } from '../data/roadmaps';

function RoadmapList({ onSelectRoadmap }) {
  
  const renderIcon = (iconName, size = 24) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent size={size} /> : null;
  };
  return (
    <div className="py-8 md:py-12 animate-fade-in">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Escolha sua trilha</h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Mapas de aprendizado completos e gratuitos. Selecione uma área para ver opções específicas (Ex: Front-end, Flutter, AWS).
        </p>
      </div>

      <div className="mb-12 md:mb-16">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Award className="text-indigo-400" size={24} /> Trilhas Principais
        </h3>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {Object.entries(ROADMAPS)
            .filter(([_, data]) => data.category === 'main')
            .map(([key, data]) => (
            <Card
              key={key}
              onClick={() => onSelectRoadmap(key)}
              className="group hover:border-indigo-500/50 cursor-pointer relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/20"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className="relative z-10 flex gap-6 items-start">
                <div className={`w-16 h-16 shrink-0 rounded-xl bg-gradient-to-br ${data.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {renderIcon(data.iconName, 32)}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all">{data.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{data.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {Object.values(data.subtracks).map((sub, i) => (
                      <span key={i} className="text-[10px] px-2 py-1 bg-slate-800/80 rounded text-slate-300 border border-slate-700/50 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-all">
                        {sub.title}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-indigo-400 font-semibold group-hover:text-cyan-400 transition-colors">
                    Explorar Trilha <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <Globe className="text-cyan-400" size={24} /> Especializações e Infraestrutura
          </h3>
          <span className="hidden md:block text-xs text-slate-500 font-medium">Áreas avançadas e nichos</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {Object.entries(ROADMAPS)
            .filter(([_, data]) => data.category === 'spec')
            .map(([key, data]) => (
            <Card
              key={key}
              onClick={() => onSelectRoadmap(key)}
              className="group hover:border-cyan-500/40 cursor-pointer relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${data.color} opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity`} />

              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-12 h-12 shrink-0 rounded-lg bg-gradient-to-br ${data.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {renderIcon(data.iconName, 24)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{data.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{data.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {Object.values(data.subtracks).map((sub, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 bg-slate-800/80 rounded text-slate-300 border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors">
                      {sub.title}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-xs text-slate-500 font-medium group-hover:text-cyan-400 transition-colors">
                  Ver Detalhes <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoadmapList;
