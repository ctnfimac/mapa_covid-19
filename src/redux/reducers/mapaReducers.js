import { FETCH_PAISES_PETICION, FETCH_PAISES_EXITO, FETCH_PAISES_ERROR } from '../actions/mapaAction';

const defaultState = {
    loading: false,
    paises: [],
    msg: ''
}


const paises = (state = defaultState, action) => {
    switch(action.type){
        case FETCH_PAISES_PETICION:
            return{
                ...state,
                loading: true,
            }
        case FETCH_PAISES_EXITO:
            return{
                loading: false,
                paises: action.payload,
                msg: ''
            }
        case FETCH_PAISES_ERROR:
            return{
                loading: false,
                paises: [],
                msg: 'Error al traer los paises'
            }
        default:
            return state;
    }
}

export default paises;