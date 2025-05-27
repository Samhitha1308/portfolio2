import React from 'react';
import { Book, Code, Globe, Award } from 'lucide-react';
import picMine from './pic_mine.jpg'; // Correct path

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <div className="bg-indigo-50 p-2 shadow-md rounded-lg">
              <img 
                src={picMine} 
                alt="About me" 
                className="w-64 h-40 object-contain mx-auto rounded-md"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Who I Am</h3>
            <p className="text-lg text-gray-700 mb-6">
              I’m Samhitha Putteti from India. With a strong interest in cloud computing and software development,
              I am currently pursuing my B.Tech in Computer Science and Engineering at KL University. Coming from a
              tech-driven academic background, I enjoy building full-stack applications, especially using Spring Boot
              and AWS services. I am fluent in English and Telugu, and I take pride in being a quick learner who
              thrives on solving real-world problems. My passion lies in creating innovative solutions, and I’m always
              excited to explore new technologies and improve through hands-on learning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Code size={24} className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Development</h4>
                  <p className="text-gray-600">Java & AWS expertise</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Book size={24} className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Learning</h4>
                  <p className="text-gray-600">Exploring new technologies</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Globe size={24} className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Goals</h4>
                  <p className="text-gray-600">Career growth & contribution</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Award size={24} className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Excellence</h4>
                  <p className="text-gray-600">Committed to quality work</p>
                </div>
              </div>
            </div>

            <a 
              href="#contact" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition shadow-md"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
