import { Button } from '@/components/buttons/template-home';
import React from 'react';

export const TemplateHome = () => {
  return (
    <section className="conteiner-template-home">
      <h1>
        Ajudando empresas e pessoas a construírem <span>produtos digitais</span>{' '}
        de forma moderna e de alta qualidade.{' '}
      </h1>
      <p>
        Uma mistura de Desenvolvimento Frontend, Back-End e habilidade
        profissional que vão destacar seu produto no mercado.{' '}
      </p>
      <Button text="Entre em contato" />
    </section>
  );
};
