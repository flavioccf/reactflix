import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const initialValues = {
        name: '',
        description: '',
        color: '',
    }
    const [categories, setCategories] = useState([]);
    const [values, setValues] = useState(initialValues);

    function setValue(key, val) {
        setValues({
            ...values,
            [key]: val,
        })
    }
    function handleChange(e) {
        const {getAttribute, value} = e.target;
        setValue(getAttribute, value);
    }
    return(
            <PageDefault>
                <h1>Cadastro de Categoria: {values.name}</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    setCategories([
                        ...categories,
                        values
                    ]);
                    setValues(initialValues);
                }}> 
                    <FormField
                        label="Nome da categoria"
                        type="text"
                        name="name"
                        value={values.nome}
                        onChange={handleChange}
                    ></FormField>
                    <div>
                    <label>Descriçao:</label>
                    <textarea
                    required
                    name="description"
                    value={values.description}
                    onChange={
                        handleChange
                    }
                    ></textarea>
                    </div>
                    <FormField
                        label="Descrição"
                        type="textarea"
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                    ></FormField>
                    <FormField
                        label="Cor"
                        type="color"
                        name="color"
                        value={values.nome}
                        onChange={handleChange}
                    ></FormField>
                    <button>Salvar</button>
                </form>
                <ul>
                    {categories.map((categoria, index) => {
                        return (
                        <li key={`${categoria}${index}`}>{ categoria.name }</li>
                        )
                    })}
                </ul>
                <Link to="/">
                    Ir para Home
                </Link>
            </PageDefault>
    );
}

export default CadastroCategoria;