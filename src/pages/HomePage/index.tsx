import React from 'react';
import { Container } from './styles';
import './style.css';

import Header from '../../components/Header';
import CeVLogo from '../../assets/CeV.svg';
import RSLogo from '../../assets/RS.svg';

const HomePage:React.FC = () => (
  <Container className="background">
    <Header />
    <p className="big">APRENDA DESENVOLVIMENTO WEB COM OS MELHORES CONTEÚDOS REUNIDOS.</p>
    <p className="ps">De onde vem o material ?</p>

    <div className="materials">
      <a href="https://www.youtube.com/user/cursosemvideo" target="blank">
        <img src={CeVLogo} alt="CeV" className="CeV" />
        <p className="name">Curso em Vídeo</p>
      </a>

      <a href="https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg" target="blank">
        <img src={RSLogo} alt="RS" />
        <p className="name">RocketSeat</p>
      </a>
    </div>
  </Container>
);

export default HomePage;
