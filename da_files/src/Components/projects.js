import styles from "../Components/Style.module.css";
export default function Projects(){
    return(
        <div className={styles.container2} id={styles.project}>
        <h1>ONGOING PROJECTS</h1>
            <div className={styles.circle}>
                <div className={styles.proj} id={styles.p1}>
                    <a href="#">MAARG
                    <img loading="lazy" src={require("../Components/elements/bruno-van-der-kraan-vII8yFT6d9A-unsplash.jpg")}></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                    </a>
                </div>
                <div className={styles.proj} id={styles.p2}>
                    <a href="#">PROJECT-2
                    <img loading="lazy" src={require("../Components/elements/chean-ang-heng-2ijGsqwQmPk-unsplash.jpg")}></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                  </a>
                </div>
                <div className={styles.proj} id={styles.p3}>
                    <a href="#">PROJECT-3
                    <img loading="lazy" src={require("../Components/elements/neom-wSJmlKMecHU-unsplash.jpg")}></img><p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                    </p></a>
                </div>
                <div className={styles.proj} id={styles.p4}>
                    <a href="#">PROJECT-4
                    <img loading="lazy" src={require("../Components/elements/neom-xAPIN3qwZN0-unsplash.jpg")}></img>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                    </a>
                </div>
                <div className={styles.proj} id={styles.p5}>
                    <a href="#">PROJECT-5
                    <img loading="lazy" src={require("../Components/elements/miguel-a-amutio-eInYMejR-WM-unsplash.jpg")}></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                    </a>
                </div>
            </div>
            {/* <div className={styles.gif2}>
                <img src={require("../Components/elements/gif2.gif")}></img>
            </div> */}
            <div class={styles.wave}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class={styles.shapefill}></path>
    </svg>
</div>
        </div>
    )
}