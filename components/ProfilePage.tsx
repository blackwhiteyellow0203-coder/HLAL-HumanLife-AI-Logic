import React from 'react';
import { DesignSystem } from '../types';
import { ArrowLeft, History, Target, Cpu, Quote, Award } from 'lucide-react';
import HLALLogo from './HLALLogo';

interface ProfilePageProps {
  system: DesignSystem;
  onNavigate: (page: 'home' | 'legal' | 'profile') => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ system, onNavigate }) => {
  const { colors, fontHeading, fontBody, borderRadius, glassmorphism } = system;

  const containerStyle = {
    backgroundColor: colors.bgPrimary,
    color: colors.textPrimary,
  };

  // Glassmorphism card style for better readability
  const cardStyle = {
    backgroundColor: glassmorphism ? `${colors.bgSecondary}90` : colors.bgSecondary,
    backdropFilter: glassmorphism ? 'blur(16px)' : 'none',
    borderColor: `${colors.border}40`,
    borderRadius: borderRadius,
    borderWidth: '1px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div style={containerStyle} className={`min-h-screen transition-colors duration-700 ease-in-out ${fontBody} overflow-x-hidden selection:bg-white/20 flex flex-col items-center`}>
      {/* Background (Same as Landing) */}
      <div className="fixed inset-0 z-0 bg-[#000000]">
          <div className="absolute top-[-15%] left-[-15%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4af37] via-[#785c18] to-transparent opacity-10 blur-[100px]"></div>
          <div className="absolute top-[10%] right-[-10%] w-[60%] h-[80%] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#10b981] via-[#064e3b] to-transparent opacity-10 blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#000000] to-transparent opacity-95"></div>
      </div>

      {/* Nav */}
      <nav className={`fixed top-0 w-full z-30 border-b transition-all duration-700`} style={{
        backgroundColor: glassmorphism ? `${colors.bgPrimary}cc` : colors.bgPrimary,
        borderColor: `${colors.border}40`,
        backdropFilter: 'blur(10px)'
      }}>
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
          >
            <ArrowLeft size={20} style={{ color: colors.accent }} />
            <span className="text-sm font-bold tracking-widest">BACK</span>
          </button>
          
          <div className={`text-lg tracking-[0.2em] font-bold ${fontHeading} flex items-center gap-3 opacity-50`}>
            <HLALLogo size={32} color={colors.accent} />
            <span style={{ marginTop: '4px' }}>HLAL</span>
          </div>
        </div>
      </nav>

      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-32 pb-20">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 animate-slide-up border-b pb-8" style={{ borderColor: `${colors.border}30` }}>
            <div className="text-center md:text-left mb-6 md:mb-0">
                <h1 className={`text-3xl md:text-5xl ${fontHeading} font-bold mb-2 tracking-wide`} style={{ color: colors.textPrimary }}>
                    藤田 勇人
                </h1>
                <p className="text-xs font-bold tracking-[0.3em] uppercase opacity-50 font-sans">
                    Hayato Fujita
                </p>
            </div>
            <div className="text-center md:text-right">
                 <p className="text-[10px] tracking-[0.2em] uppercase opacity-60 mb-2">
                    HumanLife: AI Logic (HLAL) 代表
                </p>
                <p className={`text-lg italic ${fontHeading}`} style={{ color: colors.accent }}>
                    Googleの脳を持つ、健康管理士。
                </p>
            </div>
        </div>

        {/* Catchphrase Area - No Red Box, No Underline */}
        <div className="mb-16 text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
             <h2 className="text-xl md:text-3xl font-medium leading-loose">
                <span className={`inline-block mx-1 font-serif font-bold text-2xl md:text-4xl`} style={{ color: colors.textPrimary }}>「根性論」</span>
                <span className={`inline-block mx-1 font-serif font-bold text-2xl md:text-4xl`} style={{ color: colors.textPrimary }}>『感覚』</span>
                <span className="opacity-80 block md:inline mt-4 md:mt-0">はもうやめて。</span>
             </h2>
             <p className="mt-8 text-lg md:text-xl tracking-wide opacity-90">
                知恵を統合した <span className="font-bold border-b pb-1" style={{ borderColor: colors.accent, color: colors.accent }}>Health AI OS</span> を手に入れてください!
             </p>
        </div>

        {/* Content Card */}
        <div className="p-8 md:p-12 space-y-16 animate-slide-up" style={{ ...cardStyle, animationDelay: '0.2s' }}>
            
            {/* Background */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-3 flex flex-col items-center md:items-start">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${colors.accent}10` }}>
                        <History size={24} style={{ color: colors.accent }} />
                    </div>
                    <h3 className={`text-xs tracking-[0.2em] font-bold opacity-70 ${fontHeading}`}>BACKGROUND</h3>
                </div>
                <div className="md:col-span-9">
                    <p className="leading-8 text-sm md:text-base opacity-80 text-justify">
                        私は元々、NBAのサマーリーグ挑戦やプロダンサーとして、身体を極限まで酷使するアスリート生活を送っていました。かつては「気合と根性で限界を超える」ことが正義だと信じていた時期もあります。
                    </p>
                </div>
            </section>

            <div className="w-full h-px opacity-10" style={{ backgroundColor: colors.textPrimary }}></div>

            {/* Challenge - Improved Readability */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-3 flex flex-col items-center md:items-start">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${colors.accent}10` }}>
                        <Target size={24} style={{ color: colors.accent }} />
                    </div>
                    <h3 className={`text-xs tracking-[0.2em] font-bold opacity-70 ${fontHeading}`}>THE CHALLENGE</h3>
                </div>
                <div className="md:col-span-9">
                    <div className="space-y-8">
                        <div>
                            <p className="leading-8 text-sm md:text-base opacity-80 text-justify mb-4">
                                現代は情報で溢れかえっています。<br/>
                                無数の健康法の中から「自分にとって本当に何が良いのか」を精査するのは容易ではありません。
                            </p>
                            <p className="leading-8 text-sm md:text-base opacity-80 text-justify">
                                また、日々の仕事や生活に追われ、自分の健康のため運動に割ける時間がほとんどないという方も多いはずです。
                            </p>
                        </div>

                        <div className="pl-4 border-l-2" style={{ borderColor: `${colors.accent}60` }}>
                            <p className="leading-8 text-sm md:text-base opacity-90 mb-4">
                                私自身も現在、母の世話というライフステージの変化に直面し、時間と体力の制約の中で生きています。<br/>
                                だからこそ、私は追求しました。
                            </p>
                            <p className="text-lg md:text-xl font-bold leading-relaxed" style={{ color: colors.textPrimary }}>
                                「いかに継続しやすく、<br className="md:hidden"/>いかに短時間で、<br className="md:hidden"/>最大の健康効果を出すか」
                            </p>
                        </div>
                        
                        <p className="leading-8 text-sm md:text-base opacity-80">
                            その答えが、私の身体的経験と、最新のAI解析を融合させた独自のメソッドです。
                        </p>
                    </div>
                </div>
            </section>

            <div className="w-full h-px opacity-10" style={{ backgroundColor: colors.textPrimary }}></div>

             {/* Solution */}
             <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-3 flex flex-col items-center md:items-start">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${colors.accent}10` }}>
                        <Cpu size={24} style={{ color: colors.accent }} />
                    </div>
                    <h3 className={`text-xs tracking-[0.2em] font-bold opacity-70 ${fontHeading}`}>THE SOLUTION</h3>
                </div>
                <div className="md:col-span-9 space-y-6">
                    <p className="leading-8 text-sm md:text-base opacity-80 text-justify">
                        私が提供するのは、一般的なフィットネスではありません。
                        あなたのライフスタイル、特性、そして個別の事情や情報をAI（Google Gemini）が解析し、健康管理士である私がその実行をサポートする。
                    </p>
                    <div className="text-center py-6">
                         <p className={`text-xl md:text-2xl ${fontHeading} font-bold`} style={{ color: colors.textPrimary }}>
                            あなた専属の「AI Health OS」を<br/>インストールする
                        </p>
                        <p className="mt-2 text-sm opacity-60">ようなものです。</p>
                    </div>
                </div>
            </section>

            <div className="w-full h-px opacity-10" style={{ backgroundColor: colors.textPrimary }}></div>

            {/* Message */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-3 flex flex-col items-center md:items-start">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${colors.accent}10` }}>
                        <Quote size={24} style={{ color: colors.accent }} />
                    </div>
                    <h3 className={`text-xs tracking-[0.2em] font-bold opacity-70 ${fontHeading}`}>MESSAGE</h3>
                </div>
                <div className="md:col-span-9">
                    <p className="leading-8 text-sm md:text-base opacity-80 mb-6">
                        「情報に振り回されたくない」「時間がない経営者」<br/>
                        そして何より、「運動は嫌いだけどダイエットしたい」「AIが好き、健康になりたい」<br/>
                        そんな方にこそ、私のメソッドは最大の効果を発揮します。
                    </p>
                    <p className="text-lg font-bold leading-relaxed" style={{ color: colors.textPrimary }}>
                        私と一緒に、あなたの人生を支える<br className="md:hidden"/>最強の身体（ハードウェア）と<br className="md:hidden"/>論理（ソフトウェア）を構築しましょう。
                    </p>
                </div>
            </section>

            <div className="w-full h-px opacity-10" style={{ backgroundColor: colors.textPrimary }}></div>

            {/* Career / Biography Section */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-3 flex flex-col items-center md:items-start">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${colors.accent}10` }}>
                        <Award size={24} style={{ color: colors.accent }} />
                    </div>
                    <h3 className={`text-xs tracking-[0.2em] font-bold opacity-70 ${fontHeading}`}>CAREER</h3>
                </div>
                <div className="md:col-span-9">
                    <div className="space-y-5">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                            <span className="text-[10px] md:text-xs font-bold tracking-widest opacity-50 w-24 shrink-0 uppercase">Challenge</span>
                            <span className="text-sm md:text-base opacity-90 font-medium">NBA Summer League トライアウト参加（3度渡米）</span>
                        </div>
                        <div className="w-full h-px opacity-5" style={{ backgroundColor: colors.textPrimary }}></div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                            <span className="text-[10px] md:text-xs font-bold tracking-widest opacity-50 w-24 shrink-0 uppercase">Media/Stage</span>
                            <span className="text-sm md:text-base opacity-90 font-medium">EXILE ドームツアーダンサー、青山テルマMV・TV出演 他</span>
                        </div>
                        <div className="w-full h-px opacity-5" style={{ backgroundColor: colors.textPrimary }}></div>

                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                            <span className="text-[10px] md:text-xs font-bold tracking-widest opacity-50 w-24 shrink-0 uppercase">Teaching</span>
                            <span className="text-sm md:text-base opacity-90 font-medium">年間600本以上のオンラインヨガクラス指導<br className="hidden md:block" />オンラインパーソナル指導</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>

      </main>

      <footer className="w-full py-12 border-t text-center relative z-10" style={{ borderColor: `${colors.border}20`, backgroundColor: colors.bgPrimary }}>
        <p className="text-[10px] opacity-30 font-mono">
            © 2026 All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default ProfilePage;