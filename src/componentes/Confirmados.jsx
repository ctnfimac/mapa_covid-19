import React from 'react'
import { Marker } from 'react-leaflet'
import useSwr from 'swr'

const URL = 'https://covid19.mathdro.id/api/confirmed'
const fetcher = (...args) => fetch(...args)
    .then( response => response.json())

const Confirmados = () =>{
    const { data , error } = useSwr( URL, fetcher);
    const casosConfirmados = ( data && !error)? data.slice(0,100) : []
    return(
        casosConfirmados.map( (casoConfirmado, index) =>
            <Marker 
                key = { index }
                position = { [casoConfirmado.lat, casoConfirmado.long]}
            />
        )
    )
}
export default Confirmados;