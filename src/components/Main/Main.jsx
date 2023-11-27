import { Routes, Route } from "react-router-dom";
import { Home } from "../../Pages/Home/Home";
import { Contact } from "../../pages/Contact/Contact";
import { Dpe } from "../../pages/AvtAchatLoc/Dpe";
import { Footer } from "../Footer/Footer";

export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dpe" element={<Dpe />} />
      </Routes>
      <Footer />
    </div>
  );
};
