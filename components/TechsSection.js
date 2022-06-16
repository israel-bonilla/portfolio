import React from 'react';
import styles from '../styles/TechsSection.module.scss';
import TechComponent from './TechComponent';
import { techs } from '../data';

const TechsSection = () => {
  return (
    <div className={styles.container}>
      <h1>Technologies I&apos;m Familiar With:</h1>
      
      <h2>Front-end</h2>
      <div className={styles.section}>
        {techs.frontend.map(tech => (
          <TechComponent key={tech.name} {...tech} />
        ))}
      </div>
      <hr />
      
      <h2>Back-end/Databases</h2>
      <div className={styles.section}>
        {techs.backend.map(tech => (
          <TechComponent key={tech.name} {...tech} />
        ))}
      </div>
      <hr />
      
      <h2>Tools/Other</h2>
      <div className={styles.section}>
        {techs.other.map(tech => (
          <TechComponent key={tech.name} {...tech} />
        ))}
      </div>
    </div>
  )
}

export default TechsSection;