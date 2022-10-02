import '../styles/skills.scss';
import { FaHtml5, FaSass, FaReact, FaFigma, FaLinux, FaWordpress, FaLaravel } from 'react-icons/fa';
import { SiJavascript, SiCss3, SiTypescript, SiFirebase, SiGit, SiAdobephotoshop, SiBootstrap } from 'react-icons/si';

const skillsData = [
  {id: 1, title: 'HTML', icon: <FaHtml5 />},
  {id: 2, title: 'CSS', icon: <SiCss3 />},
  {id: 3, title: 'SASS', icon: <FaSass />},
  {id: 4, title: 'Bootstrap', icon: <SiBootstrap />},
  {id: 5, title: 'React', icon: <FaReact />},
  {id: 6, title: 'JavaScript', icon: <SiJavascript />},
  {id: 7, title: 'TypeScript', icon: <SiTypescript />},
  {id: 8, title: 'Git', icon: <SiGit />},
  {id: 9, title: 'Figma', icon: <FaFigma />},
  {id: 10, title: 'Linux', icon: <FaLinux />},
  {id: 11, title: 'Firebase', icon: <SiFirebase />},
  {id: 12, title: 'WordPress', icon: <FaWordpress />},
  {id: 13, title: 'Photoshop', icon: <SiAdobephotoshop />},
  {id: 14, title: 'Laravel', icon: <FaLaravel />},
];

export function Skills() {
    return (
      <div id="skills">
        <div className="skillsHeader">
          <h2>Skills</h2>
        </div>
        <div className="skillsContainer">
          {skillsData.map((skills) =>
            <div className="skill--box" key={skills.id}>
              <i className='skillsImage'>{skills.icon} </i>
              <h3>{skills.title}</h3>
            </div>
          )}
        </div>
      </div>
    )
}