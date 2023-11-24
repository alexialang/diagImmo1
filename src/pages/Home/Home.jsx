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
          >
            Demande De Devis
          </Button>{" "}
        </Link>
      </div>
      {/* Section Nos Services */}
      <div className={styles.section2}>
        <div className={styles.texte}>
          <h2>Nos Services</h2>
          <p>Tous les diagnostics immobiliers proposés</p>
          <ul>
            <li>DPE (Diagnostic Performance Energétique)</li>
            <li>Audit énergétique</li>
            <li>Audit énergétique</li>
            <li>
              Diagnostic Amiante Location, Vente, Avant travaux, Après travaux
              et démolition
            </li>
            <li>Surface habitable</li>
            <li>Superficie Carrez</li>
            <li>Diagnostic Gaz</li>
            <li>Electricité</li>
            <li>Diagnostic Plomb (CREP)</li>
          </ul>
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
          <Link to="/">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div style={{ height: "190px", width: "250px" }}>
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: "#ffc149",
                    position: "relative",
                  }}
                >
                  <img
                    src="/src/assets/maison2.png"
                    alt="photo d'une maison"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "60px",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>
              </div>
              <h3 className={styles.linkTxt}>Vos obligations d’Achat</h3>
            </div>
          </Link>
          <Link to="/">
            <div>
              <img src="/src/assets/poigneeMain.png" alt="poignée de main" />
              <h3 className={styles.linkTxt}>Vos obligations de Location</h3>
            </div>{" "}
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
