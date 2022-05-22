import styles from './sections.module.css'

const Sections = ({title, children}) => {
  return (  <section className={styles.sections}>
        <div className={styles.container}>
          <h2 className={styles.title}>{title}</h2>
          {children}
        </div>
    </section>)
    
}

export default Sections;