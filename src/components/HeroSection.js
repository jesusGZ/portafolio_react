import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import GithubImg from '../assets/images/github.svg';
import LinkedinImg from '../assets/images/linkedin.svg';
import InstagramImg from '../assets/images/instagram.svg';
import Button from './Button';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    margin-top: 2rem;
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social {
    margin-top: 17rem;
    text-align: center;
    a {
      margin: 2rem;
    }
  }
  .hero__social__icon {
    margin-left: auto;
    margin-right: auto;
    width: 13rem;
    display: inline-block;
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      margin-top: 8.8rem;
      a {
        margin: 0.2rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hola, soy</span>
            <span className="hero__name">Jesús García</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>Soy desarrollador de BackEnd.</PText>
            <Button btnText="Mira mi trabajo" btnLink="/projects" />
          </div>
          <div className="hero__social">
            <a
              href="https://github.com/jesusGZ"
              target="_blank"
              rel="noreferrer"
            >
              <img
                href="https://github.com/jesusGZ"
                className="hero__social__icon"
                src={GithubImg}
                alt="Github"
              />
            </a>
            <a href="http://isntagram.com" target="_blank" rel="noreferrer">
              <img
                className="hero__social__icon"
                src={InstagramImg}
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="hero__social__icon"
                src={LinkedinImg}
                alt="Linkedin"
              />
            </a>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
