import styles from "../Components.module.css"
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <div className={styles.footer}>
        <img 
        className={styles.Logo}
        src="https://www.senairs.org.br/sites/default/files/logos/logos_senai_branco.png" 
        alt="" />
        <div className={styles.links}>
            <h2>Redes sociais</h2>
            <div><CiInstagram className={styles.icon}/><a href="https://www.instagram.com/senaies/">@senaies</a></div>
            <div><CiYoutube className={styles.icon}/><a href="https://www.youtube.com/c/SENAIES_Oficial">SENAIES_Oficial</a></div>
            <div><CiFacebook className={styles.icon}/><a href="https://www.facebook.com/SenaiES/">/SenaiES</a></div>
        </div>
    </div>
  )
}

export default Footer