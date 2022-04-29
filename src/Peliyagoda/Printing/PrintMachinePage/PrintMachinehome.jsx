import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Production from "../PrintMAchineComps/production/Production"
import Oee from "../PrintMAchineComps/oee/Hourly/Oee"
import Quality from "../PrintMAchineComps/quality/Hourly/Quality"
import Oee_Shift from "../PrintMAchineComps/oee/Shift/Oee_Cumalative"
import Quality_Shift from "../PrintMAchineComps/quality/Shift/Quality_Shift"
import "./PrintMachineHome.css"

var topicsx

export default function PrintMachinehome(props) {

     const [topics1, setTopics1] = useState();
     const [topics29, setTopics29] = useState();
     const [topics30, setTopics30] = useState();
     const [topics31, setTopics31] = useState();
     const [topics33, setTopics33] = useState();
     // const [topics6, setTopics6] = useState();
     // const [topics7, setTopics7] = useState();
     // const [topics8, setTopics8] = useState();
     // const [topics9, setTopics9] = useState();

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
               topicsx = '+/fm08/fm08dash/008'
               setTopics1(topicsx);
          }
          if( props.idm29){

               // console.log(props.idm2)
               topicsx = '+/web4/web4dash/0404'
               setTopics29(topicsx);
          }
          if( props.idm30){

               // console.log(props.idm3)
               topicsx = '+/web2/web2dash/0202'
               setTopics30(topicsx);   
          }
          if( props.idm31){

               // console.log(props.idm4)
               topicsx = '+/bm02/bm02dash/1234'
               setTopics31(topicsx);
          }
          if( props.idm33){

               // console.log(props.idm5)
               topicsx = '+/uv01/uv01dash/001'
               setTopics33(topicsx);
          }
          // if( props.idm6){

          //      // console.log(props.idm6)
          //      topicsx = "+/pa06/pa06dash/0606"
          //      setTopics6(topicsx);
          // }
          // if( props.idm7){

          //      // console.log(props.idm7)
          //      topicsx = "+/pa07/pa04dash/0707"
          //      setTopics7(topicsx);
          // }
          // if( props.idm8){

          //      // console.log(props.idm8)
          //      topicsx = "+/pa08/pa08dash/0808"
          //      setTopics8(topicsx);
          // }
          // if( props.idm9){

          //      // console.log(props.idm9)
          //      topicsx = "+/pa09/pa09dash/0909"
          //      setTopics9(topicsx);
          // }

          return () => {
               
          }
     }, [props.idm1, props.idm29, props.idm30, props.idm31, props.idm33])

    return (
            <div>
                {/* <Container fluid className="mainContainer"  > */}
               
               <Row  className="home" >
                    <Col  ><Production pa01 = {topics1} pa29 = {topics29} pa30 = {topics30} pa31 = {topics31} pa33 = {topics33}/> </Col>
               </Row>

               <div className="homeWidgetx">
               <Tabs fill varient="pills" defaultActiveKey="hourly" className="mb-3" >
                    <Tab eventKey="hourly" title="Hourly">
                         <Row className="homeWidget" xs={1} md={2} > 
                         
                              <Col  xs={12} md={6} lg={6} className="oeeCol "><Oee pa01 = {topics1} pa29 = {topics29} pa30 = {topics30} pa31 = {topics31} pa33 = {topics33} /> </Col>
                              <Col  xs={12} md={6} lg={6} className="qualityCol " > <Quality pa01 = {topics1} pa29 = {topics29} pa30 = {topics30} pa31 = {topics31} pa33 = {topics33}/></Col>
                         </Row>
                        
                    </Tab>
                    <Tab eventKey="shift" title="Shift">
                         <Row xs={1} md={2}  >
                              
                              <Col  xs={12} md={6} lg={6} className="oeeCol "><Oee_Shift pa01 = {topics1} pa29 = {topics29} pa30 = {topics30} pa31 = {topics31} pa33 = {topics33}/> </Col>
                              <Col  xs={12} md={6} lg={6} className="qualityCol " > <Quality_Shift pa01 = {topics1} pa29 = {topics29} pa30 = {topics30} pa31 = {topics31} pa33 = {topics33}/></Col>
                         
                         </Row>
                    </Tab>
               </Tabs>
               </div>
            {/* </Container>  */}
            </div>

    )
}
