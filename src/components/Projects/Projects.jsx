import React, { useState } from "react";
import hr from "../../assets/curve-hr.svg";
import ProjectCard from "../ProjectCard/ProjectCard";
import projectsData from "../../data/project";
import { useTranslation } from "react-i18next";
const Projects = ({ darkMode }) => {
  const [proyects, setProyects] = useState(6);
  const [view, setView] = useState(false);

  const { t } = useTranslation();
  const arreglo = projectsData.slice(0, proyects);

  return (
    <div
      id="projects"
      className={`  ${
        darkMode ? "text-white" : "text-black"
      } transition-colors duration-300 mt-10 relative px-2`}
    >
      <h1 className="text-2xl font-bold">{t("Proyectos")}</h1>
      <p
        className={`font-light  ${
          darkMode ? "text-gray-400" : "text-black"
        } transition-colors duration-300`}
      >
        {t("pryectsh2")}
      </p>

      <div className=" grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3 justify-center mt-4 gap-5">
        {arreglo.map((e, i) => {
          return (
            <ProjectCard
              key={i}
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

      <div
        className={`text-center mt-10 border border-[#176B87] w-2/6 mx-auto p-1 hover:bg-[#176B87] hover:text-white cursor-pointer  transition-all ease-out duration-700 ${
          darkMode ? "text-white " : "text-black  "
        }`}
      >
        {view === false ? (
          <button
            onClick={() => {
              setProyects(projectsData.length);
              setView(!view);
            }}
          >
            {t("verMasButton")}
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
