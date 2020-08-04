import React from 'react';
import OfferCardContainer from './styles';

function OfferCard({
  offerTitle, offerURL, categoryColor, offerImg, price,
}) {
  const priceBrl = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  return (
    <>
      <OfferCardContainer
        url={offerImg}
        href={offerURL}
        target="_blank"
        style={{ borderColor: categoryColor || 'red' }}
        title={offerTitle}
      >
        <span>{offerTitle}</span>
      </OfferCardContainer>
      <p>
        {priceBrl}
      </p>
    </>
  );
}

export default OfferCard;
