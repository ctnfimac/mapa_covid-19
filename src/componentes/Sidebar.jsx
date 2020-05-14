import React, { Component } from 'react'
import { MDBCard, MDBCardText, MDBCardHeader, MDBListGroup, MDBListGroupItem, MDBBadge} from "mdbreact";

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
                <MDBCardHeader className="pb-1 elegant-color-dark"><h3 className="white-text">ARGENTINA</h3></MDBCardHeader>
                <MDBCardText className="text-center">
                  <MDBListGroup>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center elegant-color-dark grey-text">
                      Infectados:
                      <MDBBadge className="pl-2 pr-2" color="indigo lighten-1" pill style={{fontSize:"1em"}}>6879</MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center elegant-color-dark grey-text">
                      Recuperados:
                      <MDBBadge className="pl-2 pr-2" color="indigo lighten-1" pill style={{fontSize:"1em"}}>2266</MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center elegant-color-dark grey-text">
                      Fallecidos:
                      <MDBBadge className="pl-2 pr-2" color="indigo lighten-1" pill style={{fontSize:"1em"}}>329</MDBBadge>
                  </MDBListGroupItem>
                </MDBListGroup>
                </MDBCardText>
            </MDBCard>
        </React.Fragment>
      )
    }  
}

export default Sidebar;