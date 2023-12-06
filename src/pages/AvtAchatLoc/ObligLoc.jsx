import styles from "./avtAchatLoc.module.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export const ObligLoc = () => {
  return (
    <div>
      <div className={styles.backgroundImg}>
        <h1>Vos Obligations de Location</h1>
        <div className={styles.block}>
          <p>Vos Obligations de Location</p>
        </div>
      </div>
      <div className={styles.txt}>
        <p>Lors de la mise en location d’un bien immobilier en France, différentes obligations en matière de diagnostics immobiliers doivent être respectées pour garantir la sécurité et l’information des parties prenantes. </p>
         <p className={styles.fontsize}>Voici une liste des diagnostics immobiliers nécessaires lors d’une location :
</p>

        <div className={styles.column}> 
        <h2>Diagnostic de Performance Énergétique (DPE) :</h2>
        <p>Obligatoire pour évaluer la performance énergétique du logement.
        Inclus dans les annonces immobilières.
        Valide pendant 10 ans, sauf en cas de travaux significatifs.</p>
        </div>

        <div className={styles.column}>
        <h2>État des Risques et Pollutions (ERP) :</h2>
        <p>Obligatoire si le permis de construire a été déposé avant 1997.
           Vise à détecter la présence d’amiante dans le bâtiment.
        </p>
        </div>

        <div className={styles.column}>
        <h2>Diagnostic Amiante :</h2>
        <p>Informe sur les risques naturels, technologiques, et les pollutions du secteur.
          Le locataire doit être informé avant la signature du bail.
        </p>
        </div>

        <div className={styles.column}>
        <h2>Diagnostic Plomb (CREP) :</h2>
        <p>Requis pour les constructions antérieures à 1949.
           Évalue la présence de plomb, notamment dans les peintures.
        </p>
        </div>

        <div className={styles.column}>
        <h2>Diagnostic Électrique :</h2>
        <p>Obligatoire si l’installation électrique a plus de 15 ans.
           Vérifie la conformité et la sécurité des équipements électriques.
        </p>
        </div>

        <div className={styles.column}>
        <h2>Diagnostic Gaz :</h2>
        <p>Nécessaire pour les installations de gaz de plus de 15 ans.
           Évalue la sécurité des équipements gaziers.
        </p>
        </div>

        <div className={styles.column}>
        <h2>Diagnostic Termites :</h2>
        <p>Obligatoire si un arrêté préfectoral ou communal le prescrit.
           Vise à détecter la présence de termites ou d’autres insectes xylophages.
        </p>
        </div>

        <div className={styles.column}>
        <h2>Mesurage  Loi Boutin (Surface habitable) :</h2>
        <p>Indique la surface habitable du logement loué.
        </p>
        </div>

        <div className={styles.column}>
        <h2>État des Lieux :</h2>
        <p>Non un diagnostic, mais une obligation cruciale.
           État des lieux d’entrée et de sortie pour évaluer l’état du logement.
        </p>
        </div>

        <p>Le respect de ces obligations assure la conformité légale de la location, protégeant tant le propriétaire que le locataire.<br/> Chaque diagnostic doit être réalisé par des professionnels certifiés, et les résultats doivent être clairement communiqués aux parties concernées.





</p>
        <p className={styles.txtColor}>
          Besoin d’un DEVIS ? Contactez-nous dès Aujourd’hui!</p>

        <div>
          <Link to="/devis">
            <Button
              className={styles.buttonFirstImg}
              variant="filled"
              color="yellow"
              size="l"
              radius="xl"
            >
              Cliquez ici
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
