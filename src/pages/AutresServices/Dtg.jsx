import classes from "./dtg.module.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export const Dtg =()=>{
  return(<div>
    <div className={classes.backgroundImg}>
        <div className={classes.h1} >
          <h1>DTG</h1>
          <div className={classes.block}>
            <p>DTG</p>
          </div>
        </div>
      </div>
      <div className={classes.txt}>
        
Bienvenue chez GPADI, votre partenaire de confiance pour tous vos besoins en diagnostics immobiliers. Nous comprenons l’importance de garantir la transparence et la conformité dans le domaine de la localisation immobilière, c’est pourquoi nous mettons en avant notre expertise, cette fois-ci, en matière de Diagnostic Technique Global (DTG).

<h2>Qu’est-ce que le DTG ?</h2>
<p>Le Diagnostic Technique Global (DTG) est une étape essentielle dans l’évaluation globale de la performance d’un immeuble. Il vise à analyser l’état technique de l’immeuble, en identifiant les travaux nécessaires à sa conservation et à sa valorisation. Notre équipe chez [Nom de votre entreprise] est prête à vous accompagner à travers ce processus crucial.
</p>

<h2>Obligations et dates importantes</h2>
<h3>· Obligation Légale :</h3>
<p>Le DTG est une obligation légale pour les copropriétés en France de plus de 10 ans. Il offre une vision d’ensemble des installations et équipements de l’immeuble.
</p>
<h3>· Validité du DTG :</h3>
<p>La validité du DTG est de 10 ans, sauf en cas de travaux significatifs impactant la structure ou la sécurité de l’immeuble. Dans ce cas, une mise à jour du diagnostic est recommandée.</p>
<h2>Notre Engagement envers la Conformité</h2>
<p>Chez GPADI, nous nous engageons à assurer une totale conformité aux exigences du DTG. Nos diagnostiqueurs expérimentés sont formés pour fournir des évaluations précises de l’état technique de votre immeuble, vous aidant à prendre des décisions éclairées.
</p>

<h3>Pourquoi nous choisir pour votre Diagnostic DTG ?</h3>
<p>· Expertise Approfondie : Nos diagnostiqueurs sont certifiés et experts dans la réalisation de diagnostics DTG conformes aux normes en vigueur.
· Conseils Personnalisés : Besoin de conseils sur les démarches à suivre en fonction des résultats du DTG ? Notre équipe est là pour vous fournir les informations nécessaires.
· Minimisation des Risques : En choisissant GPADI, minimisez les risques liés à l’état technique de votre immeuble, contribuant ainsi à sa conservation et à sa valorisation à long terme.
</p>
<p className={classes.txtColor}>
          Besoin d’un DEVIS pour votre diagnostic immobilier Amiante ?
          Contactez-nous dès Aujourd’hui!
        </p>
        <div>
          <Link to="/devis">
            <Button
              className={classes.buttonFirstImg}
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
)}