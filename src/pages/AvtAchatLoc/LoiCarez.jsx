import styles from "./avtAchatLoc.module.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export const LoiCarez = () => {
  return(
  <div>
    <div className={styles.backgroundImg}>
      <h1>Loi Carez</h1><div className={styles.block}>
      <p>Loi Carez</p></div> 
      </div>
    <div className={styles.txt} >
    <p>Bienvenue chez [Nom de votre entreprise], votre partenaire de confiance pour tous vos besoins en diagnostics immobiliers. Nous comprenons l’importance de garantir la transparence et la conformité dans le domaine de la location immobilière, et c’est pourquoi nous mettons en avant notre expertise en matière de Loi Carrez.</p>

<h2>Qu’est-ce que la Loi Carrez ?</h2>
<p>La Loi Carrez impose la mention précise de la superficie privative d’un bien immobilier en copropriété lors de la vente. Cette réglementation a été instaurée pour protéger les acquéreurs en assurant une information claire sur la surface réelle du bien. Chez [Nom de votre entreprise], nous sommes là pour vous accompagner dans cette démarche essentielle.</p>

<h2>Obligations et Dates Importantes</h2>
<h3>Obligation Légale :</h3> <p>La Loi Carrez impose le mesurage précis de la superficie privative des lots en copropriété lors de la vente. La surface doit être mentionnée dans l’acte de vente et dans les annonces immobilières.</p>

<h3>Validité du Mesurage :</h3><p> La validité du mesurage Carrez est illimitée, sauf en cas de modification importante des lieux. Dans ce cas, une mise à jour est recommandée.</p>

<h2>Notre Engagement envers la Conformité</h2>
<p>En tant que diagnostiqueurs immobiliers expérimentés, nous nous engageons à assurer la conformité totale avec la Loi Carrez. Notre équipe d’experts est formée pour effectuer des mesures précises de la superficie privative, excluant uniquement certains espaces spécifiés par la loi. Nous sommes là pour garantir que votre transaction immobilière respecte les normes les plus strictes.</p>

<h2>Pourquoi Choisir [Nom de votre entreprise] pour votre Mesurage Carrez ?</h2>
<p>Expertise Approfondie : Nos diagnostiqueurs sont formés aux spécificités de la Loi Carrez et sont experts dans la réalisation de mesurages précis.<br/>

Conseils Personnalisés : Besoin de conseils sur la Loi Carrez ? Notre équipe est là pour répondre à toutes vos questions et vous fournir les informations nécessaires.<br/>

Minimisation des Risques : Avec [Nom de votre entreprise], minimisez les risques liés à une déclaration incorrecte de la superficie, assurant ainsi une transaction immobilière en toute confiance.</p>

<p className={styles.txtColor}>Besoin d’un DEVIS pour votre diagnostic immobilier Loi Carrez ? Contactez-nous dès Aujourd’hui</p>
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
  
    