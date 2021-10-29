import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ( {setCategories} ) => {
    
    const [inputValue, setInputValue] = useState("");

    // Seteamos el valor ingresado en tiempo real por input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    // Recibimos el valor enviado por input
    const handleSubmit = (e) => {
        e.preventDefault();

        // Condicion para saber si viene el input vacío
        if (inputValue.trim().length > 1) {
            setCategories( cats => [ inputValue, ...cats] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                className="buscador"
                type="text"
                value={inputValue}
                placeholder="Buscá tu Gif"
                onChange={ handleInputChange }
            />
        </form>
    );
};

// Requerimos obligatoriamente setCategories por props
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;