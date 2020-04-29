import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import useSwr from 'swr'
import { Icon } from 'leaflet'
import { popupHead, okText } from "./popupStyles";

const URL = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest'
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
    const casosConfirmados = ( data && !error)? data : [];
    const [ casoConfirmadoActivo, setCasoConfirmadoActivo] = React.useState(null)
    return(
        <div>
            {
                casosConfirmados.map( (casoConfirmado, index) => {   
                        if(casoConfirmado.location.lat !== null && casoConfirmado.location.lng !== null){
                            return(    
                                <Marker 
                                    key = { index }
                                    position = { [casoConfirmado.location.lat, casoConfirmado.location.lng]}
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
                    className="request-popup"
                    position = {[casoConfirmadoActivo.location.lat, casoConfirmadoActivo.location.lng]}
                >
                    <h2 style={popupHead}>{casoConfirmadoActivo.countryregion}</h2>
                    <h4 style={okText}>{ casoConfirmadoActivo.provincestate ? casoConfirmadoActivo.provincestate.toLocaleString() : null }</h4>
                    <h4 style={okText}>Infectados: { casoConfirmadoActivo.confirmed ? casoConfirmadoActivo.confirmed.toLocaleString() : 0 }</h4>
                    <h4 style={okText}>Fallecidos: {casoConfirmadoActivo.deaths ? casoConfirmadoActivo.deaths.toLocaleString() : 0 }</h4>
                    <h4 style={okText}>Recuperados: {casoConfirmadoActivo.recovered ? casoConfirmadoActivo.recovered.toLocaleString() : 0 }</h4>
                </Popup>
            } 
        </div>
        
    )
}
export default Confirmados;