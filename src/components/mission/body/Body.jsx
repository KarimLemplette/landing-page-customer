import React from 'react';
import './Body.css';
import bodyimg1 from '../../../assets/stock.png';
import bodyimg2 from '../../../assets/globalization.png';
import sourire from '../../../assets/sourire.png';
import background1 from '../../../assets/whitetexture.png';
import background2 from '../../../assets/bluetexture.jpg';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import  Header  from '../header';
import  {Footer} from '../..';


function Mission() {
    return (
        <div className='body'>
            <Header></Header>
            <div style={{backgroundImage:`url(${background1})`}}>
            <MDBContainer breakpoint="md" className='container-fluid'>
                <MDBRow className='d-flex align-items-center mb-3 mt-3'>
                <MDBCol className='col-md-4'>
                        <img src={bodyimg1} alt='' className='img-fluid' />
                    </MDBCol>
                    <MDBCol size='md' className='col-md-6 mt-2'>
                        <h2 className='h3-black'>
                           Mon Libraire ne ressemble pas à ça, 
                        </h2>
                      
                        <p style={{fontSize: 16, lineHeight: 0, color:'#000000'}}> Ni mon vendeur de chaussures, </p>
                        
                        
                        <p style={{fontSize: 12, lineHeight: 0, color:'#000000'}}> Ni mon marchand de meuble, </p>
                        
                       
                        <p style={{fontSize: 8, lineHeight: 0, color:'#000000'}}> Encore moins mon vendeur d'électroménager, </p>
                   
                        <p className='p-black'>
                        Une grande majorité des produits que nous commandons se trouve dans un commerce à proxmité. {"\n"}
                        {"\n"}Un commerçant n'a pas vocation à empaqueter sa marchandise au bénéfice des plateformes d'ecommerce mais d'échanger, de conseiller,
                            de négocier et de gérer ses relations avec ses clients.  
                        </p>
                    </MDBCol>
                  
                </MDBRow>
            </MDBContainer>
            
            </div>
            <div style={{ backgroundImage: `url(${background2})` }}>
                <MDBContainer breakpoint="md" className='container-fluid'>
                    <MDBRow>
                        <MDBCol className='col-md-11 mt-5 mb-3 text-center'>
                            <h3 className='h3-white' style={{fontSize: 26, marginTop:20}}>
                                Lemplette est née du constat de trois fondateurs ayant précédemment vécu la mondialisation en vivant à l'étranger chacun de leur côté.
                            </h3> 
                         </MDBCol>
                    </MDBRow>
                    <MDBContainer breakpoint="sm" className='container-fluid'>
                <MDBRow className='d-flex align-items-center mb-3 mt-5'>
            
                    <MDBCol size='md' className='col-md-6 mt-2 mb-4 text-end'>
                        <p className='p-white responsive-text-center'>
                            De retour dans leurs régions, un constat s'est imposé, comment reconnecter avec la vie locale et pouvoir échanger avec les commerces environnants ?
                            En effet, trouver un produit près de chez soi, sans tomber sur les sites des géants du e-commerce est un vrai parcours du 
                            <strike > combattant</strike> commerçant. 
                        </p>
                    </MDBCol>
                    <MDBCol className='col-md-5 mt-2 mb-4'>
                        <img src={bodyimg2} alt='' className='img-fluid'/> 
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                        <MDBCol className='col-md-11 mt-2 mb-5 text-center'>
                            <h3 className='h3-white' style={{fontSize: 30, marginTop:20}}>
                                Comment réorganiser une vision du commerce avec une démarche locale, collaborative, humaine et proche des citoyens ? {"\n"}
                                {"\n"}Comment engager des valeurs humaines dans une économie de marché gloable ?
                            </h3> 
                         </MDBCol>
                    </MDBRow>
            </MDBContainer>
                </MDBContainer> 
                
            </div>
            <div style={{backgroundImage:`url(${background1})`}}>
            <MDBContainer breakpoint="sm" className='container-fluid'>
                    <MDBRow>
                        <MDBCol className='col-md-11 mt-5 mb-2 text-center'>
                        <h3 className='h3-black responsive-text-center'>
                        <span style={{color: '#ffc107'}}>Lemplette </span>
                        est née de ces questionnements
                        </h3>
                         </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className='col-md-11 mt-5  text-right offset-md-3'>
                        <h3 className='h3-black responsive-text-center 'style={{fontSize: 25}}>
                        Consommer de manière
                        <span style={{color: '#ffc107'}}> citoyenne </span>
                        
                        </h3>
                         </MDBCol>
                    </MDBRow>
                <MDBRow className='d-flex align-items-center mt-1 mb-3'>
                    <MDBCol size='md' className='col-md-6 offset-md-1 mt-2 mb-4 text-end'>
                        <p className='p-black responsive-text-center'>
                          Passer par le service de Lemplette, c'est donner la possibilité aux commerçants qui vous entourent, les mêmes armes
                          que le ecommerce, en vous proposant des produits correspondants à ce que vous recherchez, ou très similaire. C'est aussi vous 
                          prouver que<span style={{color: '#ffc107'}}> les commerçants ont aussi de très bon prix </span>. 
                          Nous voulons réintroduire une notion fondamentale au commerce : l'échange entre le client et le commerçant. 
                          C'est donner plus de travail à l'économie locale ! 
                        </p>
                    </MDBCol>
                    <MDBCol className='col-md-4 mt-2 mb-4'>
                        <img src={sourire} alt='' className='img-fluid'/> 
                    </MDBCol>
                </MDBRow>
                <MDBRow className='d-flex align-items-center mt-1 mb-3'>
                    <MDBCol className='col-md-12 mt-4 mb-4 text-center'>
                    <MDBBtn rounded className='mx-2 mb-5 btn btn-warning btn-lg font-weight-bold'>
                        Bienvenue sur Lemplette
                    </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer> 
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Mission;