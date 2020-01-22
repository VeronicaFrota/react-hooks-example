import React, { useState, useEffect } from 'react';

export default function EventListenerLocation() {

    // Desestruturação do vetor para melhor manipulação, recebendo a localização
    // location: valor do estado
    // setLocation: função que permite atualizar o valor do estado
    const [location, setLocation] = useState({})



    // Monitora / Acessa a localização do usuario, disparando apenas no inicio
    // watchId: id do event listener
    useEffect(() => {
        //const watchId = navigator.geolocation.watchPosition(handlePositionReceived)

        //return () => navigator.geolocation.clearwatch(watchId)      // Executado assim que o componente for desmontado
        navigator.geolocation.watchPosition(handlePositionReceived)
    }, []);



    // Informa o valor da latitude e longitude
    function handlePositionReceived({ coords }) {
        const { latitude, longitude } = coords

        setLocation({ latitude, longitude })
    }


    return (
        <div>
            Latitude: {location.latitude} <br />
            Longitude: {location.longitude}
        </div>
    );
}

