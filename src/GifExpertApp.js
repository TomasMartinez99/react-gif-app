import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState( ['Boca Juniors'] );

    /* const handleAdd = () => { */
        /* setCategories( cats => [...cats, 'Los vengadores'] ); */
        /* setCategories( [...categories, 'Los vengadores'] );
    } */

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />

            <hr />

            <ul>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
                
            </ul>
        </div>
    );
};

export default GifExpertApp;