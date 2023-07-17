import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import hr from "../../assets/curve-hr.svg";
import { TypeAnimation } from "react-type-animation";
import image from "../../assets/code.png";
import { useTranslation } from "react-i18next";
const Hiro = ({ darkMode }) => {
  const [loaded, setLoaded] = useState(true);

  const { t } = useTranslation();
  return (
    <>
      {loaded ? (
        <div className="fixed z-30 top-0 right-0 bottom-0 w-full h-screen overflow-hidden bg-[#176B87] flex flex-col items-center justify-center">
          Loading...
        </div>
      ) : null}

      <div
        id="home"
        className={`flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center transition-colors duration-300 ${
          darkMode ? "text-white" : "text-black"
        } relative`}
      >
        <div className="md:w-3/6 md:p-4 ft">
          <img
            src={image}
            data-aos="flip-right"
            data-aos-duration="1500"
            data-aos-offset="100"
            alt=""
            onLoad={() => setLoaded(false)}
          />
        </div>

        <div
          className="md:w-3/6"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="100"
        >
          <div className="flex flex-col w-full mt-8 gap-1 text-center md:text-left">
            <h1
              className={`text-xl ${
                darkMode ? "text-gray-400" : "text-gray-600"
              } transition-colors duration-300 `}
            >
              {t("Hola, soy")}
            </h1>
            <h1 className="text-2xl font-bold">Juan Arguello</h1>
            <p
              className={`text-xl font-bold ${
                darkMode ? "text-gray-400" : "text-gray-600"
              } transition-colors duration-300`}
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Backend Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                ]}
                speed={5}
                className=""
                wrapper="span"
                repeat={Infinity}
              />
            </p>
            <p
              className={`text-md font-light text-gray-400 ${
                darkMode ? "text-gray-400" : "text-gray-800"
              } transition-colors duration-300`}
            >
              {t("about")}
            </p>
          </div>

          <ul className="flex mt-2 gap-4 items-center justify-center md:justify-start">
            <li>
              <a
                href="https://github.com/Nachito02"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon className="text-4xl" icon={faGithub} />
              </a>
            </li>

            <li>
              <a
                href="https://linkedin.com/in/juanarguello02"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon className="text-4xl" icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>

        <img
          src={hr}
          className="absolute bottom-[-50px] md:bottom-0 md:h-2 w-full "
          alt=""
        />
      </div>
    </>
  );
};

export default Hiro;
