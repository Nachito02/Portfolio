import ideal from "../assets/ideal.png";

import openvino from "../assets/openvino.jpeg";
import henry from "../assets/henry.jpeg";

const experiences = [
  {
    title: "Desarrollador Full Stack",
    company_name: "Fundacion Ideal",
    icon: ideal,
    iconBg: "#fff",
    date: "Sep 2023 - Present",
    points: [
      "Diseño y desarrollo de un sistema de Trazabilidad que habilita a productores a registrar los hitos productivos de su cadena de valor utilizando tecnología Blockchain (NFT e IPFS), y plasmarlos en un código QR que permite recuperar la historia del producto. Solicitada por fundación ideal en el marco del proyecto n°0210 presentado a la línea de anr para el fortalecimiento de las capacidades institucionales para el apoyo a MIPYMES, secretaria de industria y desarrollo productivo. En alianza con InnovaT, depentiente del CONICET.",
    ],
  },
  {
    title: "Desarrollador Full Stack",
    company_name: "Openvino",
    icon: openvino,
    iconBg: "#fff",
    date: "May 2023 - Present",
    points: [
      "Diseñar y desarrollar un panel de dashboard altamente funcional para gestionar 'redeems' de los clientes de la empresa.",
      "Utilizar tecnologías como React, Next.js y Tailwind CSS para crear una interfaz de usuariointuitiva y atractiva.",
      "Implementar un método de autenticación utilizando la billetera de Metamask, lo que permitió a los usuarios acceder y gestionar sus redeems de manera segura y eficiente.",
      "Manejar eficazmente el estado de los redeems, asegurando la consistencia de los datos y la correcta interacción con la base de datos PostgreSQL.",
      "Trabajar en estrecha colaboración con otros desarrolladores en un equipo ágil, utilizando herramientas de colaboración como Git y Trello para mejorar la productividad y garantizar la entrega oportuna del proyecto.",
      "Además, asumí el desafío de aprender Golang para realizar modificaciones en el backendexistente, lo que resultó en un cumplimiento exitoso de los requisitos del proyecto dentro del plazo establecido.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Henry",
    icon: henry,
    iconBg: "#ffff01",
    date: "February 2023 - March 2023",
    points: [
      "Desarrollar una aplicación web completa, fui encargado de incorporar tecnologías como Socket.IO, passportjs, google cloud y autenticación y registro de usuarios. Trabaje como desarrollador backend la mayor parte del tiempo.",
    ],
  },
];

export default experiences;
