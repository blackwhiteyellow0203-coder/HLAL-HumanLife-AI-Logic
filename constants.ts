import { DesignSystem } from './types';

export const DESIGN_SYSTEMS: DesignSystem[] = [
  {
    id: 'sovereign-gold',
    name: 'Sovereign Azure',
    description: 'Futuristic intelligence. Deep midnight blue backgrounds with gold accents representing logic and value.',
    fontHeading: 'font-["Cinzel"]',
    fontBody: 'font-["Lato"]',
    colors: {
      bgPrimary: '#020617', // Slate 950: Deep Blue-Black
      bgSecondary: '#0f172a', // Slate 900: Slightly lighter blue-black
      textPrimary: '#f8fafc', // Slate 50: Off-white
      textSecondary: '#94a3b8', // Slate 400: Cool grey
      accent: '#d4af37', // Gold (remains for luxury)
      accentSecondary: '#38bdf8', // Sky Blue (for the futuristic feel)
      border: '#d4af37', // Gold Border
    },
    borderRadius: '2px',
    glassmorphism: true,
  },
  {
    id: 'neural-emerald',
    name: 'Neural Emerald',
    description: 'Bio-logic focus. Sharp emerald borders representing the flow of vital data and organic algorithms.',
    fontHeading: 'font-["Cinzel"]',
    fontBody: 'font-["Lato"]',
    colors: {
      bgPrimary: '#020402',
      bgSecondary: '#050a05',
      textPrimary: '#ecfdf5',
      textSecondary: '#6ee7b7',
      accent: '#10b981',
      accentSecondary: '#d4af37',
      border: '#059669',
    },
    borderRadius: '2px',
    glassmorphism: true,
  },
  {
    id: 'obsidian-stealth',
    name: 'Obsidian Stealth',
    description: 'Understated power. Dark grey borders that let the content speak. Minimalist, confident luxury.',
    fontHeading: 'font-["Cinzel"]',
    fontBody: 'font-["Lato"]',
    colors: {
      bgPrimary: '#000000',
      bgSecondary: '#080808',
      textPrimary: '#e5e5e5',
      textSecondary: '#737373',
      accent: '#d4af37',
      accentSecondary: '#ffffff',
      border: '#262626',
    },
    borderRadius: '2px',
    glassmorphism: true,
  }
];