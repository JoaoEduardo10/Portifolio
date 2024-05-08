import React from 'react';
import { Heading } from '@/components/heading';
import { TemplateHome } from '@/template/home';

export default function Home() {
  return (
    <div className="conteiner-bg-black">
      <Heading text="Desenvolvedor" />
      <main className="conteiner-main">
        <TemplateHome />
      </main>
    </div>
  );
}
