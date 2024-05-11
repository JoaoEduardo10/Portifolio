import React from 'react';
import { Heading } from '@/components/heading';
import { TemplateHome } from '@/template/home';
import { Sobre } from '@/components/sobre';

export default function Home() {
  return (
    <div className="conteiner-bg-black">
      <Heading text="Desenvolvedor" />
      <main>
        <div className="conteiner-main" style={{ height: '80vh' }}>
          <TemplateHome />
        </div>
        <Sobre />
      </main>
    </div>
  );
}
