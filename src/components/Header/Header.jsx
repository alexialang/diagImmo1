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
                navigate("/dpe");
              }}
            >
              DPE
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/erp");
              }}
            >
              ERP
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/loi_carrez");
              }}
            >
              Loi Carrez
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/diag_gaz");
              }}
            >
              Diagnostic Gaz
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/diag_plomb");
              }}
            >
              Diagnostic Plomb
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/diag_electrique");
              }}
            >
              Diagnostic Electrique
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/obligations_achat");
              }}
            >
              Obligations de Vente
            </Menu.Item>
          </Menu.Dropdown> 
        </Menu>
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
          <Button variant="subtle">Avant la location</Button>
        </Menu.Target>


          <Menu.Dropdown>
            <Menu.Item
              className=""
              onClick={() => {
                navigate("/dpe");
              }}
            >
              DPE
            </Menu.Item>
            <Menu.Item
              className=""
              onClick={() => {
                navigate("/erp");
              }}
            >
              ERP
            </Menu.Item>
            <Menu.Item
              className=""
              onClick={() => {
                navigate("/loi_boutin");
              }}
            >
              Loi Boutin
            </Menu.Item>
            <Menu.Item
              className=""
              onClick={() => {
                navigate("/diag_gaz");
              }}
            >
              Diagnostic Gaz
            </Menu.Item>
            <Menu.Item
              className=""
              onClick={() => {
                navigate("/diag_plomb");
              }}
            >
              Diagnostic Plomb
            </Menu.Item>
            <Menu.Item
              className=""
              onClick={() => {
                navigate("/diag_electrique");
              }}
            >
              Diagnostic Electrique
            </Menu.Item>
            <Menu.Item
              className=""
              onClick={() => {
                navigate("/obligations_locations");
              }}
            >
              Obligations de Locations
            </Menu.Item>
            </Menu.Dropdown> 
            </Menu>
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
