import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Jesús García</h1>
          <PText>Desarrollador de back-end.</PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Links"
            links={[
              {
                title: 'Inicio',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'Acerca de mí',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Proyectos',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contacto',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Información de contacto"
            links={[
              {
                title: '+333333',
                path: 'tel:+333333',
              },
              {
                title: 'xx@gmail.com',
                path: 'mailto:xx@gmail.com',
              },
              {
                title: 'xxxxxxxx',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Redes sociales:"
            links={[
              {
                title: 'GitHub',
                path: 'https://github.com/jesusGZ',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 | Diseño por{' '}
            <a target="_blank" rel="noreferrer" href="http://webcifar.com">
              web cifar
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
