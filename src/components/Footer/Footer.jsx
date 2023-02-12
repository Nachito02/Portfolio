import React from 'react'

const Footer = () => {
  return (
    <div className=" bg-dark-200 rounded-md text-white mt-20 w-full px-8 py-4 ">
    <ul className="text-center">
      <li><a href="#home" className="hover:underline">About</a></li>
      <li><a href="#skills" className="hover:underline">Skills</a></li>
      <li><a href="#proyects" className="hover:underline">Proyects</a></li>
    </ul>


    <p className="text-sm font-light text-center">Copyright © 2023 Juan Arguello. All Right Reserved</p>

  </div>
  )
}

export default Footer