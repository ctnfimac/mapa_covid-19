import React from 'react'
import { MDBCard, MDBCardText, MDBCardHeader} from "mdbreact";

const Sidebar = () =>{
    return(
        <React.Fragment>
            <MDBCard className="card-body elegant-color" style={{ width: "19rem", marginTop: "2rem" }}>
                <MDBCardHeader color="black text-center">TOTAL INFECTADOS</MDBCardHeader>
                {/* <MDBCardTitle>TOTAL INFECTADOS</MDBCardTitle> */}
                <MDBCardText className="text-center pt-3 orange-text display-4">
                  2244303
                </MDBCardText>
              </MDBCard>
              <MDBCard className="card-body elegant-color" style={{ width: "19rem", marginTop: "2rem" }}>
                <MDBCardHeader color="black text-center">TOTAL FALLECIDOS</MDBCardHeader>
                {/* <MDBCardTitle>TOTAL INFECTADOS</MDBCardTitle> */}
                <MDBCardText className="text-center pt-3 red-text display-4">
                  9999999
                </MDBCardText>
              </MDBCard>
              <MDBCard className="card-body elegant-color" style={{ width: "19rem", marginTop: "2rem" }}>
                <MDBCardHeader color="black text-center">TOTAL RECUPERADOS</MDBCardHeader>
                {/* <MDBCardTitle>TOTAL INFECTADOS</MDBCardTitle> */}
                <MDBCardText className="text-center pt-3 green-text display-4">
                  9999999
                </MDBCardText>
              </MDBCard>
        </React.Fragment>
    )
}

export default Sidebar;