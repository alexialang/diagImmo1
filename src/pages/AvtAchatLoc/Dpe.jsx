import styles from "./avtAchatLoc.module.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export const Dpe = () => {
  return (
    <div>
      <div className={styles.backgroundImg}>
        <h1>Dpe</h1>
        <div className={styles.block}>
          <p>Dpe</p>
        </div>
      </div>
      <div className={styles.txt}>
        <p>
          Bienvenue chez <strong>GPADI</strong>, votre partenaire de confiance pour tous vos
          besoins en <strong>diagnostics immobiliers</strong>. Nous comprenons l’importance de
          garantir la transparence et la<strong>conformité</strong> dans le domaine de la
          location immobilière, c’est pourquoi nous mettons en avant notre
         <strong>expertise</strong> , en matière de <strong>Diagnostic de Performance
          Énergétique</strong> (DPE).
        </p>
        <h2>Qu’est-ce que le DPE ?</h2>
        <p>
          Le Diagnostic de Performance Énergétique (<strong>DPE</strong>) est une étape cruciale
          lors de la mise en <strong>vente</strong> ou en <strong>location</strong> d’un <strong>bien immobilier</strong>. Il vise
          à évaluer la performance énergétique du <strong>logement</strong> en attribut des <strong>notes</strong>
          de <strong>consommation énergétique</strong> et d’ <strong>émissions de gaz à effet de serre</strong>.
        </p>
        <h2> Obligations et dates importantes</h2>
        <h3>· Obligation Légale : </h3>
        <p>
          Le DPE est une <strong>obligation légale</strong> lors de la vente ou de la location
          d’un bien immobilier en France. Il doit être inclus dans les <strong>  </strong> pour informer les futurs occupants.
        </p>
        <h3>· Validité du DPE :</h3> La <strong>validité</strong> du DPE est de <strong>10 ans</strong>, sauf en
        cas de travaux significatifs impactant la performance énergétique du
        logement. Dans ce cas, une mise à jour du diagnostic est recommandée.
        <h2>Notre Engagement envers la Conformité</h2>
        Chez GPADI, nous nous engageons à assurer une totale <strong>conformité</strong> aux
        exigences du DPE. Nos <strong>diagnostiqueurs</strong> expérimentés sont formés pour
        fournir des évaluations précises de la performance énergétique de votre
       <strong>logement</strong> , vous aidant à prendre des décisions éclairées.
        <h2>Pourquoi nous choisir pour votre Diagnostic DPE ?</h2>
        <p>
          · Expertise Approfondie : Nos diagnostiqueurs sont certifiés et
          experts dans la réalisation de diagnostics DPE conformes aux <strong>normes</strong> en
          vigueur.
          <br />· Conseils Personnalisés : Besoin de conseils sur les démarches
          à suivre en fonction des résultats du DPE ? Notre équipe est là pour
          vous fournir les informations nécessaires.
          <br />· Minimisation des Risques : En concevant GPADI, minimisez les
          risques liés à la performance énergétique de votre logement,
          contribuant ainsi à la durabilité et à l’efficacité énergétique.
        </p>
        <p className={styles.txtColor}>
          Besoin d’un DEVIS pour votre diagnostic immobilier DPE ?
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
