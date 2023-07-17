import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hiro from "./components/Hiro/Hiro";
import Aos from "aos";
import "aos/dist/aos.css";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import StarsCanvas from "./components/StarsCanvas/StarsCanvas";
import { I18nextProvider } from "react-i18next";
import i18n from "./config/i18n";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [darkMode, setDarkMode] = useState(true);

  const toogleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <div
        className={`App lg:px-20 xl:px-36 ${
          darkMode ? "bg-[#001C30]" : "bg-white"
        } transition-colors duration-300`}
      >
        <Navbar darkMode={darkMode} toogleDarkMode={toogleDarkMode} />
        <div className="relative z-0">
          <Hiro darkMode={darkMode} />
          <StarsCanvas darkMode={darkMode} />
        </div>
        <Skills darkMode={darkMode} />

        <AboutMe darkMode={darkMode} />

        <Experience  darkMode={darkMode}/>

        <Projects darkMode={darkMode} />

        <Footer className="" />
      </div>
    </I18nextProvider>
  );
}

export default App;
