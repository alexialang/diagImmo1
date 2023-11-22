import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { Button } from "@mantine/core";

export const Header = () => {
  return (
    <div className={styles.root}>
      <img
        className={styles.logo}
        src="/src/assets/logo.jpg"
        alt="logo de l'entreprise"
      />
      <div className={styles.nav}>
        <Link to="/">
          <Button variant="subtle">Accueil</Button>
        </Link>
        <Link to="/avant_la_vente">
          <Button variant="subtle">Avant la vente</Button>
        </Link>
        <Link to="/avant_la_location">
          <Button variant="subtle">Avant la location</Button>
        </Link>
        <Link to="/autres_services">
          <Button variant="subtle">Autres Services</Button>
        </Link>
        <Link to="/devis">
          <Button variant="subtle">Devis</Button>
        </Link>
        <Link to="/contact">
          <Button variant="subtle">Nous contacter</Button>
        </Link>
      </div>
    </div>
  );
};
