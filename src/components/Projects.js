import '../styles/projects.scss';
import { FaCode } from 'react-icons/fa';

const projectData = [
  {id: 1, title: 'Sistema de salas', image: 'https://maikelensalles.site/images/letmeask-reactjs.jpg', 
   code: 'https://github.com/maikelensalles/Letmeask-ReactJS', tags: ['React.js', 'TypeScript', 'SASS', 'HTML']},
  {id: 2, title: 'Landing Page', image: 'https://maikelensalles.site/images/landing-page-meus-links.jpg', 
   code: 'https://github.com/maikelensalles/Landing-page---Meus-Links', tags: ['HTML', 'CSS']},
  {id: 3, title: 'Layout de sistema', image: 'https://maikelensalles.site/images/uidashboard.jpg', 
   code: 'https://github.com/maikelensalles/UI-Dashboard', tags: ['HTML', 'CSS', 'SASS', 'Bootstrap']},
  {id: 4, title: 'Sistema para gerenciamento de aplicativo P2P', image: 'https://maikelensalles.github.io/site/images/photography-4.jpg', 
   code: 'https://github.com/maikelensalles/forte-play', tags: ['JavaScript', 'CSS', 'SASS', 'Laravel']},
  {id: 5, title: 'Sistema para gerenciamento de delivery', image: 'https://maikelensalles.github.io/site/images/photography-3.jpg',
   code: 'https://github.com/maikelensalles/delivery', tags: ['Laravel', 'Blade', 'Less']},
  {id: 6, title: 'Sistema para gerenciamento de investimentos', image: 'https://maikelensalles.github.io/site/images/photography-2.jpg',
   code: 'https://github.com/maikelensalles/ativos-master', tags: ['Blade', 'PHP', 'Laravel']}
];

export function Projects() {
    return (
      <div id="projects">
        <div className="projects-header">
          <h2>Projetos</h2>
        </div>
        <div className="projects--body">
          <div className="projects--bodyContainer">
            {projectData.slice(0, 6).map(project => (
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