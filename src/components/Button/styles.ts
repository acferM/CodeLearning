/* eslint-disable arrow-parens */
import styled from 'styled-components';

interface imgInfos {
  saturation: number
  brightness: number
}

export const Container = styled.div<imgInfos>`
  display: flex;
  height: 387px;
  width: 324px;
  flex-direction: column;
  justify-content: space-between;

  div {
    width: 324px;
    height: 324px;
    border-radius: 50%;
    background: #FFF;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, .2);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      filter: saturate(${props => props.saturation}) brightness(${props => props.brightness});
      transition: filter .4s;

      &:hover {
        filter: saturate(1) brightness(1);
      }
    }
  }

  p {
    font-size: 32px;
    color: #04D361;
    text-align: center;
  }
`;
