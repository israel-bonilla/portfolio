import styles from '../styles/SectionContainer.module.scss';

const SectionContainer = ({ title, children, id }) => {
  return (
    <section className={styles.container}>
      <div className={styles.navShadow} id={id}></div>
      <header className={styles.header}>{title}</header>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  )
}

export default SectionContainer