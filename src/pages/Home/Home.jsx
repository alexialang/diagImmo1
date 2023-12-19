import { Button } from "@mantine/core";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import imgUrlMaison3 from "../../assets/maison3.png";
import imgUrlPoigneeMains from "../../assets/poigneeMains.png";
import imgUrlBatimentMetz from "../../assets/batimentMetz.png";
import imgUrlCheck from "../../assets/check.png";
import imgUrlCathe from "../../assets/cathe.png";

export const Home = () => {
  return (
    // Section imgPano
    <div>
      <div className={styles.firstImage}>
        <Link to="/devis">
          <Button
            className={styles.buttonFirstImg}
            variant="filled"
            color="yellow"
            size="xl"
            radius="xl"
            rightSection={<ChevronRightIcon />}
          >
            Demande de Devis
          </Button>
        </Link>
      </div>
      {/* Section Nos Services */}
      <div className={styles.section2}>
        <div className={styles.texte}>
          <h2>Nos Services</h2>
          <p>Tous les diagnostics immobiliers proposés :</p>
          <p className={styles.li}>
            · DPE (Diagnostic Performance Energétique)
            <br />
            · Audit énergétique
            <br />
            · Diagnostic Amiante Location, Vente
            <br />
            · ERP <br />
            · Surface habitable
            <br />
            · Superficie Carrez
            <br />
            · Diagnostic Gaz
            <br />
            · Electricité
            <br />
            · DTG
            <br />· Diagnostic Plomb (CREP)
          </p>
          <p className={styles.purpleTxt}>
            Besoin d’un DEVIS diagnostic immobilier ?
          </p>
          <Link to="/devis">
            <Button
              className={styles.purpleButton}
              variant="filled"
              radius="xl"
              rightSection={<ChevronRightIcon />}
            >
              Cliquez Ici
            </Button>
          </Link>
        </div>
        <div className={styles.divImg}>
          <Link to="/obligations_achat">
            <div className={styles.boxTxtImg}>
              <div className={styles.divSize}>
                <div className={styles.colorBlock}>
                  <img
                    className={styles.imgHouse}
                    src={imgUrlMaison3}
                    alt="photo d'une maison"
                  />
                </div>
              </div>
              <h3 className={styles.linkTxt}>Vos obligations d’Achat</h3>
            </div>
          </Link>
          <Link to="/obligations_location">
            <div className={styles.boxTxtImg}>
              <div className={styles.divSize}>
                <div className={styles.colorBlock}>
                  <img
                    className={styles.imgHands}
                    src={imgUrlPoigneeMains}
                    alt="poignée de main"
                  />
                </div>
              </div>
              <h3 className={styles.linkTxt}>Vos obligations de Location</h3>
            </div>
          </Link>
        </div>
        <div className={styles.backgroundImg}>
          <div className="color"></div>
          <div className="color"></div>
        </div>
      </div>

      {/* Section Pourquoi Nous Choisir */}
      <div className={styles.divPourquoi}>
        <div>
          <img
            className={styles.imgPourquoi}
            src={imgUrlBatimentMetz}
            alt="Batiment en pierres jaunes et Batiment en pierre rouge"
          />
        </div>
        <div className={styles.txtPourquoi}>
          <div className={styles.titlePourquoi}>
            <h2>Pourquoi Nous Choisir ?</h2>
            <p>
              <div>
                Nous sommes là pour faciliter vos transactions immobilières en
                fournissant des informations précises et fiables sur l’état de
                votre bien.
              </div>
            </p>
          </div>
          <div className={styles.fourBlock}>
            <div className={styles.column}>
              <div>
                <div className={styles.row}>
                  <img src={imgUrlCheck} />
                  <h3>Expertise Approfondie</h3>
                </div>
                <p>
                  Bénéficiez de l’expérience de diagnostiqueurs certifiés,
                  experts dans la réalisation de diagnostics conformes aux
                  normes en vigueur.
                </p>
              </div>
              <div>
                <div className={styles.row}>
                  <img src={imgUrlCheck} />
                  <h3>Conseils Personnalisés </h3>
                </div>
                <p>
                  Profitez de conseils personnalisés pour répondre à vos besoins
                  spécifiques, que ce soit pour la localisation, la vente, ou
                  l’achat d’un bien immobilier.
                </p>
              </div>
            </div>
            <div className={styles.column}>
              <div>
                <div className={styles.row}>
                  <img src={imgUrlCheck} />
                  <h3>Minimisation des Risques : </h3>
                </div>
                <p>
                  Choisissez la tranquillité d’esprit en minimisant les risques
                  liés aux diagnostics, grâce à une approche précise et
                  rigoureuse.
                </p>
              </div>
              <div>
                <div className={styles.row}>
                  <img src={imgUrlCheck} />
                  <h3>Approche Personnalisée : </h3>
                </div>
                <p>
                  Notre service personnalisé est adapté à vos besoins
                  spécifiques, que vous soyez vendeur, acheteur, ou
                  professionnel de l’immobilier, pour une expérience
                  transparente et sur mesure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Obligation Moselle */}
      <div className={styles.lastSection}>
        <div className={styles.txtLastSection}>
          <h2 className={styles.titleLastSection}>
            Quelles sont mes obligations de diagnostics immobiliers sur Metz
            (MOSELLE) ?
          </h2>
          <p>
            · Le diagnostic <strong>amiante</strong> est requis lorsque le{" "}
            <strong>permis de construire</strong> a été déposé{" "}
            <strong>avant 1997</strong> dans le département de la Moselle.
            <br />· Le <strong>DPE</strong> (Diagnostic de Performance
            Énergétique) est une obligation.
            <br />· Le <strong>diagnostic plomb</strong> est obligatoire pour
            les constructions antérieures à 1949.
            <br />· Le <strong>diagnostic électrique</strong> est nécessaire si
            l’installation a plus de quinze ans.
            <br />· Le <strong>diagnostic gaz </strong>est obligatoire pour les
            installations de plus de quinze ans.
            <br />· Le <strong>diagnostic termites </strong>est exigé si un
            arrêté préfectoral (dans le département de la Moselle) ou communal
            (à Metz) le prescrit.
            <br />· Le métrage <strong>Loi Carrez</strong> est requis pour les{" "}
            <strong>biens en copropriété</strong> .
            <br />
            ·L’ <strong>État des Risques Pollution des sols</strong> (
            <strong>ERP</strong> ) est une obligation à respecter.
          </p>
        </div>
        <img src={imgUrlCathe} />
      </div>
    </div>
  );
};
