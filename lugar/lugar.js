const axios = require("axios");

//funcion para reutilizar codigo
const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'c51f254497msha0e5e1a07d8af92p1899b1jsn36b2e5463301' }
    });


    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`)
    }

    const data = resp.data.Results[0]; //crear para no hacer referencia al objeto
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng

    }


}
module.exports = {
    getLugarLatLng

}