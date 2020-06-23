import styled from 'styled-components';

export const UpSide = styled.div`
  background: #402F55;
  height: 100vh;
  width: 100%;

  img.interrogation {
    position: absolute;
    left: 35%;
    top: 117px;
  }

  div.myInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    left: 37%;
    top: 110px;

    p.one {
      font-size: 60px;
      color: #FFF;
    }

    p.two {
      font-size: 30px;
      margin-left: 105px;
      color: #FFF;
    }

    img {
      margin-top: 18px;
      margin-bottom: 6px;
    }
  }

  div.texts {
    position: absolute;
    left: 26%;
    top: 590px;

    display: flex;
    flex-direction: row;

    div.howStarted {
      width: 390px;
      margin-right: 43px;
    }

    div.skills {
      width: 390px;
    }

    p.title {
      font-size: 20px;
      color: #FFF;
    }

    p.text {
      font-size: 18px;
      color: #FFF;
      margin-top: 11.6px;
    }
  }
`;

export const DownSide = styled.div`
  height: 100vh;
  background-color: #E3DFFC;

  img {
    margin-top: 20px;
    margin-left: 285px;
  }

  div {
    position: absolute;
    width: 1289px;
    height: 580px;
    left: 155px;
    top: 830px;

    .title {
      color: #8E71F0;
      font-size: 64px;
      margin-left: 411px;
      margin-bottom: 50px;
    }

    .txt {
      color: #8E71F0;
      font-size: 58px;
      margin-left: 155px;
    }
  }
`;
