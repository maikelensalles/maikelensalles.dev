import '../styles/skills.scss';
import { FaHtml5, FaSass, FaReact, FaFigma, FaLinux } from 'react-icons/fa';
import { SiJavascript, SiCss3, SiTypescript, SiFirebase } from 'react-icons/si';
import { BiGitBranch } from 'react-icons/bi';

const skillsData = [
  {id: 1, title: 'HTML', icon: <FaHtml5 />},
  {id: 2, title: 'CSS', icon: <SiCss3 />},
  {id: 3, title: 'SASS', icon: <FaSass />},
  {id: 4, title: 'React', icon: <FaReact />},
  {id: 5, title: 'JavaScript', icon: <SiJavascript />},
  {id: 6, title: 'TypeScript', icon: <SiTypescript />},
  {id: 8, title: 'Git', icon: <BiGitBranch />},
  {id: 9, title: 'Figma', icon: <FaFigma />},
  {id: 10, title: 'Linux', icon: <FaLinux />},
  {id: 10, title: 'Firebase', icon: <SiFirebase />},
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