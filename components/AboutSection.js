import styles from '../styles/AboutSection.module.scss';
import { FaDownload } from 'react-icons/fa';
import { AiOutlineGlobal } from 'react-icons/ai';

const AboutSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
      <div className={styles.top}>
        <div className={styles.header}>
          <p className={styles.name}>Israel Bonilla</p>
          <p className={styles.occupation}>Full-Stack Developer</p>
        </div>
        <div className={styles.aboutText}>
          <p>Hi, I&apos;m Israel! Welcome to my portfolio site.</p>
          <p>I&apos;m a software developer and have been coding since I was 13. I took on development for the web after high school, and have been using popular frameworks like React. I&apos;ve also done work on the back-end with databases and servers.</p>
          <p>Feel free to check out my projects below.</p>
        </div>
      </div>
      </div>
      <div className={styles.actions}>
        <a href="#projects" className={styles.actionBtn}>
          <AiOutlineGlobal className={styles.icon} />
          <span>Check out my work</span>
        </a>

        <a href="#resume" className={styles.actionBtn}>
          <FaDownload className={styles.icon} />
          <span>Download my Resume</span>
        </a>
      </div>
    </div>
  )
}

export default AboutSection