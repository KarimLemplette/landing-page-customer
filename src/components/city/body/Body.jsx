
import  Header  from '../header';
import  {Footer} from '../..';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import number1 from '../../../assets/number1.png';
import number2 from '../../../assets/number2.png';
import number3 from '../../../assets/number3.png';
import washer from '../../../assets/washer.png';
import computer from '../../../assets/computer.png';
import tools from '../../../assets/tools.png';
import deco from '../../../assets/deco.png';
import running from '../../../assets/running.png';
import book from '../../../assets/book.png';
import { useLocation } from 'react-router-dom';




function City() {
    const location = useLocation()
    const { CityName} = location.state    
    const { CityNameUrl} = location.state    
    return (
        <div>
            <Header></Header>
            <MDBContainer breakpoint="md" className='container-fluid'>
                <MDBRow>
                    <MDBCol className='col-md-12 mt-5 text-center' >
                    <h1 className='h1-black'>Comment ça marche ?</h1>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='row justify-content-center mt-5'>
                    <MDBCol size='md' className='col-md-3 mt-2 responsive-image-body-width' >
                        <img src={number1} alt=''  style={{width:'50%' }}/>
                        <div className='col-md-12 mt-3  '>
                        <p className='p-black'>Faites une demande sur Lemplette.com</p>
                        </div>
                    </MDBCol>
                    <MDBCol size='md' className='col-md-3 mt-2 offset-md-1 text-center responsive-image-body-width' >
                        <img src={number2} alt=''  style={{width:'50%' }}/>
                        <div className='col-md-12 mt-3   '>
                        <p className='p-black'>En 24, les commerçants Lemplette vous garantissent une réponse sur le stock
                        de votre produit, ou des produits similaires qui correspondent à votre demande</p>
                        </div>
                    </MDBCol>
                    <MDBCol size='md' className='col-md-3 mt-2  offset-md-1 text-center responsive-image-body-width' >
                        <img src={number3} alt='' className='img-fluid' style={{width:'50%' }}/>
                        <div className='col-md-12 mt-3  offset-md-1 '>
                        <p className='p-black'>Payez via Lemplette et collectez votre produit chez un commerçant proche de chez vous</p>
                            </div>

                            </MDBCol > 
                            <MDBRow className='row mt-5 offset-md-1'>
                            <a className='responsive-text-center' href='/'> <u> Contacter les commerces environnants> </u></a>
                            </MDBRow>
                    </MDBRow>
                    
                    <MDBRow className='d-flex align-items-center mb-3'>
                    <MDBCol size='md' className='col-md-10 offset-md-1 text-center mt-5 mb-4 '>
                        <h2 class="responsive-text-center" >Toutes<span style={{color:'#ffc107'}}> vos catégories proche de chez </span>vous à {CityName}</h2>
                        <MDBRow className='d-flex align-items-center mb-3'>
                        <MDBCol size='md' className='col-md-4 text-center mt-5 mb-4 '>
                        <Link to ={`/${CityNameUrl}/electromenager`} state={{ CityName: CityName, Category: "l'électroménager",CityNameUrl: CityNameUrl}}><img src={washer} alt='' style={{width:'50%', marginBlock:'auto' }} /></Link>
                            <div className='col-md-12 mt-3   '>
                        <Link to ={`/${CityNameUrl}/electromenager`}state={{ CityName: CityName, Category: "l'électroménager",CityNameUrl: CityNameUrl}}><u>Électroménager</u>{"\n"} </Link>
                            </div>
                        </MDBCol> 
                        <MDBCol size='md' className='col-md-4  text-center mt-5 mb-4 '>
                        <Link to ={`/${CityNameUrl}/electronique`}state={{ CityName: CityName, Category: "vos articles d'électroniques",CityNameUrl: CityNameUrl}}><img src={computer} alt=''  style={{width:'85%' }}/></Link>
                            <div className='col-md-12 mt-4  '>
                        <Link to ={`/${CityNameUrl}/electronique`}state={{ CityName: CityName, Category: "vos articles d'électroniques",CityNameUrl: CityNameUrl}}><u>Électronique</u>{"\n"} </Link>
                            </div>
                        </MDBCol> 
                        <MDBCol size='md' className='col-md-4  text-center mt-5 mb-4 '>
                        <Link to ={`/${CityNameUrl}/decoration`}state={{ CityName: CityName, Category: "votre décoration",CityNameUrl: CityNameUrl}}><img src={deco} alt=''  style={{width:'42%' }}/></Link>
                            <div className='col-md-12 mt-4 '>
                        <Link to ={`/${CityNameUrl}/decoration`}state={{ CityName: CityName, Category: "votre décoration",CityNameUrl: CityNameUrl}}><u>Décoration</u>{"\n"}  </Link>
                            </div>
                        </MDBCol> 
                        </MDBRow>
                        <MDBRow className='d-flex align-items-center mb-3'>
                        <MDBCol size='md' className='col-md-4  text-center mt-5 mb-4 '>
                        <Link to ={`/${CityNameUrl}/culture`}state={{ CityName: CityName, Category: "vos articles culturels",CityNameUrl: CityNameUrl}}><img src={book} alt=''  style={{width:'50%' }}/></Link>
                            <div className='col-md-12 mt-4 '>
                        <Link to ={`/${CityNameUrl}/culture`}state={{ CityName: CityName, Category: "vos articles culturels",CityNameUrl: CityNameUrl}}><u>Culture</u>{"\n"}  </Link>
                            </div>
                        </MDBCol> 
                        <MDBCol size='md' className='col-md-4  text-center mt-5 mb-4 '>
                        <Link to ={`/${CityNameUrl}/bricolage`}state={{ CityName: CityName, Category: "vos articles de bricolage",CityNameUrl: CityNameUrl}}><img src={tools} alt=''  style={{width:'70%' }}/></Link>
                            <div className='col-md-12 mt-4  '>
                        <Link to ={`/${CityNameUrl}/bricolage`}state={{ CityName: CityName, Category: "vos articles de bricolage",CityNameUrl: CityNameUrl}}><u>Bricolage</u>{"\n"}  </Link>
                            </div>
                        </MDBCol> 
                        <MDBCol size='md' className='col-md-4  text-center mt-5 mb-4 '>
                        <Link to ={`/${CityNameUrl}/sport`}state={{ CityName: CityName, Category: "vos articles de sport",CityNameUrl: CityNameUrl}}><img src={running} alt=''  style={{width:'88%' }}/></Link>
                            <div className='col-md-12 mt-4  '>
                        <Link to ={`/${CityNameUrl}/sport`}state={{ CityName: CityName, Category: "vos articles de sport",CityNameUrl: CityNameUrl}}><u>Sport</u>{"\n"}  </Link>
                            </div>
                        </MDBCol> 
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='d-flex align-items-center mb-3'>
                    <MDBCol size='md' className='col-md-10 offset-md-3 mt-5 mb-4 '>
                        <h2 class="responsive-text-center" >Tous <span style={{color:'#ffc107'}}> les commerces à proximité </span>de</h2>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='d-flex align-items-center mb-3'>
                    <MDBCol size='md' className='col-md-3 offset-md-1 mt-2 mb-4 '>
                        <Link to ="/nantes"state={{ CityName: "Nantes", CityNameUrl: "nantes" }}>Nantes{"\n"} </Link>
                        <Link to ="/reze"state={{ CityName: "Rézé", CityNameUrl: "reze" }}>Rézé{"\n"} </Link>
                        <Link to ="/saintnazaire"state={{ CityName: "Saint-Nazaire", CityNameUrl: "saint-nazaire" }}>Saint-Nazaire{"\n"} </Link>
                        <Link to ="/rennes"state={{ CityName: "Rennes" , CityNameUrl: "rennes"}}>Rennes{"\n"} </Link>
                        <Link to ="/bordeaux"state={{ CityName: "Bordeaux" , CityNameUrl: "bordeaux"}}>Bordeaux{"\n"} </Link>
                        <Link to ="/reims"state={{ CityName: "Reims", CityNameUrl: "reims" }}>Reims{"\n"} </Link>
                        <Link to ="/montpellier"state={{ CityName: "Montpellier", CityNameUrl: "montpellier" }}>Montpellier{"\n"} </Link>
                        <Link to ="/lille"state={{ CityName: "Lille" , CityNameUrl: "lille"}}>Lille{"\n"} </Link>     
                    </MDBCol>
                    <MDBCol size='md' className='col-md-3 offset-md-1 mt-2 mb-4 '>
                        <Link to ="/strasbourg"state={{ CityName: "Strasbourg" , CityNameUrl: "strasbourg"}}>Strasbourg{"\n"} </Link>
                        <Link to ="/tours"state={{ CityName: "Tours", CityNameUrl: "tours" }}>Tours{"\n"} </Link>
                        <Link to ="/lyon"state={{ CityName: "Lyon" , CityNameUrl: "lyon"}}>Lyon{"\n"} </Link>
                        <Link to ="/dijon"state={{ CityName: "Dijon" , CityNameUrl: "dijon"}}>Dijon{"\n"} </Link>
                        <Link to ="/rouen"state={{ CityName: "Rouen" , CityNameUrl: "rouen"}}>Rouen{"\n"} </Link>
                        <Link to ="/toulon"state={{ CityName: "Toulon", CityNameUrl: "toulon" }}>Toulon{"\n"} </Link>
                        <Link to ="/angers"state={{ CityName: "Angers" , CityNameUrl: "angers"}}>Angers{"\n"} </Link>
                        <Link to ="/saintetienne"state={{ CityName: "Saint-Etienne" , CityNameUrl: "saint-etienne"}}>Saint-Étienne{"\n"} </Link>    
                    </MDBCol>
                    <MDBCol size='md' className='col-md-3 offset-md-1 mt-2 mb-4 '>
                        <Link to ="/nimes"state={{ CityName: "Nîmes", CityNameUrl: "nimes" }}>Nîmes{"\n"} </Link>
                        <Link to ="/nice"state={{ CityName: "Nice" , CityNameUrl: "nice"}}>Nice{"\n"} </Link>
                        <Link to ="/toulouse"state={{ CityName: "Toulouse" , CityNameUrl: "toulouse"}}>Toulouse{"\n"} </Link>
                        <Link to ="/paris"state={{ CityName: "Paris" , CityNameUrl: "paris"}}>Paris{"\n"} </Link>
                        <Link to ="/marseille" state={{ CityName: "Marseille" , CityNameUrl: "marseille"}}>Marseille{"\n"} </Link>
                        <Link to ="/niort"state={{ CityName: "Niort" , CityNameUrl: "niort"}}>Niort{"\n"} </Link>
                        <Link to ="/larochelle"state={{ CityName: "La Rochelle", CityNameUrl: "larochelle" }}>La Rochelle{"\n"} </Link>
                        <Link to ="/poitiers"state={{ CityName: "Poitiers", CityNameUrl: "poitiers" }}>Poitiers{"\n"} </Link>      
                    </MDBCol>
                </MDBRow>
  
                </MDBContainer>
            <Footer></Footer>
            
        </div>
    )
}
export default City;