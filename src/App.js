import './App.css';
import Navbar from "./Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import { Row } from 'react-bootstrap'
import PA04 from "./Peliyagoda/Assembly/PAMachines/PAMachineMain/PAMachinemain"
import PRI04 from "./Peliyagoda/Printing/PrintMachineMain/PrintMachinemain"
import Fact1 from "./FactoryMaps/factory1"
import Fact2 from "./FactoryMaps/factory2"
import Fact3 from "./FactoryMaps/factory3"
import Fact4 from "./FactoryMaps/factory4"
import Docket from './Peliyagoda/Assembly/PAMachines/PAMachinePage/Docket';
import {useEffect} from 'react';


export default function App() {

  const today = new Date();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const sec = today.getSeconds();

  if (((hour === 11) && (minute === 25) && (sec === 0)) || ((hour === 11) && (minute === 25) && (sec === 20))) {
    window.location.reload(true);
  }

  return (
    <div className="App">
     
    <Router>
      
      <Row>
      <Row className="Nav">
      <Navbar />
      </Row>
            <Switch>
              <Route path='/' exact component={Fact1} />
              <Route path='/factory1' exact component={Fact1} />  
              <Route path='/factory2' exact component={Fact2} />
              <Route path='/factory3' exact component={Fact3} />
              <Route path='/factory4' exact component={Fact4} />
                <div className="homeView">

                  <Route path= "/pa01home/:id1" component={PA04} />
                  <Route path= "/pa02home/:id2" component={PA04} />
                  <Route path= "/pa03home/:id3" component={PA04} />
                  <Route path= "/pa04home/:id4" component={PA04} />
                  <Route path= "/pa05home/:id5" component={PA04} />
                  <Route path= "/pa06home/:id6" component={PA04} />
                  <Route path= "/pa07home/:id7" component={PA04} />
                  <Route path= "/pa08home/:id8" component={PA04} />
                  <Route path= '/pa09home/:id9' component={PA04} />

                  <Route path= "/pri01home/:id1" component={PRI04} />
                  <Route path= "/pri29home/:id29" component={PRI04} />
                  <Route path= "/pri30home/:id30" component={PRI04} />
                  <Route path= "/pri31home/:id31" component={PRI04} />
                  <Route path= "/pri33home/:id33" component={PRI04} />
                  <Route path="/pa08productiondocket" component={Docket}/>
                  {/* <Route path= "/pri06home/:id6" component={PRI04} />
                  <Route path= "/pri07home/:id7" component={PRI04} />
                  <Route path= "/pri08home/:id8" component={PRI04} />
                  <Route path= '/pri09home/:id9' component={PRI04} /> */}
                
                </div>
            </Switch>
          </Row>     
    </Router>
    
    </div>
    
  );
}


// +/pa04/pa04dash/0404