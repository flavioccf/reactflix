import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';
import Banner from '../../assets/img/banner.jpg';
import Loading from '../../assets/img/loading.svg';

const LoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background: rgba(0,0,0,0.5);
  text-align: center;
  display: flex;
  align-items: center; 
  justify-content: center; 
  flex-direction: column;
  img {
    width: 100%;
    max-width: 200px;
  }
`;

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    categoriasRepository.getMyCategories().then(async (response) => {
      const test = response.map(async (categorie) => {
        const data = await categoriasRepository.getCategorieOffers(categorie).catch((err) => {
          throw err;
        });
        return data;
      });
      const off = await Promise.all(test);
      console.log(off);
      setDadosIniciais(off);
    });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<LoadingScreen><p><img src={Loading} alt="Loading" /></p></LoadingScreen>)}
      {dadosIniciais.map((categoria, indice) => {
        if (categoria === null) {
          return (<></>);
        }
        if (indice === 0) {
          return (
            <div key={categoria[0].category.id}>
              <BannerMain
                offerTitle={categoria[0].category.name}
                url={categoria[0].link}
                offerDescription={categoria[0].name}
                offerImg={Banner}
              />
              <Carousel
                key={`${categoria[0].category.id}-${categoria[0].category.name}`}
                ignoreFirstOffer
                category={categoria}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={`${categoria[indice].category.id}-${categoria[indice].category.name}`}
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
