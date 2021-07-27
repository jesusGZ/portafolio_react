import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Soy <span>Jesús García</span>
              </p>
              <h2 className="about__heading">Desarrollador de back-end</h2>
              <div className="about__info">
                <PText>
                  Soy un joven apasionado por el desarrollo y la tecnologia.
                  <br /> <br />
                  Egresado del Instituto Tecnologico del Sur de
                  Guanajuato(ITSUR).
                  <br />
                  <br />
                  XXXXXXXXXXXXXXXXXXXX.
                </PText>
              </div>
              <Button btnText="Descargar CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Educación</h1>

              <AboutInfoItem
                title="eff"
                items={['Nasirabad Govt. High School, Chattogram']}
              />
              <AboutInfoItem
                title="Collage"
                items={['BAF Shaheen College Chattogram']}
              />
              <AboutInfoItem
                title="Varsity"
                items={['University Of Chitiagong']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Habilidades</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={[
                  'NodeJS',
                  'Express',
                  'PHP',
                  'laravel',
                  'MongoDB',
                  'Mysql',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Expreriencia</h1>

              <AboutInfoItem title="2010-2012" items={['xxxxxxxx']} />
              <AboutInfoItem
                title="Dic 2019 - Actualidad"
                items={[
                  'Desarrollador de back-end - Morpheus DSS - Salvatierra GTO.',
                ]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
