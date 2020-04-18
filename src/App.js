import React from 'react';
import Mapa from './componentes/Mapa'
import Menu from './componentes/Menu'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
function App() {
  return (
      [
        <Menu />,
        <Mapa />
      ]
     
  );
}

export default App;
