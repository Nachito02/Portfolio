import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hr from "../../assets/curve-hr.svg";
import SkillCard from "../SkillCard/SkillCard";

const Skills = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div id="skills" className=" text-white mt-20 md:mt-10 relative">
      <h1 className="text-2xl font-bold">Skills</h1>

      <p className="font-light text-gray-400">Here are of some of my skills</p>

      <div className="mt-4">
        <Slider {...settings}>
          <SkillCard
            name={"JavaScript"}
            experience={"2 years"}
            img={"https://www.svgrepo.com/show/353925/javascript.svg"}
          />

          <SkillCard
            name={"NodeJs"}
            experience={"2 years"}

            img={"https://www.svgrepo.com/show/452075/node-js.svg"}
          />

          <SkillCard
            name={"ReactJS"}
            experience={"2 years"}

            img={"https://www.svgrepo.com/show/354259/react.svg"}
          />

          <SkillCard
            name={"Express"}
            experience={"2 years"}

            img={"https://www.svgrepo.com/show/330398/express.svg"}
          />

          <SkillCard
            name={"Tailwindcss"}
            experience={"2 years"}

            img={"https://www.svgrepo.com/show/374118/tailwind.svg"}
          />

            <SkillCard
            name={"HTML5"}
            experience={"2 years"}

            img={"https://www.svgrepo.com/show/452228/html-5.svg"}
          />
            <SkillCard
            name={"CSS3"}
            experience={"2 years"}

            img={"https://www.svgrepo.com/show/452185/css-3.svg"}
          />

          
        </Slider>
      <img src={hr} className="absolute bottom-[-30px] md:h-2 w-full " alt="" />

      </div>

      
    </div>
  );
};

export default Skills;
