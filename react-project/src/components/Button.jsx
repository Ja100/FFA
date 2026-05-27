import styles from '../Button.module.css'
function Button(){
    return(
        <>
        <button className={`${styles.btn} ${styles.primary}`}>Get Started</button>
        </>
        
    )

}
export default Button;