import { FETCH_PAIS_PETICION, FETCH_PAIS_EXITO, FETCH_PAIS_ERROR } from '../actions/buscadorAction';

const defaultState = {
    loading: false,
    datos: [],
    msg: '',
    nombre: ''
}


const buscador = (state = defaultState, action) => {
    switch(action.type){
        case FETCH_PAIS_PETICION:
            return{
                ...state,
                loading: true,
            }
        case FETCH_PAIS_EXITO:
            return{
                loading: false,
                datos: action.payload,
                msg: '',
                nombre: action.nombre
            }
        case FETCH_PAIS_ERROR:
            return{
                loading: false,
                datos: [],
                msg: 'Error con el país buscado',
                nombre: ''
            }
        default:
            return state;
    }
}

export default buscador;