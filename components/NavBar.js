import Image from 'next/image';
import styles from '../styles/NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <a className={`${styles.link} ${styles.site}`} href="#">
        <Image
          className={styles.logo}
          src="https://links.israelb.xyz/portfolio/IB-Logo.png"
          width={30}
          height={25}
          alt=""
        />
        <span>portfolio.israelb.xyz</span>
      </a>
      <div>
        <a className={styles.link} href="#about">About</a>
        <a className={styles.link} href="#projects">Portfolio</a>
        <a className={styles.link} href="#resume">Resume</a>
        <a className={styles.link} href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default NavBar
//https://links.israelb.xyz/portfolio/logo.png