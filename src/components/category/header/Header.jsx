import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import './Header.css';
import background from '../../../assets/bluetexture.jpg';
import  Navbar  from '../../../components/navbar';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import logo from '../../../assets/logo.png';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation()
    const { CityName} = location.state
    const { Category} = location.state
    return (
        <div style={{backgroundImage:`url(${background})`}}>
            <MDBContainer breakpoint="md" className='responsive-container-header'>
                <MDBRow>
                    <Navbar></Navbar>
                </MDBRow>
            </MDBContainer>
            <MDBContainer breakpoint="md" className='container-fluid'>
                <MDBRow className='d-flex align-items-center'>
                        <MDBCol size='md' className='col-md-7 order-sm-first order-last'>
                            <h1 className="header-h2 responsive-header-h2"><span style={{color: '#ffc107'}}>Trouvez</span> tout <span style={{color: '#ffc107'}}>{Category} </span>
                             dans des commerces à proximité de <span style={{color: '#ffc107'}}>{CityName}</span> </h1>
                            <p className="header-p responsive-header-p">
                                Vous êtes à deux clics de trouver le produit recherchez
                                {"\n"} 
                                {"\n"} En moins de 24h
                            </p>
                        </MDBCol>
                        <MDBCol size='md' className='col-md-5 mt-5 responsive-image-header-width'>
                        <img src={logo} className='img-fluid'/>
                        </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size='md' className='col-md-12 mt-5 mb-5 '>
                        <MDBBtn rounded className='mx-2 btn btn-warning btn-lg font-weight-bold'>
                            Déposer une demande
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default Header;