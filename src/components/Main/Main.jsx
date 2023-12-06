import { Routes, Route } from "react-router-dom";
import { Home } from "../../Pages/Home/Home";
import { Contact } from "../../pages/Contact/Contact";
import { Dpe } from "../../pages/AvtAchatLoc/Dpe";
import { LoiCarez } from "../../pages/AvtAchatLoc/LoiCarez";
import { LoiBoutin } from "../../pages/AvtAchatLoc/LoiBoutin";
import { DiagPlomb } from "../../pages/AvtAchatLoc/DiagPlomb";
import { Erp } from "../../pages/AvtAchatLoc/Erp";
import { DiagElec } from "../../pages/AvtAchatLoc/DiagElec";
import { Amiante } from "../../pages/AvtAchatLoc/Amiante";
import { DiagGaz } from "../../pages/AvtAchatLoc/DiagGaz";
import { ObligAchat } from "../../pages/AvtAchatLoc/ObligAchat";
import { ObligLoc } from "../../pages/AvtAchatLoc/ObligLoc";
import { Devis } from "../../pages/Devis/Devis";
// import { Dtg } from "../../pages/AutresServices/Dtg";

// import { Cookie } from "../Cookie/Cookie";
import { Footer } from "../Footer/Footer";

export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dpe" element={<Dpe />} />
        <Route path="/loi_carez" element={<LoiCarez />} />
        <Route path="/loi_boutin" element={<LoiBoutin />} />
        <Route path="/diag_plomb" element={<DiagPlomb />} />
        <Route path="/diag_electrique" element={<DiagElec />} />
        <Route path="/amiante" element={<Amiante />} />
        <Route path="/erp" element={<Erp />} />
        <Route path="/diag_gaz" element={<DiagGaz />} />
        <Route path="/obligations_achat" element={<ObligAchat />} />
        <Route path="/obligations_location" element={<ObligLoc />} />
        <Route path="/devis" element={<Devis />} />
        {/* <Route path="/dtg" element={<Dtg />} /> */}
      </Routes>
      {/* <Cookie/> */}
      <Footer />
    </div>
  );
};
