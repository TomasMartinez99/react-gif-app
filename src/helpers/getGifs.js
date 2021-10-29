

export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=4&api_key=92Z04aDAwsPKOPtwpo2Qo1LJ62OFvUS7`;
    const resp = await fetch(url);
    const data = await resp.json();

    // Recorremos y obtenemos atributos puntuales del gif
    const gifs = data.data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;
}