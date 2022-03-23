import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import './Header.css';
import logo from '../../../assets/logo.png';
import background from '../../../assets/bluetexture.jpg';
import  Navbar  from '../../../components/mission/navbar';
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
                            
                        </MDBCol>
                        <MDBCol size='md' className='col-md-5 mt-5 responsive-image-header-width'>
                            <img src={logo} className='img-fluid'/>
                        </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size='md' className='col-md-8 mt-5 mb-5 '>
                        
                           <h1 className="header-h2 responsive-mission-header-h2"><span style={{color:'#ffc107'}}>POURQUOI</span> à t-on choisi de créer Lemplette ?</h1>
                       
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size='md' className='col-md-12 mt-5 mb-5 text-center'>
                    <h2 className="header-h2 responsive-header-mission-h2">Les géants du ecommerce sont déjà trop bien implantés, pourquoi les challenger ?
                    <span style={{color:'#ffc107'}}> C'est simple,</span> POUR QUE <span style={{color:'#ffc107'}}> ÇA CHANGE</span></h2>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default Header;