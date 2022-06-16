import React from 'react'
import styles from '../styles/TechComponent.module.scss';

const TechComponent = ({ name, icon }) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={icon} alt="" height="125" />
      </div>
      <p>{name}</p>
    </div>
  )
}

export default TechComponent