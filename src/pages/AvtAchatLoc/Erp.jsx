import styles from "./avtAchatLoc.module.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export const Erp = () => {
  return (
    <div>
      <div className={styles.backgroundImg}>
        <h1>ERP</h1>
        <div className={styles.block}>
          <p>ERP</p>
        </div>
      </div>
      <div className={styles.txt}>
        <p>
          Bienvenue chez <strong>GPADI</strong>, votre partenaire de confiance pour tous vos
          besoins en <strong className={styles.fontweight}>diagnostics immobiliers</strong>. Nous comprenons l’importance de
          garantir la <strong>sécurité</strong> et la <strong>conformité</strong> c’est pourquoi nous mettons en avant notre expertise
          en matière de < strong>Diagnostic ERP</strong> (<strong>État des Risques et Pollutions</strong>).
        </p>
        <h2>Qu’est-ce que le Diagnostic ERP ?</h2>
        <p>
          Le Diagnostic ERP, également appelé <strong>ERNMT</strong> (<strong>État des Risques Naturels,
          Miniers et Technologiques</strong>), est une étape essentielle lors de la<strong> vente </strong> 
          ou de la <strong>location</strong> d’un bien immobilier. Il vise à informer les futurs
          occupants des risques potentiels liés à la localisation du bien en
          termes de <strong>risques naturels, miniers, technologiques, et d’autres
          pollutions</strong>.
        </p>
        <h2>Obligations et Dates Importantes</h2>
        <h3>Obligation Légale :</h3>

        <p>
          Le <strong className={styles.fontweight}>Diagnostic ERP</strong> est une <strong>obligation légale lors de la vente ou de la
          location d’un bien immobilier</strong> . Il doit être inclus dans les dossiers
          de <strong className={styles.fontweight}>diagnostic technique</strong>.
        </p>

        <h3>Validité du Diagnostic :</h3>

        <p>
          La <strong>validité</strong> du Diagnostic ERP est de <strong>six mois</strong>. Une mise à jour est
          nécessaire en cas de modification de la réglementation locale ou en
          cas de changement des circonstances affectant les risques.
        </p>

        <h2>Notre Engagement envers la Conformité</h2>
        <p>
          Chez GPADI, nous nous engageons à assurer une totale <strong>conformité</strong> avec
          les normes en vigueur pour le <strong className={styles.fontweight}>Diagnostic ERP</strong>. Nos <strong className={styles.fontweight}>diagnostiqueurs </strong>
          expérimentés sont formés pour évaluer avec précision les risques
          naturels, miniers, technologiques, et les pollutions potentielles.
        </p>

        <h2>Pourquoi nous choisir pour votre Diagnostic ERP ?</h2>
          <h3>Expertise Approfondie :</h3> 
          <p>Nos diagnostiqueurs sont certifiés et experts
          dans la réalisation de <strong>diagnostics ERP</strong> conformes aux normes en
          vigueur.
          </p>
          <h3>Conseils Personnalisés :</h3>
           <p>Besoin de conseils sur les démarches à suivre
              en cas de risques identifiés ? Notre équipe est là pour vous guider.
            </p>
          <h3>Minimisation des Risques :</h3>
          <p> En choisissant GPADI, minimisez les risques
          liés à la localisation de votre bien, assurant ainsi la sécurité et la
          tranquillité d’esprit des occupants.</p>
        
        <p className={styles.txtColor}>
          Besoin d’un <strong>DEVIS</strong> pour votre diagnostic immobilier ERP ?
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
