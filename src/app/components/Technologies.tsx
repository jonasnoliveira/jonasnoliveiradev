import { FaJs, FaPhp, FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import {
  SiTypescript,
  SiDotnet,
  SiAngular,
  SiMysql,
  SiPostgresql,
  SiJira,
  SiTrello,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiTypeorm, SiCsharp
} from 'react-icons/si';

const Technologies = () => {
  const techData = [
    { name: 'TypeScript', experience: '2 anos de experiência', icon: <SiTypescript className="text-blue-600 text-4xl" /> },
    { name: 'JavaScript', experience: '3 anos de experiência', icon: <FaJs className="text-yellow-500 text-4xl" /> },
    { name: 'React.js', experience: '2 anos de experiência', icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: 'Angular', experience: '1 ano de experiência', icon: <SiAngular className="text-red-600 text-4xl" /> },
    { name: 'Next.js', experience: '1 ano de experiência', icon: <SiTypescript className="text-gray-700 text-4xl" /> },
    { name: 'Node.js', experience: '2 anos de experiência', icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: 'TypeORM', experience: '2 anos de experiência', icon: <SiTypeorm className="text-orange-500 text-4xl" /> },
    { name: '.NET', experience: '1 ano de experiência', icon: <SiDotnet className="text-red-600 text-4xl" /> },
    { name: '.NET Core', experience: '1 ano de experiência', icon: <SiDotnet className="text-red-600 text-4xl" /> },
    { name: 'C#', experience: '1 ano e meio de experiência', icon: <SiCsharp className="text-blue-600 text-4xl" /> },
    { name: 'Entity Framework', experience: '1 ano e meio de experiência', icon: <SiDotnet className="text-red-600 text-4xl" /> },
    { name: 'ASP.NET', experience: '1 ano de experiência', icon: <SiDotnet className="text-red-600 text-4xl" /> },
    { name: 'PHP', experience: '1 ano de experiência', icon: <FaPhp className="text-indigo-700 text-4xl" /> },
    { name: 'MySQL', experience: '3 anos de experiência', icon: <SiMysql className="text-blue-600 text-4xl" /> },
    { name: 'PostgreSQL', experience: '2 anos de experiência', icon: <SiPostgresql className="text-blue-700 text-4xl" /> },
    { name: 'Git', experience: '3 anos de experiência', icon: <FaGit className="text-orange-500 text-4xl" /> },
    // Ferramentas
    { name: 'GitHub', experience: '3 anos de experiência', icon: <SiGithub className="text-gray-800 text-4xl" /> },
    { name: 'GitLab', experience: '1 ano de experiência', icon: <SiGitlab className="text-orange-500 text-4xl" /> },
    { name: 'Bitbucket', experience: '1 ano de experiência', icon: <SiBitbucket className="text-blue-500 text-4xl" /> },
    { name: 'Jira', experience: '2 anos de experiência', icon: <SiJira className="text-blue-500 text-4xl" /> },
    { name: 'Trello', experience: '3 anos de experiência', icon: <SiTrello className="text-blue-500 text-4xl" /> },
  ];
  
  return (
    <section className="bg-base-200 py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Tecnologias e Ferramentas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techData.map((tech, index) => (
            <div key={index} className="bg-base-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold">{tech.name}</h3>
              <p className="text-gray-500">{tech.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
