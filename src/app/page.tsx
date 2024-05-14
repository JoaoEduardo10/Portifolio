import React from 'react';

import { Heading } from '@/components/heading';
import { TemplateHome } from '@/template/home';
import { Sobre } from '@/components/sobre';
import { Experience } from '@/components/experience';
import { Project } from '@/components/project';

export default function Home() {
  return (
    <div className="container-bg-black">
      <Heading text="Desenvolvedor" />
      <main>
        <div className="container-main" style={{ height: '80vh' }}>
          <TemplateHome />
        </div>
        <Sobre />
        <Experience />
        <Project />
      </main>
    </div>
  );
}
