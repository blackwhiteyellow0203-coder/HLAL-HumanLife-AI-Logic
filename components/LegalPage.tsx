import React from 'react';
import { DesignSystem } from '../types';
import { ArrowLeft, BrainCircuit } from 'lucide-react';

interface LegalPageProps {
  system: DesignSystem;
  onNavigate: (page: 'home' | 'legal') => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ system, onNavigate }) => {
  const { colors, fontHeading, fontBody, borderRadius, glassmorphism } = system;

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

  const tableRowStyle = {
    borderBottom: `1px solid ${colors.border}40`,
  };

  return (
    <div style={containerStyle} className={`min-h-screen transition-colors duration-700 ease-in-out ${fontBody} overflow-x-hidden selection:bg-white/20 flex flex-col items-center`}>
      {/* Background Effect (Same as LandingPage for consistency) */}
      <div className="fixed inset-0 z-0 bg-[#000000]">
          <div className="absolute top-[-15%] left-[-15%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4af37] via-[#785c18] to-transparent opacity-10 blur-[100px]"></div>
          <div className="absolute top-[10%] right-[-10%] w-[60%] h-[80%] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#10b981] via-[#064e3b] to-transparent opacity-10 blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#000000] to-transparent opacity-95"></div>
      </div>

      {/* Navigation Bar */}
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
          <div className={`text-lg tracking-[0.2em] font-bold ${fontHeading} flex items-center gap-2 opacity-50`}>
            <BrainCircuit size={20} />
            HLAL
          </div>
        </div>
      </nav>

      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-32 pb-20">
        <h1 className={`text-2xl md:text-3xl ${fontHeading} font-bold mb-12 text-center tracking-wide`}>
            特定商取引法に基づく表記
        </h1>

        <div className="p-8 md:p-12" style={cardStyle}>
            <dl className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-6" style={tableRowStyle}>
                    <dt className="font-bold opacity-70 text-sm tracking-widest">販売業者</dt>
                    <dd className="md:col-span-2 font-medium">Team HAYATO | HLAL</dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-6" style={tableRowStyle}>
                    <dt className="font-bold opacity-70 text-sm tracking-widest">運営統括責任者</dt>
                    <dd className="md:col-span-2 font-medium">藤田 勇人</dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-6" style={tableRowStyle}>
                    <dt className="font-bold opacity-70 text-sm tracking-widest">所在地</dt>
                    <dd className="md:col-span-2 font-medium">
                        請求があり次第提供致しますので、必要な方はお申し出ください。
                    </dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-6" style={tableRowStyle}>
                    <dt className="font-bold opacity-70 text-sm tracking-widest">電話番号</dt>
                    <dd className="md:col-span-2 font-medium">
                        請求があり次第提供致しますので、必要な方はお申し出ください。
                    </dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-6" style={tableRowStyle}>
                    <dt className="font-bold opacity-70 text-sm tracking-widest">メールアドレス</dt>
                    <dd className="md:col-span-2 font-medium">blackwhiteyellow0203@gmail.com</dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-6" style={tableRowStyle}>
                    <dt className="font-bold opacity-70 text-sm tracking-widest">販売価格</dt>
                    <dd className="md:col-span-2 font-medium">
                        各プラン詳細ページに記載された金額（消費税込）をご参照ください。
                    </dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-6" style={tableRowStyle}>
                    <dt className="font-bold opacity-70 text-sm tracking-widest">商品代金以外の<br className="hidden md:block"/>必要料金</dt>
                    <dd className="md:col-span-2 font-medium">
                        ・インターネット接続料金、通信料金<br />
                        ・サービス利用に必要なGoogle アカウントおよびAIプラン（Gemini Advanced等）の契約費用<br />
                        <span className="text-xs opacity-70">※AI利用料はお客様ご自身での契約・負担となります。</span>
                    </dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-6" style={tableRowStyle}>
                    <dt className="font-bold opacity-70 text-sm tracking-widest">お支払方法</dt>
                    <dd className="md:col-span-2 font-medium">
                        クレジットカード決済（Stripe）<br />
                        その他、公式LINEにて別途ご案内する決済方法
                    </dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-6" style={tableRowStyle}>
                    <dt className="font-bold opacity-70 text-sm tracking-widest">お支払時期</dt>
                    <dd className="md:col-span-2 font-medium">
                        初回： お申し込み時（即時決済）<br />
                        2回目以降： 初回決済日の翌月同日に自動請求（サブスクリプションの場合）
                    </dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-6" style={tableRowStyle}>
                    <dt className="font-bold opacity-70 text-sm tracking-widest">商品の引渡し時期</dt>
                    <dd className="md:col-span-2 font-medium">
                        決済完了後、公式LINE等を通じて直ちにサービスの提供（専用AI・シートの共有等）を開始いたします。
                    </dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2" style={{ borderBottom: 'none' }}>
                    <dt className="font-bold opacity-70 text-sm tracking-widest">返品・キャンセル<br className="hidden md:block"/>について</dt>
                    <dd className="md:col-span-2 font-medium">
                        <p className="mb-2 font-bold opacity-90">【返品・返金】</p>
                        <p className="mb-4">
                            デジタルコンテンツの性質上、決済完了後のキャンセル・返品・返金は原則としてお受けできません。予め内容をよくご確認の上、お申し込みください。
                        </p>
                        <p className="mb-2 font-bold opacity-90">【中途解約】</p>
                        <p>
                            次回更新日の<span className="font-bold border-b" style={{ borderColor: colors.accent }}>【前日】</span>までに公式LINEにて解約の旨をご連絡ください。所定の手続き完了後、次月以降の請求を停止いたします。
                        </p>
                    </dd>
                </div>

            </dl>
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

export default LegalPage;