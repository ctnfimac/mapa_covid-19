import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchPais from '../../redux/actions/buscadorAction';
import { fondoBuscador } from "../menuStyles";


const BuscadorPais = () => {
    const dispatch = useDispatch();
    const [paisNombre, setPaisNombre] = useState('');
    return(
        <div className="input-group" style={{borderBottom:"1px solid #ddd", color:"#ddd"}}>
            <input type="text" className="form-control border border-0" style={ fondoBuscador} placeholder="Buscar País" aria-label="Buscar País" 
                   value= {paisNombre}
                   onChange= {(e)=> {setPaisNombre(e.target.value)}} 
                   onKeyPress = { (e) => e.key === 'Enter' ? dispatch(fetchPais(paisNombre)) : null}  
            />
            <div className="input-group-prepend" style= {{ marginLeft:"0" }}>
                <span className="input-group-text rgba-white-ligth border border-0" style={ fondoBuscador} id="basic-addon"
                      onClick = {() => {dispatch(fetchPais(paisNombre))}}
                >
                    <i className="fa fa-search prefix"></i>
                </span>
            </div> 
        </div>
    )
}


export default BuscadorPais;