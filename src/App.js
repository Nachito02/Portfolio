import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hiro from './components/Hiro/Hiro';
import Aos  from 'aos';
import 'aos/dist/aos.css';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
function App() {

  useEffect(() => {
    Aos.init();

  }, []);


  const [darkMode, setDarkMode] = useState(true)

  const toogleDarkMode = () => {
  
    setDarkMode(!darkMode)
  }
   
  return (
    <div className={`lg:px-20 xl:px-36 ${darkMode ? 'bg-dark-500' : 'bg-white' } transition-colors duration-300`}>

      < Navbar darkMode={darkMode} toogleDarkMode={toogleDarkMode} />
      < Hiro darkMode={darkMode} />
      <Skills />

      <Projects darkMode={darkMode} />

      <Footer className='' />
          
    </div>
  );
}

export default App;
