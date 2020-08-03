import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    categoriasRepository.getMyCategories()
      .then(async (categoriasComOfertas) => {
        const dt = await categoriasComOfertas;
        dt.map((categorie) => categoriasRepository.getCategorieOffers(categorie)
          .then(async (resp) => {
            console.log(resp);
            const data = await resp;
            setDadosIniciais(...dadosIniciais, data);
          })
          .catch((err) => {
            throw err;
          }));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}
      {dadosIniciais.map((categoria, indice) => (<p>{categoria.id}</p>),
        // if (indice === 0) {
        //   return (
        //     <div key={categoria.id}>
        //       <BannerMain
        //         videoTitle={dadosIniciais[0].videos[0].titulo}
        //         url={dadosIniciais[0].videos[0].url}
        //         videoDescription={dadosIniciais[0].videos[0].description}
        //       />
        //       <Carousel
        //         ignoreFirstVideo
        //         category={dadosIniciais[0]}
        //       />
        //     </div>
        //   );
        // }

        // return (
        //   <Carousel
        //     key={categoria.id}
        //     category={categoria}
        //   />
        // );
      )}
    </PageDefault>
  );
}

export default Home;
