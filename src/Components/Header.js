import styles from './Styles/Header.module.css'

function Header(){
    return(
<div className={styles.headerdiv}>
<ul>
    <li><p><a href="#about">Conhecimentos</a></p></li>
    <li><p><a href="#projects">Projetos</a></p></li>
    <li><p><a href="#contact">Contato</a></p></li>
</ul>
</div>
)
}

export default Header