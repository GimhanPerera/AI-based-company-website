import { Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";

const App = () => {
  return (
    <>
      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/services" element={< ServicesPage/>} />
          <Route path="/contactUs" element={< ContactUsPage/>} />
        </Routes>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
