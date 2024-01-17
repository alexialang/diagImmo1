import RootLayout from "@/components/Layout";
import styles from "./avtAchatLoc.module.css";
import { Button } from "@mantine/core";
import Link from "next/link";

const DiagGaz = () => {
  return (
    <div className={styles.root}>
      <div className={styles.backgroundImg}>
        <h1>Diagnostic Gaz</h1>
        <div className={styles.block}>
          <p className={styles.txt}>Diagnostic Gaz</p>
        </div>
      </div>
      <div className={styles.txt}>
        <p className={styles.txt}>
          Bienvenue chez <strong>GPADI</strong>, votre partenaire de confiance
          pour tous vos besoins en{" "}
          <strong className={styles.fontweight}>diagnostics immobiliers</strong>
          . Nous comprenons l’importance de garantir la{" "}
          <strong className={styles.fontweight}>sécurité</strong> et la{" "}
          <strong className={styles.fontweight}>conformité</strong> c’est
          pourquoi nous mettons en avant notre expertise en matière de{" "}
          <strong>Diagnostic Gaz</strong>.
        </p>
        <h2>Qu’est-ce que le Diagnostic Gaz ?</h2>
        <p className={styles.txt}>
          Le <strong>diagnostic Gaz</strong> est une étape cruciale lors de la{" "}
          <strong className={styles.fontweight}>vente</strong> ou de la
          <strong className={styles.fontweight}> location</strong> d’un bien
          immobilier. Il vise à évaluer la <strong>conformité</strong> et la
          <strong> sécurité</strong> des <strong>installations de gaz</strong>,
          assurant ainsi la protection des occupants contre les{" "}
          <strong>risques liés au gaz</strong>.
        </p>

        <h2>Obligations et Dates Importantes</h2>
        <h3 className={styles.h3}>Obligation Légale :</h3>
        <p className={styles.txt}>
          Le <strong>diagnostic Gaz</strong> est une obligation légale lors de
          la <strong>vente</strong> d’un bien immobilier avec une{" "}
          <strong>installation de gaz</strong> datant de{" "}
          <strong>plus de 15 ans</strong>. Il doit être inclus dans les dossiers
          de <strong className={styles.fontweight}>diagnostic technique</strong>
          .
        </p>
        <h3 className={styles.h3}>Validité du Diagnostic :</h3>
        <p className={styles.txt}>
          La validité du{" "}
          <strong className={styles.fontweight}>diagnostic Gaz</strong> est de{" "}
          <strong>3 ans</strong>. Une mise à jour est nécessaire en cas de
          modifications importantes des installations de
          <strong className={styles.fontweight}> gaz</strong> ou en cas de vente
          ou de location après la période de validité.
        </p>

        <h2>Notre Engagement envers la Conformité</h2>
        <p className={styles.txt}>
          Chez <strong className={styles.fontweight}>GPADI</strong>, nous nous
          engageons à assurer une totale <strong>conformité</strong> avec les
          normes en vigueur pour le diagnostic Gaz. Nos diagnostiqueurs
          expérimentés sont formés pour évaluer précisément la sécurité des
          installations de gaz et fournir des recommandations appropriées.
        </p>

        <h2>Pourquoi nous choisir pour votre Diagnostic Gaz ?</h2>
        <h3>· Expertise Approfondie :</h3>
        <p className={styles.txt}>
          Nos <strong>diagnostiqueurs</strong> sont certifiés et experts dans la
          réalisation de diagnostics Gaz conformes aux{" "}
          <strong>normes en vigueur</strong>.
        </p>
        <h3>· Conseils Personnalisés :</h3>
        <p className={styles.txt}>
          Besoin de conseils sur les démarches à suivre en cas de non-conformité
          ? Notre équipe est là pour vous guider.
        </p>
        <h3>· Minimisation des Risques :</h3>
        <p className={styles.txt}>
          En choisissant GPADI, minimisez les risques liés à des installations
          de gaz défectueuses, assurant ainsi la sécurité des occupants.
        </p>
        <p className={styles.txtColor}>
          Besoin d’un <strong>DEVIS</strong> pour votre diagnostic immobilier
          Gaz ? Contactez-nous dès Aujourd’hui!
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

DiagGaz.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default DiagGaz;
