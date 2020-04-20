import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import useSwr from 'swr'
import { Icon } from 'leaflet'

const URL = 'https://covid19.mathdro.id/api/confirmed'

const fetcher = (...args) => fetch(...args)
    .then( response => response.json())

const icon = new Icon({
    iconUrl: '/circulo.svg',
    iconSize: [10,10]
})

const Confirmados = () =>{
    const { data , error } = useSwr( URL, fetcher);
    const casosConfirmados = ( data && !error)? data.slice(0,100) : [];
    const [ casoConfirmadoActivo, setCasoConfirmadoActivo] = React.useState(null)
    return(
        <div>
            {
                casosConfirmados.map( (casoConfirmado, index) => {    
                        if(casoConfirmado.lat !== null && casoConfirmado.long !== null){
                            return(    
                                <Marker 
                                    key = { index }
                                    position = { [casoConfirmado.lat, casoConfirmado.long]}
                                    icon = {icon}
                                    onmouseover = { () => {
                                        setCasoConfirmadoActivo(null);
                                        setCasoConfirmadoActivo(casoConfirmado)
                                    }}
                                />
                            )
                        }else{
                            return null
                        }
                    }   
                )
            }
            {casoConfirmadoActivo &&
                <Popup
                    position = {[casoConfirmadoActivo.lat, casoConfirmadoActivo.long]}
                >
                    <h2>{casoConfirmadoActivo.countryRegion}</h2>
                    <h4>Confirmados: {casoConfirmadoActivo.confirmed}</h4>
                    <h4>Recuperados: {casoConfirmadoActivo.recovered}</h4>
                    <h4>Fallecidos: {casoConfirmadoActivo.deaths}</h4>
                </Popup>
            } 
        </div>
        
    )
}
export default Confirmados;