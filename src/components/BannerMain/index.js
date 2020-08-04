import React from 'react'
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';

export default function BannerMain({
  offerTitle,
  offerDescription,
  url,
  offerImg,
}) {
  return (
    <BannerMainContainer backgroundImage={offerImg}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {offerTitle}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {offerDescription}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <WatchButton
            href={url}
            target="_blank"
          >
            Ver Oferta
          </WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
