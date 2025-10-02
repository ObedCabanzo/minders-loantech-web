import localFont from 'next/font/local';


// Jersey 10 - Regular
export const jersey10 = localFont({
  src: '../assets/fonts/Jersey10-Regular.ttf',
  variable: '--font-jersey-10',
  display: 'swap',
});
console.log(jersey10);

// JetBrains Mono (variable) normal + italic
export const jetBrainsMono = localFont({
  src: [
    { path: '../assets/fonts/JetBrainsMono-Regular.ttf', style: 'normal' },
    { path: '../assets/fonts/JetBrainsMono-Italic.ttf', style: 'italic' },
  ],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

// Space Mono - Regular (peso 400)
export const spaceMono = localFont({
  src: '../assets/fonts/SpaceMono-Regular.ttf',
  variable: '--font-space-mono',
  weight: '400',
  display: 'swap',
});