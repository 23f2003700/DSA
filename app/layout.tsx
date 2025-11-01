import type { Metadata } from 'next';
import './globals.css';
import Starfield from '@/components/Starfield';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'DSA Learning - Interactive Data Structures & Algorithms',
  description: 'Learn data structures and algorithms with interactive visualizations and elegant cosmic design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Starfield quality="medium" />
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
