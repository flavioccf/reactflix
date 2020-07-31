import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, val) {
    setValues({
      ...values,
      [key]: val,
    });
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setValue(name, value);
  }

  useEffect(() => {
    const URL = process.env.REACT_APP_CATEGORIES;
    fetch(URL).then(async (response) => {
      const responseBody = await response.json();
      setCategories([
        ...responseBody,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        setCategories([
          ...categories,
          values,
        ]);
        setValues(initialValues);
      }}
      >
        <FormField
          label="Nome da categoria"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
        <Button>Salvar</Button>
      </form>
      <ul>
        {categories.map((categoria, index) => (
          <li key={`${categoria.name}${index}`}>{ categoria.name }</li>
        ))}
      </ul>
      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
