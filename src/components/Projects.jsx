const projects = [
    { title: "Internship Portal", description: "A platform for finding internships.", link: "https://summer-internship-for-all.netlify.app/" },
    { title: "Weather App", description: "Real-time weather updates.", link: "https://weather-forecast-website-by-shree.netlify.app/" },
    { title: "Tic-Tac-Toe Game", description: "A fun and interactive game.", link: "https://tic-tac-toe-by-shree-enjoy-the-game.netlify.app/" },
  ];
  
  const Projects = () => (
    <section id="projects" className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 shadow-xl rounded-lg hover:scale-105 transform transition-all">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Projects;
  