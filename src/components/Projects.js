import '../styles/projects.scss';
import { FaCode } from 'react-icons/fa';

const projectData = [
  {id: 1, title: 'Sistema para gerenciamento de aplicativo P2P', image: 'https://maikelensalles.github.io/site/images/photography-4.jpg', 
   code: 'https://github.com/maikelensalles/forte-play', demo: 'https://github.com/maikelensalles/forte-play', tags: ['JavaScript', 'CSS', 'SASS', 'Laravel']},
  {id: 2, title: 'Sistema para gerenciamento de delivery', image: 'https://maikelensalles.github.io/site/images/photography-3.jpg',
   code: 'https://github.com/maikelensalles/delivery', demo: 'https://github.com/maikelensalles/delivery', tags: ['Laravel', 'Blade', 'Less']},
  {id: 3, title: 'Sistema para gerenciamento de investimentos', image: 'https://maikelensalles.github.io/site/images/photography-2.jpg',
   code: 'https://github.com/maikelensalles/ativos-master', demo: 'https://github.com/maikelensalles/ativos-master', tags: ['Blade', 'PHP', 'Laravel']},
];

export function Projects() {
    return (
      <div id="projects">
        <div className="projects-header">
          <h2>Projetos</h2>
        </div>
        <div className="projects--body">
          <div className="projects--bodyContainer">
            {projectData.slice(0, 3).map(project => (
              <div className="singleProject" key={project.id}>
                <div className="projectContent">
                  <h2>{project.title}</h2>
                  <img src={project.image} />
                  <div className='project--showcaseBtn'>
                      <a
                          href={project.code}
                          target='_blank'
                          rel='noreferrer'
                      >
                          <FaCode
                            className='icon'
                          />
                      </a>
                  </div>
                </div>
                <div className='project--lang'>
                {project.tags.map((tag, id) => (
                        <span key={id}>{tag}</span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>    
    )
}