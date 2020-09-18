
import Axios from 'axios';

export const FETCH_PAIS_PETICION = 'FETCH_PAIS_PETICION'
export const FETCH_PAIS_EXITO = 'FETCH_PAIS_EXITO'
export const FETCH_PAIS_ERROR = 'FETCH_PAISEERRORRE'

export const fetchPaisPeticion = () => {
    return{
        type: FETCH_PAIS_PETICION
    }
}

export const fetchPaisExito = (pais,nombre) => {
    return{
        type: FETCH_PAIS_EXITO,
        payload: pais,
        nombre: nombre
    }
}

export const fetchPaisError = (error) => {
    return{
        type: FETCH_PAIS_ERROR,
        payload: error
    }
}

const fetchPais = (pais) => {
    return(dispatch) => {
        dispatch(fetchPaisPeticion());
        if(pais !== ''){
            Axios.get(`https://covid19.mathdro.id/api/countries/${pais}`)
            .then( response => {
                dispatch(fetchPaisExito([response.data],pais))
            })
            .catch( error => {
                dispatch(fetchPaisError('Error con la información buscada'))
            })
        }else{
            dispatch(fetchPaisError('Ingrese un país en el buscador'))
        }
        
    }
}

export default fetchPais;
