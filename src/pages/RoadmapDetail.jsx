import { useState } from 'react';
import {
  Monitor, Laptop, MousePointer2, Settings, Wifi, HardDrive,
  Dumbbell, Code2, HelpCircle, Users, CheckCircle2, RefreshCcw,
  Terminal, BookOpen
} from 'lucide-react';
import * as Icons from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { ROADMAPS } from '../data/roadmaps';

function RoadmapDetail({ type, subType, onBack }) {
  const mainData = ROADMAPS[type];
  const [activeTab, setActiveTab] = useState(subType || mainData.defaultTab);
  const subData = mainData.subtracks[activeTab];

  
  const renderIcon = (iconName, size = 24) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent size={size} /> : null;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 animate-fade-in">
      <Button variant="ghost" onClick={onBack} className="mb-6 pl-0 hover:pl-2 transition-all">
        ← Voltar para áreas
      </Button>

      {}
      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
        <div className={`p-5 rounded-2xl bg-gradient-to-br ${mainData.color} text-white shadow-2xl hover:scale-105 transition-transform duration-300 w-fit`}>
          {renderIcon(mainData.iconName, 48)}
        </div>
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">{mainData.title}</h1>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl">{mainData.description}</p>
        </div>
      </div>

      {}
      <div className="flex flex-wrap gap-2 mb-10 p-1.5 bg-slate-900/60 backdrop-blur-sm rounded-xl border border-slate-800/80 shadow-lg w-fit">
        {Object.entries(mainData.subtracks).map(([key, data]) => (
          <Button
            key={key}
            variant={activeTab === key ? "activeTab" : "ghost"}
            onClick={() => setActiveTab(key)}
            className="text-sm px-4 py-2.5 h-auto hover:bg-slate-800/50"
          >
            <span className="flex items-center gap-2">
              {renderIcon(data.iconName, 18)}
              <span>{data.title}</span>
            </span>
          </Button>
        ))}
      </div>

      {}
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">

        {}
        <div className="lg:col-span-2 space-y-8">
          {subData.desc && (
            <div className="mb-6 p-4 bg-slate-800/30 border-l-4 border-cyan-500 rounded-r-lg">
              <p className="text-sm text-slate-300 leading-relaxed italic">{subData.desc}</p>
            </div>
          )}

          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-indigo-500/30 before:to-transparent">
            {subData.steps.map((step, idx) => (
              <div key={idx} className="relative flex items-center group pl-12">

                {}
                <div className="absolute left-0 flex items-center justify-center w-11 h-11 rounded-full border-4 border-slate-950 bg-gradient-to-br from-indigo-500 to-purple-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300 text-white shadow-lg z-10">
                  <span className="font-bold text-sm">{idx + 1}</span>
                </div>

                <Card className="w-full p-6 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 group-hover:-translate-y-0.5">
                  <div className="mb-4">
                    <h3 className="font-bold text-xl text-white mb-2 group-hover:text-indigo-400 transition-colors">{step.phase}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xs uppercase tracking-wider text-indigo-400 font-bold mb-2.5">Tecnologias</h4>
                    <div className="flex flex-wrap gap-2">
                      {step.techs.map((t, i) => (
                        <span key={i} className="px-2.5 py-1.5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-md text-xs text-indigo-300 font-mono border border-indigo-500/20 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all cursor-default">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {step.project && (
                    <div className="p-3.5 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-lg border border-emerald-500/30 mb-3 hover:border-emerald-500/50 transition-colors">
                      <div className="flex items-center gap-2 mb-2 text-emerald-400 text-xs font-bold">
                        <Terminal size={16} /> Projeto Prático
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">{step.project}</p>
                    </div>
                  )}

                  {step.resources && (
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-cyan-400 font-bold mb-2">Onde Estudar (Grátis)</h4>
                      <ul className="space-y-2">
                        {step.resources.map((r, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors group/resource p-1.5 rounded hover:bg-cyan-500/5">
                            <BookOpen size={14} className="shrink-0 group-hover/resource:scale-110 transition-transform" />
                            <span className="group-hover/resource:translate-x-0.5 transition-transform">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>

          {}
          {mainData.setup && (
            <div className="mt-12 pt-8 border-t border-slate-800/50">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                  <Monitor size={22} className="text-indigo-400"/> Setup
                </h3>
                <p className="text-sm text-slate-500">Requisitos de hardware e ambiente</p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">

                {}
                <Card className="p-5 bg-gradient-to-br from-indigo-500/5 to-transparent border-indigo-500/20 hover:border-indigo-500/40 flex flex-col h-full transition-all duration-300 group">
                  <div className="flex gap-3 items-start mb-4">
                    <div className="p-2 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                      <Laptop size={20} className="text-indigo-400 shrink-0"/>
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">{mainData.setup.machine.title}</h4>
                  </div>
                  <div className="space-y-4 flex-1">
                    <div>
                      <p className="text-xs uppercase font-bold text-slate-500 mb-1.5">Mínimo Viável</p>
                      <p className="text-sm text-slate-300 leading-relaxed">{mainData.setup.machine.min}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-emerald-400 mb-1.5">Ideal / Recomendado</p>
                      <p className="text-sm text-white font-medium leading-relaxed">{mainData.setup.machine.rec}</p>
                    </div>
                  </div>
                  {mainData.setup.machine.tip && (
                    <div className="mt-4 pt-4 border-t border-slate-800/50 flex gap-2">
                      <HardDrive size={16} className="text-indigo-400 shrink-0 mt-0.5"/>
                      <p className="text-xs text-indigo-300 leading-relaxed">{mainData.setup.machine.tip}</p>
                    </div>
                  )}
                </Card>

                {}
                <Card className="p-5 bg-gradient-to-br from-cyan-500/5 to-transparent border-cyan-500/20 hover:border-cyan-500/40 flex flex-col h-full transition-all duration-300 group">
                  <div className="flex gap-3 items-start mb-4">
                    <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                      <MousePointer2 size={20} className="text-cyan-400 shrink-0"/>
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">{mainData.setup.visual.title}</h4>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed flex-1">{mainData.setup.visual.desc}</p>
                  {mainData.setup.visual.tip && (
                    <div className="mt-4 pt-4 border-t border-slate-800/50 flex gap-2">
                      <Monitor size={16} className="text-cyan-400 shrink-0 mt-0.5"/>
                      <p className="text-xs text-cyan-300 leading-relaxed">{mainData.setup.visual.tip}</p>
                    </div>
                  )}
                </Card>

                {}
                <Card className="p-5 bg-gradient-to-br from-emerald-500/5 to-transparent border-emerald-500/20 hover:border-emerald-500/40 flex flex-col h-full transition-all duration-300 group">
                  <div className="flex gap-3 items-start mb-4">
                    <div className="p-2 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                      <Settings size={20} className="text-emerald-400 shrink-0"/>
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">{mainData.setup.system.title}</h4>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed flex-1">{mainData.setup.system.desc}</p>
                  {mainData.setup.system.tip && (
                    <div className="mt-4 pt-4 border-t border-slate-800/50 flex gap-2">
                      <Wifi size={16} className="text-emerald-400 shrink-0 mt-0.5"/>
                      <p className="text-xs text-emerald-300 leading-relaxed">{mainData.setup.system.tip}</p>
                    </div>
                  )}
                </Card>
              </div>
            </div>
          )}

        </div>

        {}
        <div className="space-y-6">

          {}
          {mainData.comparison && (
            <Card className="border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center gap-2 mb-5">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Monitor size={20} className="text-purple-400"/>
                </div>
                <h3 className="font-bold text-lg text-white">{mainData.comparison.title}</h3>
              </div>

              <div className="space-y-4">
                {mainData.comparison.headers.map((header, headerIdx) => {
                  const isActive = activeTab.toLowerCase().includes(header.toLowerCase().split(' ')[0]);
                  return (
                    <div
                      key={headerIdx}
                      className={`p-4 rounded-lg border transition-all duration-300 ${
                        isActive
                          ? 'border-cyan-400/40 bg-cyan-500/5 shadow-md'
                          : 'border-slate-800/50 bg-slate-800/20 hover:bg-slate-800/40'
                      }`}
                    >
                      <h4 className={`text-base font-bold mb-3 ${isActive ? 'text-cyan-400' : 'text-white'}`}>
                        {header}
                      </h4>

                      <div className="space-y-2.5">
                        {mainData.comparison.rows.map((row, rowIdx) => (
                          <div key={rowIdx} className="flex items-start gap-2">
                            <div className={`w-1 h-1 rounded-full mt-1.5 shrink-0 ${isActive ? 'bg-cyan-400' : 'bg-purple-400'}`} />
                            <div className="flex-1 min-w-0">
                              <span className="text-xs font-semibold text-slate-400">
                                {row[0]}:
                              </span>
                              <span className="text-xs text-slate-300 ml-1">
                                {row[headerIdx + 1]}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          )}

          {}
          {subData.tips && (
            <Card className="bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border-indigo-500/30 hover:border-indigo-500/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-5">
                <div className="p-2 rounded-lg bg-indigo-500/20">
                  <HelpCircle size={20} className="text-indigo-400"/>
                </div>
                <h3 className="font-bold text-lg text-indigo-400">Dicas Essenciais</h3>
              </div>
              <ul className="space-y-3">
                {subData.tips.map((tip, idx) => (
                  <li key={idx} className="text-sm text-slate-300 flex gap-3 p-2 rounded-lg hover:bg-indigo-500/5 transition-colors group/tip">
                    <CheckCircle2 size={18} className="text-indigo-400 shrink-0 mt-0.5 group-hover/tip:scale-110 group-hover/tip:text-indigo-300 transition-all" />
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {}
          {subData.practice && (
            <Card className="border-rose-500/20 bg-gradient-to-br from-rose-500/5 to-transparent hover:border-rose-500/40 transition-all duration-300">
              <div className="flex items-center gap-2 mb-5">
                <div className="p-2 rounded-lg bg-rose-500/10">
                  <Dumbbell size={20} className="text-rose-400"/>
                </div>
                <h3 className="font-bold text-lg text-white">Plataformas de Prática</h3>
              </div>
              <div className="space-y-3">
                {subData.practice.map((item, idx) => (
                  <div key={idx} className="group flex items-start gap-3 p-3.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-rose-500/40 hover:shadow-lg hover:shadow-rose-500/10 transition-all cursor-default">
                    <div className="shrink-0 p-2 bg-rose-500/10 rounded-lg text-rose-400 group-hover:text-rose-300 group-hover:bg-rose-500/20 group-hover:scale-110 transition-all">
                      <Code2 size={16} />
                    </div>
                    <div className="flex-1">
                      <span className="block text-sm font-bold text-white mb-1">{item.name}</span>
                      <span className="block text-xs text-slate-400 leading-relaxed">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {}
          <Card className="border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex items-center gap-2 mb-5">
              <div className="p-2 rounded-lg bg-cyan-500/10">
                <Users size={20} className="text-cyan-400"/>
              </div>
              <h3 className="font-bold text-lg text-white">Comunidades BR</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {["He4rt Developers", "Rocketseat", "Flutterando", "SouJava", "React Brasil", "Web3Devs"].map(c => (
                <span key={c} className="text-xs px-3 py-1.5 bg-slate-800/80 rounded-lg hover:bg-cyan-500/10 border border-slate-700/50 hover:border-cyan-500/40 cursor-pointer text-slate-300 hover:text-cyan-400 transition-all font-medium">
                  {c}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">Procure no Discord ou Twitter para se conectar.</p>
          </Card>

        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-slate-800/50 text-center">
        <Button variant="outline" onClick={onBack} className="px-8 py-4 text-base">
          <RefreshCcw size={18} className="mr-2"/> Explorar outras áreas
        </Button>
      </div>
    </div>
  );
}

export default RoadmapDetail;
