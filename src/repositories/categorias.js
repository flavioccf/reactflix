const URL = process.env.REACT_APP_CATEGORIAS;
const LIST_URL = process.env.REACT_APP_LIST_CATEGORIAS;
const OFFERS_URL = process.env.REACT_APP_OFFERS;
const SOURCE_ID = process.env.REACT_APP_SOURCE_ID;

function getAll() {
  return fetch(`${URL}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getMyCategories() {
  return fetch(`${LIST_URL}/categorias`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados :(');
    });
}

function create(categoriesObj) {
  return fetch(`${LIST_URL}/categorias`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(categoriesObj),
  }).then(async (response) => {
    if (response.ok) {
      const resp = await response.json();
      return resp;
    }
    throw new Error('Server Error');
  });
}

function getCategorieOffers(categorie) {
  return fetch(`${OFFERS_URL}/${categorie.id}?sourceId=${SOURCE_ID}&sort=discount`)
    .then(async (response) => {
      const resp = await response.json();
      resp.offers.color = categorie.color;
      return resp.offers;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

export default {
  getAll,
  create,
  getMyCategories,
  getCategorieOffers,
};
