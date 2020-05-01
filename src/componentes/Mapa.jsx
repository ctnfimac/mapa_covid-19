import React from 'react'
import { Map, TileLayer} from 'react-leaflet'
import '../App.css'
import Confirmados from './Confirmados'

const Mapa = () => {
    return(
        <Map center={[20, 0]} zoom={3} minZoom={3} maxZoom={8} style={{ marginTop: "5rem" }}>
            <TileLayer
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            />
            <Confirmados />
        </Map>
    )
}

export default Mapa;