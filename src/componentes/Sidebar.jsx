import React, { Component } from 'react'
import { MDBCard, MDBCardText, MDBCardHeader } from "mdbreact";

import { textInfectados, textFallecidos ,textRecuperados } from "./popupStyles";
import ResultadoBuscadorPais from './buscador/ResultadoBuscadorPais';


class Sidebar extends Component{

    constructor(){
      super()
      this.state = {
          data: null,
          dataIsLoad: false  
      }
    }

    componentDidMount(){
        fetch('https://covid19.mathdro.id/api/')
        .then(response => response.json())
        .then( result => {
            this.setState({
              data: result,
              dataIsLoad: true
            })
        })    
    }

    render(){
      return(
        <React.Fragment >
            <MDBCard className="card-body elegant-color-dark w-100 p-0" style={{ marginTop: "5rem" }}>
                <MDBCardHeader color="black text-center"> <span className="grey-text">INFECTADOS</span></MDBCardHeader>
                <MDBCardText className="text-center pt-3" style={textInfectados}>
                  {this.state.dataIsLoad && this.state.data.confirmed.value.toLocaleString()}
                </MDBCardText>
            </MDBCard>
            <MDBCard className="card-body elegant-color-dark w-100 p-0" style={{ marginTop: "2rem" }}>
                <MDBCardHeader color="black text-center"><span className="grey-text">FALLECIDOS</span></MDBCardHeader>
                <MDBCardText className="text-center pt-3" style={textFallecidos}>
                  {this.state.dataIsLoad && this.state.data.deaths.value.toLocaleString()}
                </MDBCardText>
            </MDBCard>
            <MDBCard className="card-body elegant-color-dark w-100 p-0" style={{ marginTop: "2rem" }}>
                <MDBCardHeader color="black text-center"><span className="grey-text">RECUPERADOS</span></MDBCardHeader>
                <MDBCardText className="text-center pt-3" style={textRecuperados}>
                  {this.state.dataIsLoad && this.state.data.recovered.value.toLocaleString()}
                </MDBCardText>
            </MDBCard>
             <MDBCard  className="card-body p-0 elegant-color-dark" style={{ marginTop: "5rem"}}>  
            </MDBCard> 
            <ResultadoBuscadorPais />
        </React.Fragment>
      )
    }  
}

export default Sidebar;