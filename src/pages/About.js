import React from "react";
import banner from "./assets/banner.jpeg";
import Mel from "./assets/Mel.jpg";
import "./assets/gallery.css";

//about webpage
const About = () => {
  return (
    <>
        <div className="App">
        <body>
        <div class="banner">
        <img src={banner} id = "banner" alt="Model kneeling in front of blue graffiti"></img>
        </div>
        <div class="ftext">
          <h1>MYCPORTRAITS</h1>
        </div>

      <body className="mainpage mt-3">
      <img src={Mel} id = "portrait" alt="Model kneeling in front of blue graffiti"
      width="300" 
      height="300"/>
    

      <main>
        <div>
          <div> 
          <p id = "name">
            Hi, I am Melanie
          </p>
          </div>
          <p className = "aboutme mt-2">
            I am an aspiring photographer located in Seattle, Washington with a strong interest in pursuing UX/UI design. 
            My current favorite activities include hiking, running, taking photos, 
            and (when I am feeling studious) building my fundamentals in back-end development.
            This is my blog where I post updates about my photography, or new projects I have been working on...
            aaand everything in between. 
          </p>
        </div>
      </main>
    </body>
    </body>
        </div></>
  );
};

export default About;
