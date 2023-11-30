import { Button } from "@mantine/core";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@radix-ui/react-icons";

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
          <p className={styles.li}>· DPE (Diagnostic Performance Energétique)<br/>
          · Audit énergétique<br/>
          · Diagnostic Amiante Location, Vente<br/>
          · ERP <br/>
          · Surface habitable<br/>
          · Superficie Carrez<br/>
          · Diagnostic Gaz<br/>
          · Electricité<br/>
          · DTG<br/>
          · Diagnostic Plomb (CREP)
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
                  <img className={styles.imgHouse} src="/src/assets/maison3.png"
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
                <img className={styles.imgHands} src="/src/assets/poigneeMains.png" alt="poignée de main" />
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
      <div>
        <img
          className={styles.imgPourquoi}
          src="src/assets/batimentMetz.png"
          alt="Batiment en pierres jaunes et Batiment en pierre rouge"
        />
      </div>
      <div className={styles.divPourquoi}>
        <h2>Pourquoi Nous Choisir ?</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      </div>

      {/* Section Obligation Moselle */}
      <div className={styles.lastSection}>
        <div className={styles.txtLastSection}>
          <h2 className={styles.titleLastSection}>
            Quelles sont mes obligations de diagnostics immobiliers sur Metz
            (MOSELLE) ?
          </h2>
          <ul>
            <li>
              Le diagnostic amiante est obligatoire si le permis de construire a
              été déposé avant 1997 (MOSELLE)
            </li>
            <li>Le DPE est obligatoire</li>
            <li>
              Le diagnostic plomb est obligatoire si le permis de construire
              date d’avant 1949
            </li>
            <li>
              Le diagnostic électrique est obligatoire si l’installation date de
              plus de quinze ans
            </li>
            <li>
              Le diagnostic gaz est obligatoire si l’installation date de plus
              de quinze ans
            </li>
            <li>
              Le diagnostic termites est obligatoire si un arrêté préfectoral
              (sur le département MOSELLE) ou communal (sur Metz) le prescrit
            </li>
            <li>
              Le métrage Loi Carrez est obligatoire si le bien est en
              copropriété
            </li>
            <li>L’Etat des Risques Pollution des sols (ERP) est obligatoire</li>
          </ul>
        </div>
        <img src="/src/assets/cathe.png" />
      </div>
    </div>
  );
};
