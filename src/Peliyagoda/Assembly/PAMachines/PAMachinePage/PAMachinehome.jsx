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

     const [topics1, setTopics1] = useState();
     const [topics2, setTopics2] = useState();
     const [topics3, setTopics3] = useState();
     const [topics4, setTopics4] = useState();
     const [topics5, setTopics5] = useState();
     const [topics6, setTopics6] = useState();
     const [topics7, setTopics7] = useState();
     const [topics8, setTopics8] = useState();
     const [topics9, setTopics9] = useState();

     useEffect(() => {
          
               // console.log(props.idm1)
               // console.log(props.idm2);
               // console.log(props.idm3);
               // console.log(props.idm4);
               // console.log(props.idm5)
               // console.log(props.idm6);
               // console.log(props.idm7);
               // console.log(props.idm8);
               // console.log(props.idm9);

          if( props.idm1){

               // console.log(props.idm1)
               topicsx = "+/pa01/pa01dash/0101"
               setTopics1(topicsx);
          }
          if( props.idm2){

               // console.log(props.idm2)
               topicsx = "+/pa02/pa02dash/0202"
               setTopics2(topicsx);
          }
          if( props.idm3){

               // console.log(props.idm3)
               topicsx = "+/pa03/pa03dash/0303"
               setTopics3(topicsx);   
          }
          if( props.idm4){

               // console.log(props.idm4)
               topicsx = "+/pa04/pa04dash/0404"
               setTopics4(topicsx);
          }
          if( props.idm5){

               // console.log(props.idm5)
               topicsx = "+/pa05/pa05dash/0505"
               setTopics5(topicsx);
          }
          if( props.idm6){

               // console.log(props.idm6)
               topicsx = "+/pa06/pa06dash/0606"
               setTopics6(topicsx);
          }
          if( props.idm7){

               // console.log(props.idm7)
               topicsx = "+/pa07/pa04dash/0707"
               setTopics7(topicsx);
          }
          if( props.idm8){

               // console.log(props.idm8)
               topicsx = "+/pa08/pa08dash/0808"
               setTopics8(topicsx);
          }
          if( props.idm9){

               // console.log(props.idm9)
               topicsx = "+/pa09/pa09dash/0909"
               setTopics9(topicsx);
          }

          return () => {
               
          }
     }, [props.idm1, props.idm2, props.idm3, props.idm4, props.idm5, props.idm6, props.idm7, props.idm8, props.idm9])

    return (
            <div>
                {/* <Container fluid className="mainContainer"  > */}
               
               <Row  className="home" >
                    <Col >
                         {/*<Production pa01 = {topics1} pa02 = {topics2} pa03 = {topics3} pa04 = {topics4} pa05 = {topics5} 
                                pa06 = {topics6} pa07 = {topics7} pa08 = {topics8} pa09 = {topics9}/>*/}
                         <Production/> 
                    </Col>
               </Row>

               <div className="homeWidgetx">
               <Tabs fill varient="pills" defaultActiveKey="hourly" className="mb-3" >
                    <Tab eventKey="hourly" title="Hourly">
                         <Row className="homeWidget" xs={1} md={2} > 
                         
                              <Col  xs={12} md={6} lg={6} className="oeeCol "><Oee pa01 = {topics1} pa02 = {topics2} pa03 = {topics3} pa04 = {topics4} pa05 = {topics5} 
                                                                                pa06 = {topics6} pa07 = {topics7} pa08 = {topics8} pa09 = {topics9}/> </Col>
                              <Col  xs={12} md={6} lg={6} className="qualityCol " > <Quality pa01 = {topics1} pa02 = {topics2} pa03 = {topics3} pa04 = {topics4} pa05 = {topics5} 
                                                                                     pa06 = {topics6} pa07 = {topics7} pa08 = {topics8} pa09 = {topics9}/></Col>
                         </Row>
                        
                    </Tab>
                    <Tab eventKey="shift" title="Shift">
                         <Row xs={1} md={2}  >
                              
                              <Col  xs={12} md={6} lg={6} className="oeeCol "><Oee_Shift pa01 = {topics1} pa02 = {topics2} pa03 = {topics3} pa04 = {topics4} pa05 = {topics5} 
                                                                                pa06 = {topics6} pa07 = {topics7} pa08 = {topics8} pa09 = {topics9}/> </Col>
                              <Col  xs={12} md={6} lg={6} className="qualityCol " > <Quality_Shift pa01 = {topics1} pa02 = {topics2} pa03 = {topics3} pa04 = {topics4} pa05 = {topics5} 
                                                                                     pa06 = {topics6} pa07 = {topics7} pa08 = {topics8} pa09 = {topics9}/></Col>
                         
                         </Row>
                    </Tab>
               </Tabs>
               </div>
            {/* </Container>  */}
            </div>

    )
}
