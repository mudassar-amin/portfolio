import React from 'react';
import { FaGraduationCap, FaBriefcase, FaProjectDiagram, FaTools, FaCertificate, FaLanguage } from 'react-icons/fa';

const Resume = () => {
  return (
    <section id="resume" className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-12 space-y-10">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Resume</h2>
      
      {/* Contact Info */}
      <div className="text-center text-gray-600">
        <p>+47- 46251080 | mudassaramin93@gmail.com | LinkedIn | GitHub | Navik, Norway (Open to Relocation)</p>
      </div>
      
      {/* Education Section */}
      <div className="border-l-4 border-yellow-400 pl-4 mb-6 space-y-2">
        <div className="flex items-center space-x-2">
          <FaGraduationCap className="text-yellow-500" />
          <h3 className="text-2xl font-semibold text-gray-700">Education</h3>
        </div>
        <p className="text-gray-600 font-medium">Master of Applied Computer Science</p>
        <p className="text-gray-500">UiT The Arctic University of Norway (2022 – 2024)</p>
        <p className="text-gray-600 font-medium">Bachelor of Software Engineering</p>
        <p className="text-gray-500">Mirpur University of Science and Technology, Pakistan (2015 – 2020)</p>
        <p className="text-gray-500">Grades: 3.27/4 CGPA</p>
      </div>
      
      {/* Experience Section */}
      <div className="border-l-4 border-blue-400 pl-4 mb-6 space-y-2">
        <div className="flex items-center space-x-2">
          <FaBriefcase className="text-blue-500" />
          <h3 className="text-2xl font-semibold text-gray-700">Experience</h3>
        </div>
        <div>
          <p className="text-gray-600 font-medium">Web Developer & Designer, Arleen Fuller Global (Remote)</p>
          <p className="text-gray-500">Jan 2020 – Jan 2022</p>
          <ul className="list-disc list-inside text-gray-600 ml-4">
            <li>Created and set up websites, focusing on effective web design.</li>
            <li>Maintained and optimized websites for better user experience.</li>
            <li>Enhanced interfaces with HTML, CSS, and JavaScript.</li>
          </ul>
        </div>
      </div>

      {/* Projects Section */}
      <div className="border-l-4 border-green-400 pl-4 mb-6 space-y-2">
        <div className="flex items-center space-x-2">
          <FaProjectDiagram className="text-green-500" />
          <h3 className="text-2xl font-semibold text-gray-700">Projects</h3>
        </div>
        <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
          <li><strong>Music Education Framework Using LLMs:</strong> Developed a music education framework using a large language model. Responsibilities included data preparation and AI model fine-tuning.</li>
          <li><strong>AI Robot for Airports:</strong> Created AI solutions for airport operations, including guides (RAG, DALL-E), and luggage management using YOLO and Q-learning.</li>
          <li><strong>FEM Theory and Implementation:</strong> Solved 2D Boundary Value Problems on circular/square domains with generalized boundary conditions using C++.</li>
          <li><strong>Electricity Users Management Desktop Application:</strong> Built a Windows application for electricity management using C# and SQL.</li>
        </ul>
      </div>

      {/* Skills Section */}
      <div className="border-l-4 border-red-400 pl-4 mb-6 space-y-2">
        <div className="flex items-center space-x-2">
          <FaTools className="text-red-500" />
          <h3 className="text-2xl font-semibold text-gray-700">Technical Skills</h3>
        </div>
        <p className="text-gray-600">Languages: Python, JavaScript, HTML, CSS, SQL</p>
        <p className="text-gray-600">Frameworks: React, Bootstrap</p>
        <p className="text-gray-600">Tools: Git, VS Code</p>
        <p className="text-gray-600">Libraries: NumPy, Pandas</p>
      </div>

      {/* Certifications Section */}
      <div className="border-l-4 border-purple-400 pl-4 mb-6 space-y-2">
        <div className="flex items-center space-x-2">
          <FaCertificate className="text-purple-500" />
          <h3 className="text-2xl font-semibold text-gray-700">Certifications</h3>
        </div>
        <ul className="list-disc list-inside text-gray-600 ml-4">
          <li><strong>Foundations of User Experience (UX) Design:</strong> Covered UX, wireframes, and prototypes.</li>
          <li><strong>Create Serverless Applications (Microsoft Azure):</strong> Training in cloud-based integration and Azure Functions.</li>
        </ul>
      </div>

      {/* Languages Section */}
      <div className="border-l-4 border-indigo-400 pl-4 mb-6 space-y-2">
        <div className="flex items-center space-x-2">
          <FaLanguage className="text-indigo-500" />
          <h3 className="text-2xl font-semibold text-gray-700">Languages</h3>
        </div>
        <p className="text-gray-600">English: Fluent</p>
        <p className="text-gray-600">Norwegian: Enrolled in A1/A2 course since May 2024</p>
      </div>
    </section>
  );
};

export default Resume;
