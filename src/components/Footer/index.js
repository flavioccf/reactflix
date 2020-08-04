import React from 'react';
import styled from 'styled-components';
import { FooterBase } from './styles';
import Github from '../../assets/img/github.png';
import Linkedin from '../../assets/img/linkedin.png';

const Sns = styled.div`
  a {
    padding: 2%;
    img {
      width: 100%;
      max-width: 50px;
    }
  }
`;

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <Sns>
        <a href="https://github.com/flavioccf"><img src={Github} alt="Github" /></a>
        <a href="https://www.linkedin.com/in/flavioccf/"><img src={Linkedin} alt="Linkedin" /></a>
      </Sns>
    </FooterBase>
  );
}

export default Footer;
