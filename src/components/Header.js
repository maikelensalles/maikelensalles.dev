import '../styles/header.scss';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiWhatsapp, SiInstagram } from 'react-icons/si';

const images = ['https://maikelensalles.site/images/maikelensalles2.png']

const headerData = {
  name: 'Maikelen Salles',
  title: "Web Developer",
  desciption:"Mantenho interesse pela área de desenvolvimento front-end. Na minha experiência, sempre foquei em boas práticas no desenvolvimento de cada projeto e estou disposta a aprender muito mais. Algumas palavras-chave que fazem parte da minha rotina como desenvolvedora: modelo de desenvolvimento ágil, trabalho em equipe, Clean Code, princípios SOLID, consumo de APIs, versionamento com git. Aguardem as cenas dos próximos capítulos dessa jornada ;)",
  image: 'https://avatars.githubusercontent.com/u/68317244?v=4',
}

const socialsData = {
  linkedIn: 'https://www.linkedin.com/in/maikelen-salles',
  github: 'https://github.com/maikelensalles',
  whatsapp: 'https://api.whatsapp.com/send?phone=5551980418444&text=Ol%C3%A1%20Maikelen',
  instagram: 'https://www.instagram.com/maikelensalles/',
}

export function Header() {

    return (
    <div id="header">
        <div className="navbar--container">
            <img src={images} className="img-logo" />
        </div>
        <div className='landing'>
            <div className='landing--container'>
            <div className='landing--container-left'>
                <div className='lcl--content'>
                    {socialsData.linkedIn && (
                        <a
                            href={socialsData.linkedIn}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaLinkedin
                                className='landing--social'
                                aria-label='LinkedIn'
                            />
                        </a>
                    )}
                    {socialsData.github && (
                        <a
                            href={socialsData.github}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaGithub
                                className='landing--social'
                                aria-label='GitHub'
                            />
                        </a>
                    )}
                    {socialsData.whatsapp && (
                        <a
                            href={socialsData.whatsapp}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <SiWhatsapp
                                className='landing--social'
                                aria-label='Whatsapp'
                            />
                        </a>
                    )}
                    {socialsData.instagram && (
                        <a
                            href={socialsData.instagram}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <SiInstagram
                                className='landing--social'
                                aria-label='Instagram'
                            />
                        </a>
                    )}
                </div>
            </div>
                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                />
                <div
                        className='landing--container-right'
                    >
                    <div className='lcl--container'>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='duol--social'
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='duol--social'
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {socialsData.whatsapp && (
                        <a
                            href={socialsData.whatsapp}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <SiWhatsapp
                                className='duol--social'
                                aria-label='Whatsapp'
                            />
                        </a>
                        )}
                        {socialsData.instagram && (
                            <a
                                href={socialsData.instagram}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <SiInstagram
                                    className='duol--social'
                                    aria-label='Instagram'
                                />
                            </a>
                        )}
                    </div>
                    <div
                        className='lcr--content'
                    >
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.desciption}</p>                      
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}