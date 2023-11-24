import { Main } from "../Main/Main";
import { Header } from "../Header/Header";
import classes from "./shell.module.css";

export const Shell = () => {
  return (
    <div className={classes.main}>
      <Header />
      <Main />
    </div>
  );
};
