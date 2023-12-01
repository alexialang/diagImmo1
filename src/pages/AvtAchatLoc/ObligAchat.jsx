import styles from "./avtAchatLoc.module.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export const ObligAchat = () => {
  return(
  <div>
    <div className={styles.backgroundImg}>
      <h1>Vos Obligations d’Achat</h1><div className={styles.block}>
      <p>Vos Obligations d’Achat</p></div> 
      </div>
    <div className={styles.txt} >
<p>Bienvenue sur notre page dédiée aux diagnostics immobiliers obligatoires pour les achats avec  GPADI. Nous comprenons l’importance de vous fournir des informations claires et précises pour garantir une acquisition en toute conformité. Découvrez ci-dessous les principaux diagnostics immobiliers obligatoires que vous devez connaître lors d’un achat.</p>

<h2>Diagnostics Obligatoires pour les Achats</h2>

<div className={styles.column}><h3>Loi Carrez : Mesurage en Copropriété</h3>
<p>La Loi Carrez exige le mesurage de la superficie privative des lots en copropriété lors de la vente.</p></div>


<div className={styles.column}><h3>Diagnostic Gaz</h3> <p>Le diagnostic gaz est obligatoire pour les biens immobiliers équipés d’une installation de gaz datant de plus de 15 ans.</p>
</div>

<div className={styles.column}>
  <h3>Diagnostic Électrique</h3>
  <p>Le diagnosticélectrique est requis pour les biens immobiliers dont l’installation électrique a plus de 15 ans.</p>
</div>

<div className={styles.column}>
  <h3>Diagnostic Amiante</h3>
<p> Le diagnostic amiante est obligatoire pour les biens construits avant le 1er juillet 1997.</p>
</div>

<div className={styles.column}>
  <h3>Diagnostic ERP (État des Risques et Pollutions)</h3>
<p> L’ERP est obligatoire pour informer sur les risques naturels, miniers, technologiques, et les pollutions.</p>
</div>

<div className={styles.column}>
  <h3>Diagnostic Plomb (Crep)</h3>
<p> Le diagnostic plomb est obligatoire pour les biens construits avant le 1er janvier 1949.</p>
</div>

<p>Chez  GPADI, nous sommes là pour vous accompagner à travers ces démarches. N’hésitez pas à nous contacter pour obtenir des conseils personnalisés et des devis adaptés à vos besoins spécifiques lors de l’achat d’un bien immobilier. Garantissez une acquisition en toute tranquillité et conformité avec nos services de diagnostics immobiliers.</p>
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
  
    