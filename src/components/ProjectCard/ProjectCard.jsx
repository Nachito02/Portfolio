import React from "react";

const ProjectCard = (props) => {
  return (
    <a
    className="text-white"
      href={props.url}
      target="_blank"
      rel="noreferrer"
    >
      <div   data-aos="flip-down"
      data-aos-duration="500"
      data-aos-offset="100" className="hover:bg-dark-300 w-full h-full bg-dark-200 rounded-md py-4 px-4">
        <img src={props.img} className="w-full h-56 object-cover " alt="" />

        <div className="mt-2 text-left px-1">
          <h1 className="font-bold md:text-xl">{props.name}</h1>
          <p className="font-light text-gray-400">{props.description} </p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
