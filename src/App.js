import React from 'react';
import Mapa from './componentes/Mapa'
import Menu from './componentes/Menu'
import Sidebar from './componentes/Sidebar'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

function App() {
  return (
      <React.Fragment>
        <Menu />
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md="2" xs="12">
              <Sidebar />
            </MDBCol>
            <MDBCol md="10" xs="12">
              <Mapa />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
  );
}

export default App;
