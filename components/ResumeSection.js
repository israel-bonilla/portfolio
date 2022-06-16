import styles from '../styles/ResumeSection.module.scss';
import ResumeItem from './ResumeItem';

const ResumeSection = () => {
  return (
    <div className={styles.container}>
      <ResumeItem name="Resume.pdf" icon="pdf-icon.png" file="Resume2.pdf" />
      <ResumeItem name="Resume.docx" icon="docx-icon.png" file="Resume2.docx" />
      <ResumeItem name="Resume.doc" icon="doc-icon.png" file="Resume2.doc" />
      <ResumeItem name="Resume.odt" icon="odt-icon.png" file="Resume2.odt" />
      <ResumeItem name="Resume.rtf" icon="rtf-icon.png" file="Resume2.rtf" />
      <ResumeItem name="Resume.txt" icon="txt-icon.png" file="Resume2.txt" />
      {/* <ResumeItem name="Resume.html" icon="" /> */}
    </div>
  )
}

export default ResumeSection