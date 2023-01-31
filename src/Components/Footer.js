import styles from './Styles/Footer.module.css'
import github from './Styles/github.png'
import linkedin from './Styles/linkedin.png'

function Footer(){
return(
    <div className={styles.footer}>
        <a className={styles.github} href="https://github.com/Fabiusmaia/" target="_blank" ><img src={github} ></img></a>
        <a href="https://www.linkedin.com/in/fabius-maia-622988242/" target="_blank" className={styles.linkedin}><img src={linkedin}></img></a>

    </div>
)

}

export default Footer