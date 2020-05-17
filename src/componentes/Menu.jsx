import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBCollapse, MDBFormInline, MDBNavbarToggler, MDBListGroup, MDBListGroupItem} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { fondoBuscador } from './menuStyles'

class NavbarPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
    return (
        <Router>
        <MDBNavbar color="indigo" dark expand="md" className="fixed-top w-100">
            <MDBNavbarBrand>
                <strong className="white-text">MAP COVID-19</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
             <MDBNavbarNav right>
                <MDBNavItem>
                <MDBFormInline waves>
                <div className="input-group" style={{borderBottom:"1px solid #ddd", color:"#ddd"}}>
                    <input type="text" className="form-control border border-0" style={ fondoBuscador} placeholder="Buscar País" aria-label="Buscar País" />
                    <div className="input-group-prepend" style= {{ marginLeft:"0" }}>
                        <span className="input-group-text rgba-white-ligth border border-0" style={ fondoBuscador} id="basic-addon">
                            <i className="fa fa-search prefix"></i>
                        </span>
                    </div> 
                </div>
                </MDBFormInline> 
                </MDBNavItem>
                <MDBListGroup className="position-absolute listabuscador">
                    <MDBListGroupItem className="itempais">Argentina</MDBListGroupItem>
                    <MDBListGroupItem>Perú</MDBListGroupItem>
                    <MDBListGroupItem>Brasil</MDBListGroupItem>
                    <MDBListGroupItem>Paraguay</MDBListGroupItem>
                    <MDBListGroupItem>Bolivia</MDBListGroupItem>
                </MDBListGroup>
            </MDBNavbarNav> 
            </MDBCollapse>
        </MDBNavbar>
        </Router>
        );
    }
}

export default NavbarPage;