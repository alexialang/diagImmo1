import styles from "./avtAchatLoc.module.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export const LoiBoutin = () => {
  return(
  <div>
    <div className={styles.backgroundImg}>
      <h1>Loi Boutin</h1><div className={styles.block}>
      <p>Loi Boutin</p></div> 
      </div>
    <div className={styles.txt} >
    <p>Bienvenue chez  GPADI, votre partenaire de confiance pour tous vos besoins en diagnostics immobiliers. Nous comprenons l’importance de garantir la transparence et la conformité dans le domaine de la location immobilière, et c’est pourquoi nous mettons en avant notre expertise en matière de Loi Boutin.</p>

<h2>Qu’est-ce que la Loi Boutin ?</h2>
<p>La Loi Boutin stipule l’obligation de mesurer avec précision la surface habitable de tout bien immobilier loué. Conçue pour protéger les locataires en garantissant une information transparente, cette réglementation exige un mesurage spécifique, différent de celui utilisé lors de la vente des parties de copropriété. Chez [Nom de votre entreprise], nous sommes là pour vous guider à travers ce processus détaillé.</p>

<h2>Obligations et Dates Importantes</h2>
<h3>Obligation Légale :</h3> <p>La Loi Boutin impose la mention de la surface habitable dans le contrat de location. Le mesurage doit être réalisé avec précision et doit figurer dans les annonces immobilières.</p>

<h3>Validité du Mesurage :</h3><p> La validité du mesurage Boutin est illimitée, sauf en cas de modification importante du logement. Dans ce cas, une mise à jour est recommandée.</p>

<h2>Notre Engagement envers la Conformité</h2>
<p>En tant que diagnostiqueurs immobiliers expérimentés, nous nous engageons à assurer la conformité totale avec la Loi Boutin. Notre équipe d’experts est formée pour effectuer des mesures précises de la totalité du bien loué, excluant uniquement certains espaces spécifiés par la loi. Nous sommes là pour simplifier ce processus complexe et garantir que votre contrat de location respecte les normes les plus strictes.</p>

<h2>Pourquoi nous choisir pour votre Mesurage Boutin ?</h2>
<p>· Expertise Approfondie : Nos diagnostiqueurs sont formés aux spécificités de la Loi Boutin et sont experts dans la réalisation de mesurages précis.<br/><br/>

· Conseils Personnalisés : Besoin de conseils sur la Loi Boutin ? Notre équipe est là pour répondre à toutes vos questions et vous fournir les informations nécessaires.<br/><br/>

· Minimisation des Risques : Une erreur de plus de 5% dans le mesurage peut entraîner des litiges. Avec [Nom de votre entreprise], minimisez ces risques et garantissez un emplacement sans heurts.</p>

<p className={styles.txtColor}>Besoin d’un DEVIS pour votre diagnostic immobilier Loi Boutin ? Contactez-nous dès Aujourd’hui! </p>
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
  
    