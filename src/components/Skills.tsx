import React from 'react';

interface SkillProps {
  name: string;
  level: number;
  color: string;
}

const Skill: React.FC<SkillProps> = ({ name, level, color }) => {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${color}`} 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const technicalSkills: SkillProps[] = [
    { name: 'Java', level: 80, color: 'bg-purple-500' },
    { name: 'React.js', level: 70, color: 'bg-teal-500' },
    { name: 'Cloud', level: 85, color: 'bg-green-500' },
    { name: 'SQL/Databases', level: 80, color: 'bg-pink-500' },
  ];
  
  const softSkills: SkillProps[] = [
    { name: 'Problem Solving', level: 95, color: 'bg-indigo-600' },
    { name: 'Communication', level: 90, color: 'bg-blue-500' },
    { name: 'Teamwork', level: 95, color: 'bg-purple-500' },
    { name: 'Time Management', level: 85, color: 'bg-teal-500' },
    { name: 'Adaptability', level: 90, color: 'bg-green-500' },
    { name: 'Leadership', level: 80, color: 'bg-pink-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my education and projects. Here's a glimpse of what I bring to the table.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-indigo-100 text-indigo-600 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              Technical Skills
            </h3>
            {technicalSkills.map((skill, index) => (
              <Skill key={index} name={skill.name} level={skill.level} color={skill.color} />
            ))}
          </div>
          
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-indigo-100 text-indigo-600 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
                </svg>
              </span>
              Soft Skills
            </h3>
            {softSkills.map((skill, index) => (
              <Skill key={index} name={skill.name} level={skill.level} color={skill.color} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;