/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import { Container } from './styles';

import { playerConfig } from '../../config/videoPlayer';

interface buttonInfos {
  imgSrc: string
  imgAlt: string
  btnText: string
  saturation: number
  brightness?: number
  videoName?: string
  videoPlayer?: boolean
}

const Button:React.FC<buttonInfos> = ({
  imgSrc, imgAlt, btnText, saturation, brightness = 1, videoName = 'html+css', videoPlayer,
}: buttonInfos) => {
  function changeVideoSource(name: string) {
    playerConfig.videoSource = name;
  }

  return (
    <Container className="button" saturation={saturation} brightness={brightness}>
      <div className="ball" onClick={() => { if (videoPlayer) { changeVideoSource(videoName); } }}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <p>{btnText}</p>
    </Container>
  );
};

export default Button;
