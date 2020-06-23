import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { Container } from './styles';

import htmlAndCss from '../../assets/modulesImages/html+css.svg';
import js from '../../assets/modulesImages/JS.svg';

import './style.css';

const ConteudosIniciante:React.FC = () => (
  <Container className="waves">
    <Header selection={1} />
    <p className="title">Selecione o seu nível e o módulo</p>
    <div className="line" />
    <div className="lvls">
      <Link to="/conteudos/iniciante"><p className="selected">Iniciante</p></Link>
      <Link to="/conteudos/avançado"><p>Avançado</p></Link>
    </div>
    <div className="buttons">
      <Link to="/player"><Button btnText="HTML5 + CSS3" imgSrc={htmlAndCss} imgAlt="HTML5 + CSS3" saturation={0} videoPlayer /></Link>
      <Link to="/player"><Button btnText="JS Básico" imgSrc={js} imgAlt="JS" saturation={0} brightness={0.4} videoName="js" videoPlayer /></Link>
    </div>
  </Container>
);

export default ConteudosIniciante;
