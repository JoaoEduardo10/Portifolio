/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';

import { experience } from './mock';
import { Container } from '../container';
import { formatDates } from './formatDates';

export const Experience = () => {
  const [experiences] = useState<typeof experience>(experience);
  const [currentExperience, setCurrentExperience] = useState<
    (typeof experience)[0]
  >(experience[0]);

  const handleSetExperience = (id: number) => {
    const selectedExperience =
      experiences.find((exp) => exp.id === id) ?? experience[0];

    setCurrentExperience(selectedExperience);
  };

  return (
    <Container>
      <article className="experience-container">
        <h2>
          Experiências <span>.</span>
        </h2>
        <div className="experience">
          <ul className="experience-menu">
            {experiences.map((exp) => (
              <li
                onClick={() => handleSetExperience(exp.id)}
                key={exp.id}
                className={exp.id === currentExperience.id ? 'active' : ''}
              >
                {exp.company}
              </li>
            ))}
            <li>....</li>
            <li>....</li>
          </ul>
          <div className="experience-details">
            <h3>
              {currentExperience.titleExperience}
              <span>
                {formatDates(
                  currentExperience.start_date,
                  currentExperience.end_date,
                )}
              </span>
            </h3>
            <h4>{currentExperience.company}</h4>
            <p>{currentExperience.changeExperience}</p>
          </div>
        </div>
      </article>
    </Container>
  );
};
