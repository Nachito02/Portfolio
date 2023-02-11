import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import hr from '../../assets/curve-hr.svg'

import image from '../../assets/code.png'
const Hiro = () => {

    const [loaded, setLoaded] = useState(true)

  return (

    <>
    {loaded ? <div className='fixed top-0 right-0 bottom-0 w-full h-screen overflow-hidden bg-white flex flex-col items-center justify-center'>Loading...</div> : null}



    <div id="home" className='flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative' >
        <div className='md:w-3/6 md:p-4'>
            <img src={image} data-aos="flip-right" data-aos-duration="1500" data-aos-offset="100"  alt="" onLoad={ () =>  setLoaded(false)  } />
        </div>

            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                    <div className='flex flex-col w-full mt-8 gap-1 text-left'>
                        <h1 className='text-xl text-gray-400'>Hi, i'm</h1>
                        <h1 className='text-2xl font-bold'>Juan Arguello</h1>
                        <p className='text-xl font-bold text-gray-300'>Full Stack Developer</p>
                        <p className='text-md font-light text-gray-400'>Passionate programmer and a lover of technology, I love learning something new every day regarding the world of programming</p>
                    </div>

                    <ul className='flex mt-2 gap-4 items-center'>
                        <li>
                            <a href="https://github.com/Nachito02" target="_blank">
                                <FontAwesomeIcon className='text-4xl' icon={faGithub} />
                            </a>
                        </li>

                        <li>
                            <a href="https://linkedin.com/in/juanarguello02" target="_blank">
                                <FontAwesomeIcon className='text-4xl' icon={faLinkedin} />
                            </a>
                        </li>
                    </ul>
            </div>

            <img src={hr} className="absolute bottom-0 md:h-2 w-full" alt="" />

    </div>

    </>

  )
}

export default Hiro