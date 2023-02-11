import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hiro from './components/Hiro/Hiro';
import Aos  from 'aos';
import 'aos/dist/aos.css';

import Skills from './components/Skills/Skills';
function App() {

    useEffect(() => {
    
    
   
      Aos.init()
    }, [])
    

  return (
    <div className="App lg:px-20 xl:px-36 bg-dark-500">

      < Navbar/>
      < Hiro />
      <Skills />


          
    </div>
  );
}

export default App;
