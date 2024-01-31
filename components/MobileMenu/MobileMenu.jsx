import PropTypes from "prop-types";
import Link from "next/link";
import { NavLink } from "@mantine/core";
import classes from "./mobileMenu.module.css";
import { useRouter } from "next/navigation";

export const MobileMenu = ({ onClose }) => {
  const router = useRouter();

  const handleClick = (link) => {
    router.push(link);
    onClose();
  };

  return (
    <>
      <Link
      className={classes.c}
        href="/"
        onClick={() => {
          handleClick("/");
        }}
      >
        <NavLink className={classes.link} label="Accueil"></NavLink>
      </Link>

      {/* Avant la Vente */}

      <NavLink
        className={classes.link}
        label="Avant la vente"
        childrenOffset={28}
      >
        <Link
        className={classes.c}
          href="/dpe"
          onClick={() => {
            handleClick("/dpe");
          }}
        >
          <NavLink className={classes.link} label="Dpe"></NavLink>
        </Link>

        <Link
        className={classes.c}
          href="/erp"
          onClick={() => {
            handleClick("/erp");
          }}
        >
          <NavLink className={classes.link} label="ERP"></NavLink>
        </Link>
        <Link
        className={classes.c}
          href="/loicarrez"
          onClick={() => {
            handleClick("/loicarrez");
          }}
        >
          <NavLink className={classes.link} label="Loi Carrez"></NavLink>
        </Link>
        <Link
        className={classes.c}
          href="/diagGaz"
          onClick={() => {
            handleClick("/diagGaz");
          }}
        >
          <NavLink className={classes.link} label="Diagnostic Gaz"></NavLink>
        </Link>
        <Link
        className={classes.c}
          href="/diagPlomb"
          onClick={() => {
            handleClick("/diagPlomb");
          }}
        >
          <NavLink className={classes.link} label="Diagnostic Plomb"></NavLink>
        </Link>
        <Link
        className={classes.c}
          href="/diag_elec"
          onClick={() => {
            handleClick("/diag_elec");
          }}
        >
          <NavLink className={classes.link} label="Diagnostic Plomb"></NavLink>
        </Link>
        <Link
        className={classes.c}
          href="/obligations_vente"
          onClick={() => {
            handleClick("/obligations_vente");
          }}
        >
          <NavLink
            className={classes.link}
            label="Obligation de Vente"
          ></NavLink>
        </Link>
      </NavLink>

      {/* Avant la location */}

      <NavLink
        className={classes.link}
        label="Avant la location"
        childrenOffset={28}
        defaultOpened
      >
        <Link
        className={classes.c}
          href="/dpe"
          onClick={() => {
            handleClick("/");
          }}
        >
          <NavLink className={classes.link} label="DPE"></NavLink>
        </Link>
        <Link
        className={classes.c}
          href="/erp"
          onClick={() => {
            handleClick("/");
          }}
        >
          <NavLink className={classes.link} label="ERP"></NavLink>
        </Link>
        <Link
        className={classes.c}
          href="/loi_boutin"
          onClick={() => {
            handleClick("/");
          }}
        >
          <NavLink className={classes.link} label="Loi Boutin"></NavLink>
        </Link>
        <Link
        className={classes.c}
          href="/diagGaz"
          onClick={() => {
            handleClick("/");
          }}
        >
          <NavLink className={classes.link} label="Diagnostic Gaz"></NavLink>
        </Link>
        <Link
        className={classes.c}
          href="Diagnostic Plomb"
          onClick={() => {
            handleClick("/");
          }}
        >
          <NavLink className={classes.link} label="Diagnostic Plomb"></NavLink>
        </Link>
        <Link
        className={classes.c}
          href="/diagElec"
          onClick={() => {
            handleClick("/");
          }}
        >
          <NavLink
            className={classes.link}
            label="Diagnostic Electrique"
          ></NavLink>
        </Link>
        <Link
        className={classes.c}
          href="/obligLoc"
          onClick={() => {
            handleClick("/");
          }}
        >
          <NavLink
            className={classes.link}
            label="Obligations de Location"
          ></NavLink>
        </Link>
      </NavLink>
      <Link
      className={classes.c}
        href="/devis"
        onClick={() => {
          handleClick("/");
        }}
      >
        <NavLink className={classes.link} label="Devis"></NavLink>
      </Link>
      <Link
      className={classes.c}
        href="/contact"
        onClick={() => {
          handleClick("/");
        }}
      >
        <NavLink className={classes.link} label="Nous Contacter"></NavLink>
      </Link>
    </>
  );
};

MobileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};
