import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

export const Sobre = () => {
  return (
    <section className="container-sobre">
      <div className="continer-image">
        <Image
          alt="imagem de programação"
          src={'/img/image-programacao.jpg'}
          width={4000}
          height={4000}
        />
      </div>
      <article className="container-text">
        <h3>Quem sou</h3>
        <div className="sobre">
          <p className="sobre-name">
            João Eduardo
            <span>Full Stack Developer</span>
          </p>

          <p className="sobre-text">
            Sou João Eduardo, um desenvolvedor Fullstack apaixonado por
            transformar ideias em realidade digital. Com mais de 4 anos de
            experiência na área, mergulhei em projetos desafiadores, desde
            aplicativos robustos até websites dinâmicos. Além do meu trabalho
            regular, também atuo como freelancer, oferecendo soluções criativas
            e sob medida para diversas necessidades. Estou sempre em busca de
            novos desafios e oportunidades para expandir meu conhecimento e
            contribuir para o sucesso de cada projeto. Seja bem-vindo ao meu
            portfólio, onde cada linha de código conta uma história de inovação
            e excelência técnica.
          </p>
        </div>
        <div className="continer-icons">
          <Link
            href={'https://www.instagram.com/joao_eduardo07/?next=%2F'}
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link href={'https://github.com/JoaoEduardo10'} target="_blank">
            <FiGithub />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/jo%C3%A3o-eduardo-657887231/'}
            target="_blank"
          >
            <FaLinkedinIn />
          </Link>
        </div>
      </article>
    </section>
  );
};
