/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import logo from '../../assets/LOGO.svg';

interface headerParms {
  selection?: 0 | 1 | 2;
}

const Header:React.FC<headerParms> = ({ selection = 0 }) => (
  <Container selection={selection}>
    <Link to="/#">
      <img src={logo} alt="<CL/>" />
    </Link>

    <Link to="conteudos/iniciante" className="content" style={{ marginRight: 175 }}>
      <p className="content">Conteúdos</p>
    </Link>

    <div />

    <Link to="sobre">
      <p className="about">sobre</p>
    </Link>
  </Container>
);

export default Header;
