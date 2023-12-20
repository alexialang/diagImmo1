import styles from "./avtAchatLoc.module.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export const Dpe = () => {
  return (
    <div className={styles.root}>
      <div className={styles.backgroundImg}>
        <h1>Dpe</h1>
        <div className={styles.block}>
          <p className={styles.txt}>Dpe</p>
        </div>
      </div>
      <div className={styles.txt}>

        <p className={styles.txt}>
          Bienvenue chez <strong>GPADI</strong>, votre partenaire de confiance pour tous vos
          besoins en <strong className={styles.fontweight}>diagnostics immobiliers</strong>. Nous comprenons l’importance de
          garantir la transparence et la <strong className={styles.fontweight}>conformité</strong> dans le domaine de la
          location immobilière, c’est pourquoi nous mettons en avant notre
          <strong > expertise</strong> , en matière de <strong>Diagnostic de Performance
          Énergétique</strong> (DPE).
        </p>

        <h2>Qu’est-ce que le DPE ?</h2>
        <p className={styles.txt}>
          Le <strong>Diagnostic de Performance Énergétique</strong> (<strong>DPE</strong>) est une étape cruciale
          lors de la mise en <strong className={styles.fontweight}>vente</strong> ou en <strong className={styles.fontweight}>location</strong> d’un <strong className={styles.fontweight}>bien immobilier</strong>. Il vise
          à évaluer la performance énergétique du <strong className={styles.fontweight}>logement</strong> en attribut des <strong> notes </strong>
          de <strong>consommation énergétique</strong> et d’ <strong>émissions de gaz à effet de serre</strong>.
        </p>

        <h2> Obligations et dates importantes</h2>
        <h3 className={styles.h3}>· Obligation Légale : </h3>
        <p className={styles.txt}>
          Le DPE est une <strong className={styles.fontweight}>obligation légale</strong> <strong>lors de la vente ou de la location
          d’un bien immobilier en France</strong>. Il doit être inclus dans les dossiers de diagnostic technique pour informer les futurs occupants.
        </p>
        <h3 className={styles.h3}>· Validité du DPE :</h3> 
        <p className={styles.txt}>La <strong className={styles.fontweight}>validité</strong> du DPE est de <strong>10 ans</strong>,<strong> sauf en
        cas de travaux significatifs </strong> impactant la performance énergétique du
        logement. Dans ce cas, une mise à jour du diagnostic est recommandée.</p>
        <h2>Notre Engagement envers la Conformité</h2>
        <p className={styles.txt}>
        Chez GPADI, nous nous engageons à assurer une totale <strong>conformité</strong> aux
        exigences du DPE. Nos <strong className={styles.fontweight}>diagnostiqueurs</strong> expérimentés sont formés pour
        fournir des évaluations précises de la performance énergétique de votre
       <strong className={styles.fontweight}> logement</strong> , vous aidant à prendre des décisions éclairées.
        </p>
        
        <h2>Pourquoi nous choisir pour votre Diagnostic DPE ?</h2>

        <h3 className={styles.h3}>· Expertise Approfondie :</h3>
          <p className={styles.txt}>Nos diagnostiqueurs sont certifiés et
        experts dans la réalisation de diagnostics DPE conformes aux <strong className={styles.fontweight}> normes</strong> en
        vigueur.
        </p>
        <h3 className={styles.h3}>· Conseils Personnalisés :</h3> 
        <p className={styles.txt}>Besoin de conseils sur les démarches
        à suivre en fonction des résultats du DPE ? Notre équipe est là pour
        vous fournir les informations nécessaires.</p>
        <h3 className={styles.h3}>· Minimisation des Risques :</h3> 
        <p className={styles.txt}>En concevant GPADI, minimisez les
        risques liés à la <strong>performance énergétique</strong> de votre logement,
        contribuant ainsi à la durabilité et à l’efficacité énergétique.
        </p>
        
        <p className={styles.txtColor}>
          Besoin d’un <strong>DEVIS</strong> pour votre diagnostic immobilier DPE ?
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
