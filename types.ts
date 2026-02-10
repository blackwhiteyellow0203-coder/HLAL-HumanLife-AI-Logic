export enum FontType {
  Serif = 'font-serif',
  Sans = 'font-sans',
  Mono = 'font-mono',
}

export interface ColorPalette {
  bgPrimary: string;
  bgSecondary: string;
  textPrimary: string;
  textSecondary: string;
  accent: string;
  accentSecondary: string;
  border: string;
}

export interface DesignSystem {
  id: string;
  name: string;
  description: string;
  fontHeading: string; // CSS class for font family
  fontBody: string;    // CSS class for font family
  colors: ColorPalette;
  borderRadius: string;
  glassmorphism: boolean;
}