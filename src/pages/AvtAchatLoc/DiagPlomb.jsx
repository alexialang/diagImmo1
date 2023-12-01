import styles from "./avtAchatLoc.module.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export const DiagPlomb = () => {
  return(
  <div>
    <div className={styles.backgroundImg}>
      <h1>Diagnostic Plomb</h1>
      <div className={styles.block}>
      <p>Diagnostic Plomb</p></div> 
      </div>
    <div className={styles.txt} >
    
<p>Bienvenue chez  GPADI, votre partenaire de confiance pour tous vos besoins en diagnostics immobiliers. Nous comprenons l’importance de garantir la sécurité et la conformité dans le domaine de la location immobilière, et c’est pourquoi nous mettons en avant notre expertise en matière de Diagnostic Plomb.</p>

<h2>Qu’est-ce que le Diagnostic Plomb ?</h2>
<p>Le diagnostic Plomb, également appelé Crep (Constat de Risque d’Exposition au Plomb), est une étape cruciale lors de la vente ou de la location d’un bien immobilier construit avant le 1er janvier 1949. Il vise à évaluer la présence éventuelle de plomb, un matériau toxique, dans les revêtements intérieurs du logement.</p>

<h2>Obligations et Dates Importantes</h2>
<h3>Obligation Légale :</h3> <p>Le diagnostic Plomb est une obligation légale lors de la vente ou de la location d’un bien immobilier construit avant le 1er janvier 1949. Il doit être inclus dans les dossiers de diagnostic technique.</p>

<h3>Validité du Diagnostic :</h3> <p>La validité du diagnostic Plomb est illimitée, à moins que des travaux de rénovation n’aient été réalisés, auquel cas une mise à jour est nécessaire.</p>

<h2>Notre Engagement envers la Conformité</h2>
<p>Chez  GPADI, nous nous engageons à assurer une totale conformité avec les normes en vigueur pour le diagnostic Plomb. Nos diagnostiqueurs expérimentés sont formés pour détecter toute présence de plomb et fournir des recommandations appropriées.</p>

<h2>Pourquoi nous choisir pour votre Diagnostic Plomb ?</h2>
<p>· Expertise Approfondie : Nos diagnostiqueurs sont certifiés et experts dans la réalisation de diagnostics Plomb conformes aux normes en vigueur.<br/><br/>

· Conseils Personnalisés : Besoin de conseils sur les démarches à suivre en cas de présence de plomb ? Notre équipe est là pour vous guider.<br/><br/>

· Minimisation des Risques : En choisissant  GPADI, minimisez les risques liés à la présence de plomb, assurant ainsi un environnement sûr pour les occupants.</p>

<p className={styles.txtColor}>Besoin d’un DEVIS pour votre diagnostic immobilier Plomb ? Contactez-nous dès Aujourd’hui!</p>
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
  
    