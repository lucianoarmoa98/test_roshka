import axios from "axios";

export const URL_MANU = 'http://192.168.153.189:8080';

//---------------------------------------------------obtener numero de dados
export const obtenerDados = () => {
    return new Promise((resolve, reject) => {
        axios({
            url: URL_MANU + '/generala',
            method: 'Get',
            headers: {
                'Content-Type': 'application/json'
            }//,
            //data: JSON.stringify(encuesta)
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject('Failed al obtener la Encuesta');
            });
    });
};