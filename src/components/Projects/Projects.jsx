import React from "react";
import hr from "../../assets/curve-hr.svg";
import ProjectCard from "../ProjectCard/ProjectCard";
import producthunt from "../../assets/producthunt.png";
import uptask from "../../assets/uptask.png";
import rick from "../../assets/rickandmorty.png";
import games from "../../assets/games.png";
import veterin from "../../assets/veterin.png";
import gastos from "../../assets/gastos.png";
import cripto from "../../assets/cripto.png";
import client from "../../assets/client.png";
import seguros from "../../assets/seguros.png";
import clima from "../../assets/clima.png";
import template from "../../assets/template.png";
import salon from "../../assets/salon.png";

const Projects = () => {



  

  return (
    <div id="projects" className=" text-white mt-10 relative">
        
      <h1 className="text-2xl font-bold">Projects</h1>
      <p className="font-light text-gray-400">Here are some of my projects</p>

      <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-3 justify-center mt-4 gap-5">
        <ProjectCard
          img={uptask}
          name={"Uptsk Mern"}
          description={"task management app"}
          url={"https://uptask-mern-frontend.vercel.app/"}
        />

        <ProjectCard
          img={rick}
          name={"Rick and Morty APP"}
          description={"Application to search for rick and morty characters"}
          url={"https://rick-and-morty-jade-six.vercel.app/"}
        />

        <ProjectCard
          img={games}
          name={"Games APP"}
          description={"Application to search for games and filter options"}
          url={"https://henry-games-frontend.vercel.app/"}
        />

        <ProjectCard
          img={veterin}
          name={"veterinary APP"}
          description={"veterinary application where you can manage pets"}
          url={"https://reactpacienes.netlify.app/"}
        />

        <ProjectCard
          img={gastos}
          name={"Cost control APP"}
          description={"application to control expenses and manage budgets"}
          url={"https://firstpresupuesto-react-app.netlify.app/"}
        />

        <ProjectCard
          img={producthunt}
          name={"Product hunt imitation"}
          description={"imitation of the hunt product page"}
          url={"https://producthuntnext-sandy.vercel.app/"}
        />

        <ProjectCard
          img={cripto}
          name={"Cryptocurrency quote APP"}
          description={
            "application to quote cryptocurrencies according to your local currency"
          }
          url={"https://convertidor-cripto.netlify.app/"}
        />

        <ProjectCard
          img={client}
          name={"Customer admin APP"}
          description={"customer manager with react, add, delete and edit"}
          url={"https://compassionate-sinoussi-2a0d03.netlify.app/"}
        />

        <ProjectCard
          img={seguros}
          name={"Insurance quoter APP"}
          description={
            "Application that quotes insurance according to your car"
          }
          url={"https://cotizacion-reactjs.netlify.app/"}
        />

        <ProjectCard
          img={clima}
          name={"Weather APP"}
          description={"the above"}
          url={"https://clima-reactjsx.netlify.app/"}
        />

        <ProjectCard
          img={template}
          name={"Simple template"}
          description={"Simple template"}
          url={"https://templatebienesr.netlify.app/"}
        />

<ProjectCard
          img={salon}
          name={"Simple template"}
          description={"Simple template"}
          url={"https://appsalontemplate.netlify.app/"}
        />

<img src={hr} className="absolute bottom-[-30px] md:h-2 w-full " alt="" />


      </div>

    </div>
  );
};

export default Projects;
