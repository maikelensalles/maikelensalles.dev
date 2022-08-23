import '../styles/header.scss';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiWhatsapp, SiInstagram } from 'react-icons/si';

const headerData = {
  name: 'Maikelen Salles',
  title: "Web Developer",
  desciption:"There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared. ",
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
    )
}