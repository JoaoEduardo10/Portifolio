'use client';

import { Button } from '@/components/buttons/template-home';
import React from 'react';
import { Cursor, useTypewriter} from 'react-simple-typewriter'

export const TemplateHome = () => {
  const [text] = useTypewriter({
    words: ['Uma mistura de Desenvolvimento Frontend, Back-End e habilidade profissional que vão destacar seu produto no mercado.'],
    loop: 1,
    typeSpeed: 10
  });

  return (
    <section className="conteiner-template-home">
      <h1>
        Ajudando empresas e pessoas a construírem <span>produtos digitais</span>{' '}
        de forma moderna e de alta qualidade.{' '}
      </h1>
      <p>
        {text}<Cursor cursorColor='#986dff' />
      </p>
      <Button text="Entre em contato" />
    </section>
  );
};
