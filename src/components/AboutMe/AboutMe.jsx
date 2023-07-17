import React from "react";
import hr from "../../assets/curve-hr.svg";
import profile from "../../assets/profilebg.png";
import { useTranslation } from "react-i18next";
const AboutMe = ({ darkMode }) => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className={`flex w-full flex-col md:flex-row gap-5  mt-20 items-center justify-center transition-colors duration-300 ${
          darkMode ? "text-white" : "text-black"
        } relative`}
      >
        <div>
          <h1 className="text-2xl font-bold">{t("sobreMi")}</h1>

          <div className="w-10/12 mx-auto mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row items-center gap-10 ">
              <div className="flex-[2]">
                <img
                  className="rounded-[100%]  border-2 border-[#176B87]"
                  src={profile}
                  alt=""
                />
              </div>

              <div className="flex-[3]">
                <p className="text-lg  md:text-left">{t("aboutMe")}</p>
                <button className="bg-[#176B87] rounded-full px-5 py-1 text-white  border-[#64CCC5] border-4 mt-5 w-full animate-pulse">
                  {t("Contacto")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src={hr} className=" mt-20 md:bottom-0 md:h-2 w-full " alt="" />
    </>
  );
};

export default AboutMe;
