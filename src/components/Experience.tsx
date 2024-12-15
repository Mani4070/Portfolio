import React from 'react';
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import mongo from "../assets/skills/mongodb.png";
import figma from "../assets/skills/figma.png";
import javascript from '../assets/skills/javascript.png'
import innostes from "../assets/history/innostes.png";
import angular from '../assets/skills/angular.png'
import nest from '../assets/skills/nest.png'
import next from '../assets/skills/next.png'
import postgres from '../assets/skills/postgres.png'
import python from '../assets/skills/python.png'
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
    title: "Java Script",
    imageSrc: javascript,
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
    title: "MongoDB",
    imageSrc: mongo,
  },
  {
    title: "Angular",
    imageSrc: angular,
  },
  {
    title: "Next",
    imageSrc: next,
  },
  {
    title: "Nest",
    imageSrc: nest,
  },
  {
    title: "Postgres",
    imageSrc: postgres,
  },
  {
    title: "Python",
    imageSrc: python,
  },
  {
    title: "Figma",
    imageSrc: figma,
  },
];

export const history = [
  {
    role: "Software Engineer",
    organisation: " Innostes",
    startDate: "Oct, 2023",
    endDate: "Present",
    experiences: [ "Developed full-stack applications using HTML, CSS, JavaScript, React, Node.js, MongoDB, PostgreSQL, Angular, Next.js, and Nest.js.",
        "Optimized performance and reduced load times by 50%, improving user experience and scalability.",
        "Collaborated with cross-functional teams to build efficient, high-performance web applications."],
    imageSrc: innostes,
  },
  {
    role: "Software Intern",
    organisation: " Innostes",
    startDate: "july, 2023",
    endDate: "sep, 2023",
    experiences: [    "Learned and worked with front-end technologies (HTML, CSS, JavaScript, React) and back-end (Node.js, MongoDB, PostgreSQL).",
        "Contributed to the design and development of a control panel, gaining hands-on full-stack development experience."
    ],
    imageSrc: innostes,
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
                                        <li style={{fontSize:'20px',marginTop:'8px'}} key={id}>{experience}</li>
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
