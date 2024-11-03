import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Projects</h2>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700">Music Education Framework Using LLMs</h3>
        <p className="text-gray-600">A framework using large language models to enhance personalized learning in music education.</p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-gray-700">AI Robot for Airports</h3>
        <p className="text-gray-600">AI-driven solutions for airport operations, including passenger guidance, baggage classification, and robot navigation.</p>
      </div>
    </section>
  );
};

export default Projects;
