
import Axios from 'axios';

export const FETCH_PAISES_PETICION = 'FETCH_PAISES_PETICION'
export const FETCH_PAISES_EXITO = 'FETCH_PAISES_EXITO'
export const FETCH_PAISES_ERROR = 'FETCH_PAISEERRORRE'

export const fetchPaisesPeticion = () => {
    return{
        action: FETCH_PAISES_PETICION
    }
}

export const fetchPaisesExito = (paises) => {
    return{
        action: FETCH_PAISES_EXITO,
        payload: paises
    }
}

export const fetchPaisesError = (error) => {
    return{
        action: FETCH_PAISES_ERROR,
        payload: error
    }
}

const fetchPaises = () => {
    return(dispatch) => {
        dispatch(fetchPaisesPeticion());
        Axios.get('https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest')
            .then( response => {
                dispatch(fetchPaisesExito([response.data]))
            })
            .catch( error => {
                dispatch(fetchPaisesError('Error con la información buscada'))
            })
    }
}

export default fetchPaises;
