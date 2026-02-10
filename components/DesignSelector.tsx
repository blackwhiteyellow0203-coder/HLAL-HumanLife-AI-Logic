import React from 'react';
import { DESIGN_SYSTEMS } from '../constants';
import { DesignSystem } from '../types';
import { Check, Palette } from 'lucide-react';

interface DesignSelectorProps {
  currentSystem: DesignSystem;
  onSelect: (system: DesignSystem) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const DesignSelector: React.FC<DesignSelectorProps> = ({ currentSystem, onSelect, isOpen, setIsOpen }) => {
  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-white text-black rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center gap-2 font-bold"
      >
        <Palette size={20} />
        <span className="hidden md:inline">Change Style</span>
      </button>

      {/* Selector Modal/Panel */}
      <div 
        className={`fixed inset-y-0 right-0 z-40 w-full md:w-96 bg-neutral-900 shadow-2xl transform transition-transform duration-500 ease-in-out border-l border-neutral-800 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8">
          <h2 className="text-2xl font-light text-white mb-2">Design System</h2>
          <p className="text-neutral-400 text-sm mb-8">Select a pattern based on the emerald & gold inspiration.</p>

          <div className="space-y-6">
            {DESIGN_SYSTEMS.map((system) => (
              <div
                key={system.id}
                onClick={() => onSelect(system)}
                className={`relative group cursor-pointer p-4 rounded-xl border transition-all duration-300 ${
                  currentSystem.id === system.id
                    ? 'border-white bg-neutral-800'
                    : 'border-neutral-800 hover:border-neutral-600 bg-neutral-900/50'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-lg font-medium text-white ${system.fontHeading}`}>{system.name}</h3>
                  {currentSystem.id === system.id && <Check className="text-white" size={18} />}
                </div>
                <p className="text-xs text-neutral-400 mb-4 leading-relaxed">{system.description}</p>
                
                {/* Visual Swatches */}
                <div className="flex gap-2 items-center">
                  <div className="w-8 h-8 rounded-full shadow-md border border-white/10" style={{ backgroundColor: system.colors.bgPrimary }} title="Background" />
                  <div className="w-8 h-8 rounded-full shadow-md border border-white/10" style={{ backgroundColor: system.colors.accent }} title="Accent" />
                  <div className="w-8 h-8 rounded-full shadow-md border border-white/10" style={{ backgroundColor: system.colors.accentSecondary }} title="Secondary Accent" />
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-neutral-800 text-xs text-white border border-white/10">
                    Aa
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignSelector;