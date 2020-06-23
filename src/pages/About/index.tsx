import React from 'react';
import { UpSide, DownSide } from './styles';

import Header from '../../components/Header';

import interrogationImg from '../../assets/interrogation.svg';
import myPic from '../../assets/me.svg';

import logos from '../../assets/logos.svg';

const About:React.FC = () => (
  <>
    <UpSide>
      <Header selection={2} />
      <img src={interrogationImg} alt="?" className="interrogation" />
      <div className="myInfo">
        <p className="one">Quem sou eu ?</p>
        <img src={myPic} alt="me" />
        <p className="two">Matheus Acfer</p>
      </div>

      <div className="texts">
        <div className="howStarted">
          <p className="title">COMO COMECEI:</p>
          <p className="text">Eu sou programador des de 2019 tendo formação com curso técnico de programador de jogos utilizando a línguagem C# e o Unity para criação de jogos 2D e 3D tendo formação no ano de 2021 pela escola técnica estadual Cícero Dias</p>
        </div>

        <div className="skills">
          <p className="title">HABILIDADES:</p>
          <p className="text">
            línguagens: Arduino(básico), Java(básico), python(básico), C#, JavaScript, CSS3, HTML5.
            {' '}
            <br />
            {' '}
            <br />
            {' '}
            Engines: Unity.
            {' '}
            <br />
            {' '}
            <br />
            {' '}
            Frameworks: ReactJS, ReactNative NodeJS.
          </p>
        </div>
      </div>
    </UpSide>
    <DownSide>
      <img src={logos} alt="JS + HTML5 + CSS3 + NodeJS + ReactJS + React Native" />

      <div>
        <p className="title">SOBRE O SITE:</p>
        <p className="txt">O intuito deste site é ajudar amigos pessoais que querem aprender desenvolvimento web. O conteúdo deste site é uma coletania de vídeos que eu mesmo utilizei para aprender desinvolvimento web. Por meio deste site é possivel aprender o básico para desenvolver web tanto com JS + HTML5 + CSS3 ou com Frameworks como React</p>
      </div>
    </DownSide>
  </>
);

export default About;
