import classes from "./footer.module.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.column}>
        <div>
          <h2>Notre Agence</h2>
          <p>
            GP Audit Diag Immo
            <br />
            5 rue de Sarre 57000 Metz <br />
            gpaudit@gmail.com
            <br />
            <Link className={classes.link} to="/contact">
              · Nous contacter
            </Link>
            <br />
          </p>
        </div>
        <div>
          <h2>Diagnostics Immobilers</h2>
          <p>
            <Link className={classes.link} to="/amiante">
              · Diagnostic amiante
            </Link>
            <br />
            <Link className={classes.link} to="/diag_plomb">
              · Diagnostic plomb{" "}
            </Link>
            <br />
            <Link className={classes.link} to="/diag_gaz">
              · Diagnostic gaz
            </Link>
            <br />
            <Link className={classes.link} to="/diag_electrique">
              · Diagnostic électricité
            </Link>
            <br />
            <Link className={classes.link} to="/dpe">
              · Performance énergétique
            </Link>
            <br />
            <Link className={classes.link} to="/erp">
              · ERP
            </Link>
            <br />
            <Link className={classes.link} to="/loi_carrez">
              · Loi Carrez
            </Link>
            <br />
            <Link className={classes.link} to="/loi_boutin">
              · Loi Boutin
            </Link>
            <br />
            <Link className={classes.link} to="/dtg">
              · DTG
            </Link>
          </p>
        </div>
        <div>
          <h2>Certification</h2>
          <img className={classes.imgFooter} src="/src/assets/b2c.png" alt="B2C Certification" />
        </div>
      </div>
    </div>
  );
};
