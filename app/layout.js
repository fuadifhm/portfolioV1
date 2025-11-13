import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata = {
  title: 'Fahmi - Personal Fans Page',
  description: 'Ruang digital pribadi Fahmi - tempat berbagi proyek, artikel, dan pemikiran',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="dark">
      <body className={`${spaceGrotesk.className} antialiased bg-black text-white overflow-x-hidden`}>
        <CustomCursor />
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
