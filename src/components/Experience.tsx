import React from 'react';
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import graph from "../assets/skills/graphql.png";
import mongo from "../assets/skills/mongodb.png";
import figma from "../assets/skills/figma.png";

import google from "../assets/history/google.png";
import microsoft from "../assets/history/microsoft.png";
import netflix from "../assets/history/netflix.png";


export const skills = [
  {
    title: "HTML",
    imageSrc: html,
  },
  {
    title: "CSS",
    imageSrc: css,
  },
  {
    title: "React",
    imageSrc: react,
  },
  {
    title: "Node",
    imageSrc: node,
  },
  {
    title: "GraphQL",
    imageSrc: graph,
  },
  {
    title: "MongoDB",
    imageSrc: mongo,
  },
  {
    title: "Figma",
    imageSrc: figma,
  },
];

export const history = [
  {
    role: "Software Engineer",
    organisation: "Google",
    startDate: "Sept, 2022",
    endDate: "Present",
    experiences: ["Worked on Google Maps", "Reduced load times by 50%"],
    imageSrc: google,
  },
  {
    role: "UI Designer",
    organisation: "Mirosoft",
    startDate: "Aug, 2021",
    endDate: "Aug, 2022",
    experiences: ["Worked on Windows 10", "Designed the control panel"],
    imageSrc: microsoft,
  },
  {
    role: "SWE Intern",
    organisation: "Netflix",
    startDate: "Apr, 2020",
    endDate: "Jun, 2020",
    experiences: ["Worked on component library", "Helped create UI components"],
    imageSrc: netflix,
  },
];

const Experience: React.FC = () => {
  return (
    <section className="experience__container" id="experience">
      <h2 className='experience__title'>Experience</h2>
      <div className='experience__content'>
        <div className='experience__skills'>
            {skills.map((skill:any,id:any)=>{
                return(
                    <div className='experience__skill' key={id}>
                        <div className='experience__skillImageContainer'>
                            <img src={skill.imageSrc} alt=''/>
                        </div>
                        <p>{skill.title}</p>
                    </div>
                )
            })}
        </div>
        <ul className='experience__history'>
            {history.map((historyItem:any,id:any)=>{
                return(
                    <li key={id} className='experience__historyItem'>
                        <img src={historyItem.imageSrc} alt=''/>
                        <div className='experience__historyItemDetails'>
                            <h3>
                                {historyItem.role}{historyItem.organisation}
                            </h3>
                            <p>
                                {historyItem.startDate}-{historyItem.endDate}
                            </p>
                            <ul>
                                {historyItem.experiences.map((experience:any,id:any)=>{
                                    return(
                                        <li key={id}>{experience}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </li>
                )
            })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
