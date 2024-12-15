import React from 'react';
import project from "../assets/project.png";

export const projects = [
    {
      title: "Hotel",
      imageSrc: project,
      description:
        "This is a project made to learn the latest languages by building an app.",
      skills: ["React", "Express", "Node"],
      demo: "https://www.example.com",
      source: "https://www.github.com",
    },
    {
      title: "Chatbot ai",
      imageSrc: project,
      description:
        "This is a project made to learn the latest languages by building an app.",
      skills: ["React", "Express", "Node", "Sass"],
      demo: "https://www.example.com",
      source: "https://www.github.com",
    },
    {
      title: "Ikshana",
      imageSrc: project,
      description:
        "This is a project made to learn the latest languages by building an app.",
      skills: ["React", "Express", "Node"],
      demo: "https://www.example.com",
      source: "https://www.github.com",
    },
  ];

const Projects: React.FC = () => {
  return (
    <section className="projects__container" id="projects">
        <h2 className='projects__title'>Projects</h2>
        <div className='projects'>
            {projects.map((project:any,id:any)=>{
                return(
                    <div className='project-container'key={id}>
                        <img src={project.imageSrc} alt='' className='project-img'/>
                        <h3 className='project-title'>{project.title}</h3>
                        <p className='project-description'>{project.description}</p>
                        <ul className='projects-skills'>
                            {project.skills.map((skill:any,id:any)=>{
                                return(
                                    <li className='project-skill' key={id}>
                                        {skill}
                                    </li>
                                )
                            })}
                        </ul>
                        <div className='project-links'>
                            <a href={project.demo} className='project-link'>Demo</a>
                            <a href={project.source} className='project-link'>Source</a>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  );
};

export default Projects;
