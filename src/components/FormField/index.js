import React from 'react';

function FormField({ label, type, name, value, onChange}) {
    return (
        <div>
        <label>{label}:</label>
        <input required 
        type={type}
        name={name} 
        value={value}
        onChange={onChange}
        />
        </div>
    )
}

export default FormField;