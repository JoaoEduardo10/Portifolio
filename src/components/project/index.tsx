import Link from 'next/link';
import React from 'react';

import { projects } from './mock';

export const Project = () => {
  return (
    <section className="project-container">
      <h2>
        Projetos <span>.</span>
      </h2>

      <ul className="container-cards">
        {projects.map((project) => (
          <li key={project.id} className="cards">
            <h3>{project.title}</h3>
            <p>{project.text}</p>
            <Link href={project.link}>Visualizar projeto</Link>
          </li>
        ))}
        <li className="cards">
          <h3>Em construção...</h3>
          <p>Pegue o café e espere um pouco, estou desenvolvendo o projeto.</p>
        </li>
        <li className="cards">
          <h3>Em construção...</h3>
          <p>Pegue o café e espere um pouco, estou desenvolvendo o projeto.</p>
        </li>
        <li className="cards">
          <h3>Em construção...</h3>
          <p>Pegue o café e espere um pouco, estou desenvolvendo o projeto.</p>
        </li>
      </ul>
    </section>
  );
};
