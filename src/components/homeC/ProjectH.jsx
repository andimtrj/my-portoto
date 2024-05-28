import ProjectL from "./ProjectL";
import ProjectL2 from "./ProjectL2";
import project1 from "../../assets/img/project1.png";
import project2 from "../../assets/img/project2.jpg";
import project3 from "../../assets/img/project3.jpg";
import project4 from "../../assets/img/project4.png";
import project5 from "../../assets/img/project5.png";
import project6 from "../../assets/img/project6.png";

function ProjectH() {

  return (
    <div className="px-[45px]">
      <h1 className="title md:text-[4vw] lg:text-[4vw]">My Works</h1>
      <div className="border-y-2 border-hitam flex justify-between py-5">
        <ProjectL
          img={project1}
          number="01"
          title="Herbs Shop"
        />
        <ProjectL
          img={project2}
          number="02"
          title="President Election AI"
        />
      </div>
      <div className="border-b-2 border-hitam flex justify-between py-5">
        <ProjectL2
          img={project3}
          number="03"
          title="Ramen Shop"
        />
        <ProjectL2
          img={project4}
          number="04"
          title="KOMINFO App Redesign"
        />
      </div>
      <div className="border-b-2 border-hitam flex justify-between py-5">
        <ProjectL
          img={project5}
          number="05"
          title="Student Profile"
        />
        <ProjectL
          img={project6}
          number="06"
          title="Youtube Dashboard"
        />
      </div>
    </div>
  );
}

export default ProjectH;
