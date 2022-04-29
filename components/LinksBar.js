import styles from '../styles/LinksBar.module.scss';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const LinksBar = () => {
  return (
    <div className={styles.container}>
      <a className={styles.link} href="#contact"><FaEnvelope className={styles.icon} /><span>israel@dev.israelb.xyz</span></a>
      <div className={styles.socials}>
        <a className={styles.link} href="https://www.linkedin.com/in/israel-bonilla/" target="_blank"><FaLinkedin className={styles.icon} /><span>LinkedIn</span></a>
        <a className={styles.link} href="https://github.com/israel-bonilla" target="_blank"><FaGithub className={styles.icon} /><span>GitHub</span></a>
      </div>
    </div>
  )
}

export default LinksBar