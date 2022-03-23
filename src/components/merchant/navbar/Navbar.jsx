import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <MDBContainer breakpoint="md" className='navbar-buttons'>
            <MDBBtn rounded className='mx-2 mt-3 btn btn-primary responsive-button-width' >
            <Link to ={`/`}><span style={{color: '#FFFFFF'}}>Accueil</span> </Link>
            </MDBBtn>
            <MDBBtn rounded className='mx-2 mt-3 responsive-button-width' color='warning'>
                S'inscrire/Mon compte
            </MDBBtn>
        </MDBContainer>
    )
}

export default Navbar;
