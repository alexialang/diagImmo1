import { Button } from "@mantine/core";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    // Section imgPano
  <div >
    <div className={styles.firstImage}><Link to="/devis"><Button className={styles.buttonFirstImg}variant="filled" color="yellow" size="xl" radius="xl">Demande De Devis</Button> </Link>
</div>
{/* Section Nos Services */}
    <div className={styles.section2}>
      <div className={styles.texte}>
        <h2>Nos Services</h2>
        <p>Tous les diagnostics immobiliers proposés</p>
        <ul>
          <li>DPE (Diagnostic Performance Energétique)</li>
          <li>Audit énergétique</li>
          <li>Audit énergétique</li>
          <li>Diagnostic Amiante Location, Vente, Avant travaux, Après travaux et démolition</li>
          <li>Surface habitable</li>
          <li>Superficie Carrez</li>
          <li>Diagnostic Gaz</li>
          <li>Electricité</li>
          <li>Diagnostic Plomb (CREP)</li>
        </ul>
        <p className={styles.purpleTxt}>Besoin d’un DEVIS diagnostic immobilier ?</p>
        <Link to="/devis">
        <Button className={styles.purpleButton} variant="filled" color="rgba(198, 133, 199, 1)" radius="xl" >Cliquez Ici</Button>
        </Link> 
      </div>
      <div className={styles.divImg}>
      <Link to="/">
       <div><img src="/src/assets/maison2.png" alt="photo d'une maison"/><h3>Vos obligations d’Achat</h3></div> </Link> 
       <Link to="/">
        <div><img src="/src/assets/poigneeMain.png" alt="poignée de main"/><h3>Vos obligations de Location</h3></div> </Link>
      </div>
      <div className={styles.backgroundImg}><div className="color"></div ><div className="color"></div></div >
      {/* Section Pourquoi Nous Choisir */}
      </div><div><img className={styles.imgPourquoi} src="src/assets/batimentMetz.png" alt="Batiment en pierres jaunes et Batiment en pierre rouge"/> </div>
        <div className={styles.divPourquoi}><h2>Pourquoi Nous Choisir ?</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      </div>
  </div>

  
  );
};
