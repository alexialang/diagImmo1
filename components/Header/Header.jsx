import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./header.module.css";
import { Button, Menu, Burger } from "@mantine/core";
import PropTypes from "prop-types";
import Image from "next/image";

import logo from "@/public/logo.png";

export const Header = ({ opened, toggle }) => {
  const router = useRouter();

  return (
    <div className={styles.root}>
      <Burger
        opened={opened}
        onClick={toggle}
        aria-label="Toggle navigation"
        classNames={{
          root: styles.burger,
        }}
      />
      <div className={styles.imgS}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image className={styles.logo} src={logo} alt="logo de l'entreprise" />
      </div>
      <div className={styles.nav}>
        <Link href="/">
          <Button variant="subtle">Accueil</Button>
        </Link>
        <Menu
          position="bottom"
          trigger="hover"
          openDelay={100}
          closeDelay={200}
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
                router.push("/dpe");
              }}
            >
              DPE
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                router.push("/erp");
              }}
            >
              ERP
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                router.push("/loicarrez");
              }}
            >
              Loi Carrez
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                router.push("/diagGaz");
              }}
            >
              Diagnostic Gaz
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                router.push("/diagPlomb");
              }}
            >
              Diagnostic Plomb
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                router.push("/diagElec");
              }}
            >
              Diagnostic Electrique
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                router.push("/obligAchat");
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
          closeDelay={200}
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
                router.push("/dpe");
              }}
            >
              DPE
            </Menu.Item>
            <Menu.Item
              className=""
              onClick={() => {
                router.push("/erp");
              }}
            >
              ERP
            </Menu.Item>
            <Menu.Item
              className=""
              onClick={() => {
                router.push("/loi_boutin");
              }}
            >
              Loi Boutin
            </Menu.Item>
            <Menu.Item
              className=""
              onClick={() => {
                router.push("/diagGaz");
              }}
            >
              Diagnostic Gaz
            </Menu.Item>
            <Menu.Item
              className=""
              onClick={() => {
                router.push("/diagPlomb");
              }}
            >
              Diagnostic Plomb
            </Menu.Item>
            <Menu.Item
              className=""
              onClick={() => {
                router.push("/diagElec");
              }}
            >
              Diagnostic Electrique
            </Menu.Item>
            <Menu.Item
              className=""
              onClick={() => {
                router.push("/obligLoc");
              }}
            >
              Obligations de Locations
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        {/* 
        <Menu
          position="bottom"
          trigger="hover"
          openDelay={100}
          closeDelay={200}
          classNames={{
            item: styles.subItem,
          }}
        >
          <Menu.Target>
            <Button variant="subtle">Autres Services</Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              className=""
              onClick={() => {
                router.push("/dtg");
              }}
            >
              DTG
            </Menu.Item>
          </Menu.Dropdown>
        </Menu> */}

        <Link href="/devis">
          <Button variant="subtle">Devis</Button>
        </Link>
        <Link href="/contact">
          <Button variant="subtle">Nous contacter</Button>
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  opened: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
