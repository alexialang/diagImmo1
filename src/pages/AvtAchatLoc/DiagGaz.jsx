import styles from "./avtAchatLoc.module.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export const DiagGaz = () => {
  return(
  <div>
    <div className={styles.backgroundImg}>
      <h1>Diagnostic Gaz</h1><div className={styles.block}>
      <p>Diagnostic Gaz</p></div> 
      </div>
    <div className={styles.txt} >
    Bienvenue chez [Nom de votre entreprise], votre partenaire de confiance pour tous vos besoins en diagnostics immobiliers. Nous comprenons l’importance de garantir la sécurité et la conformité dans le domaine de la location immobilière, et c’est pourquoi nous mettons en avant notre expertise en matière de Diagnostic Gaz.

<h2>Qu’est-ce que le Diagnostic Gaz ?</h2>
<p>Le diagnostic Gaz est une étape cruciale lors de la vente ou de la location d’un bien immobilier. Il vise à évaluer la conformité et la sécurité des installations de gaz, assurant ainsi la protection des occupants contre les risques liés au gaz.</p>

<h2>Obligations et Dates Importantes</h2>
<h3>Obligation Légale :</h3><p> Le diagnostic Gaz est une obligation légale lors de la vente d’un bien immobilier avec une installation de gaz datant de plus de 15 ans. Il doit être inclus dans les dossiers de diagnostic technique.</p>

<h3>Validité du Diagnostic :</h3><p> La validité du diagnostic Gaz est de 3 ans. Une mise à jour est nécessaire en cas de modifications importantes des installations de gaz ou en cas de vente ou de location après la période de validité.</p>

<h2>Notre Engagement envers la Conformité</h2>
<p>Chez [Nom de votre entreprise], nous nous engageons à assurer une totale conformité avec les normes en vigueur pour le diagnostic Gaz. Nos diagnostiqueurs expérimentés sont formés pour évaluer précisément la sécurité des installations de gaz et fournir des recommandations appropriées.</p>

<h2>Pourquoi Choisir [Nom de votre entreprise] pour votre Diagnostic Gaz ?</h2>
<p>· Expertise Approfondie : Nos diagnostiqueurs sont certifiés et experts dans la réalisation de diagnostics Gaz conformes aux normes en vigueur.<br/><br/>

· Conseils Personnalisés : Besoin de conseils sur les démarches à suivre en cas de non-conformité ? Notre équipe est là pour vous guider.<br/><br/>

· Minimisation des Risques : En choisissant [Nom de votre entreprise], minimisez les risques liés à des installations de gaz défectueuses, assurant ainsi la sécurité des occupants.</p>

<p className={styles.txtColor}>Besoin d’un DEVIS pour votre diagnostic immobilier Gaz ? Contactez-nous dès Aujourd’hui!</p>
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
  
    