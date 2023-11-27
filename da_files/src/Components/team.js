import styles from "../Components/Style.module.css";

export default function Team() {
    return (
        <div className={styles.big1}>
        <h1>OUR TEAM</h1>
        <div className={styles.team}>
        <img src={require("../Components/elements/team2.png")} alt="Team"></img>
        </div>
        <div className={styles.box2}>

            <div className={styles.mem1}>
                <img  src={require("../Components/elements/miguel-a-amutio-eInYMejR-WM-unsplash.jpg")} alt="Team Member"></img>
                <h3>ARYAN SHARMA</h3>
            </div>

            <div className={styles.mem1}>
                <img src={require("../Components/elements/miguel-a-amutio-eInYMejR-WM-unsplash.jpg")} alt="Team Member"></img>
                <h3>ARYAN SHARMA</h3>
            </div>
            <div className={styles.mem1}>
                <img src={require("../Components/elements/miguel-a-amutio-eInYMejR-WM-unsplash.jpg")} alt="Team Member"></img>
                <h3>ARYAN SHARMA</h3>
            </div>
            <div className={styles.mem1}>
                <img src={require("../Components/elements/miguel-a-amutio-eInYMejR-WM-unsplash.jpg")} alt="Team Member"></img>
                <h3>ARYAN SHARMA</h3>
            </div>
            <div className={styles.mem1}>
                <img src={require("../Components/elements/miguel-a-amutio-eInYMejR-WM-unsplash.jpg")} alt="Team Member"></img>
                <h3>ARYAN SHARMA</h3>
            </div>
            <div className={styles.mem1}>
                <img src={require("../Components/elements/miguel-a-amutio-eInYMejR-WM-unsplash.jpg")} alt="Team Member"></img>
                <h3>ARYAN SHARMA</h3>
            </div>
            
            
            </div>
        </div>
    );
}
