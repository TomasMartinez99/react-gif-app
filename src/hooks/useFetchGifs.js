import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });
    console.log(getGifs);

    useEffect( () => {
        // Método importado 
        getGifs(category)
            .then(imgs => {

                setTimeout(() => {

                    setState({
                        data: imgs,
                        loading: false
                    })
            
                }, 1000);

            })

    }, [category]);

    return state; // {data:[], loading: true};

}