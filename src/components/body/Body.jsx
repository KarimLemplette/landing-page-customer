import React from 'react';
import './Body.css';
import bodyimg1 from '../../assets/bodyimg1.png';
import bodyimg2 from '../../assets/bodyimg2.png';
import number1 from '../../assets/number1.png';
import number2 from '../../assets/number2.png';
import number3 from '../../assets/number3.png';
import search from '../../assets/search.png';
import sourire from '../../assets/sourire.png';
import background1 from '../../assets/whitetexture.png';
import background2 from '../../assets/bluetexture.jpg';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

function Body() {
    return (
        <div className='body'>
            <div style={{backgroundImage:`url(${background1})`}}>
            <MDBContainer breakpoint="md" className='container-fluid'>
                <MDBRow className='d-flex align-items-center mb-3 mt-3'>
                    <MDBCol size='md' className='col-md-6'>
                        <h2 className='body-h2'>
                            L’article que vous recherchez
                            est déjà dans <span style={{color: '#ffc107'}}>un commerce à proximité</span>
                        </h2>
                        <p className='p-black'>
                            Lemplette vous met en relation directe avec vos commerces locaux. 
                            La majorité des commandes en ligne effectuées se 
                            trouvent déjà probablement dans un des commerces qui vous entourent.
                        </p>
                    </MDBCol>
                    <MDBCol className='col-md-5'>
                        <img src={bodyimg1} alt='' className='img-fluid' />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer breakpoint="md" className='container-fluid'>
                <MDBRow className='d-flex align-items-center mb-3'> 
                    <MDBCol className='col-md-5 mt-3 order-sm-first order-last'>
                        <img src={bodyimg2} alt='' className='img-fluid'/>
                    </MDBCol>
                    <MDBCol size='md' className='col-md-6 mt-3'>
                        <h2 className='body-h2'>Réconcilier <span style={{color: '#ffc107'}}>local</span> <span style={{color: '#1558e8'}}>&</span> <span style={{color: '#ffc107'}}>digital</span></h2>
                        <h3 className='h3-black'>Le <span style={{color: '#ffc107'}}>e</span>commerce à votre porte</h3>
                        <p className='p-black'>
                            Les commerces de proximité sont beaucoup moins visibles sur internet que les géants du e-commerce, 
                            Lemplette offre aux commerçants une plateforme permettant de répondre en direct à toutes vos demandes.
                        </p>
                        <a href='/'> <u>Contacter des commerces environnants> </u></a>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </div>
            <div style={{ backgroundImage: `url(${background2})` }}>
                <MDBContainer breakpoint="md" className='container-fluid'>
                    <MDBRow>
                        <MDBCol className='col-md-12 mt-5 mb-3 text-center'>
                            <h3 className='h3-white' style={{fontSize: 26, marginTop:20}}>
                                Lemplette, c’est un panier moyen de <span style={{color: '#ffc107',fontSize: 32}}>65 euros par clients</span>,
                                des <span style={{color: '#ffc107',fontSize: 32 }}>dizaines de demandes</span> par jour près de chez vous
                                <span style={{color: '#ffc107',fontSize: 32}}> 80 % de réussite</span> sur les produits que vous recherchez
                                {"\n"} Et c’est surtout une activité économique <span style={{color: '#ffc107',fontSize: 32}}>locale</span>.
                            </h3> 
                         </MDBCol>
                    </MDBRow>
                    <MDBRow className='mt-3 mb-3'>
                    <MDBCol className='col-md-12 mt-5 text-center'>
                        <h2 className='h3-white'>
                            Faites une demande{"\n"} en ligne
                        </h2>
                        </MDBCol>
                        </MDBRow>
                        <MDBRow className='mt-3 mb-3'>
                        <MDBCol md="11">
                            <h3 className='row3-h1' align='left'><u>Comment ca marche</u> ?</h3>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer> 
                <MDBContainer breakpoint="md" className='container-fluid'>
                <MDBRow className='mt-3 mb-3'>
                    <MDBCol size='md'className='col-md-7' >
                    <MDBRow className='mt-3 mb-3'>
                        <MDBCol size='md' className='col-md-2 responsive-image-body-width' >
                        <img src={number1} alt='' className='img-fluid'/>
                        </MDBCol>
                        <MDBCol className='col-md-9' >
                        <p className='p-white'>Envoyez-nous une photo, un lien, une capture d’écran du produit recherché</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mt-3 mb-3'>
                    <MDBCol size='md' className='col-md-2 mt-2 responsive-image-body-width' >
                        <img src={number2} alt='' className='img-fluid'/>
                        </MDBCol>
                        <MDBCol className='col-md-9 mt-2' >
                        <p className='p-white'>En 24h, Les commerçants Lemplette vous garantissent une réponse sur le stock de votre produit, ou des produits similaires qui correspondent à votre recherche</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mt-3 mb-3'>
                    <MDBCol size='md' className='col-md-2 mt-2 responsive-image-body-width' >
                        <img src={number3} alt='' className='img-fluid'/>
                        </MDBCol>
                        <MDBCol className='col-md-9 mt-2' >
                        <p className='p-white'>Payez via Lemplette et collectez votre produit chez un commerçant proche de chez vous</p>
                        </MDBCol>
                        
                       
                    </MDBRow>
                    </MDBCol>
                    <MDBCol size='md' className='col-md-4 mt-3'>
                        <img src={search} alt='' className='img-fluid'/>
                    </MDBCol>
                </MDBRow>
                <MDBCol className='col-md-12 mt-5 mb-5'>
                    <MDBBtn rounded className='mx-2 mb-5 btn btn-warning btn-lg font-weight-bold'>
                        Lancer une recherche
                    </MDBBtn>
                </MDBCol>
                
                </MDBContainer> 
            </div>
            <div style={{backgroundImage:`url(${background1})`}}>
            <MDBContainer breakpoint="sm" className='container-fluid'>
                <MDBRow className='d-flex align-items-center mb-3'>
                    <MDBCol size='md' className='col-md-6 offset-md-1 mt-2 mb-4 text-end'>
                        <h2 class="responsive-text-center" style={{color:'#ffc107'}}>Des commerçants engagés</h2>
                        <h3 className='h3-black responsive-text-center'>
                        <span style={{color: '#ffc107'}}>"</span>
                        <b>C’est moins cher en ligne</b>
                        <span style={{color: '#ffc107'}}>”</span>
                        </h3>
                        <p className='p-black responsive-text-center'>
                            Soyons honnête, le mythe du “c’est moins cher en ligne” 
                            n’est plus d’actualité, les marques dictent les prix en ligne et en boutique, 
                            Il est tout a fait possible de trouver des très bons prix en magasins et avec des 
                            conseils avisés d’un détaillant près de chez vous... le sourire en plus (et pas sur le carton)
                        </p>
                        <a className='responsive-text-center' href='/'> <u> Déclenchez une recherche> </u></a>
                    </MDBCol>
                    <MDBCol className='col-md-5 mt-2 mb-4'>
                        <img src={sourire} alt='' className='img-fluid'/> 
                    </MDBCol>
                </MDBRow>
            </MDBContainer> 
            </div>
        </div>
    )
}

export default Body;