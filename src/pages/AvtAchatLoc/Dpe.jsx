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
          Bienvenue chez GPADI, votre partenaire de confiance pour tous vos
          besoins en diagnostics immobiliers. Nous comprenons l’importance de
          garantir la transparence et la conformité dans le domaine de la
          localisation immobilière, c’est pourquoi nous mettons en avant notre
          expertise, cette fois-ci, en matière de Diagnostic de Performance
          Énergétique (DPE).
        </p>
        <h2>Qu’est-ce que le DPE ?</h2>
        <p>
          Le Diagnostic de Performance Énergétique (DPE) est une étape cruciale
          lors de la mise en vente ou en location d’un bien immobilier. Il vise
          à évaluer la performance énergétique du logement en attribut des notes
          de consommation énergétique et d’émissions de gaz à effet de serre.
          Notre équipe chez [Nom de votre entreprise] est prête à vous
          accompagner à travers ce processus essentiel.
        </p>
        <h2> Obligations et dates importantes</h2>
        <h3>· Obligation Légale : </h3>
        <p>
          Le DPE est une obligation légale lors de la vente ou de la location
          d’un bien immobilier en France. Il doit être inclus dans les annonces
          immobilières pour informer les futurs occupants.
        </p>
        <h3>· Validité du DPE :</h3> La validité du DPE est de 10 ans, sauf en
        cas de travaux significatifs impactant la performance énergétique du
        logement. Dans ce cas, une mise à jour du diagnostic est recommandée.
        <h2>Notre Engagement envers la Conformité</h2>
        Chez GPADI, nous nous engageons à assurer une totale conformité aux
        exigences du DPE. Nos diagnostiqueurs expérimentés sont formés pour
        fournir des évaluations précises de la performance énergétique de votre
        logement, vous aidant à prendre des décisions éclairées.
        <h2>Pourquoi nous choisir pour votre Diagnostic DPE ?</h2>
        <p>
          {" "}
          · Expertise Approfondie : Nos diagnostiqueurs sont certifiés et
          experts dans la réalisation de diagnostics DPE conformes aux normes en
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
