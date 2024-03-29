import React from 'react';
import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import '../styles/globals.scss';

const inter = Archivo({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portifólio',
  description: 'Portifolio de João Eduardo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
