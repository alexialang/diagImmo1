import styles from "./avtAchatLoc.module.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export const Amiante = () => {
  return (
    <div>
      <div className={styles.backgroundImg}>
        <div className={styles.divSize}>
          <h1>Amiante</h1>
          <div className={styles.block}>
            <p>Amiante</p>
          </div>
        </div>
      </div>
      <div className={styles.txt}>
        Bienvenue chez GPADI, votre partenaire de confiance pour tous vos
        besoins en diagnostics immobiliers. Nous comprenons l’importance de
        garantir la sécurité et la conformité dans le domaine de la localisation
        immobilière, et c’est pourquoi nous mettons en avant notre expertise en
        matière de diagnostic Amiante.
        <h2>Qu’est-ce que le Diagnostic Amiante ?</h2>
        <p>
          Le diagnostic Amiante est une étape essentielle lors de la vente ou de
          la localisation d’un bien immobilier construit avant le 1er juillet
          1997. Il vise à détecter la présence éventuelle d’amiante, un matériau
          dangereux pour la santé, permettant ainsi d’assurer la sécurité des
          occupants.
        </p>
        <h2>Obligations et dates importantes</h2>
        <h3>· Obligation Légale :</h3>
        <p>
          Le diagnostic Amiante est une obligation légale visant à protéger la
          santé publique. Il doit être inclus dans les dossiers de technique de
          diagnostic lors de la mise en vente ou en localisation.
        </p>
        <h3>· Validité du Diagnostic :</h3>
        <p>
          La validité du diagnostic Amiante est de 3 ans. Une mise à jour est
          nécessaire si des travaux susceptibles de libérer de l’amiante ont été
          effectués.
        </p>
        <h2>Notre Engagement envers la Conformité</h2>
        <p>
          Chez GPADI, nous nous engageons à assurer une totale conformité avec
          les exigences du diagnostic Amiante. Nos diagnostiqueurs expérimentés
          sont formés pour détecter toute présence d’amiante et fournir des
          recommandations appropriées.
        </p>
        <h2>Pourquoi nous choisir pour votre Diagnostic Amiante ?</h2>
        <p>
          · Expertise Approfondie : Nos diagnostiqueurs sont certifiés et
          experts dans la réalisation de diagnostics Amiante conforme aux normes
          en vigueur.
          <br />
          · Conseils Personnalisés : Besoin de conseils sur les démarches à
          suivre en cas de présence d’amiante ? Notre équipe est là pour vous
          guider.
          <br />· Minimisation des Risques : En choisissant GPADI, minimisez les
          risques sûrs liés à la présence d’amiante, assurant ainsi un
          environnement pour les occupants.
        </p>
        <p className={styles.txtColor}>
          Besoin d’un DEVIS pour votre diagnostic immobilier Amiante ?
          Contactez-nous dès Aujourd’hui!
        </p>
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
