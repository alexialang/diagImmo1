import classes from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

import b2cLogo from "@/public/b2c.png";

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
            <Link className={classes.link} href="/contact">
              · Nous contacter
            </Link>
            <br />
          </p>
        </div>
        <div>
          <h2>Diagnostics Immobilers</h2>
          <p>
            <Link className={classes.link} href="/amiante">
              · Diagnostic amiante
            </Link>
            <br />
            <Link className={classes.link} href="/diagPlomb">
              · Diagnostic plomb{" "}
            </Link>
            <br />
            <Link className={classes.link} href="/diagGaz">
              · Diagnostic gaz
            </Link>
            <br />
            <Link className={classes.link} href="/diagElec">
              · Diagnostic électricité
            </Link>
            <br />
            <Link className={classes.link} href="/dpe">
              · Performance énergétique
            </Link>
            <br />
            <Link className={classes.link} href="/erp">
              · ERP
            </Link>
            <br />
            <Link className={classes.link} href="/loicarrez">
              · Loi Carrez
            </Link>
            <br />
            <Link className={classes.link} href="/loi_boutin">
              · Loi Boutin
            </Link>
            <br />
            <Link className={classes.link} href="/dtg">
              · DTG
            </Link>
          </p>
        </div>
        <div>
          <h2>Certification</h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            className={classes.imgFooter}
            src={b2cLogo}
            alt="B2C Certification"
          />
        </div>
      </div>
    </div>
  );
};
