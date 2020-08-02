const URL = process.env.REACT_APP_CATEGORIAS;

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

function getAllWithVideos() {
  return fetch(`${URL}?_embed=videos`).then(async (response) => {
    if (response.ok) {
      const resp = await response.json();
      return resp;
    }
    throw new Error('Server Error');
  });
}

export default {
  getAllWithVideos,
  getAll,
};
