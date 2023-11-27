import styles from "../Components/Style.module.css";
export default function Nav(){
  return(
    <div className={styles.header}>
      <div className={styles.navitems}>
        <a href="about">ABOUT</a>
        <a href="team">TEAM</a>
        <a href="project">PROJECTS</a>
      </div>
    </div>
  )
}
 