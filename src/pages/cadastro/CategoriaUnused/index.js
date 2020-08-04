import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const initialValues = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = process.env.REACT_APP_CATEGORIAS;
    fetch(URL).then(async (response) => {
      const responseBody = await response.json();
      setCategorias([
        ...responseBody,
      ]);
    }).catch((error) => {
      throw error;
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        clearForm(initialValues);
      }}
      >
        <FormField
          label="Nome da categoria"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <Button>Salvar</Button>
      </form>
      <ul>
        {categorias.map((categoria, index) => (
          <li key={categoria.id}>{ categoria.titulo }</li>
        ))}
      </ul>
      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
