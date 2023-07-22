import React from "react";
import { useTranslation } from "react-i18next";

const Contact = ({ darkMode }) => {
  const { t } = useTranslation();
  return (
    <div className={`mt-10`} id="contact">
      <h1  
        className={`text-2xl font-bold ${
          darkMode ? "text-white" : "text-black"
        } transition-colors duration-300`}
      >
        {t("contactameh2")}
      </h1>

      <div className="flex flex-col md:flex-row mt-2">
        <div className="flex-1">
          <form
            className={`max-w-xl m-4 p-6 sm:p-10 rounded-xl shadow-xl text-left border-[#DAFFFB] border-2 ${
              darkMode ? "text-white" : " text-black"
            }`}
            action=""
          >
            <div className="flex flex-col mb-4">
              <label className=" mb-1" htmlFor="name">
               {t('nameLabel')}
              </label>
              <input
                id="name"
                className="w-full bg-[#DAFFFB] px-5 py-2 border border-gray-300  border-opacity-50 rounded-md shadow-sm text-md"
                placeholder={t('nameLabel')}
                type="text"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="w-full  bg-[#DAFFFB]  px-5 py-2 border border-gray-300  border-opacity-50 rounded-md shadow-sm text-md"
                placeholder="Email"
                type="text"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className=" mb-1" htmlFor="Email">
              {t('subjectLabel')}
              </label>
              <input
                className="w-full  bg-[#DAFFFB]  px-5 py-2 border border-gray-300 border-opacity-50 rounded-md shadow-sm text-md"
                placeholder={t('subjectLabel')}
                type="text"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className=" mb-1" htmlFor="message">
              {t('mensajeLabel')}
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full  bg-[#DAFFFB]  px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                cols={14}
                rows={6}
              ></textarea>
            </div>

            <div className="text-center mt-4">
            <button className="bg-[#176B87] text px-5 py-2  rounded-sm">
                {t("enviarButton")}
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Contact;
