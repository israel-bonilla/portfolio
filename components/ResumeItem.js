import styles from '../styles/ResumeItem.module.scss';
import { Image } from 'next/image';

const ResumeItem = ({ name, icon, file }) => {
  return (
    <div>
      <a
        className={styles.container} 
        href={`http://links.israelb.xyz/portfolio/resume-items/${file}`}
        download
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.imgContainer}>
            <img
              src={`http://links.israelb.xyz/portfolio/resume-icons/${icon}`}
              alt={`${name} icon`}
              height={100}
            />
        </div>

        <div>{name}</div>
      </a>
    </div>
  )
}

export default ResumeItem