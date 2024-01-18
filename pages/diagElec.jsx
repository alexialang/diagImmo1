import RootLayout from "@/components/Layout";
import styles from "./avtAchatLoc.module.css";
import { Button } from "@mantine/core";
import Link from "next/link";

const DiagElec = () => {
  return (
    <div className={styles.root}>
      <div className={styles.backgroundImg}>
        <h1>Diagnostic Electrique</h1>
        <div className={styles.block}>
          <p>Diagnostic Electrique</p>
        </div>
      </div >
      <div className={styles.txtblock}>
      <div className={styles.txt}>
        Bienvenue chez <strong>GPADI</strong>, votre partenaire de confiance
        pour tous vos besoins en{" "}
        <strong className={styles.fontweight}>diagnostics immobiliers</strong>.
        Nous comprenons l’importance de garantir la <strong>sécurité</strong> et
        la <strong>conformité</strong>, et c’est pourquoi nous mettons en avant
        notre <strong className={styles.fontweight}>expertise</strong> en
        matière de <strong>Diagnostic Électrique.</strong>
        <h2>Qu’est-ce que le Diagnostic Électrique ?</h2>
        <p className={styles.txt}>
          Le <strong>diagnostic Électrique</strong> est une étape cruciale lors
          de la <strong>vente</strong> ou de la <strong>location</strong> d’un{" "}
          <strong className={styles.fontweight}>bien immobilier</strong>. Il
          vise à évaluer la{" "}
          <strong>conformité des installations électriques</strong>, assurant
          ainsi la sécurité des occupants en prévenant les risques liés à
          l’électricité.
        </p>
        <h2>Obligations et Dates Importantes</h2>
        <h3 className={styles.h3}>· Obligation Légale :</h3>
        <p className={styles.txt}>
          Le{" "}
          <strong className={styles.fontweight}>diagnostic Électrique</strong>{" "}
          est une obligation légale lors de la{" "}
          <strong>vente d’un bien immobilier</strong> construit il y a{" "}
          <strong>plus de 15 ans</strong>. Il doit être inclus dans les dossiers
          de <strong>diagnostic technique</strong>.
        </p>
        <h3 className={styles.h3}>· Validité du Diagnostic :</h3>
        <p className={styles.txt}>
          La validité du diagnostic Électrique est de <strong>3 ans</strong>.
          Une mise à jour est nécessaire en cas de modifications importantes des
          installations électriques ou en cas de vente ou de location après la
          période de validité.
        </p>
        <h2>Notre Engagement envers la Conformité</h2>
        <p className={styles.txt}>
          Chez GPADI, nous nous engageons à assurer une totale{" "}
          <strong>conformité</strong> avec les normes en vigueur pour{" "}
          <strong className={styles.fontweight}>
            le diagnostic Électrique
          </strong>
          . Nos
          <strong className={styles.fontweight}> diagnostiqueurs</strong>{" "}
          expérimentés sont formés pour évaluer précisément la sécurité des
          installations électriques et fournir des recommandations appropriées.
        </p>
        <h2>Pourquoi nous choisir pour votre Diagnostic Électrique ?</h2>
        <h3 className={styles.h3}>·Expertise Approfondie :</h3>
        <p className={styles.txt}>
          {" "}
          Nos diagnostiqueurs sont certifiés et experts dans la réalisation de
          diagnostics Électriques conformes aux{" "}
          <strong>normes en vigueur</strong>.
        </p>
        <h3 className={styles.h3}>· Conseils Personnalisés :</h3>
        <p className={styles.txt}>
          Besoin de conseils sur les démarches à suivre en cas de non-conformité
          ? Notre équipe est là pour vous guider.
        </p>
        <h3 className={styles.h3}>· Minimisation des Risques :</h3>
        <p className={styles.txt}>
          En choisissant GPADI, minimisez les risques liés à des installations
          électriques défectueuses, assurant ainsi la sécurité des occupants.
        </p>
        <p className={styles.txtColor}>
          Besoin d’un <strong>DEVIS</strong> pour votre diagnostic immobilier
          Électrique ? Contactez-nous dès Aujourd’hui!
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
    </div>
  );
};

DiagElec.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default DiagElec;
