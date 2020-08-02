const URL = process.env.REACT_APP_VIDEOS;

function create(ojbetoDoVideo) {
  return fetch(`${URL}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(ojbetoDoVideo),
  }).then(async (response) => {
    if (response.ok) {
      const resp = await response.json();
      return resp;
    }
    throw new Error('Server Error');
  });
}

export default {
  create,
};
