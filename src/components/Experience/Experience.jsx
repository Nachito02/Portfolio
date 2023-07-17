
import ExperienceCard from "./ExperienceCard";
import { VerticalTimeline} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';   
import experiences from "../../data/experience";
import { useTranslation } from "react-i18next";
const Experience = ({darkMode}) => {

    const {t} = useTranslation()

    return (
      <>
        <motion.div className="mt-10" >
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black' } transition-colors duration-300`}>{t('Experiencia')}</h1>

        </motion.div>
  
        <div className="mt-20 flex flex-col">
          <VerticalTimeline lineColor="#176B87">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    );
  };

  export default Experience