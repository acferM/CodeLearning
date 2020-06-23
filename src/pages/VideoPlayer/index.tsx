/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';

import { playerConfig } from '../../config/videoPlayer';

const VideoPlayer:React.FC = () => (
  <Container className="waves">
    <Header />
    {playerConfig.videoSource === 'html+css' && <iframe width="1175" height="661" src="https://www.youtube.com/embed/epDCjksKMok?list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />}
    {playerConfig.videoSource === 'js' && <iframe width="1175" height="661" src="https://www.youtube.com/embed/1-w1RfGIov4?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />}
  </Container>
);

export default VideoPlayer;
