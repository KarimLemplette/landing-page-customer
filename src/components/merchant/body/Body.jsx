import React from 'react';
import './Body.css';
import bodyimgmerchant1 from '../../../assets/bodyimgmerchant1.png';
import bodyimgmerchant2 from '../../../assets/bodyimgmerchant2.png';
import number1 from '../../../assets/number1.png';
import number2 from '../../../assets/number2.png';
import number3 from '../../../assets/number3.png';
import sourire from '../../../assets/sourire.png';
import background1 from '../../../assets/whitetexture.png';
import background2 from '../../../assets/purpletexture.png';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import Header from '../../merchant/header';
import Footer from '../../merchant/footer';
import { Link } from "react-router-dom";

function Merchant() {
    return (
        <div className='body'>
             <Header></Header>
            <div style={{backgroundImage:`url(${background1})`}}>
            <MDBContainer breakpoint="md" className='container-fluid'>
                <MDBRow className='d-flex align-items-center mb-3 mt-3'>
                    <MDBCol size='md' className='col-md-6 mt-2'>
                        <h2 className='body-h2'>
                            Etre un 
                            <span style={{color: '#ffc107'}}> Commerçant {"\n"}Lemplette</span>
                        </h2>
                        <p className='p-black'>
                            
                            <u> <i> {"\n"} Pour Lemplette, Etre citoyen c’est avant tout comprendre et interagir avec le monde qui nous entoure </i></u>
                        </p>
                        <p className='p-black'>
                        Etre un commerçant Lemplette, c’est faire partie d’un réseau de professionnels dont l’unique but est de dynamiser la vie locale, 
                        et d’offrir plus d’interactions sociales entre chaque citoyen.
                        </p>
                        <MDBRow className='d-flex align-items-center mt-3'>
                            <MDBCol size='md' className='col-md-4 text-center'>
                            </MDBCol>
                                <MDBCol size='md' className='col-md-7 mb-3 text-center'>
                                    <MDBBtn rounded className='mx-2 btn btn-secondary' color='secondary'>
                                    <Link to ={`/notremission`} style={{ color: '#FFF' }}>Lire notre manifesto</Link>
                                    </MDBBtn>
                                </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    
                    <MDBCol className='col-md-5'>
                        <img src={bodyimgmerchant1} alt='' className='img-fluid' />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer breakpoint="md" className='container-fluid'>
                <MDBRow className='d-flex align-items-center mb-3'> 
                    <MDBCol className='col-md-5 mt-3 order-sm-first order-last'>
                        <img src={bodyimgmerchant2} alt='' className='img-fluid'/>
                    </MDBCol>
                    <MDBCol size='md' className='col-md-6 mt-5 mb-5'>
                        <h2 className='body-h2'>Redéfinissez <span style={{color: '#ffc107'}}>votre {"\n"}zone de Chalandise</span> </h2>
                        <h3 className='h3-black'>Développons ensemble un <span style={{color: '#ffc107'}}> e</span>commerce local</h3>
                        <p className='p-black'>
                        Avec Lemplette, nous permettons aux commerçants de se concentrer uniquement sur des achats à proximité de leur magasin, 
                        et de ne plus se soucier d’une concurrence mondiale.
                        </p>
                        <a href='/'> <u>En savoir plus> </u></a>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </div>
            <div style={{ backgroundImage: `url(${background2})` }}>
                <MDBContainer breakpoint="md" className='container-fluid'>
                        <MDBRow className='mt-3 mb-3 '>
                        <MDBCol md="11" className='mt-5 text-center'>
                            <h1 className='' color=''> <span style={{color: '#ffffff'}}>Comment ca marche ? </span> </h1>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer> 
                <MDBContainer breakpoint="md" className='container-fluid'>
                <MDBRow className='mt-3 mb-3'>
                    <MDBCol size='md'className='col-md-12' >
                    <MDBRow className='mt-3 mb-3 align-items-center'>
                        <MDBCol size='md' className='col-md-2 responsive-image-body-width' >
                        <img src={number1} alt='' className='img-fluid'/>
                        </MDBCol>
                        <MDBCol className='col-md-9' >
                        <p className='p-white'>Vous recevez une demande de produit de la part d’un futur acheteur</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mt-3 mb-3 align-items-center'>
                    <MDBCol size='md' className='col-md-2 mt-2 offset-md-3 responsive-image-body-width' >
                        <img src={number2} alt='' className='img-fluid'/>
                        </MDBCol>
                        <MDBCol className='col-md-6 mt-2 ' >
                        <p className='p-white'>Vous indiquez la disponibilité de l’article dans votre boutique, 
                                                ou un délai de réapprovisionnement sur ce produit. Vous pouvez aussi suggérer un produit aux caractéristiques similaires</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mt-5 mb-3 align-items-center'>
                    <MDBCol size='md' className='col-md-2 mt-2 responsive-image-body-width' >
                        <img src={number3} alt='' className='img-fluid'/>
                        </MDBCol>
                        <MDBCol className='col-md-9 mt-2' >
                        <p className='p-white'>L’acheteur se déplace récupérer le produit{"\n"}{"\n"}

                                            La transaction se fait via Lemplette {"\n"}

                                            Une nouvelle vente vient d’être faite</p>
                        </MDBCol>
                        
                       
                    </MDBRow>
                    </MDBCol>
                </MDBRow>
                <MDBCol className='col-md-12 mt-5 mb-5'>
                    <MDBBtn rounded className='mx-2 mb-5 btn btn-warning btn-lg font-weight-bold'>
                        Découvrir les étapes
                    </MDBBtn>
                </MDBCol>
                </MDBContainer> 
            </div>
            <div style={{backgroundImage:`url(${background1})`}}>
            <MDBContainer breakpoint="sm" className='container-fluid'>
                <MDBRow className='d-flex align-items-center mb-3'>
                    <MDBCol size='md' className='col-md-6 offset-md-1 mt-2 mb-4 '>
                        <h2 class="responsive-text-center" style={{color:'#ffc107'}}>L'ampleur<span style={{color: '#000000'}}> de </span>Lemplette</h2>
                        <p  className='p-black responsive-text-center'><u>Développer une nouvelle dynamique </u></p>
                        <p className='p-black responsive-text-center'>
                        Les commerçants qui utilisent Lemplette constatent une fréquentation en hausse de leur boutique. Lorsque l’acheteur vient récupérer son produit, 
                        ce dernier à une meilleure connaissance du choix de produits que vous vendez.
                        </p>
                        <p  className='p-black responsive-text-center'><u>Le Bouche à Oreille </u></p>
                        <p className='p-black responsive-text-center'>
                        Engager, mettre en avant vos réseaux sociaux, vous n’êtes pas à l’abri d’effectuer une vente complémentaire.
                        </p>
                        <MDBRow className='text-end'>
                        <a className='responsive-text-center' href='/'> <u> Je veux en savoir plus> </u></a>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol className='col-md-5 mt-2 mb-4'>
                        <img src={sourire} alt='' className='img-fluid'/> 
                    </MDBCol>
                </MDBRow>
            </MDBContainer> 
            <Footer></Footer>
        </div>
        </div>
    
    )
}

export default Merchant;