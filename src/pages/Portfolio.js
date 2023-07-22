import React from 'react';
import a from "./assets/a.jpg";
import b from "./assets/b.jpg";
import c from "./assets/c.JPG";
import d from "./assets/d.jpg";
import e from "./assets/e.jpg";
import f from "./assets/f.JPG";
import g from "./assets/g.jpg";
import h from "./assets/h.JPG";
import j from "./assets/j.JPG";
import "./assets/gallery.css";


//portfolio page, created a div container to display photo gallery, designed in css
function Portfolio() {
    return (
        <>
        <head>
            <title>MELANIE C</title>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
  	        <script src="./script.js" defer></script>
        </head>
        <div className="App">
            <header className="App-header">
                <div class="container">
                    <img src={j} alt="Model kneeling in front of blue graffiti" />
                    <img src={h} alt="Fencers in white uniforms pointing blades at eachother" />
                    <img src={a} alt="Male leaning against fence" />
                    <img src={b} alt="Ring on a woman's finger in front of a grassy field" />
                    <img src={c} alt="Little baby looking back inside a small play place" />
                    <img src={d} alt="Graduating senior from class of 2021 in cap and gown" />
                    <img src={e} alt="Women model posing in front of fence with hand on face" />
                    <img src={f} alt="Baby sitting on cushion chewing on food" />
                    <img src={g} alt="Fencer pointing blade at camera in a lavendar field" />
                </div>
            </header>
        </div></>
    );
}

export default Portfolio;