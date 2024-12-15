import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProjectDetail.css';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  
  // You can replace this with fetching from a backend or state.
  const project = {
    1: { title: 'Project 1', description: 'Detailed description of project 1' },
    2: { title: 'Project 2', description: 'Detailed description of project 2' },
  }[id || ''];

  return (
    <div className="project-detail">
      <h2>{project?.title}</h2>
      <p>{project?.description}</p>
    </div>
  );
};

export default ProjectDetail;
