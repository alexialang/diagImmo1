import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { Button, Menu } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <div className={styles.imgS}>
        <img
          className={styles.logo}
          src="/src/assets/logo.png"
          alt="logo de l'entreprise"
        />
      </div>
      <div className={styles.nav}>
        <Link to="/">
          <Button variant="subtle">Accueil</Button>
        </Link>
        <Menu
          position="bottom"
          trigger="hover"
          openDelay={100}
          closeDelay={400}
          classNames={{
            item: styles.subItem,
          }}
        >
          <Menu.Target>
            <Button variant="subtle">Avant la vente</Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              className=""
              onClick={() => {
                navigate("/diagnostic_immobilier");
              }}
            >
              Item 1
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/etat_parasitaire");
              }}
            >
              Item 2
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/etat_des_lieux");
              }}
            >
              Item 3
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
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
