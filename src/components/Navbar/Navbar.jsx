import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
const Navbar = ({darkMode, toogleDarkMode}) => {
  return (
    <div className={`fixed z-50 ${darkMode ? 'bg-dark-500 ' : 'bg-white' } w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36 transition-colors duration-300`}>

        <div className={`flex justify-between items-center ${darkMode ? 'text-white ' : 'text-black' } transition-colors duration-300`}>
            <p className='text-2xl'>Juan Arguello</p>

            <ul className='hidden md:flex'>
                <li className='p-4'> <a className='hover:underline' href="#home">Inicio</a> </li>
                  <li className='p-4'> <a className='hover:underline' href="#skills">Tecnologias</a> </li>
                  <li className='p-4'> <a className='hover:underline' href="#projects">Proyectos</a> </li>

            </ul>

              <div className='flex items-center gap-5'>
              <a  href="https://drive.google.com/file/d/1PKDoctGRqpWsZWkKXqQKwoOaz6OVno7j/view?usp=sharing" rel='noreferrer' target={"_blank"} className='bg-teal-500 rounded-full px-5 py-1 text-white  border-teal-800 border-4'>Mi CV</a>
              <button onClick={toogleDarkMode}>
              <FontAwesomeIcon icon={faMoon} className={`text-2xl ${darkMode ? 'text-white' : 'text-black' } transition-colors duration-300 `}/>
              </button>
              </div>
        </div>

    </div>
  )
}

export default Navbar