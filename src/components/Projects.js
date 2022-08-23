import '../styles/projects.scss';

const projectData = [
  {id: 1, title: 'Sistema para gerenciamento de aplicativo P2P', image: 'https://maikelensalles.github.io/site/images/photography-4.jpg'},
  {id: 2, title: 'Layout de sistema desenvolvido com HTML, CSS e SCSS', image: 'https://maikelensalles.github.io/site/images/photography-1.jpg'},
  {id: 3, title: 'Sistema de gerenciamento de investimentos', image: 'https://maikelensalles.github.io/site/images/photography-2.jpg'},
];

export function Projects() {
    return (
      <div id="projects">
        <div className="projects-header">
          <h2>Projetos</h2>
        </div>
        <div className="projects--body">
          <div className="projects--bodyContainer">
            {projectData.map((project) =>
              <div className="project--box" key={project.id}>
                <h3>{project.title}</h3>
                <img src={project.image} />
              </div>
            )}
          </div>
        </div>
      </div>    
    )
}