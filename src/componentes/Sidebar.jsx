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
        <React.Fragment>
            <MDBCard className="card-body elegant-color" style={{ width: "19rem", marginTop: "2rem" }}>
                <MDBCardHeader color="black text-center"> <span className="grey-text">TOTAL INFECTADOS</span></MDBCardHeader>
                <MDBCardText className="text-center pt-3 display-4" style={textInfectados}>
                  {this.state.dataIsLoad && this.state.data.confirmed.value.toLocaleString()}
                </MDBCardText>
              </MDBCard>
              <MDBCard className="card-body elegant-color" style={{ width: "19rem", marginTop: "2rem" }}>
                <MDBCardHeader color="black text-center"><span className="grey-text">TOTAL FALLECIDOS</span></MDBCardHeader>
                <MDBCardText className="text-center pt-3 display-4" style={textFallecidos}>
                  {this.state.dataIsLoad && this.state.data.deaths.value.toLocaleString()}
                </MDBCardText>
              </MDBCard>
              <MDBCard className="card-body elegant-color" style={{ width: "19rem", marginTop: "2rem" }}>
                <MDBCardHeader color="black text-center"><span className="grey-text">TOTAL RECUPERADOS</span></MDBCardHeader>
                <MDBCardText className="text-center pt-3 display-4" style={textRecuperados}>
                  {this.state.dataIsLoad && this.state.data.recovered.value.toLocaleString()}
                </MDBCardText>
              </MDBCard>
        </React.Fragment>
      )
    }  
}

export default Sidebar;