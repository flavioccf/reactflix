import React from 'react';

import { OfferContainer, ResponsiveIframe } from './styles';

function YouTubeIframeResponsive({ iframeUrl }) {
  return (
    <OfferContainer>
      <ResponsiveIframe
        title="Titulo do Iframe"
        src={iframeUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </OfferContainer>
  );
}

export default YouTubeIframeResponsive;
