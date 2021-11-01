import React, { useEffect, useRef, useState } from 'react';
import "./../App.css";
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'
import { obtenerDados } from '../servicios/Services';
import { Button, Typography } from '@material-ui/core';

export default function Dados() {
    const [contenedor, setContenedor] = useState([]);
    const diceRef = useRef();


    //---------------------------------------------se encarga de mantener actualizada el front
    useEffect(() => {
        changeLanzar();
    }, []);

    //-----------------------------------------------evento que llama al servicio para crear numeros al azar
    function changeLanzar() {
        obtenerDados()
            .then(data => {
                if (!data.data.error) {
                    setContenedor(data.data);
                }
            })
            .catch(error => {
                // TO DO
                // Lanzar mensaje de Error...
            });
        const { dados } = contenedor;

        diceRef.current.rollAll(dados)
    }


    return (
        <div>
            <div className="content">
                <Typography variant="h3">Bienvenido!!! </Typography>
            </div>

            <div>
                <div className="content espacio">
                    <ReactDice
                        numDice={5}
                        outline={true}
                        outlineColor="#8a0c25"
                        ref={diceRef}
                        disableIndividual
                        dieSize={150}
                        faceColor="#D3D3D3"
                        dotColor="#85091a"
                        rollTime={2}
                    />
                </div>

                <div className="content espacio">
                    <Typography variant="h4">Resultado: {contenedor.jugada}</Typography>
                </div>


                <div className="content">
                    <Button color="secondary" variant="contained" onClick={changeLanzar} >Tirar Dados</Button>
                </div>
            </div>
        </div>
    )
}