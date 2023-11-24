import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Contact } from "../pages/Contact/Contact";
import styles from "./main.module.css";

export const Main = () => {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
