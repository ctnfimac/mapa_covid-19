import React from 'react';
import { useSelector } from 'react-redux';
import { MDBCardHeader, MDBBadge, MDBListGroup, MDBListGroupItem } from "mdbreact";


const ResultadoBuscadorPais = () => {
    const paises = useSelector((state) => state.buscador)
    return(
            <React.Fragment>
             {paises.datos.length >= 1 &&
                <React.Fragment>
                    <MDBCardHeader className="pb-1 elegant-color-dark"><h3 className="white-text">{paises.nombre}</h3></MDBCardHeader>
                         <MDBListGroup className="text-center">
                             <MDBListGroupItem className="d-flex justify-content-between align-items-center elegant-color-dark grey-text">
                                Infectados:
                                 <MDBBadge className="pl-2 pr-2" color="indigo lighten-1" pill style={{fontSize:"1em"}}>{paises.datos[0].confirmed.value}</MDBBadge>
                             </MDBListGroupItem>
                             <MDBListGroupItem className="d-flex justify-content-between align-items-center elegant-color-dark grey-text">
                                 Recuperados:
                                 <MDBBadge className="pl-2 pr-2" color="indigo lighten-1" pill style={{fontSize:"1em"}}>{paises.datos[0].recovered.value}</MDBBadge>
                             </MDBListGroupItem>
                             <MDBListGroupItem className="d-flex justify-content-between align-items-center elegant-color-dark grey-text">
                                 Fallecidos:
                                 <MDBBadge className="pl-2 pr-2" color="indigo lighten-1" pill style={{fontSize:"1em"}}>{paises.datos[0].deaths.value}</MDBBadge>
                             </MDBListGroupItem>
                         </MDBListGroup>
                </React.Fragment>
            }
            {paises.msg !== '' &&
                <MDBCardHeader className="pb-1 elegant-color-dark"><h3 className="white-text">{paises.msg}</h3></MDBCardHeader>
            }
            </React.Fragment>
    )
}

export default ResultadoBuscadorPais;
