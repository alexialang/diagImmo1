import styles from "./avtAchatLoc.module.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export const DiagPlomb = () => {
  return (
    <div>
      <div className={styles.backgroundImg}>
        <h1>Diagnostic Plomb</h1>
        <div className={styles.block}>
          <p>Diagnostic Plomb</p>
        </div>
      </div>
      <div className={styles.txt}>
        <p>
          Bienvenue chez <strong>GPADI</strong>, votre partenaire de confiance pour tous vos
          besoins en <strong className={styles.fontweight}>diagnostics immobiliers</strong>. Nous comprenons l’importance de
          garantir la <strong>sécurité</strong> et la <strong>conformité</strong> dans le domaine de la location
          immobilière, et c’est pourquoi nous mettons en avant notre expertise
          en matière de <strong>Diagnostic Plomb</strong>.
        </p>
        <h2>Qu’est-ce que le Diagnostic Plomb ?</h2>
        <p>
          Le diagnostic Plomb, également appelé <strong>Crep</strong> (<strong>Constat de Risque
          d’Exposition au Plomb</strong>), est une étape cruciale lors de la vente ou de
          la location d’un <strong>bien immobilier</strong> construit avant le 1er janvier 1949.
          Il vise à évaluer la présence éventuelle de <strong>plomb</strong>, un matériau
          toxique, dans les revêtements intérieurs du logement.
        </p>
        <h2>Obligations et Dates Importantes</h2>
        <h3>Obligation Légale :</h3>
        <p>
          Le diagnostic Plomb est une obligation légale lors de la <strong>vente ou de
          la location d’un bien immobilie</strong>r construit <strong>avant le 1er janvier 1949</strong> .
          Il doit être inclus dans les dossiers de <strong>diagnostic technique</strong>.
        </p>
        <h3>Validité du Diagnostic :</h3>
        <p>
          La validité du diagnostic Plomb est <strong>illimitée</strong>, à moins que des travaux
          de rénovation n’aient été réalisés, auquel cas une mise à jour est
          nécessaire.
        </p>
        <h2>Notre Engagement envers la Conformité</h2>
        <p>
          Chez <strong className={styles.fontweight}>GPADI</strong> , nous nous engageons à assurer une totale <strong>conformité</strong> avec
          les normes en vigueur pour le <strong className={styles.fontweight}>diagnostic Plomb</strong>. Nos <strong className={styles.fontweight}>diagnostiqueurs </strong> 
          expérimentés sont formés pour détecter toute présence de <strong className={styles.fontweight}>plomb</strong> et
          fournir des recommandations appropriées.
        </p>
        <h2>Pourquoi nous choisir pour votre Diagnostic Plomb ?</h2>
          <h3>· Expertise Approfondie :</h3>
           <p>Nos diagnostiqueurs sont certifiés et
              experts dans la réalisation de diagnostics Plomb conformes aux normes
              en vigueur.
          </p>
          <h3>· Conseils Personnalisés :</h3>
          <p>Besoin de conseils sur les démarches à
             suivre en cas de <strong>présence de plomb</strong>  ? Notre équipe est là pour vous
             guider.
          </p>
          <h3>· Minimisation des Risques :</h3> 
          <p>En choisissant GPADI, minimisez les
          risques liés à la présence de plomb, assurant ainsi un environnement
          sûr pour les occupants.
          </p>
        <p className={styles.txtColor}>
          Besoin d’un <strong>DEVIS</strong> pour votre diagnostic immobilier Plomb ?
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
