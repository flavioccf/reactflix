import React from 'react';
import { VideoCardContainer } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoCard({
  videoTitle, videoURL, categoryColor, videoImg, price,
}) {
  const priceBrl = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <>
      <VideoCardContainer
        url={videoImg}
        href={videoURL}
        target="_blank"
        style={{ borderColor: categoryColor || 'red' }}
        title={videoTitle}
      >
        <span>{videoTitle}</span>
      </VideoCardContainer>
      <p>
        {priceBrl}
      </p>
    </>
  );
}

export default VideoCard;
