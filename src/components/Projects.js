import '../styles/projects.scss';
import { FaCode } from 'react-icons/fa';

const projectData = [
  {id: 1, title: 'Sistema de salas', image: 'https://maikelensalles.site/images/projetos/projeto-8.jpg', 
   code: 'https://github.com/maikelensalles/Letmeask-ReactJS', tags: ['React.js', 'TypeScript', 'SASS', 'HTML']},
  {id: 2, title: 'Meu portfólio', image: 'https://maikelensalles.site/images/projetos/projeto-7.jpg', 
   code: 'https://github.com/maikelensalles/maikelensalles.dev', tags: ['React.js', 'JavaScript', 'SASS']},
  {id: 3, title: 'Projetos Web Design', image: 'https://maikelensalles.site/images/projetos/projeto-9.jpg', 
   code: 'https://www.behance.net/maikelensalles-tech/projects', tags: ['HTML', 'CSS', 'JavaScript', 'WordPress']},
  {id: 4, title: 'Design de sistema', image: 'https://maikelensalles.site/images/projetos/projeto-6.jpg', 
   code: 'https://www.figma.com/file/aGJd7qpweEGxdR3awxSbNh/Squash?node-id=0%3A1', tags: ['Figma', 'UI/UX', 'Material Design']},
  {id: 5, title: 'Landing Page', image: 'https://maikelensalles.site/images/projetos/projeto-5.jpg', 
   code: 'https://github.com/maikelensalles/Landing-page---Meus-Links', tags: ['HTML', 'CSS']},
  {id: 6, title: 'Layout de sistema', image: 'https://maikelensalles.site/images/projetos/projeto-4.jpg', 
   code: 'https://github.com/maikelensalles/UI-Dashboard', tags: ['HTML', 'CSS', 'SASS', 'Bootstrap']},
  {id: 7, title: 'Sistema para gerenciamento de aplicativo P2P', image: 'https://maikelensalles.site/images/projetos/projeto-3.jpg', 
   code: 'https://github.com/maikelensalles/forte-play', tags: ['JavaScript', 'CSS', 'SASS', 'Laravel']},
  {id: 8, title: 'Sistema para gerenciamento de delivery', image: 'https://maikelensalles.site/images/projetos/projeto-2.jpg',
   code: 'https://github.com/maikelensalles/delivery', tags: ['Laravel', 'Blade', 'Less']},
  {id: 9, title: 'Sistema para gerenciamento de investimentos', image: 'https://maikelensalles.site/images/projetos/projeto-1.jpg',
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
            {projectData.slice(0, 9).map(project => (
              <div className="singleProject" key={project.id}>
                <div className="projectContent">
                  <h2>{project.title}</h2>
                  <img src={project.image} alt=''/>
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