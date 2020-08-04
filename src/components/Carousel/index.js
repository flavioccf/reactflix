import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import OfferCard from './components/OfferCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  ignoreFirstOffer,
  category,
}) {
  const categoryTitle = category[0].category.name;
  const categoryColor = category.color;
  const categoryExtraLink = category.link_extra;
  // const { videos } = category;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink
            && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
            )}
        </>
      )}
      <Slider>
        {category.map((offer, index) => {
          if (ignoreFirstOffer && index === 0) {
            return null;
          }

          return (
            <SliderItem key={offer.id}>
              <OfferCard
                offerTitle={offer.name}
                offerURL={offer.link}
                offerImg={offer.thumbnail}
                categoryColor={categoryColor}
                price={offer.price}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
