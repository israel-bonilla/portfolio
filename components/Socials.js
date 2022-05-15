import styles from '../styles/Socials.module.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className={styles.container}>
      <a className={styles.link} href="https://www.linkedin.com/in/israel-bonilla/" target="_blank" rel="noreferrer"><FaLinkedin className={styles.icon} /><span>LinkedIn</span></a>

      <a className={styles.link} href="https://github.com/israel-bonilla" target="_blank" rel="noreferrer"><FaGithub className={styles.icon} /><span>GitHub</span></a>
    </div>
  )
}

export default Socials