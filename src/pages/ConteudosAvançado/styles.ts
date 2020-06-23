import styled from 'styled-components';

export const Container = styled.div`
  background: #1D1D36;
  height: 100vh;

  p.title {
    color: #04D361;
    font-size: 48px;
    margin-top: 90px;
    text-align: center;
    margin-left: 60px;
    margin-bottom: 75px;
  }

  div.line {
    height: 1px;
    width: 1227px;
    background: #C4C4C4;
    margin: auto;
  }

  div.lvls {
    display: flex;
    width: 297px;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 20px;

    p {
      font-size: 26px;
      color: #00632C;
      cursor: pointer;
      transition: color .2s;

      &:hover {
        color: #04D361;
      }
    }

    p.selected {
      color: #04D361
    }
  }

  div.buttons {
    display: flex;
    width: 1413px;
    justify-content: space-between;
    margin: auto;
  }
`;
