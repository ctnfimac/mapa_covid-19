import React, { Component } from 'react'
import { MDBCard, MDBCardText, MDBCardHeader} from "mdbreact";

import { textInfectados, textFallecidos ,textRecuperados } from "./popupStyles";


class Sidebar extends Component{

    constructor(props){
      super(props)
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
            <MDBCard className="card-body elegant-color w-100 p-1" style={{ marginTop: "5rem" }}>
                <MDBCardHeader color="black text-center"> <span className="grey-text">INFECTADOS</span></MDBCardHeader>
                <MDBCardText className="text-center pt-3" style={textInfectados}>
                  {this.state.dataIsLoad && this.state.data.confirmed.value.toLocaleString()}
                </MDBCardText>
            </MDBCard>
            <MDBCard className="card-body elegant-color w-100 p-1" style={{ marginTop: "2rem" }}>
                <MDBCardHeader color="black text-center"><span className="grey-text">FALLECIDOS</span></MDBCardHeader>
                <MDBCardText className="text-center pt-3" style={textFallecidos}>
                  {this.state.dataIsLoad && this.state.data.deaths.value.toLocaleString()}
                </MDBCardText>
            </MDBCard>
            <MDBCard className="card-body elegant-color w-100 p-1" style={{ marginTop: "2rem" }}>
                <MDBCardHeader color="black text-center"><span className="grey-text">RECUPERADOS</span></MDBCardHeader>
                <MDBCardText className="text-center pt-3" style={textRecuperados}>
                  {this.state.dataIsLoad && this.state.data.recovered.value.toLocaleString()}
                </MDBCardText>
            </MDBCard>
        </React.Fragment>
      )
    }  
}

export default Sidebar;