import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import './Header.css';
import logo from '../../../assets/logo.png';
import background from '../../../assets/purpletexture.png';
import tick from '../../../assets/tick.png';
import Navbar  from '../navbar';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Header() {
    return (
        <div style={{backgroundImage:`url(${background})`}}>
            <MDBContainer breakpoint="md" className='responsive-container-header'>
                <MDBRow>
                    <Navbar></Navbar>
                </MDBRow>
            </MDBContainer>
            <MDBContainer breakpoint="md" className='container-fluid'>
                <MDBRow className='d-flex align-items-center'>
                        <MDBCol size='md' className='col-md-6 order-sm-first order-last'>
                            <h1 className="header-merchant-h2 responsive-header-merchant-h2">L’<span style={{color: '#ffc107'}}>e</span>.Commerce Citoyen</h1>
                            <MDBRow className='d-flex mt-4 '>
                                <MDBCol className='col-2 mt-5  '>
                                <img src={tick} className='img-fluid-tick responsive-img'/>
                                </MDBCol>
                                <MDBCol  className='col-10 mt-5 text-wrap'>
                                    <p className="header-merchant-p responsive-header-merchant-p">
                                    Accédez à une clientèle soucieuse d’acheter local
                                    </p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className='d-flex'>
                                <MDBCol  className='col-2'>
                                <img src={tick} className='img-fluid-tick responsive-img'/>
                                </MDBCol>
                                <MDBCol className='col-10 text-wrap '>
                                    <p className="header-merchant-p responsive-header-merchant-p">
                                    Échangez avec vos clients et comprenez leurs besoins
                                    </p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className='d-flex '>
                                <MDBCol className='col-2 '>
                                <img src={tick} className='img-fluid-tick  responsive-img'/>
                                </MDBCol>
                                <MDBCol className='col-10 text-wrap '>
                                    <p className="header-merchant-p responsive-header-merchant-p">
                                    Augmentez votre visibilité, vendez mieux !
                                    </p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className='d-flex'>
                                <MDBCol className='col-2 '>
                                <img src={tick} className='img-fluid-tick  responsive-img'/>
                                </MDBCol>
                                <MDBCol sclassName='col-10 text-wrap '>
                                    <p className="header-merchant-p responsive-header-merchant-p">
                                    Un site réservé aux commerçants avec des boutiques physiques
                                    </p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        
                        <MDBCol size='md' className='col-md-5 mt-5 responsive-image-header-width'>
                            <MDBRow className='col-md-12 mt-5 mb-5 text-center'>
                                <img src={logo} className='img-fluid'/>
                            </MDBRow>
                        </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size='md' className='col-md-12 mt-4 mb-5 text-center'>
                    <MDBBtn rounded className='mx-2 btn btn-warning btn-lg font-weight-bold'>
                                    Je me connecte
                                </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default Header;