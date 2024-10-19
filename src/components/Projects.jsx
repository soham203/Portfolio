import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Blockchain DApp',
      description: 'A decentralized application using Solidity and React.',
      link: 'https://github.com/soham203/blockchain-dapp'
    },
    {
      title: 'MERN Stack Project',
      description: 'A full-stack application with React, Node.js, and MongoDB.',
      link: 'https://github.com/soham203/mern-app'
    }
  ];

  return (
    <section id="projects" className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-400 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
