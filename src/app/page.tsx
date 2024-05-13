import React from 'react';
import { Heading } from '@/components/heading';
import { TemplateHome } from '@/template/home';
import { Sobre } from '@/components/sobre';
import { Conteiner } from '@/components/conteiner';

export default function Home() {
  return (
    <div className="conteiner-bg-black">
      <Heading text="Desenvolvedor" />
      <main>
        <div className="conteiner-main" style={{ height: '80vh' }}>
          <TemplateHome />
        </div>
        <Sobre />
        <Conteiner>
          <article className="conteiner-experiencia">
            <h2>
              Experiencias <span>.</span>
            </h2>
            <div className="experiencia">
              <ul className="experiencia-menu">
                <li>Interativa</li>
                <li>pipoca Agilc</li>
                <li>pipoca Agilc</li>
                <li>pipoca Agilc</li>
              </ul>
              <div className="experiencia-conteiner-text">
                <h3>
                  Programador de Sistemas
                  <span>Nov 2023</span>
                </h3>
                <h4>interativa</h4>

                <p>
                  Trabalhei como instrutor conteudista em frontend na Digital
                  House, o trabalho consistia em criar conteúdos para as aulas
                  de especialização frontend. Alguns temas dos conteúdos
                  realizados foram: React, Redux, TypeScript, Testes, GraphQL,
                  Next.js, MUI, React Hook Form e styled-components.
                </p>
              </div>
            </div>
          </article>
        </Conteiner>
      </main>
    </div>
  );
}
