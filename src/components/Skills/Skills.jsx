import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from '../SkillCard/SkillCard';


const Skills = () => {


    const settings = {
        dots:false,
        autoplay:true,
        infinite:true,
        slidesToShow: 2,
        slidesToScroll: 1
    }

  return (
    <div id="skills" className='mt-4 text-white'>
        <h1 className='text-2xl font-bold'>Skills</h1>

        <p className='font-light text-gray-400'>Here are of some of my skills</p>

        <div className='mt-4'>

            <Slider {...settings}>
            <SkillCard name={"JavaScript"} img={"https://www.svgrepo.com/show/353925/javascript.svg"} />

                    <SkillCard name={"NodeJs"} img={"https://www.svgrepo.com/show/452075/node-js.svg"} />
              
            <SkillCard name={"ReactJS"}  img={"https://www.svgrepo.com/show/354259/react.svg"}/>



            </Slider>
        </div>
    </div>
  )
}

export default Skills