import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Music Education Framework Using LLMs',
      image: '/path/to/music-education.jpg', // Replace with actual path or URL
      summary: 'A framework using large language models to enhance personalized learning in music education.',
      details: 'Developed thesis research focused on a music education framework using a large language model. Responsibilities included preparing the music data and supervised fine-tuning of the AI model using Python.',
    },
    {
      title: 'AI Robot for Airports',
      image: '/path/to/airport-ai.jpg', // Replace with actual path or URL
      summary: 'AI-driven solutions for airport operations, including passenger guidance and baggage classification.',
      details: 'Developed AI-driven solutions for airport operations, including a passenger brochure guide (RAG and DALL-E), baggage & material classification (YOLO, ResNet50), and luggage design optimization (Genetic Algorithms) to improve efficiency and user experience. Applied reinforcement learning (Q-learning) to optimize robot navigation, task sequencing, and battery management for baggage loading/unloading.',
    },
    {
      title: 'FEM Theory and Implementation',
      image: '/path/to/fem-theory.jpg', // Replace with actual path or URL
      summary: 'Application solving Boundary Value Problems (BVP) in 2D with generalized boundary conditions.',
      details: 'An application that can solve the specific Boundary Value Problem (BVP) in 2D on the circular or square domain with generalized boundary conditions. Implementation using C++, Eigen Values, and TTL libraries.',
    },
    {
      title: 'Electricity Users Management Desktop Application',
      image: '/path/to/electricity-management.jpg', // Replace with actual path or URL
      summary: 'A Windows application for managing electricity users, featuring customer and admin interfaces.',
      details: 'Developed a Windows application for electricity users as a semester project, featuring customer and admin interfaces. Built using C#, WinForms, and SQL for simple and efficient data management.',
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Projects</h2>
      
      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={() => openModal(project)}
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.summary}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{selectedProject.title}</h3>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-40 object-cover rounded mb-4" />
            <p className="text-gray-700">{selectedProject.details}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
