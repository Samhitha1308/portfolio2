import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  achievements?: string[];
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  degree, 
  institution, 
  period, 
  description, 
  achievements 
}) => {
  return (
    <div className="mb-10 relative pl-8 border-l-2 border-indigo-200">
      <div className="absolute -left-3 top-0 bg-indigo-600 rounded-full p-1.5">
        <GraduationCap size={16} className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{degree}</h3>
      <p className="text-indigo-600 font-medium mb-2">{institution}</p>
      <div className="flex items-center text-gray-500 mb-4">
        <Calendar size={16} className="mr-2" />
        <span>{period}</span>
      </div>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {achievements && (
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Achievements:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-gray-600">{achievement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Education: React.FC = () => {
  const educationItems: EducationItemProps[] = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Koneru Lakshmaiah University",
      period: "2021 - 2025",
      achievements: [
        "Maintained a CGPA of 9.19/10",
        "Published a research paper on 'Predictive Task scheduling strategies for cost optimization in multi-cloud deployments'"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            My academic background and educational qualifications.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {educationItems.map((item, index) => (
            <EducationItem 
              key={index}
              degree={item.degree}
              institution={item.institution}
              period={item.period}
              description={item.description}
              achievements={item.achievements}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
