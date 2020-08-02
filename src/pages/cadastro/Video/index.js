import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import categoriasRepository from '../../../repositories/categorias';
import videosRepository from '../../../repositories/videos';
import useForm from '../../../hooks/useForm';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);
  return (
    <>
      <PageDefault>
        <h1>Cadastro de Vídeo</h1>
        <form onSubmit={(event) => {
          event.preventDefault();
          // alert('Video Cadastrado com sucesso!!!1!');

          const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

          if (categoriaEscolhida) {
            videosRepository.create({
              titulo: values.titulo,
              url: values.url,
              categoriaId: categoriaEscolhida.id,
            })
              .then(() => {
                console.log('Cadastrou com sucesso!');
                history.push('/');
              });
          } else {
            Toast.fire({
              icon: 'error',
              title: 'Categoria não encontrada',
            });
          }
        }}
        >
          <FormField
            label="Título do Vídeo"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            label="URL"
            name="url"
            value={values.url}
            onChange={handleChange}
          />

          <FormField
            label="Categoria"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
            suggestions={categoryTitles}
          />

          <Button type="submit">
            Cadastrar
          </Button>
        </form>

        <br />
        <br />
        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefault>
    </>
  );
}

export default CadastroVideo;
