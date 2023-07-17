import React from "react";
import { useTranslation } from "react-i18next";
const ProjectCard = (props) => {
  const { t } = useTranslation();
  return (
    <a
      className="text-white  md:hover:scale-105 transition-all duration-1000 "
      href={props.url}
      target="_blank"
      rel="noreferrer"
    >
      <div
        data-aos="flip-down"
        data-aos-duration="500"
        data-aos-offset="100"
        className="hover:bg-[#64CCC5] hover:text-black w-full h-full bg-[#176B87] rounded-md py-4 px-4"
      >
        <img src={props.img} className="w-full h-56 object-cover " alt="" />

        <div className="mt-2 text-left px-1">
          <h1 className="font-bold md:text-xl">{props.name}</h1>
          <p className="font-light ">{t(props.description)} </p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
