
import styles from './Styles/Input.module.css'

function Input({type, name, label, }){
return(
    <div className={styles.inputdiv}>
    <input type={type} placeholder={label} className={styles.input}></input>
    </div>
)
}

export default Input