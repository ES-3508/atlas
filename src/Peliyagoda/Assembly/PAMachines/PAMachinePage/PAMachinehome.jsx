import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
//import Production from "../../PAMachines/PAMAchineComps/production/Production"
import Production from "../../../../components/o.js"
import Oee from "../../PAMachines/PAMAchineComps/oee/Hourly/Oee"
import Quality from "../../PAMachines/PAMAchineComps/quality/Hourly/Quality"
import Oee_Shift from "../../PAMachines/PAMAchineComps/oee/Shift/Oee_Cumalative"
import Quality_Shift from "../../PAMachines/PAMAchineComps/quality/Shift/Quality_Shift"
import "./PAMachineHome.css"

var topicsx

export default function PAMachinehome(props) {

     

    return (
            <div>
                {/* <Container fluid className="mainContainer"  > */}
               
               <Row  className="home" >
                    <Col >
                        <Production topic={props.topic}/> 
                    </Col>
               </Row>

               <div className="homeWidgetx">
               <Tabs fill varient="pills" defaultActiveKey="hourly" className="mb-3" >
                    <Tab eventKey="hourly" title="Hourly">
                         <Row className="homeWidget" xs={1} md={2} > 
                         
                              <Col  xs={12} md={6} lg={6} className="oeeCol "><Oee topic={props.topic}/> </Col>
                              <Col  xs={12} md={6} lg={6} className="qualityCol " > <Quality topic={props.topic}/></Col>
                         </Row>
                        
                    </Tab>
                    <Tab eventKey="shift" title="Shift">
                         <Row xs={1} md={2}  >
                              
                              <Col  xs={12} md={6} lg={6} className="oeeCol "><Oee_Shift topic={props.topic}/> </Col>
                              <Col  xs={12} md={6} lg={6} className="qualityCol " > <Quality_Shift topic={props.topic}/></Col>
                         
                         </Row>
                    </Tab>
               </Tabs>
               </div>
            {/* </Container>  */}
            </div>

    )
}
