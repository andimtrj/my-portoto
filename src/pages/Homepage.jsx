import "../style/home.css";
import Image from "react-bootstrap/Image";
import ImageAndi from "../assets/img-andi.png";
import ImageHere from "../assets/img-here.png";
import ImageTrex from "../assets/img-trex.png";
import ImageShoe from "../assets/img-shoe.png";

function Home(params) {
  return (
    <>
      <div className="big-box">
        <div className="box left">
          <div className="title-container col">
            <div className="line"></div>
            <h1 className="title">Hello There</h1>
          </div>
          <div className="col img-andi-container">
            <Image src={ImageAndi} alt="big-image" className="img-andi" />
          </div>
          <div className="title-container col">
            <h1 className="title">I'm Andi</h1>
            <div className="line"></div>
          </div>
        </div>

        <div className="box middle">
          <div className="col content-middle">
            <div className="about-content">
              <h3 className="desc-title">[HELLO]</h3>
              <p className="desc">
                Visitors! Welcome to my little corner of the web! Call me Andi
                and thanks for visiting my website. Sit back, fasten your
                seatbelt, and enjoy your exploration on my website.
              </p>
            </div>
            <div className="about-content">
              <h3 className="desc-title">[MAY I INTRODUCE MY SELF?]</h3>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Aliquam faucibus purus in massa. Urna id volutpat lacus laoreet
                non curabitur gravida arcu ac. Eu scelerisque felis imperdiet
                proin fermentum leo vel. Aliquam sem fringilla ut morbi
                tincidunt augue. Etiam non quam lacus suspendisse faucibus
                interdum posuere. Sit amet nulla facilisi morbi tempus iaculis
                urna.
              </p>
            </div>
            <div className="about-content">
              <h3 className="desc-title">[WHAT CAN I DO FOR YOU]</h3>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Maecenas accumsan lacus vel facilisis volutpat est velit egestas
                dui. Mauris rhoncus aenean vel elit. Tempus urna et pharetra
                pharetra massa massa.
              </p>
            </div>
          </div>

          <div className="col content-middle">
            <div className="skills">
              <div className="desc-title">[SKILLS]</div>
              <div className="desc-title">
                <ul>
                  <li>FIGMA</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>LARAVEL</li>
                  <li>REACT JS</li>
                  <li>BOOTSTRAP</li>
                  <li>TAILWIND</li>
                </ul>
              </div>
            </div>

            <div className="img-here-container">
              <Image src={ImageHere} className="img-here" />
            </div>

            <div className="skills button-container">
              <button className="desc-title">GO SEE MY WORKS</button>
            </div>

            <div className="skills year-born desc-title">
              <div className="gapping">2023</div>
              <div className="gapping rock-left">STILL ROCKIN'</div>
            </div>
          </div>
        </div>

        <div className="col right">
          <div className="navbar desc-title">
            <div>
              <a href="">ABOUT</a>
            </div>
            <div>
              <a href="">PORTFOLIO</a>
            </div>
            <div>
              <a href="">CONTACT</a>
            </div>
          </div>

          <div className="img-right">
            <Image src={ImageShoe} />
          </div>

          <div className="img-right">
            <Image src={ImageTrex} />
          </div>

          <div className="contact-container">
              <div className="skills contact-content">
                <p>[EMAIL]</p>
                <p className="underlined">amataraja@gmail.com</p>
              </div>
              <div className="skills contact-content contact-content2">
                <p>[SOCIAL]</p>
                <p>
                  <a href="" >IG</a>
                  <a href="">YT</a>
                  <a href="">LI</a>
                  <a href="">GH</a>   
                </p>
              </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default Home;
