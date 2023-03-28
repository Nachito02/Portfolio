import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>

        <div className=' flex justify-between items-center text-white'>
            <p className='text-2xl'>Juan Arguello</p>

            <ul className='hidden md:flex'>
                <li className='p-4'> <a className='hover:underline' href="#home">Home</a> </li>
                  <li className='p-4'> <a className='hover:underline' href="#skills">Skills</a> </li>
                  <li className='p-4'> <a className='hover:underline' href="#projects">Projects</a> </li>

            </ul>

            <a href="https://drive.google.com/file/d/1tXaC5RIRt9qBijcFp7bs9JX3Hh932yTf/view?usp=share_link" rel='noreferrer' target={"_blank"} className='bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border-4'>My resume</a>
        </div>

    </div>
  )
}

export default Navbar