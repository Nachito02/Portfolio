import React, { useState } from "react";
import hr from "../../assets/curve-hr.svg";
import ProjectCard from "../ProjectCard/ProjectCard";
import projectsData from "../../data/project";
const Projects = () => {
  const [proyects, setProyects] = useState(6);
  const [view, setView] = useState(false);

  const arreglo = projectsData.slice(0, proyects);

  return (
    <div id="projects" className=" text-white mt-10 relative">
      <h1 className="text-2xl font-bold">Proyectos</h1>
      <p className="font-light text-gray-400">Algunos de mis proyectos</p>

      <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-3 justify-center mt-4 gap-5">
        {arreglo.map((e, i) => {
          return (
            <ProjectCard
              img={e.img}
              name={e.name}
              description={e.description}
              url={e.url}
            />
          );
        })}

        <img
          src={hr}
          className="absolute bottom-[-30px] md:h-2 w-full "
          alt=""
        />
      </div>

      <div className="text-center mt-10 border w-2/6 mx-auto p-1 hover:bg-white cursor-pointer hover:text-black transition-all ease-out duration-700">
        {view === false ? (
          <button
            onClick={() => {
              setProyects(projectsData.length);
              setView(!view);
            }}
          >
            Ver más
          </button>
        ) : (
          <button
            onClick={() => {
              setProyects(6);
              setView(!view);
            }}
          >
            Ver menos
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
