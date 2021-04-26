import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import useSwr from 'swr'
import { Icon } from 'leaflet'
import { popupHead, okText } from "./popupStyles";

// const URL = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest'
const URL = 'https://corona-api.com/countries'
// const URL = 'https://covid19.mathdro.id/api/confirmed'
// const URL2= 'https://2019ncov-api.now.sh/api/cases'

const fetcher = (...args) => fetch(...args)
    .then( response => response.json())

const icon = new Icon({
    iconUrl: '/circulo.svg',
    iconSize: [10,10]
})

const Confirmados = (props) =>{
    const { data , error } = useSwr( URL, fetcher);
    // console.log('data:', data ? data.data : {})
    const casosConfirmados = ( data && !error)? data.data : [];
    // console.log('casosConfirmados: ' + casosConfirmados)
    // console.log('dasdingo:',casosConfirmados.data)
    const [ casoConfirmadoActivo, setCasoConfirmadoActivo] = React.useState(null)
    return(
        <div>
            {
                casosConfirmados.map( (casoConfirmado, index) => {   
                        if(casoConfirmado.coordinates.latitude !== null && casoConfirmado.coordinates.longitude !== null){
                            return(    
                                <Marker 
                                    key = { index }
                                    position = { [casoConfirmado.coordinates.latitude, casoConfirmado.coordinates.longitude]}
                                    icon = {icon}
                                    onmouseover = { () => {
                                        if(!window.matchMedia("(max-width: 640px)").matches){ // verifica el tamaño del dispositivo
                                            setCasoConfirmadoActivo(null);
                                            setCasoConfirmadoActivo(casoConfirmado)
                                        }
                                    }}
                                    onclick = { () => {
                                        if(window.matchMedia("(max-width: 640px)").matches){
                                            setCasoConfirmadoActivo(null);
                                            setCasoConfirmadoActivo(casoConfirmado)
                                        }
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
                    className="request-popup"
                    position = {[casoConfirmadoActivo.coordinates.latitude, casoConfirmadoActivo.coordinates.longitude]}
                >
                    <h2 style={popupHead}>{casoConfirmadoActivo.name}</h2>
                    <h4 style={okText}>Población: { casoConfirmadoActivo.population ? casoConfirmadoActivo.population.toLocaleString() : null }</h4>
                    <h4 style={okText}>Infectados: { casoConfirmadoActivo.latest_data.confirmed ? casoConfirmadoActivo.latest_data.confirmed.toLocaleString() : 0 }</h4>
                    <h4 style={okText}>Fallecidos: {casoConfirmadoActivo.latest_data.deaths ? casoConfirmadoActivo.latest_data.deaths.toLocaleString() : 0 }</h4>
                    <h4 style={okText}>Recuperados: {casoConfirmadoActivo.latest_data.recovered ? casoConfirmadoActivo.latest_data.recovered.toLocaleString() : 0 }</h4>
                    <h4 style={okText}>Criticos: {casoConfirmadoActivo.latest_data.critical ? casoConfirmadoActivo.latest_data.critical.toLocaleString() : 0 }</h4>
                </Popup>
            } 
        </div>
        
    )
}
export default Confirmados;