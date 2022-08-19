import '../styles/skills.scss';
import { FaHtml5, FaSass, FaReact } from 'react-icons/fa';
import { SiJavascript, SiCss3, SiTypescript } from 'react-icons/si';  

const skillsData = [
  {id: 1, title: 'HTML', icon: <FaHtml5 />},
  {id: 2, title: 'CSS', icon: <SiCss3 />},
  {id: 3, title: 'SASS', icon: <FaSass />},
  {id: 4, title: 'React', icon: <FaReact />},
  {id: 5, title: 'JavaScript', icon: <SiJavascript />},
  {id: 6, title: 'TypeScript', icon: <SiTypescript />},
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