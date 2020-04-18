import React, { Component } from 'react'
import { MDBCard, MDBCardText, MDBCardHeader} from "mdbreact";

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
                <MDBCardHeader color="black text-center">TOTAL INFECTADOS</MDBCardHeader>
                <MDBCardText className="text-center pt-3 orange-text display-4">
                  {this.state.dataIsLoad && this.state.data.confirmed.value}
                </MDBCardText>
              </MDBCard>
              <MDBCard className="card-body elegant-color" style={{ width: "19rem", marginTop: "2rem" }}>
                <MDBCardHeader color="black text-center">TOTAL FALLECIDOS</MDBCardHeader>
                <MDBCardText className="text-center pt-3 red-text display-4">
                  {this.state.dataIsLoad && this.state.data.deaths.value}
                </MDBCardText>
              </MDBCard>
              <MDBCard className="card-body elegant-color" style={{ width: "19rem", marginTop: "2rem" }}>
                <MDBCardHeader color="black text-center">TOTAL RECUPERADOS</MDBCardHeader>
                <MDBCardText className="text-center pt-3 green-text display-4">
                  {this.state.dataIsLoad && this.state.data.recovered.value}
                </MDBCardText>
              </MDBCard>
        </React.Fragment>
      )
    }  
}

export default Sidebar;