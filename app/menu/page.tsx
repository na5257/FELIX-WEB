"use client";

import { useRef } from "react";

export default function MenuPage() {
  const menuRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print Button - Hidden in print */}
      <div className="print:hidden fixed top-8 right-8 z-50">
        <button
          onClick={handlePrint}
          className="bg-[#2c2820] text-[#e8e0d0] px-5 py-2.5 text-sm tracking-[0.15em] uppercase hover:bg-[#3d3428] transition-all border border-[#5a4d3a]"
        >
          Last ned PDF
        </button>
        <p className="text-[#6a5d4a] text-[10px] mt-2 text-right tracking-wide">Ctrl/Cmd + P → Lagre som PDF</p>
      </div>

      {/* Menu Container - Parchment style */}
      <div 
        ref={menuRef}
        className="min-h-screen bg-[#f4ede0] text-[#2c2820] relative print:h-[100vh] print:max-h-[100vh] print:overflow-hidden"
        style={{ fontFamily: "'Cormorant Garamond', 'Hiragino Mincho Pro', serif" }}
      >
        {/* Old paper texture */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }}
        />
        
        {/* Subtle aged edges effect */}
        <div className="fixed inset-0 pointer-events-none print:hidden" 
          style={{
            boxShadow: 'inset 0 0 100px rgba(139, 115, 85, 0.15)'
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-12 py-16 print:py-8 print:px-8 print:h-full print:flex print:flex-col print:justify-between">
          
          {/* Header */}
          <header className="text-center mb-12 print:mb-6">
            {/* Year with decorative elements */}
            <div className="flex items-center justify-center gap-5 mb-6 print:mb-4">
              <span className="text-[#8b7355] text-base print:text-sm tracking-[0.5em] font-light">二〇二四</span>
              <span className="text-[#a89880] text-2xl print:text-xl">⟶</span>
              <span className="text-[#8b7355] text-base print:text-sm tracking-[0.5em] font-light">二〇二五</span>
            </div>
            
            {/* Main title */}
            <h1 className="text-4xl md:text-5xl print:text-4xl tracking-[0.2em] uppercase mb-4 print:mb-3 font-light text-[#3a3228]">
              Konsul Børs Vei
            </h1>
            
            {/* Kanji - samurai */}
            <div className="my-6 print:my-4">
              <span 
                className="text-[#6b5a45] text-6xl print:text-5xl"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                侍
              </span>
            </div>
            
            <p className="text-[#7a6b58] text-sm print:text-xs tracking-[0.35em] uppercase font-light">
              Nyttårsmiddag hos Mats og Sophie
            </p>
          </header>

          {/* Menu Items */}
          <div className="space-y-8 print:space-y-5 flex-1">
            
            {/* Main Course - Kalkun først */}
            <section className="text-center">
              <h2 className="text-2xl md:text-3xl print:text-2xl tracking-[0.12em] mb-3 print:mb-2 font-light text-[#3a3228]">
                Helstekt Kalkun
              </h2>
              
              <p className="text-[#6b5d4d] leading-[1.8] text-base print:text-base font-light max-w-md mx-auto mb-2 print:mb-1">
                Langsomt stekt kalkun fylt med champignon, 
                bacon, løk og hvitløk. Penslet med smør og timian.
              </p>
              
              <p className="text-[#8a7b68] text-sm print:text-xs tracking-[0.1em] font-light">
                Kremede smørpoteter · Glaserte gulrøtter
              </p>
            </section>

            {/* Ninja Divider */}
            <div className="flex justify-center py-1 print:py-0">
              <span className="text-base print:text-sm">🥷</span>
            </div>

            {/* The Sauce */}
            <section className="text-center">
              <h2 className="text-2xl md:text-3xl print:text-2xl tracking-[0.12em] mb-3 print:mb-2 font-light text-[#3a3228]">
                Husets Kraft
              </h2>
              
              <p className="text-[#6b5d4d] leading-[1.8] text-base print:text-base font-light max-w-md mx-auto">
                Langkokt kraft på innmat og rotgrønnsaker. 
                Jevnet med Worcestershire og fløte.
              </p>
            </section>

            {/* Ninja Divider */}
            <div className="flex justify-center py-1 print:py-0">
              <span className="text-base print:text-sm">🥷</span>
            </div>

            {/* Waldorf Salad - til slutt */}
            <section className="text-center">
              <h2 className="text-2xl md:text-3xl print:text-2xl tracking-[0.12em] mb-3 print:mb-2 font-light text-[#3a3228]">
                Waldorfsalat
              </h2>
              
              <p className="text-[#6b5d4d] leading-[1.8] text-base print:text-base font-light max-w-md mx-auto">
                Crispy røde epler, karamelliserte valnøtter og 
                sprø stangselleri i kremet dressing med druer
              </p>
            </section>

            {/* Ninja Divider */}
            <div className="flex justify-center py-1 print:py-0">
              <span className="text-base print:text-sm">🥷</span>
            </div>

            {/* Surprise Dish */}
            <section className="text-center">
              <h2 className="text-2xl md:text-3xl print:text-2xl tracking-[0.12em] mb-3 print:mb-2 font-light text-[#3a3228]">
                + + +
              </h2>
              
              <div className="max-w-sm mx-auto">
                <p className="text-[#7a6b58] leading-[1.8] text-base print:text-base font-light italic mb-1">
                  La oss utvide menyen med noe dere syns er digg
                </p>
                <p className="text-[#8b7355] text-sm print:text-xs tracking-wide">
                  Let's do it
                </p>
              </div>
            </section>

          </div>

          {/* Footer */}
          <footer className="mt-10 print:mt-6 text-center">
            {/* Seal/stamp with samurai character */}
            <div className="inline-block">
              <div 
                className="w-14 h-14 print:w-12 print:h-12 rounded border-2 border-[#8b4444] flex items-center justify-center transform rotate-[-5deg] opacity-60"
              >
                <span 
                  className="text-[#8b4444] text-xl print:text-lg"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  武
                </span>
              </div>
            </div>

            <p className="mt-4 print:mt-3 text-[#7a6b58] text-sm print:text-xs tracking-[0.15em] font-light italic">
              "Word is bond"
            </p>
          </footer>

        </div>
      </div>

      {/* Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Noto+Serif+JP:wght@300;400;500&display=swap');
        
        @media print {
          @page {
            size: A4;
            margin: 0.8cm;
          }
          
          html, body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
          }
          
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          .print\\:hidden {
            display: none !important;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </>
  );
}
