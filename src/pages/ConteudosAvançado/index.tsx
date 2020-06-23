/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { Container } from './styles';

import es from '../../assets/modulesImages/Echma.svg';
import NJS from '../../assets/modulesImages/NJS.svg';
import ReactImg from '../../assets/modulesImages/RJS.svg';

import './style.css';

const ConteudosAvançado:React.FC = () => (
  <Container className="waves">
    <Header selection={1} />
    <p className="title">Selecione o seu nível e o módulo</p>
    <div className="line" />
    <div className="lvls">
      <Link to="/conteudos/iniciante"><p>Iniciante</p></Link>
      <Link to="/conteudos/avançado"><p className="selected">Avançado</p></Link>
    </div>
    <div className="buttons">
      <a target="blank" href="https://skylab.rocketseat.com.br/node/curso-java-script-es-6/group/conceitos/lesson/introducao-3"><Button btnText="EchmaScript" imgSrc={es} imgAlt="ES6" saturation={0} brightness={0.3} /></a>
      <a target="blank" href="https://skylab.rocketseat.com.br/node/curso-node-js/lesson/o-que-e-api-e-node-js"><Button btnText="NodeJS" imgSrc={NJS} imgAlt="NodeJS" saturation={0} brightness={0.5} /></a>
      <a target="blank" href="https://skylab.rocketseat.com.br/node/curso-react-js/lesson/o-que-e-react-js"><Button btnText="ReactJS" imgSrc={ReactImg} imgAlt="ReactJS" saturation={0} brightness={0.4} /></a>
      <a target="blank" href="https://skylab.rocketseat.com.br/node/curso-react-native/lesson/o-que-e-react-native"><Button btnText="React Native" imgSrc={ReactImg} imgAlt="ReactNative" saturation={0} brightness={0.4} /></a>
    </div>
  </Container>
);

export default ConteudosAvançado;
