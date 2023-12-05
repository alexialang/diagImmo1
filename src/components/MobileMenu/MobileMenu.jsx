import { useNavigate } from "react-router-dom";
import classes from "./mobileMenu.module.css";
import PropTypes from "prop-types";

export const MobileMenu = ({ onClose }) => {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
    onClose();
  };

  return (
    <ul className={classes.root}>
      <li
        className={classes.link}
        onClick={() => {
          handleClick("/");
        }}
      >
        Accueil
      </li>
      <li className={classes.link}>Avant la vente</li>
      <ul>
        <li
          className={classes.link}
          onClick={() => {
            handleClick("/dpe");
          }}
        >
          DPE
        </li>
        <li
          className={classes.link}
          onClick={() => {
            handleClick("/dpe");
          }}
        >
          DPE
        </li>
      </ul>
      <li
        className={classes.link}
        onClick={() => {
          handleClick("/devis");
        }}
      >
        Devis
      </li>
      <li
        className={classes.link}
        onClick={() => {
          handleClick("/contact");
        }}
      >
        Nous contacter
      </li>
    </ul>
  );
};

MobileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};
