import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import categoriasRepository from '../../../repositories/categorias';
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
  const categoryTitles = categorias.map(({ name }) => name);
  const { handleChange, values } = useForm({
    name: '',
    id: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        console.log(categoriasFromServer.categories);
        setCategorias(categoriasFromServer.categories);
      });
  }, []);
  return (
    <>
      <PageDefault>
        <h1>Cadastro de Categoria de Promoção</h1>
        <form onSubmit={(event) => {
          event.preventDefault();
          // alert('Video Cadastrado com sucesso!!!1!');

          const categoriaEscolhida = categorias.find((categoria) => categoria.name === values.categoria);

          if (categoriaEscolhida) {
            categoriasRepository.create({
              name: values.categoria,
              id: categoriaEscolhida.id,
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
