import React from 'react'
import { Map, TileLayer} from 'react-leaflet'
import '../App.css'
import Confirmados from './Confirmados'

const Mapa = () => {
    return(
        <Map center={[20, 0]} zoom={3}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Confirmados />
        </Map>
    )
}

export default Mapa;