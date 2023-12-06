import styles from "./avtAchatLoc.module.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export const ObligAchat = () => {
  return (
    <div>
      <div className={styles.backgroundImg}>
        <h1>Vos Obligations d’Achat</h1>
        <div className={styles.block}>
          <p>Vos Obligations d’Achat</p>
        </div>
      </div>
      <div className={styles.txt}>
        <p>Lors d’une vente immobilière en France, plusieurs diagnostics sont obligatoires pour garantir la transparence et la sécurité de la transaction. Ces obligations sont édictées par la législation et visent à informer les parties prenantes sur l’état du bien.</p>
         <p className={styles.fontsize}>Voici une liste des diagnostics immobiliers nécessaires lors d’une vente :</p>

        <div className={styles.column}> 
        <h2>Diagnostic de Performance Énergétique (DPE) :</h2>
        <p>Obligatoire pour évaluer la performance énergétique du logement.
        Inclus dans les annonces immobilières.
        Valide pendant 10 ans, sauf en cas de travaux significatifs.</p>
        </div>

        <div className={styles.column}>
        <h2>Diagnostic Amiante :</h2>
        <p>Obligatoire si le permis de construire a été déposé avant 1997.
           Vise à détecter la présence d’amiante dans le bâtiment.
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
        <h2>Mesurage Loi Carrez :</h2>
        <p>Requis pour les biens en copropriété.
           Mesure la superficie privative du lot vendu.
        </p>
        </div>

        <div className={styles.column}>
        <h2>État des Risques et Pollutions (ERP) :</h2>
        <p>Informe sur les risques naturels, technologiques, et les pollutions du secteur.
        </p>
        </div>

        <div className={styles.column}>
        <h2>Diagnostic Technique Global (DTG) :</h2>
        <p>Obligatoire dans certaines copropriétés.
           Évalue l’état général du bâtiment et anticipe les travaux nécessaires.
        </p>
        </div>

        <div className={styles.column}>
        <h2>Assainissement Non Collectif (ANC) :</h2>
        <p>Exigé pour les biens non raccordés au réseau public d’assainissement. </p> 
        </div>
        <p> Le respect de ces obligations garantit la conformité légale de la vente immobilière, apportant une sécurité accrue aux vendeurs et aux acquéreurs.<br/>
          Chaque diagnostic doit être réalisé par des professionnels certifiés pour assurer la validité des résultats.</p>
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
