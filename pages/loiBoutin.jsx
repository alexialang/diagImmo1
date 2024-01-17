import RootLayout from "@/components/Layout";
import styles from "./avtAchatLoc.module.css";
import { Button } from "@mantine/core";
import Link from "next/link";

const LoiBoutin = () => {
  return (
    <div className={styles.root}>
      <div className={styles.backgroundImg}>
        <h1>Loi Boutin</h1>
        <div className={styles.block}>
          <p className={styles.txt}>Loi Boutin</p>
        </div>
      </div>
      <div className={styles.txt}>
        <p className={styles.txt}>
          Bienvenue chez <strong>GPADI</strong>, votre partenaire de confiance
          pour tous vos besoins en{" "}
          <strong className={styles.fontweight}>diagnostics immobiliers</strong>
          . Nous comprenons l’importance de garantir la transparence et la
          conformité c’est pourquoi nous mettons en avant notre expertise en
          matière de <strong>Loi Boutin</strong>.
        </p>
        <h2>Qu’est-ce que la Loi Boutin ?</h2>
        <p className={styles.txt}>
          La <strong>Loi Boutin</strong> stipule l’
          <strong>obligation de mesurer</strong> avec précision la
          <strong> surface habitable</strong> de tout{" "}
          <strong>bien immobilier loué</strong>. Conçue pour protéger les
          locataires en garantissant une information transparente, cette
          réglementation exige un mesurage spécifique, différent de celui
          utilisé lors de la vente des parties de copropriété.
        </p>
        <h2>Obligations et Dates Importantes</h2>
        <h3 className={styles.h3}>Obligation Légale :</h3>
        <p className={styles.txt}>
          La <strong className={styles.fontweight}>Loi Boutin</strong> impose la
          mention de la surface habitable dans le contrat de location. Le{" "}
          <strong className={styles.fontweight}>mesurage</strong> doit être
          réalisé avec précision et doit{" "}
          <strong>figurer dans les annonces immobilières</strong>.
        </p>
        <h3 className={styles.h3}>Validité du Mesurage :</h3>
        <p className={styles.txt}>
          La <strong className={styles.fontweight}>validité</strong> du mesurage
          Boutin est <strong>illimitée</strong>, sauf en cas de modification
          importante du logement. Dans ce cas, une mise à jour est recommandée.
        </p>
        <h2>Notre Engagement envers la Conformité</h2>
        <p className={styles.txt}>
          En tant que{" "}
          <strong className={styles.fontweight}>
            diagnostiqueurs immobiliers
          </strong>{" "}
          expérimentés, nous nous engageons à assurer la{" "}
          <strong>conformité</strong> totale avec la <strong>Loi Boutin</strong>
          . Notre équipe d’experts est formée pour effectuer des mesures
          précises de la totalité du bien loué, excluant uniquement certains
          espaces spécifiés par la loi. Nous sommes là pour simplifier ce
          processus complexe et garantir que votre contrat de location respecte
          les <strong>normes</strong> les plus strictes.
        </p>

        <h2>
          Pourquoi nous choisir pour votre <strong>Mesurage Boutin</strong> ?
        </h2>
        <h3 className={styles.h3}>· Expertise Approfondie :</h3>
        <p className={styles.txt}>
          Nos <strong className={styles.fontweight}>diagnostiqueurs</strong>{" "}
          sont formés aux spécificités de la Loi Boutin et sont experts dans la
          réalisation de
          <strong> mesurages précis</strong>.
        </p>
        <h3 className={styles.h3}>· Conseils Personnalisés :</h3>
        <p className={styles.txt}>
          Besoin de conseils sur la <strong>Loi Boutin</strong> ? Notre équipe
          est là pour répondre à toutes vos questions et vous fournir les
          informations nécessaires.
        </p>
        <h3 className={styles.h3}>· Minimisation des Risques :</h3>
        <p className={styles.txt}>
          Une erreur de plus de 5% dans le mesurage peut entraîner des litiges.
        </p>

        <p className={styles.txtColor}>
          Besoin d’un <strong>DEVIS</strong> pour votre{" "}
          <strong>diagnostic immobilier</strong> <strong>Loi Boutin </strong>?
          Contactez-nous dès Aujourd’hui!
        </p>
        <div>
          <Link href="/devis">
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

LoiBoutin.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default LoiBoutin;
