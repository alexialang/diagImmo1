import styles from "./avtAchatLoc.module.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export const Erp = () => {
  return(
  <div>
    <div className={styles.backgroundImg}>
      <h1>ERP</h1><div className={styles.block}>
      <p>ERP</p></div> 
      </div>
    <div className={styles.txt} >
   <p> Bienvenue chez  GPADI, votre partenaire de confiance pour tous vos besoins en diagnostics immobiliers. Nous comprenons l’importance de garantir la sécurité et la conformité dans le domaine de la location immobilière, et c’est pourquoi nous mettons en avant notre expertise en matière de Diagnostic ERP (État des Risques et Pollutions).</p>

<h2>Qu’est-ce que le Diagnostic ERP ?</h2>
<p>Le Diagnostic ERP, également appelé ERNMT (État des Risques Naturels, Miniers et Technologiques), est une étape essentielle lors de la vente ou de la location d’un bien immobilier. Il vise à informer les futurs occupants des risques potentiels liés à la localisation du bien en termes de risques naturels, miniers, technologiques, et d’autres pollutions.</p>

<h2>Obligations et Dates Importantes</h2>
<h3>Obligation Légale :</h3><p> Le Diagnostic ERP est une obligation légale lors de la vente ou de la location d’un bien immobilier. Il doit être inclus dans les dossiers de diagnostic technique.</p>

<h3>Validité du Diagnostic :</h3> <p>La validité du Diagnostic ERP est de six mois. Une mise à jour est nécessaire en cas de modification de la réglementation locale ou en cas de changement des circonstances affectant les risques.</p>

<h2>Notre Engagement envers la Conformité</h2>
<p>Chez  GPADI, nous nous engageons à assurer une totale conformité avec les normes en vigueur pour le Diagnostic ERP. Nos diagnostiqueurs expérimentés sont formés pour évaluer avec précision les risques naturels, miniers, technologiques, et les pollutions potentielles.</p>

<h2>Pourquoi nous choisir pour votre Diagnostic ERP ?</h2>
<p>Expertise Approfondie : Nos diagnostiqueurs sont certifiés et experts dans la réalisation de diagnostics ERP conformes aux normes en vigueur.<br/><br/>

Conseils Personnalisés : Besoin de conseils sur les démarches à suivre en cas de risques identifiés ? Notre équipe est là pour vous guider.<br/><br/>

Minimisation des Risques : En choisissant  GPADI, minimisez les risques liés à la localisation de votre bien, assurant ainsi la sécurité et la tranquillité d’esprit des occupants.</p>

<p className={styles.txtColor}>Besoin d’un DEVIS pour votre diagnostic immobilier ERP ? Contactez-nous dès Aujourd’hui!</p>
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
        </Link></div>
    </div>
   
        </div> )
}
  
    