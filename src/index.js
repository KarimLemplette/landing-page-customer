import React from 'react';
import ReactDOM from 'react-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import City from './components/city/body/Body';
import ScrollToTop from './components/ScrollToTop'
import Category from './components/category/body/Body';
import Mission from './components/mission/body/Body';
import Merchant from './components/merchant/body/Body';



ReactDOM.render(
  <React.StrictMode>
        <Router>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/commercant" element={<Merchant />} />
            <Route path="/notremission" element={<Mission />} />
            <Route path="/nantes" element={<City />} />
            <Route path="/nantes/electromenager" element={<Category />} />
            <Route path="/nantes/electronique" element={<Category />} />
            <Route path="/nantes/decoration" element={<Category />} />
            <Route path="/nantes/culture" element={<Category />} />
            <Route path="/nantes/bricolage" element={<Category />} />
            <Route path="/nantes/sport" element={<Category />} />
            <Route path="/reze" element={<City />} />
            <Route path="/reze/electromenager" element={<Category />} />
            <Route path="/reze/electronique" element={<Category />} />
            <Route path="/reze/decoration" element={<Category />} />
            <Route path="/reze/culture" element={<Category />} />
            <Route path="/reze/bricolage" element={<Category />} />
            <Route path="/reze/sport" element={<Category />} />
            <Route path="/saintnazaire" element={<City />} />
            <Route path="/saint-nazaire/electromenager" element={<Category />} />
            <Route path="/saint-nazaire/electronique" element={<Category />} />
            <Route path="/saint-nazaire/decoration" element={<Category />} />
            <Route path="/saint-nazaire/culture" element={<Category />} />
            <Route path="/saint-nazaire/bricolage" element={<Category />} />
            <Route path="/saint-nazaire/sport" element={<Category />} />
            <Route path="/rennes" element={<City />} />
            <Route path="/rennes/electromenager" element={<Category />} />
            <Route path="/rennes/electronique" element={<Category />} />
            <Route path="/rennes/decoration" element={<Category />} />
            <Route path="/rennes/culture" element={<Category />} />
            <Route path="/rennes/bricolage" element={<Category />} />
            <Route path="/rennes/sport" element={<Category />} />
            <Route path="/bordeaux" element={<City />} />
            <Route path="/bordeaux/electromenager" element={<Category />} />
            <Route path="/bordeaux/electronique" element={<Category />} />
            <Route path="/bordeaux/decoration" element={<Category />} />
            <Route path="/bordeaux/culture" element={<Category />} />
            <Route path="/bordeaux/bricolage" element={<Category />} />
            <Route path="/bordeaux/sport" element={<Category />} />
            <Route path="/reims" element={<City />} />
            <Route path="/reims/electromenager" element={<Category />} />
            <Route path="/reims/electronique" element={<Category />} />
            <Route path="/reims/decoration" element={<Category />} />
            <Route path="/reims/culture" element={<Category />} />
            <Route path="/reims/bricolage" element={<Category />} />
            <Route path="/reims/sport" element={<Category />} />
            <Route path="/montpellier" element={<City />} />
            <Route path="/montpellier/electromenager" element={<Category />} />
            <Route path="/montpellier/electronique" element={<Category />} />
            <Route path="/montpellier/decoration" element={<Category />} />
            <Route path="/montpellier/culture" element={<Category />} />
            <Route path="/montpellier/bricolage" element={<Category />} />
            <Route path="/montpellier/sport" element={<Category />} />
            <Route path="/lille" element={<City />} />
            <Route path="/lille/electromenager" element={<Category />} />
            <Route path="/lille/electronique" element={<Category />} />
            <Route path="/lille/decoration" element={<Category />} />
            <Route path="/lille/culture" element={<Category />} />
            <Route path="/lille/bricolage" element={<Category />} />
            <Route path="/lille/sport" element={<Category />} />
            <Route path="/strasbourg" element={<City />} />
            <Route path="/strasbourg/electromenager" element={<Category />} />
            <Route path="/strasbourg/electronique" element={<Category />} />
            <Route path="/strasbourg/decoration" element={<Category />} />
            <Route path="/strasbourg/culture" element={<Category />} />
            <Route path="/strasbourg/bricolage" element={<Category />} />
            <Route path="/strasbourg/sport" element={<Category />} />
            <Route path="/tours" element={<City />} />
            <Route path="/tours/electromenager" element={<Category />} />
            <Route path="/tours/electronique" element={<Category />} />
            <Route path="/tours/decoration" element={<Category />} />
            <Route path="/tours/culture" element={<Category />} />
            <Route path="/tours/bricolage" element={<Category />} />
            <Route path="/tours/sport" element={<Category />} />
            <Route path="/lyon" element={<City />} />
            <Route path="/lyon/electromenager" element={<Category />} />
            <Route path="/lyon/electronique" element={<Category />} />
            <Route path="/lyon/decoration" element={<Category />} />
            <Route path="/lyon/culture" element={<Category />} />
            <Route path="/lyon/bricolage" element={<Category />} />
            <Route path="/lyon/sport" element={<Category />} />
            <Route path="/dijon" element={<City />} />
            <Route path="/dijon/electromenager" element={<Category />} />
            <Route path="/dijon/electronique" element={<Category />} />
            <Route path="/dijon/decoration" element={<Category />} />
            <Route path="/dijon/culture" element={<Category />} />
            <Route path="/dijon/bricolage" element={<Category />} />
            <Route path="/dijon/sport" element={<Category />} />
            <Route path="/rouen" element={<City />} />
            <Route path="/rouen/electromenager" element={<Category />} />
            <Route path="/rouen/electronique" element={<Category />} />
            <Route path="/rouen/decoration" element={<Category />} />
            <Route path="/rouen/culture" element={<Category />} />
            <Route path="/rouen/bricolage" element={<Category />} />
            <Route path="/rouen/sport" element={<Category />} />
            <Route path="/toulon" element={<City />} />
            <Route path="/toulon/electromenager" element={<Category />} />
            <Route path="/toulon/electronique" element={<Category />} />
            <Route path="/toulon/decoration" element={<Category />} />
            <Route path="/toulon/culture" element={<Category />} />
            <Route path="/toulon/bricolage" element={<Category />} />
            <Route path="/toulon/sport" element={<Category />} />
            <Route path="/angers" element={<City />} />
            <Route path="/angers/electromenager" element={<Category />} />
            <Route path="/angers/electronique" element={<Category />} />
            <Route path="/angers/decoration" element={<Category />} />
            <Route path="/angers/culture" element={<Category />} />
            <Route path="/angers/bricolage" element={<Category />} />
            <Route path="/angers/sport" element={<Category />} />
            <Route path="/saintetienne" element={<City />} />
            <Route path="/saint-etienne/electromenager" element={<Category />} />
            <Route path="/saint-etienne/electronique" element={<Category />} />
            <Route path="/saint-etienne/decoration" element={<Category />} />
            <Route path="/saint-etienne/culture" element={<Category />} />
            <Route path="/saint-etienne/bricolage" element={<Category />} />
            <Route path="/saint-etienne/sport" element={<Category />} />
            <Route path="/nimes" element={<City />} />
            <Route path="/nimes/electromenager" element={<Category />} />
            <Route path="/nimes/electronique" element={<Category />} />
            <Route path="/nimes/decoration" element={<Category />} />
            <Route path="/nimes/culture" element={<Category />} />
            <Route path="/nimes/bricolage" element={<Category />} />
            <Route path="/nimes/sport" element={<Category />} />
            <Route path="/nice" element={<City />} />
            <Route path="/nice/electromenager" element={<Category />} />
            <Route path="/nice/electronique" element={<Category />} />
            <Route path="/nice/decoration" element={<Category />} />
            <Route path="/nice/culture" element={<Category />} />
            <Route path="/nice/bricolage" element={<Category />} />
            <Route path="/nice/sport" element={<Category />} />
            <Route path="/toulouse" element={<City />} />
            <Route path="/toulouse/electromenager" element={<Category />} />
            <Route path="/toulouse/electronique" element={<Category />} />
            <Route path="/toulouse/decoration" element={<Category />} />
            <Route path="/toulouse/culture" element={<Category />} />
            <Route path="/toulouse/bricolage" element={<Category />} />
            <Route path="/toulouse/sport" element={<Category />} />
            <Route path="/Paris" element={<City />} />
            <Route path="/Paris/electromenager" element={<Category />} />
            <Route path="/Paris/electronique" element={<Category />} />
            <Route path="/Paris/decoration" element={<Category />} />
            <Route path="/Paris/culture" element={<Category />} />
            <Route path="/Paris/bricolage" element={<Category />} />
            <Route path="/Paris/sport" element={<Category />} />
            <Route path="/Marseille" element={<City />} />
            <Route path="/Marseille/electromenager" element={<Category />} />
            <Route path="/Marseille/electronique" element={<Category />} />
            <Route path="/Marseille/decoration" element={<Category />} />
            <Route path="/Marseille/culture" element={<Category />} />
            <Route path="/Marseille/bricolage" element={<Category />} />
            <Route path="/Marseille/sport" element={<Category />} />
            <Route path="/niort" element={<City />} />
            <Route path="/niort/electromenager" element={<Category />} />
            <Route path="/niort/electronique" element={<Category />} />
            <Route path="/niort/decoration" element={<Category />} />
            <Route path="/niort/culture" element={<Category />} />
            <Route path="/niort/bricolage" element={<Category />} />
            <Route path="/niort/sport" element={<Category />} />
            <Route path="/larochelle" element={<City />} />
            <Route path="/larochelle/electromenager" element={<Category />} />
            <Route path="/larochelle/electronique" element={<Category />} />
            <Route path="/larochelle/decoration" element={<Category />} />
            <Route path="/larochelle/culture" element={<Category />} />
            <Route path="/larochelle/bricolage" element={<Category />} />
            <Route path="/larochelle/sport" element={<Category />} />
            <Route path="/poitiers" element={<City />} />
            <Route path="/poitiers/electromenager" element={<Category />} />
            <Route path="/poitiers/electronique" element={<Category />} />
            <Route path="/poitiers/decoration" element={<Category />} />
            <Route path="/poitiers/culture" element={<Category />} />
            <Route path="/poitiers/bricolage" element={<Category />} />
            <Route path="/poitiers/sport" element={<Category />} />


          </Routes>

        </Router>
  </React.StrictMode>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
