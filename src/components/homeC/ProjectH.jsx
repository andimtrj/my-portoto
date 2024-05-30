import ProjectL from "./ProjectL";
import ProjectL2 from "./ProjectL2";
import ProjectDetail from "./ProjectDetail";
import project1 from "../../assets/img/project1.png";
import project2 from "../../assets/img/project2.jpg";
import project3 from "../../assets/img/project3.jpg";
import project4 from "../../assets/img/project4.png";
import project5 from "../../assets/img/project5.png";
import project6 from "../../assets/img/project6.png";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import StaggerText from "react-stagger-text";

const projects = [
  {
    id: 1,
    image: project1,
    title: "Herb Shop",
    info: "College Project",
    role: "Front-End Developer",
    desc: "For my Web Programming course, I developed a full-stack website that provides comprehensive information about various herbs and offers herbs for sale. The project was built using Laravel for the backend framework, Tailwind CSS for the frontend styling, and MySQL for the database management. The website features detailed descriptions of each herb, including their benefits and uses, and includes a user-friendly shopping experience.",
    link: "https://github.com/SyafiqSyech/FlowerShop",
  },
  {
    id: 2,
    image: project2,
    title: "President Election AI",
    info: "College Project",
    role: "UI/UX Designer",
    desc: "A website UI design that has the aim of predicting which president is most suitable to the user based on existing surveys. This project was for my UX course",
    link: "https://www.behance.net/gallery/171770115/President-Election-AI",
  },
  {
    id: 3,
    image: project3,
    title: "ERamen",
    info: "Personal Project",
    role: "UI Designer",
    desc: "A website UI design for a ramen restaurant will feature comprehensive information about the restaurant, including its menu, the story behind its establishment, and its culinary philosophy. In addition to browsing the menu and learning about the restaurant's history, users will have the convenient option to order food online directly through the website.",
    link: "https://www.behance.net/gallery/176760353/ERamen-Website",
  },
  {
    id: 4,
    image: project4,
    title: "KOMINFO Mobile App",
    info: "College Project",
    role: "UI Designer",
    desc: "Redesigning the KOMINFO Mobile App to enhance user experience and functionality. This project involves a comprehensive overhaul aimed at improving the app's usability, aesthetics, and overall user satisfaction. ",
    link: "https://www.behance.net/gallery/164611861/KOMINFO-Mobile-App-Design",
  },
  {
    id: 5,
    image: project5,
    title: "SOP Document Management System",
    info: "Project Simulations Assignment",
    role: "Front-End Developer",
    desc: "A full-stack website designed to organize SOP documents will have two user roles. The first role is an admin who can upload, delete, and edit documents. The second role is a user who can view and upload documents. This website made with Laravel, Bootstrap, and MySQL ",
    link: "https://github.com/andimtrj/project-simul-1",
  },
  {
    id: 6,
    image: project6,
    title: "RentLa",
    info: "College Project",
    role: "UI Designer",
    desc: "Rentla is a mobile app designed for renting umbrellas. Users can view the locations of available umbrellas through the app. To rent an umbrella, users simply scan the barcode on the umbrella storage box and make an online payment. Additionally, users can check weather forecasts within the app. This application was created for my Entrepreneurship: Market Validation course project.",
    link: "https://www.behance.net/gallery/182499089/RentLa",
  },
];

function ProjectH() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    image: "",
    title: "",
    info: "",
    role: "",
    desc: "",
    link: "",
  });

  const handleImageClick = (image, title, info, role, desc, link) => {
    setModalContent({ image, title, info, role, desc, link });
    setModalOpen(true);
  };

  return (
    <div className="lg:px-[45px] md:px-[45px] sm:px-[45px] phone:px-5 mb-52">
      <h1 className="title md:text-[4vw] lg:text-[4vw] sm:text-[10vw] phone:text-[10vw]">
        <StaggerText
          staggerType="letter"
          staggerDuration={0.8}
          staggerDelay={0.1}
          startDelay={0}
          shouldStart="false"
        >
          My Works
        </StaggerText>
      </h1>

      <div className="border-y-2 border-hitam flex justify-between py-5 phone:flex-col phone:gap-5 lg:flex-row md:flex-row sm:flex-row">
        <ProjectL
          img={project1}
          number="01"
          title={projects[0].title}
          onClick={() =>
            handleImageClick(
              projects[0].image,
              projects[0].title,
              projects[0].info,
              projects[0].role,
              projects[0].desc,
              projects[0].link
            )
          }
        />
        <ProjectL
          img={project2}
          number="02"
          title={projects[1].title}
          onClick={() =>
            handleImageClick(
              projects[1].image,
              projects[1].title,
              projects[1].info,
              projects[1].role,
              projects[1].desc,
              projects[1].link
            )
          }
        />
        
      </div>
      <div className="border-b-2 border-hitam flex justify-between py-5 phone:flex-col phone:gap-5 lg:flex-row md:flex-row sm:flex-row">
        <ProjectL2
          img={project3}
          number="03"
          title={projects[2].title}
          onClick={() =>
            handleImageClick(
              projects[2].image,
              projects[2].title,
              projects[2].info,
              projects[2].role,
              projects[2].desc,
              projects[2].link
            )
          }
        />
        <ProjectL2
          img={project4}
          number="04"
          title={projects[3].title}
          onClick={() =>
            handleImageClick(
              projects[3].image,
              projects[3].title,
              projects[3].info,
              projects[3].role,
              projects[3].desc,
              projects[3].link
            )
          }
        />
      </div>
      <div className="border-b-2 border-hitam flex justify-between py-5 phone:flex-col phone:gap-5 lg:flex-row md:flex-row sm:flex-row">
        <ProjectL
          img={project5}
          number="05"
          title={projects[4].title}
          onClick={() =>
            handleImageClick(
              projects[4].image,
              projects[4].title,
              projects[4].info,
              projects[4].role,
              projects[4].desc,
              projects[4].link
            )
          }
        />
        <ProjectL
          img={project6}
          number="06"
          title={projects[5].title}
          onClick={() =>
            handleImageClick(
              projects[5].image,
              projects[5].title,
              projects[5].info,
              projects[5].role,
              projects[5].desc,
              projects[5].link
            )
          }
        />
      </div>
      <AnimatePresence>
        {modalOpen && (
          <ProjectDetail
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            image={modalContent.image}
            title={modalContent.title}
            info={modalContent.info}
            role={modalContent.role}
            desc={modalContent.desc}
            link={modalContent.link}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProjectH;
