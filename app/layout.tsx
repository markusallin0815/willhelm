import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ritter Willhelm – Jetzt vorbestellen',
  description:
    'Der Helm. Der Held. Ritter Willhelm von Stadtmarketing Halle (Saale). Limitierte Edition – sichere dir jetzt dein Exemplar.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${outfit.variable} font-outfit antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
