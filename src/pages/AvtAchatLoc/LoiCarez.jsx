import styles from "./avtAchatLoc.module.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export const LoiCarez = () => {
  return (
    <div>
      <div className={styles.backgroundImg}>
        <h1>Loi Carez</h1>
        <div className={styles.block}>
          <p>Loi Carez</p>
        </div>
      </div>
      <div className={styles.txt}>
        <p>
          Bienvenue chez <strong>GPADI</strong>, votre partenaire de confiance pour tous vos
          besoins en <strong className={styles.fontweight}>diagnostics immobiliers</strong>. Nous comprenons l’importance de
          garantir la <strong className={styles.fontweight}>transparence</strong> et la <strong className={styles.fontweight}>conformité</strong> c’est pourquoi nous mettons en avant notre
          expertise en matière de <strong>Loi Carrez</strong>.
        </p>

        <h2>Qu’est-ce que la Loi Carrez ?</h2>
        <p>
          La <strong >Loi Carrez </strong>impose la mention précise de la superficie privative
          d’un <strong>bien immobilier en copropriété</strong> lors de la <strong>vente</strong>. Cette
          réglementation a été instaurée pour protéger les acquéreurs en
          assurant une information claire sur la surface réelle du bien. 
        </p>

        <h2>Obligations et Dates Importantes</h2>
        <h3>Obligation Légale :</h3>
        <p>
          La <strong className={styles.fontweight}>Loi Carrez </strong>impose le <strong>mesurage précis de la superficie privative des
          lots en copropriété lors de la vente</strong>. La surface doit être mentionnée
          dans l’acte de vente et dans les annonces immobilières.
        </p>
        <h3>Validité du Mesurage :</h3>
        <p>
          La <strong className={styles.fontweight}>validité</strong> du <strong className={styles.fontweight}>mesurage Carrez</strong> est <strong>illimitée</strong>, sauf en cas de
          modification importante des lieux. Dans ce cas, une mise à jour est
          recommandée.
        </p>

        <h2>Notre Engagement envers la Conformité</h2>
        <p>
          En tant que <strong className={styles.fontweight}>diagnostiqueurs immobiliers</strong> expérimentés, nous nous
          engageons à assurer la conformité totale avec la Loi Carrez. Notre
          équipe d’experts est formée pour effectuer des <strong>mesures précises</strong> de la
          superficie privative, excluant uniquement certains espaces spécifiés
          par la loi. Nous sommes là pour garantir que votre transaction
          immobilière respecte les normes les plus strictes.
        </p>
        
        <h2>Pourquoi nous choisir pour votre Mesurage Carrez ?</h2>
          <h3>Expertise Approfondie :</h3>
          <p>Nos <strong className={styles.fontweight}>diagnostiqueurs</strong> sont formés aux
          spécificités de la <strong>Loi Carrez</strong> et sont experts dans la réalisation de
          mesurages précis.
          </p>
          <h3>Conseils Personnalisés :</h3>
          <p> Besoin de conseils sur la Loi Carrez ? Notre
          équipe est là pour répondre à toutes vos questions et vous fournir les
          informations nécessaires.
          </p>
          <h3>Minimisation des Risques :</h3>
          <p>
           Avec GPADI, minimisez les risques liés à
          une déclaration incorrecte de la superficie, assurant ainsi une
          transaction immobilière en toute confiance.
          </p>
        <p className={styles.txtColor}>
          Besoin d’un <strong>DEVIS</strong> pour votre diagnostic immobilier <strong>Loi Carrez</strong> ?
          Contactez-nous dès Aujourd’hui
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
