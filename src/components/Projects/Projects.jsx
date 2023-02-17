import React, {useState} from "react";
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
import node from "../../assets/nodesend.png";

const Projects = () => {
  const projectsData = [
    {
      img: node,
      name: "React Node Send",
      description: "imitation of the firefox send page",
      url: "https://node-frontend.vercel.app/",
    },
    {
      img: uptask,
      name: "Uptsk Mern",
      description: "task management app",
      url: "https://uptask-mern-frontend.vercel.app/",
    },
 
    {
      img: rick,
      name: "Rick and Morty APP",
      description: "Application to search for rick and morty characters",
      url: "https://rick-and-morty-jade-six.vercel.app/",
    },
    {
      img: games,
      name: "Games APP",
      description: "Application to search for games and filter options",
      url: "https://henry-games-frontend.vercel.app/",
    },
    {
      img: veterin,
      name: "veterinary APP",
      description: "veterinary application where you can manage pets",
      url: "https://reactpacienes.netlify.app/",
    },
    {
      img: gastos,
      name: "Cost control APP",
      description: "application to control expenses and manage budgets",
      url: "https://firstpresupuesto-react-app.netlify.app/",
    },
    {
      img: producthunt,
      name: "Product hunt imitation",
      description: "imitation of the hunt product page",
      url: "https://producthuntnext-sandy.vercel.app/",
    },
    {
      img: cripto,
      name: "Cryptocurrency quote APP",
      description:
        "application to quote cryptocurrencies according to your local currency",
      url: "https://convertidor-cripto.netlify.app/",
    },
    {
      img: client,
      name: "Customer admin APP",
      description: "customer manager with react, add, delete and edit",
      url: "https://compassionate-sinoussi-2a0d03.netlify.app/",
    },
    {
      img: seguros,
      name: "Insurance quoter APP",
      description: "Application that quotes insurance according to your car",
      url: "https://cotizacion-reactjs.netlify.app/",
    },
    {
      img: clima,
      name: "Weather APP",
      description: "the above",
      url: "https://clima-reactjsx.netlify.app/",
    },
    {
      img: template,
      name: "Simple template",
      description: "Simple template",
      url: "https://templatebienesr.netlify.app/",
    },
    {
      img: salon,
      name: "Simple template",
      description: "Simple template",
      url: "https://appsalontemplate.netlify.app/",
    },
  ];

  const [proyects, setProyects] = useState(6)
  const [view, setView] = useState(false)


    const arreglo = projectsData.slice(0, proyects)



  return (
    <div id="projects" className=" text-white mt-10 relative">
      <h1 className="text-2xl font-bold">Projects</h1>
      <p className="font-light text-gray-400">Here are some of my projects</p>

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
        
          <div className="mt-10 border w-2/6 mx-auto p-1 hover:bg-white hover:text-black transition-all ease-out duration-700">
          {view === true ? (<button className=""onClick={() => (setProyects(projectsData.length), setView(!view) ) }>Mostrar Mas</button>) : (
            (<button className=""onClick={() => (setProyects(6), setView(!view) ) }>Mostrar Menos</button>)
          )}
          </div>

    </div>
  );
};

export default Projects;
