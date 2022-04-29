import React from 'react';
// import Sidebar from "../PrintMachineComps/sidebar/Sidebar"
import RightSidebar1 from '../PrintMAchineComps/RightSidebar/RightSidebar1';
import Controller1 from "../PrintMAchineComps/controller_sidebar/Controller1";
// import RightSidebar2 from '../PrintMAchineComps/RightSidebar/RightSidebar2';
// import Controller2 from "../PrintMAchineComps/controller_sidebar/Controller2";
// import RightSidebar3 from '../PrintMAchineComps/RightSidebar/RightSidebar3';
// import Controller3 from "../PrintMAchineComps/controller_sidebar/Controller3";
// import RightSidebar4 from '../PrintMAchineComps/RightSidebar/RightSidebar4';
// import Controller4 from "../PrintMAchineComps/controller_sidebar/Controller4";
// import RightSidebar5 from '../PrintMAchineComps/RightSidebar/RightSidebar5';
// import Controller5 from "../PrintMAchineComps/controller_sidebar/Controller5";
// import RightSidebar6 from '../PrintMAchineComps/RightSidebar/RightSidebar6';
// import Controller6 from "../PrintMAchineComps/controller_sidebar/Controller6";
// import RightSidebar7 from '../PrintMAchineComps/RightSidebar/RightSidebar7';
// import Controller7 from "../PrintMAchineComps/controller_sidebar/Controller7";
// import RightSidebar8 from '../PrintMAchineComps/RightSidebar/RightSidebar8';
// import Controller8 from "../PrintMAchineComps/controller_sidebar/Controller8";
// import RightSidebar9 from '../PrintMAchineComps/RightSidebar/RightSidebar9';
// import Controller9 from "../PrintMAchineComps/controller_sidebar/Controller9";
import RightSidebar29 from '../PrintMAchineComps/RightSidebar/RightSidebar29';
import Controller29 from "../PrintMAchineComps/controller_sidebar/Controller29";
import RightSidebar30 from '../PrintMAchineComps/RightSidebar/RightSidebar30';
import Controller30 from "../PrintMAchineComps/controller_sidebar/Controller30";
import RightSidebar31 from '../PrintMAchineComps/RightSidebar/RightSidebar31';
import Controller31 from "../PrintMAchineComps/controller_sidebar/Controller31";
import RightSidebar33 from '../PrintMAchineComps/RightSidebar/RightSidebar33';
import Controller33 from "../PrintMAchineComps/controller_sidebar/Controller33";
import "./PrintMachinemain.css"
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePA04 from "../PrintMachinePage/PrintMachinehome"
import PA04OEE from  "../PrintMachinePage/OeePages/PrintMachine_OEE"
import DocketFM08 from "../PrintMAchineComps/production//tabels/tablecompsfunc01"
import DocketWEB2 from "../PrintMAchineComps/production//tabels/tablecompsfunc29"
import DocketWEB4 from "../PrintMAchineComps/production//tabels/tablecompsfunc30"
import DocketBM02 from "../PrintMAchineComps/production//tabels/tablecompsfunc31"
import DocketUV1 from "../PrintMAchineComps/production//tabels/tablecompsfunc33"
import { Container, Row, Col } from 'react-bootstrap';

export default function App() {

  const  {id1}  = useParams();
  // const  {id2}  = useParams();
  // const  {id3}  = useParams();
  // const  {id4}  = useParams();
  // const  {id5}  = useParams();
  // const  {id6}  = useParams();
  // const  {id7}  = useParams();
  // const  {id8}  = useParams();
  // const  {id9}  = useParams();
  const  {id29}  = useParams();
  const  {id30}  = useParams();
  const  {id31}  = useParams();
  const  {id33}  = useParams();

  return (
    <div>

        <Router>

            <Switch>
            <Route path='/pri1productiondocket' component={DocketFM08} />
            <Route path='/pri29productiondocket' component={DocketWEB2} />
            <Route path='/pri30productiondocket' component={DocketWEB4} />
            <Route path='/pri31productiondocket' component={DocketBM02} />
            <Route path='/pri33productiondocket' component={DocketUV1} />
            <Route path= '/pa04oee'  component={PA04OEE } />  

              <Container fluid className="appContainer" >
                <Row xs={1} md={2} className="mainRow" >
                  <Col className="sidebarCol" xs={12} md={4} lg={3} >
                    
                  <Route path='/pri01home' component={RightSidebar1} />
                  {/* <Route path='/pri02home' component={RightSidebar2} />
                  <Route path='/pri03home' component={RightSidebar3} />
                  <Route path='/pri04home' component={RightSidebar4} />
                  <Route path='/pri05home' component={RightSidebar5} />
                  <Route path='/pri06home' component={RightSidebar6} />
                  <Route path='/pri07home' component={RightSidebar7} />
                  <Route path='/pri08home' component={RightSidebar8} />
                  <Route path='/pri09home' component={RightSidebar9} /> */}
                  <Route path='/pri29home' component={RightSidebar29} />
                  <Route path='/pri30home' component={RightSidebar30} />
                  <Route path='/pri31home' component={RightSidebar31} />
                  <Route path='/pri33home' component={RightSidebar33} />
                  
                  <Route path='/pri01controller' component={Controller1} />
                  {/* <Route path='/pri02controller' component={Controller2} />
                  <Route path='/pri03controller' component={Controller3} />
                  <Route path='/pri04controller' component={Controller4} />
                  <Route path='/pri05controller' component={Controller5} />
                  <Route path='/pri06controller' component={Controller6} />
                  <Route path='/pri07controller' component={Controller7} />
                  <Route path='/pri08controller' component={Controller8} />
                  <Route path='/pri09controller' component={Controller9} /> */}
                  <Route path='/pri29controller' component={Controller29} />
                  <Route path='/pri30controller' component={Controller30} />
                  <Route path='/pri31controller' component={Controller31} />
                  <Route path='/pri33controller' component={Controller33} />
                  

                  </Col>
                  <Col  className="Main" xs={12}  md={8} lg={9}>
                    <HomePA04 idm1={id1} idm29={id29} idm30={id30} idm31={id31} idm33={id33} />
                  </Col>
                </Row>

              </Container>

            </Switch>
        </Router>


    </div>
    

  );
}

