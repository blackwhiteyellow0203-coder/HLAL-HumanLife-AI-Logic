import React, { useMemo } from 'react';
import { DesignSystem } from '../types';
import { Check, BrainCircuit, LineChart, Award, Smartphone, Video, FileText, Fingerprint, Zap, ShieldCheck, Users, Layers } from 'lucide-react';

interface LandingPageProps {
  system: DesignSystem;
  onNavigate: (page: 'home' | 'legal') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ system, onNavigate }) => {
  const { colors, fontHeading, fontBody, borderRadius, glassmorphism } = system;

  // Dynamic style helpers
  const containerStyle = {
    backgroundColor: colors.bgPrimary,
    color: colors.textPrimary,
  };

  const cardStyle = {
    backgroundColor: glassmorphism ? `${colors.bgSecondary}80` : colors.bgSecondary,
    backdropFilter: glassmorphism ? 'blur(12px)' : 'none',
    borderColor: colors.border,
    borderRadius: borderRadius,
    borderWidth: '1px',
  };

  // User requested "Deep Green" for the button specifically.
  const deepGreenButtonStyle = {
    background: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)', // Emerald 900 to 700
    color: '#ffffff',
    borderRadius: borderRadius,
    boxShadow: '0 4px 20px rgba(4, 120, 87, 0.4)',
    border: '1px solid #059669'
  };

  const accentTextStyle = {
    color: colors.accent,
  };

  const navBlurStyle = {
    backgroundColor: glassmorphism ? `${colors.bgPrimary}cc` : colors.bgPrimary,
    borderColor: `${colors.border}40`,
    backdropFilter: 'blur(10px)'
  };

  // Generate random particles for the subtle atmospheric effect
  const particles = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => {
      const rand = Math.random();
      let color;
      if (rand < 0.4) color = '#dc2626'; // Red (Blood/Vitality) - 40% chance
      else if (rand < 0.7) color = '#d4af37'; // Gold (Luxury/Value) - 30% chance
      else color = '#10b981'; // Green (Data/Logic) - 30% chance

      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 2, // Slightly larger: 2px to 6px
        duration: Math.random() * 12 + 8, // 8s to 20s
        delay: Math.random() * 15,
        opacity: Math.random() * 0.4 + 0.2, // Visible but not distracting
        color: color,
      };
    });
  }, []);

  // Data for THE CORE section with specific colors for visualization
  const coreFeatures = [
    {
        icon: Fingerprint,
        title: '一般論ではない、"あなた専用"の解答',
        desc: '単なるAI検索ではありません。あなたの身体データを完全に学習したAIが回答するため、一般的な健康アドバイスとは「精度」の次元が異なります。「一般的にはこれが良い」ではなく、「今のあなたの数値なら、これを食べるべき」という、世界で唯一のパーソナルな解を即座に提案します。',
        color: '#06b6d4', // Cyan (Precision/Data)
    },
    {
        icon: Zap,
        title: '「決断コスト」からの完全な解放',
        desc: '「今日のご飯どうしよう？」「何を食べるべきか？」という些細な迷いが、貴重なウィルパワー（意志力）を消耗させます。HLALはあなたのコンシェルジュとして、常にその瞬間の最適解を提案します。「聞けば必ず正解がある」という安心感が、脳のストレスを劇的に軽減します。',
        color: '#fbbf24', // Amber/Gold (Energy/Willpower)
    },
    {
        icon: ShieldCheck,
        title: '未病の段階で摘み取る「リスク管理」',
        desc: '米国などの医療先進国では、AIの診断精度が専門医を凌駕する事例も出ています。この「医療グレードの解析力」を日々の健康管理に応用します。病気になってから治すのではなく、数値が悪化する一歩手前で踏みとどまる。これはフィットネスではなく投資になり得ます。',
        color: '#f43f5e', // Rose/Red (Health/Protection)
    },
    {
        icon: Users,
        title: 'AIの死角を人間が埋める「責任構造」',
        desc: 'AIには「ハルシネーション（もっともらしい嘘）」のリスクがゼロではありません。だからこそHLALは、不明確な点やリスクのある領域については断定を避け、「HAYATOへ相談」と返す安全装置（セーフティ）を組み込んでいます。週に一度、人間であるHAYATOがデータを直接確認し、責任ある判断を融合させています。',
        color: '#a78bfa', // Violet/Purple (Wisdom/Humanity)
    },
    {
        icon: Layers,
        title: '一生を共にする「統合型ヘルス・デバイス」',
        desc: '食事、運動、睡眠。これらをバラバラのアプリで管理する時代は終わりました。Google AI Plusの高度な演算能力を持つGeminiに、あなたの健康情報のすべてを集約します。自分の身体データを誰よりも深く理解している「もう一人の自分」をポケットに入れて持ち歩く。それが、これからの時代の健康管理です。',
        color: '#34d399', // Emerald (Growth/Ecosystem)
    }
  ];

  return (
    <div style={containerStyle} className={`min-h-screen transition-colors duration-700 ease-in-out ${fontBody} overflow-x-hidden selection:bg-white/20 flex flex-col items-center`}>
      
      {/* Static Background Layer mimicking the smoke image */}
      <div className="fixed inset-0 z-0 bg-[#000000]">
          {/* Top Left Gold Smoke */}
          <div className="absolute top-[-15%] left-[-15%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4af37] via-[#785c18] to-transparent opacity-20 blur-[100px]"></div>
          
          {/* Top Left Brighter Gold Highlight */}
          <div className="absolute top-[0%] left-[5%] w-[40%] h-[40%] rounded-full bg-[#fcd34d] opacity-10 blur-[80px] animate-breathe"></div>

          {/* Right Green/Emerald Liquid */}
          <div className="absolute top-[10%] right-[-10%] w-[60%] h-[80%] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#10b981] via-[#064e3b] to-transparent opacity-20 blur-[120px]"></div>

          {/* Right Green Intense Highlight */}
          <div className="absolute top-[30%] right-[5%] w-[30%] h-[50%] rounded-full bg-[#34d399] opacity-5 blur-[80px]"></div>
          
          {/* Bottom Left Void */}
          <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#000000] to-transparent opacity-95"></div>
      </div>

      {/* Atmospheric Particles */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
            <div 
                key={p.id}
                className="absolute rounded-full animate-float mix-blend-screen"
                style={{
                    left: p.left,
                    top: p.top,
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    backgroundColor: p.color,
                    animationDuration: `${p.duration}s`,
                    animationDelay: `${p.delay}s`,
                    opacity: 0,
                    boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
                }}
            />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-30 border-b transition-all duration-700`} style={navBlurStyle}>
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className={`text-lg tracking-[0.2em] font-bold ${fontHeading} flex items-center gap-2`}>
            <BrainCircuit size={20} style={{ color: colors.accent }} />
            HLAL
          </div>
          <div className="text-xs uppercase tracking-widest opacity-60 hidden sm:block">
            HumanLife : AI Logic
          </div>
        </div>
      </nav>

      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-32 pb-20">
        
        {/* Hero Section */}
        <header className="mb-24 relative flex flex-col items-center text-center">
            {/* Specific Accent Glows */}
            <div 
                className="absolute top-20 right-0 w-32 h-32 rounded-full opacity-20 blur-[60px] pointer-events-none"
                style={{ backgroundColor: '#d4af37' }} 
            />

            <div className="relative z-10 w-full">
                <p className="text-xs tracking-[0.3em] mb-8 font-bold flex items-center justify-center gap-2" style={accentTextStyle}>
                    <span className="w-8 h-[1px]" style={{ backgroundColor: colors.accent }}></span>
                    HUMAN LIFE : AI LOGIC
                    <span className="w-8 h-[1px]" style={{ backgroundColor: colors.accent }}></span>
                </p>
                
                {/* Refined Typography for Center Alignment */}
                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-relaxed md:leading-relaxed mb-10 ${fontHeading} animate-fade-in font-bold tracking-wide`}>
                    <span className="inline-block mb-2 md:mb-3">
                        <span style={{ color: colors.textPrimary, WebkitTextStroke: '1px #FACC15', paintOrder: 'stroke fill' }}>感覚</span>や&nbsp;
                        <span style={{ color: colors.textPrimary, WebkitTextStroke: '1px #FACC15', paintOrder: 'stroke fill' }}>感情</span>を
                        <span style={{ color: colors.textPrimary, WebkitTextStroke: '1px #EF4444', paintOrder: 'stroke fill' }}>排除</span>し
                    </span><br />
                    <span className="inline-block">
                        <span 
                          className="glitch-effect" 
                          data-text="論理・データ"
                        >
                          論理・データ
                        </span>
                        で
                        <span style={{ color: '#39ff14', textShadow: '0 0 15px rgba(57, 255, 20, 0.5)' }} className="mx-1 relative inline-block">健康</span>
                        を
                        <span className="rainbow-aura mx-1 relative inline-block" style={{ color: '#000000' }}>武装</span>
                        せよ
                    </span>
                </h1>

                {/* Credentials */}
                <div className="mb-10 animate-slide-up mx-auto max-w-2xl w-full text-center opacity-90">
                    <div className="flex flex-col gap-3 items-center">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8">
                            <div className="flex items-center gap-2">
                                <Award size={18} style={{ color: colors.accent }} />
                                <span className="text-sm font-bold tracking-wide">Google AI Essentials 修了</span>
                            </div>
                            <div className="hidden md:block w-1 h-1 rounded-full bg-white/30"></div>
                            <div className="flex items-center gap-2">
                                <Award size={18} style={{ color: colors.accent }} />
                                <span className="text-sm font-bold tracking-wide">健康管理士（取得予定）監修</span>
                            </div>
                        </div>
                        
                        <div className="w-8 h-[1px] my-1 opacity-30" style={{ backgroundColor: colors.textPrimary }}></div>
                        
                        <p className="text-xs opacity-60 text-center tracking-wider">
                           × ヨガ・トレーナー指導歴 5年以上
                        </p>
                    </div>
                </div>
                
                <p className="text-sm md:text-base leading-relaxed mb-10 opacity-90 animate-slide-up mx-auto max-w-xl" style={{ color: colors.textPrimary }}>
                    HUMAN LIFE : AI LOGICは<br/>
                    あなたの詳細なデータを学習・解析した専属AIと、<br className="hidden md:block"/>
                    専門家のサポート・監視による<br className="hidden md:block"/>
                    24時間365日最短距離の「最適解」を選択として提示します。
                </p>
                
                <div className="animate-slide-up w-full max-w-md mx-auto" style={{ animationDelay: '0.2s' }}>
                    
                    {/* Google AI Plus Info Block */}
                    <div className="mb-6 p-5 rounded-sm border border-opacity-30 bg-white/5 backdrop-blur-sm shadow-xl" style={{ borderColor: colors.accent }}>
                         <p className="text-sm md:text-base font-bold mb-3 leading-snug" style={{ color: colors.textPrimary }}>
                             必要なのは、Googleの新プラン<span style={{ color: colors.accent }}>「AI Plus」</span>だけ。
                         </p>
                         <p className="text-xs md:text-sm leading-relaxed opacity-90" style={{ color: colors.textSecondary }}>
                             月額1,200円（初回600円）の環境をご用意ください。<br/>
                             それだけで、あなたのスマホが<br/>
                             <span className="font-bold border-b border-opacity-50 pb-0.5" style={{ color: colors.textPrimary, borderColor: colors.accent }}>「最強の健康管理デバイス」</span>に化けます。
                         </p>
                    </div>

                    <a 
                        href="https://line.me/R/ti/p/@526oqrxm?ts=02041820&oat_content=url" 
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full py-4 text-center font-bold text-sm tracking-widest uppercase hover:opacity-90 hover:scale-[1.01] transition-all duration-300 relative group overflow-hidden shadow-lg"
                        style={deepGreenButtonStyle}
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            公式ラインから無料エントリー
                        </span>
                    </a>
                    <p className="text-center text-xs mt-4 opacity-50 tracking-wider">
                        ※ まずは公式ラインから無料カウンセリングシートを埋めてください
                    </p>
                </div>
            </div>
        </header>

        {/* Section 01: THE LOGIC */}
        <section className="mb-24 animate-slide-up max-w-3xl mx-auto" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-4 mb-6 border-b pb-2" style={{ borderColor: `${colors.border}60` }}>
                <span className="text-xs font-bold tracking-[0.2em]" style={accentTextStyle}>01. THE LOGIC</span>
            </div>

            <div className="p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-900/20" style={cardStyle}>
                <div className="flex justify-between items-start mb-6">
                    <h3 className={`text-xl md:text-2xl ${fontHeading}`}>168時間 / 720時間の支配</h3>
                    <LineChart size={32} style={{ color: colors.accent }} />
                </div>
                
                <div className="space-y-6 text-sm md:text-base leading-relaxed" style={{ color: colors.textSecondary }}>
                    <p>
                        １週間は168時間、１カ月は720時間。
                    </p>
                    <p>
                        週1回１時間の運動は、１週間のわずか <strong style={{ color: colors.textPrimary, fontSize: '1.1em' }}>0.6%</strong> に過ぎません。
                    </p>
                    <p>
                        残りの <strong style={{ color: colors.textPrimary, fontSize: '1.1em' }}>99.4%</strong> の管理と選択が、自身を変える効率化の最大要素です。
                    </p>
                    <p>
                        あなたの詳細なデータが入ってるAIを使って<br />
                        運動・食事・睡眠等の習慣が劇的に変わる無限の可能性を私と一緒に体験しましょう。
                    </p>
                    <p>
                        HLALは、1日のすべてをロジカルに管理できます。
                    </p>
                </div>
            </div>
        </section>

        {/* Section 02: THE CORE - Updated for Visibility & Color */}
        <section className="mb-24 animate-slide-up max-w-3xl mx-auto" style={{ animationDelay: '0.35s' }}>
            <div className="flex items-center gap-4 mb-8 border-b pb-2" style={{ borderColor: `${colors.border}60` }}>
                <span className="text-xs font-bold tracking-[0.2em]" style={accentTextStyle}>02. THE CORE</span>
            </div>

            <div className="space-y-6">
                {coreFeatures.map((feature, index) => (
                    <div 
                        key={index}
                        className="group relative p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                        style={{
                            // Darker background (95% opacity black) for high text contrast
                            backgroundColor: 'rgba(5, 5, 10, 0.85)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: borderRadius,
                            // Use the feature's specific color for a subtle border
                            border: `1px solid ${feature.color}40`,
                        }}
                    >
                        {/* Interactive Background Gradient on Hover */}
                        <div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                            style={{
                                background: `linear-gradient(135deg, ${feature.color}10 0%, transparent 60%)`
                            }}
                        />
                        {/* Side glowing accent line on hover */}
                        <div 
                            className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-500 h-0 group-hover:h-full"
                            style={{ backgroundColor: feature.color, boxShadow: `0 0 15px ${feature.color}` }}
                        />

                        <div className="relative z-10 flex items-start gap-5">
                            <div 
                                className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full shrink-0 transition-all duration-500 group-hover:scale-110" 
                                style={{ 
                                    borderColor: `${feature.color}60`, 
                                    borderWidth: '1px',
                                    backgroundColor: `${feature.color}10`,
                                    boxShadow: `0 0 10px ${feature.color}20`
                                }}
                            >
                                <feature.icon size={24} style={{ color: feature.color }} />
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="sm:hidden">
                                        <feature.icon size={22} style={{ color: feature.color }} />
                                    </span>
                                    <h3 
                                        className="text-lg md:text-xl font-bold tracking-wide transition-colors duration-300" 
                                        style={{ color: '#ffffff' /* Force white for visibility */ }}
                                    >
                                        {feature.title}
                                    </h3>
                                </div>
                                <p 
                                    className="text-sm md:text-base leading-relaxed" 
                                    style={{ color: '#d4d4d8' /* Light grey (Zinc-300) for readability */ }}
                                >
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Section 03: PLANS */}
        <section className="mb-24 animate-slide-up max-w-3xl mx-auto" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-4 mb-6 border-b pb-2" style={{ borderColor: `${colors.border}60` }}>
                <span className="text-xs font-bold tracking-[0.2em]" style={accentTextStyle}>03. PLANS</span>
            </div>

            <div className="grid gap-8">
                {/* Basic Plan */}
                <div className="p-8 transition-all duration-300 hover:bg-white/5" style={cardStyle}>
                    <div className="flex justify-between items-baseline mb-6 border-b pb-4" style={{ borderColor: `${colors.border}40` }}>
                        <h3 className="text-lg font-bold tracking-wider">BASIC</h3>
                        <div className="text-xl md:text-2xl font-bold font-mono">
                            ¥10,000 <span className="text-xs font-normal opacity-50 font-sans">/ month</span>
                        </div>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-sm" style={{ color: colors.textSecondary }}>
                            <Smartphone size={16} className="mt-1 flex-shrink-0" style={{ color: colors.accentSecondary }} />
                            <span>パーソナライズされたGEMINI提供</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm" style={{ color: colors.textSecondary }}>
                             <Check size={16} className="mt-1 flex-shrink-0" style={{ color: colors.accentSecondary }} />
                            <span>LINEによる週次レポートのチェック・週1相談</span>
                        </li>
                    </ul>
                </div>

                {/* Pro Plan */}
                <div className="relative p-8 transition-transform duration-300 hover:scale-[1.01]" style={{ 
                    ...cardStyle,
                    borderColor: colors.accent,
                    borderWidth: '1px',
                    boxShadow: `0 0 30px ${colors.accent}10`
                }}>
                    <div className="absolute top-0 right-0 text-black text-[10px] font-bold px-3 py-1 tracking-widest uppercase" style={{ backgroundColor: colors.accent }}>
                        Recommended
                    </div>
                    
                    <div className="flex justify-between items-baseline mb-6 border-b pb-4" style={{ borderColor: `${colors.border}40` }}>
                        <h3 className="text-lg font-bold tracking-wider" style={accentTextStyle}>PRO</h3>
                        <div className="text-xl md:text-2xl font-bold font-mono" style={accentTextStyle}>
                            ¥15,000 <span className="text-xs font-normal opacity-50 font-sans" style={{ color: colors.textSecondary }}>/ month</span>
                        </div>
                    </div>
                    
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-sm font-bold" style={{ color: colors.textPrimary }}>
                            <Check size={16} className="mt-1 flex-shrink-0" style={{ color: colors.accent }} />
                            BASICの全機能
                        </li>
                        <li className="flex items-start gap-3 text-sm" style={{ color: colors.textSecondary }}>
                            <Video size={16} className="mt-1 flex-shrink-0" style={{ color: colors.accentSecondary }} />
                            <span>月1回の戦略ZOOMミーティング (30min)</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm" style={{ color: colors.textSecondary }}>
                            <FileText size={16} className="mt-1 flex-shrink-0" style={{ color: colors.accentSecondary }} />
                            <span>月間成果レポートPDF (資産としての記録)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="mb-12 animate-slide-up text-center" style={{ animationDelay: '0.5s' }}>
            <p className="text-sm mb-6 opacity-70">
                あなたの人生の99.4%を、論理で書き換える準備はできましたか？
            </p>
            <a 
                href="https://line.me/R/ti/p/@526oqrxm?ts=02041820&oat_content=url" 
                target="_blank"
                rel="noreferrer"
                className="block w-full md:w-2/3 mx-auto py-4 text-center font-bold text-sm tracking-widest uppercase hover:opacity-90 hover:scale-[1.01] transition-all duration-300 relative group overflow-hidden shadow-lg"
                style={deepGreenButtonStyle}
            >
                <span className="relative z-10">公式ラインから無料エントリー</span>
            </a>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-12 border-t text-center relative z-10" style={{ borderColor: `${colors.border}20`, backgroundColor: colors.bgPrimary }}>
        <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-2">
            Team HAYATO | HLAL
        </p>
        <button 
          onClick={() => onNavigate('legal')}
          className="text-[10px] uppercase tracking-[0.1em] opacity-50 hover:opacity-100 transition-opacity mb-2 border-b border-transparent hover:border-current inline-block pb-0.5"
        >
          特定商取引法に基づく表記
        </button>
        <p className="text-[10px] opacity-30 font-mono">
            © 2026 All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;