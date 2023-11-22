import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Contact } from "../pages/Contact/Contact";

export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
