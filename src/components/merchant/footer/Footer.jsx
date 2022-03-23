import React from 'react';
import './Footer.css';
import background from '../../../assets/purpletexture.png';
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

function Footer () {
  return (
    <div style={{backgroundImage:`url(${background})`}}>
        <MDBFooter className='text-center text-lg-start text-muted'>
            <MDBContainer breakpoint="md" className='d-flex justify-content-center p-4'>
                <div className='me-5 d-none d-lg-block'>
                    <h2 className='footer-text'>
                        Lemplett<span style={{color: '#ffc107'}}>e</span>, le <span style={{color: '#ffc107'}}>e</span>Commerce Citoy<span style={{color: '#ffc107'}}>e</span>n
                    </h2>
                </div>
            </MDBContainer>
            <MDBContainer breakpoint="md" className='container-fluid'>
                <MDBRow>
                    <MDBCol className='col-md-3 offset-md-1'>
                        <h5 className='fw-bold mb-4 footer-text'>À Propos</h5>
                        <ul className='list-unstyled mb-0'>
                            <li>
                            <Link to ={`/notremission`} style={{ color: '#FFF', fontWeight: 'bold' }}>Pourquoi Lemplette ?</Link>
                            </li>
                            <li>
                                <a href='#!' className='footer-text'>
                                Espace Presse
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='footer-text'>
                                On parle de nous
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='footer-text'>
                                Espace Carrière
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='footer-text'>
                                Blog
                                </a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol className='col-md-3 offset-md-1'>
                        <h5 className='fw-bold mb-4 footer-text'>Conditions</h5>
                        <ul className='list-unstyled mb-0'>
                            <li>
                                <a href='#!' className='footer-text'>
                                Mention Légales
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='footer-text'>
                                Confidentialité
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='footer-text'>
                                Cookies
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='footer-text'>
                                Près de chez vous
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='footer-text'>
                                Crédits
                                </a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol className='col-md-3 offset-md-1'>
                        <h5 className='fw-bold mb-4 footer-text'>Aide</h5>
                        <ul className='list-unstyled mb-0'>
                            <li>
                                <a href='#!' className='footer-text'>
                                FAQ
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='footer-text'>
                                Contact
                                </a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBRow>
                <div className='text-center p-4' style={{color:'#FFFFFF'}}>
                    © 2022 Copyright
                    <a className='text-reset fw-bold' href='https://lemplette.com/'> Lemplette</a>
                </div>
            </MDBRow>
        </MDBFooter>
    </div>
  )
}

export default Footer;