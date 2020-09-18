import React from 'react';
import Mapa from './componentes/Mapa'
import Menu from './componentes/Menu'
import Sidebar from './componentes/Sidebar'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import { Provider } from 'react-redux';

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import store from './redux/store';

function App() {
  return (
      <Provider store={store}>
        <Menu />
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol xl="2" lg="3" md="5" xs="12">
              <Sidebar />
            </MDBCol>
            <MDBCol xl="10" lg="9" md="7" xs="12">
              <Mapa />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Provider>
  );
}

export default App;
