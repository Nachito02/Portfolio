import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className=" bg-[#176B87] rounded-md text-white mt-20 w-full px-8 py-4 ">
      <ul className="text-center">
        <li>
          <a href="#home" className="hover:underline">
            {t("Inicio")}
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:underline">
            {t("Tecnologias")}
          </a>
        </li>
        <li>
          <a href="#proyects" className="hover:underline">
            {t("Proyectos")}
          </a>
        </li>
      </ul>

      <p className="text-sm font-light text-center">
        Copyright © 2023 Juan Arguello. All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
