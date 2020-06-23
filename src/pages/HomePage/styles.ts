import styled from 'styled-components';

export const Container = styled.div`
  height: 1600px;
  background-color: #402F55;

  p.big {
    margin-top: 300px;
    font-size: 36px;
    color: #E4E4E4;
    text-align: center;
    margin-bottom: 103px;
  }

  p.ps {
    text-align: center;
    color: #E4E4E4;
    font-size: 28px;
    margin-bottom: 31px;
  }

  p.name {
    font-size: 20px;
    color: #E4E4E4;
    text-align: center;
  }

  div.materials {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-right: 40px;

    a {
      margin-right: 30px;
      margin-left: 40px;
      display: flex;
      flex-direction: column;

      p {
        text-align: center;
        margin-top: 20px;
      }

      img {
        filter: brightness(.5) saturate(0);
        transition: filter .6s;
      }

      img.CeV {
        filter: brightness(.7) saturate(0);
      }

      img:hover {
        filter: brightness(1) saturate(1);
      }
    }
  }
`;
