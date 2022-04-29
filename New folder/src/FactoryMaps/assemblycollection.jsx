// import React from 'react'
// import "./production.css"
// import { useEffect, useState } from 'react';
// import { Card, Row, Col } from 'react-bootstrap'
// import socketIOClient from "socket.io-client";
// import { styled } from "@mui/material/styles";
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// // import { Link } from "react-router-dom";
// // import HourlyProgress from '../hourly/hourlyprogress'
// // import ShiftProgress from '../shift/shiftprogress'

// const ENDPOINT = "http://127.0.0.1:5054";

// var valuebar, shiftvaluebar, hourprogbar, valbar

// const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//   height: 10,
//   borderRadius: 5,
//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     // backgroundColor: theme.palette.mode === 'light' ? 'primary' : 'primary',
//   },
// }));

// function LinearProgressWithLabel(props) {
//   return (
//     <Box display="flex" alignItems="center">
//       <Box width="100%" mr={1}>
//         <BorderLinearProgress variant="determinate" {...props} />
//       </Box>
//       <Box minWidth={45}>
//         <Typography variant="body2" color="textSecondary">{`${Math.round(
//           props.value,
//         )}%`}</Typography>
//       </Box>
//     </Box>
//   );
// }

// LinearProgressWithLabel.propTypes = {
//   value: PropTypes.number.isRequired,
// };

// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//   },
// });

// export default function Production() {

//     const todate = new Date();
//     const mins = todate.getMinutes();
//     const secs = todate.getSeconds();

//     const [pa04sprod, setPa04sprod] = useState();
//     const [pa04hprod, setPa04hprod] = useState();
//     const [pa04oee, setPa04oee] = useState();
//     const [ value, setValue ] = useState();
//     const [ valueshift, setValueshift ] = useState();
//     const [pa08sprod, setPa08sprod] = useState();
//     const [pa08hprod, setPa08hprod] = useState();
//     const [pa08oee, setPa08oee] = useState();

//     useEffect(() => {

//             const socket = socketIOClient(ENDPOINT);
//             socket.on("json", data => {
//                 setPa04sprod(data.datapa04sprod)
//                 setPa04hprod(data.datapa04hprod)
//                 setPa04oee(data.datapa04oee)
//                 setPa08sprod(data.datapa08sprod)
//                 setPa08hprod(data.datapa08hprod)
//                 setPa08oee(data.datapa08oee)
//             });
    
//         return () => {
//           if(client)
//           client.end() 
//         }
//         },[])

//         valbar = Math.round((response/3600)*((60*min) + sec));

//         // valuebar = Math.round((response/3600)*((60*responsem) + responsec));
//         // shiftvaluebar = Math.round(response/3600)*((60*responsem) + responsec) + Math.abs(cshiftqt);

//         // shiftvalbar = Math.round(response/3600)*((60*responsem) + responsec) + Math.abs(sshiftqt);


//         if( ((hourprog/valbar)*100) >= 80){
//             hourprogbar = "success";
//         }else{
//             hourprogbar = "warning";
//         }
    
//           // console.log(json);
  
//         //   if( value >= 80){
//         //       valuebar = '#5EC248';
//         //   }else{
//         //       valuebar = 'red';
//         //   }
  
        
//         if( ((shiftprog/shiftvalbar)*100) >= 80){
//             shiftprogbar = "success";
//         }else{
//             shiftprogbar = "warning";
//         }

//     return (
//         <div>
//             <Card className="production">
//                 <Card.Header >
//                     <Row>
//                         <Col className="titlemain"><h3>ASSEMBLY PRODUCTION</h3></Col>
//                     </Row>
//                 </Card.Header>
//                 <Card.Body>
//                     <Row xs={1} md={2} className="productContainer">

//                         <Col className="productCol_1" md={{ span: 0.1 }} xs={12} md={6} lg={6} >
//                             <Row  >
//                                 <Card className="hourly">


//                                         <div className="title"><h4>Hourly</h4></div>
//                                         <Row>
//                                         <div className="cardsy" >

//                                         <div className={classes.root}>
//                                             <LinearProgressWithLabel color={hourprogbar} value={(hourprog/valbar)*100} />
//                                         </div>

//                                         </div>
//                                         </Row>
//                                         <Row>
//                                             <Col md={{ span: 4 }} xs={{ span: 4 }}>
//                                                 <div className="cardsx" >
                                                
//                                                     <div className="titlesub"><h5><b>Target</b></h5></div>                                                     
//                                                     <div className="count"><h5>{valuebar}</h5></div>
                                     
//                                                 </div>
//                                             </Col>
//                                             <Col md={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4 }}>
//                                             <div className="cardsx" >
                                            
//                                                     <div className="titlesub"><h5><b>Actual</b></h5></div>
//                                                     <div className="count"><h5>{value}</h5></div>

//                                                 </div>
//                                             </Col>
//                                         </Row>

//                                 </Card>
//                             </Row>
//                             <Row  >
//                                 <Card className="shift">

//                                         <Card.Title className="title"><h4>Shift</h4></Card.Title>
//                                         <Row>
//                                         <div className="cardsy" >

//                                         <div className={classes.root}>
//                                             <LinearProgressWithLabel color={shiftprogbar} value={(shiftprog/shiftvalbar)*100} />
//                                         </div>

//                                          </div>

//                                         </Row>
//                                         <Row>
//                                             <Col md={{ span: 4 }} xs={{ span: 4 }}>
//                                                 <div className="cardsx" >

//                                                     <div className="titlesub"><h5><b>Target</b></h5></div>                                              
//                                                     <div className="count"><h5>{shiftvaluebar}</h5></div>

//                                                 </div>
//                                             </Col>
//                                             <Col md={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4}}>
//                                             <div className="cardsx" >

//                                                     <div className="titlesub"><h5><b>Actual</b></h5></div>                                              
//                                                     <div className="count"><h5>{valueshift}</h5></div>

//                                                 </div>
//                                             </Col>
//                                         </Row>

//                                 </Card>
//                             </Row>
//                         </Col>
//                     </Row>
//                 </Card.Body>
//             </Card>

//             <Card className="oee" >
//                 <Card.Header>
//                     <Row>
//                             <Col className="titlemainoee" ><Card.Title><h2>ASSEMBLY OEE</h2></Card.Title></Col> 
//                     </Row>
//                 </Card.Header>
//                 <Card.Body>
                    
//                     <Row className="overall_gauge_chart">
//                     {/* <div className="overall_gauge_chart"> */}
//                         <ResponsiveContainer width="100%" aspect={4/1}>
//                             <GaugeChart id="gauge_chart_oee" 
//                                 nrOfLevels={200}
//                                 arcPadding={0} 
//                                 cornerRadius={0}
//                                 colors={["#FF0000", "#00FF00"]} 
//                                 arcWidth={0.2} 
//                                 percent={oee/200} 
//                                 textColor={["000000"]}
//                                 needleColor={["#757575"]}
//                                 needleBaseColor={["#c2ac6b"]}
//                                 animate={true}
//                             />
//                         </ResponsiveContainer>
//                     {/* </div> */}
//                     </Row>
//                     <Row >
//                         <div className="oeechart">
//                         {/* <Ochart/> */}
//                         </div>
//                     </Row>
//                 </Card.Body>
//             </Card>

//         </div>
//     )
// }
