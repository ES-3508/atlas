import { useEffect, useState } from 'react';
// import Sidebar from "../PAMachineComps/sidebar/Sidebar"
import RightSidebar1 from '../PAMAchineComps/RightSidebar/RightSidebar1';
import Controller1 from "../../PAMachines/PAMAchineComps/controller_sidebar/Controller1";
import RightSidebar2 from '../PAMAchineComps/RightSidebar/RightSidebar2';
import Controller2 from "../../PAMachines/PAMAchineComps/controller_sidebar/Controller2";
import RightSidebar3 from '../PAMAchineComps/RightSidebar/RightSidebar3';
import Controller3 from "../../PAMachines/PAMAchineComps/controller_sidebar/Controller3";
import RightSidebar4 from '../PAMAchineComps/RightSidebar/RightSidebar4';
import Controller4 from "../../PAMachines/PAMAchineComps/controller_sidebar/Controller4";
import RightSidebar5 from '../PAMAchineComps/RightSidebar/RightSidebar5';
import Controller5 from "../../PAMachines/PAMAchineComps/controller_sidebar/Controller5";
import RightSidebar6 from '../PAMAchineComps/RightSidebar/RightSidebar6';
import Controller6 from "../../PAMachines/PAMAchineComps/controller_sidebar/Controller6";
import RightSidebar7 from '../PAMAchineComps/RightSidebar/RightSidebar7';
import Controller7 from "../../PAMachines/PAMAchineComps/controller_sidebar/Controller7";
import RightSidebar8 from '../PAMAchineComps/RightSidebar/RightSidebar8';
import Controller8 from "../../PAMachines/PAMAchineComps/controller_sidebar/Controller8";
import RightSidebar9 from '../PAMAchineComps/RightSidebar/RightSidebar9';
import Controller9 from "../../PAMachines/PAMAchineComps/controller_sidebar/Controller9";
import "./PAMachinemain.css"
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePA04 from "../PAMachinePage/PAMachinehome"
import PA04OEE from  "../PAMachinePage/OeePages/PAMachine_OEE"
import DocketPA01 from "../../PAMachines/PAMAchineComps/production/tabels/tablecompsfunc01"
import DocketPA02 from "../../PAMachines/PAMAchineComps/production/tabels/tablecompsfunc02"
import DocketPA03 from "../../PAMachines/PAMAchineComps/production/tabels/tablecompsfunc03"
import DocketPA04 from "../../PAMachines/PAMAchineComps/production/tabels/tablecompsfunc04"
import DocketPA05 from "../../PAMachines/PAMAchineComps/production/tabels/tablecompsfunc05"
import DocketPA06 from "../../PAMachines/PAMAchineComps/production/tabels/tablecompsfunc06"
import DocketPA07 from "../../PAMachines/PAMAchineComps/production/tabels/tablecompsfunc07"
import DocketPA08 from "../../PAMachines/PAMAchineComps/production/tabels/tablecompsfunc08"
import DocketPA09 from "../../PAMachines/PAMAchineComps/production/tabels/tablecompsfunc09"
import Docket from "../PAMachinePage/Doc"
import { Container, Row, Col } from 'react-bootstrap';



export default function App() {

  const  {id1}  = useParams();
  const  {machine}  = useParams();

  // const  {id2}  = useParams();
  // const  {id3}  = useParams();
  // const  {id4}  = useParams();
  // const  {id5}  = useParams();
  // const  {id6}  = useParams();
  // const  {id7}  = useParams();
  // const  {id8}  = useParams();
  // const  {id9}  = useParams();
  
  useEffect(() => {

    console.log(id1,machine);

  }
,[])

  return (
    <div>

        <Router>

            <Switch>
            
            <Route path='/:machine/productiondocket' component={Docket} />
            
            <Route path= '/pa04oee'  component={PA04OEE } />  

              <Container fluid className="appContainer" >
                <Row xs={1} md={2} className="mainRow" >
                  <Col className="sidebarCol" xs={12} md={4} lg={3} >
                    
                  {/* <Route path='/pa01home' component={RightSidebar1} />
                  <Route path='/pa02home' component={RightSidebar2} />
                  <Route path='/pa03home' component={RightSidebar3} />
                  <Route path='/pa04home' component={RightSidebar4} />
                  <Route path='/pa05home' component={RightSidebar5} />
                  <Route path='/pa06home' component={RightSidebar6} />
                  <Route path='/pa07home' component={RightSidebar7} />
                  <Route path='/pa08home' component={RightSidebar8} />
                  <Route path='/pa09home' component={RightSidebar9} />
                  
                  <Route path='/pa01controller' component={Controller1} />
                  <Route path='/pa02controller' component={Controller2} />
                  <Route path='/pa03controller' component={Controller3} />
                  <Route path='/pa04controller' component={Controller4} />
                  <Route path='/pa05controller' component={Controller5} />
                  <Route path='/pa06controller' component={Controller6} />
                  <Route path='/pa07controller' component={Controller7} />
                  <Route path='/pa08controller' component={Controller8} />
                  <Route path='/pa09controller' component={Controller9} /> */}
                  <RightSidebar8 topic={id1} />

                  </Col>
                  <Col  className="Main" xs={12}  md={8} lg={9}>
                    <HomePA04 topic={id1} />
                  </Col>
                </Row>

              </Container>

            </Switch>
        </Router>


    </div>
    

  );
}

