import React from 'react'
import { useEffect, useState } from 'react';
import "./production.css"
import "./hourly.css"
import "./shift.css"
import "./progress_bar.css"
import mqtt from 'mqtt/dist/mqtt'
import { Card, Row, Col } from 'react-bootstrap'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { styled } from "@mui/material/styles";
import Time from './time'
import { Link } from "react-router-dom";

var valuebar, shiftvaluebar

const normalise = (value) => ((value ) * 100) / (6750);

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
    [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            // backgroundColor: theme.palette.mode === 'light' ? 'primary' : 'primary',
            },
        }));
        
function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <BorderLinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={45}>
                <Typography variant="body2" color="textSecondary">
                    {Math.round(props.value)}%
                </Typography>
                </Box>
            </Box>
            );
        }

function LinearProgressWithLabel1(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box minWidth={55}>
                <Typography variant="body2" color="textPrimary" >{
                    props.time
                  }</Typography>
            </Box>
            <Box width="100%" mr={1}>
                <BorderLinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={55}>
                  <Typography variant="body2" color="textPrimary">
                      {`${Math.round(
                    props.value,
                  )}`}
                  </Typography>
            </Box>
        </Box>
    );
}

        
const useStyles = makeStyles({
    root: {
        width: '100%',
        },    
});


export default function Production(props) {

    var x,t;

    if(props.topic){
        t=props.topic
        //"data/pa07/pa07dash/0808";
        x="data/"+t+'/'+t+"dash/"+t.slice(-2)+t.slice(-2)
       
    }

    const today = new Date();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const sec = today.getSeconds();

    const classes = useStyles();
    const [ valuex, setValuex ] = useState();
    const [hourprog, setHourprog] = useState();
    const [shiftprog, setShiftprog] = useState();
    const [response, setResponse] = useState();
    const [ valueshift, setValueshift ] = useState();
   
   



    useEffect(() => {

        const client = mqtt.connect('ws://192.168.8.110:8083/mqtt')
        //const topic1="data/pa08/pa08dash/0808";
        
        client.on('connect', function() {
        client.subscribe(x);
        console.log("Client has subscribed")
        });

        client.on('message', (topic, message) => {
        handleJsonMessage(JSON.parse(message.toString()));
        });
    },[])
   // setInterval(function () {window.location.reload(false);}, 1000);
  

    const handleJsonMessage = (json) => {      
        setValuex(json.productionHourly)
        setValueshift(json.productionShift)
        setHourprog((valuex/valuebar)*100)
        setShiftprog((valueshift/shiftvaluebar)*100)
        setResponse(6750)
        //window.location.reload(false);
        console.log(hourprog)
        
    }

    valuebar = Math.round((6750/3600)*((60*minute) + sec));
    shiftvaluebar = Math.round((6750/3600)*((60*minute) + sec))+(hour-8)*6750;
    console.log("Mins"+minute,"Secs"+sec,"Shiftval"+shiftvaluebar,"Valbar"+valuebar)


    return (
        <Box  >

            <Card className="production">
                <Card.Header >
                    <Row>
                        <Col className="titlemain">
                            <h3>PRODUCTION</h3>
                        </Col>
                        <Col className="production_icon">
                            <Link className="link" to={"/"+t+"/productiondocket"} >
                                {/* /:machine/productiondocket */}
                                <PlayCircleOutlineIcon/>
                            </Link>
                        </Col>
                    </Row>                 
                </Card.Header>

                <Card.Body>
                    <Row xs={1} md={2} className="productContainer">
                        <Col className="productCol_1" md={{ span: 0.1 }} xs={12} md2={6} lg={6} >
                            <Row  >
                                <Card className="hourly">

                                    {/* <Card.Body> */}
                                        <div className="title"><h4>Hourly</h4></div>
                                            <Row>
                                                <div className="cardsy" >                                           
                                                    <div className={classes.root}>
                                                        <LinearProgressWithLabel color={hourprog>79 ? 'succes' : 'warning'} value={(valuex/valuebar)*100} />
                                                    </div>                                                   
                                                </div>
                                            </Row>
                                        <Row>
                                            <Col md={{ span: 4 }} xs={{ span: 4 }}>
                                                <div className="cardsx" >                                 
                                                    <div className="titlesub"><h5><b>Target</b></h5></div>                                                     
                                                    <div className="count"><h5>{valuebar}</h5></div>                                    
                                                </div>
                                            </Col>
                                            <Col md={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4 }}>
                                                <div className="cardsx" >                                      
                                                    <div className="titlesub"><h5><b>Actual</b></h5></div>
                                                    <div className="count"><h5>{valuex}</h5></div>
                                                </div>
                                            </Col>
                                        </Row>
                                </Card>
                            </Row>
                            <Row  >
                                <Card className="shift">
                                    {/* <Card.Body> */}
                                        <Card.Title className="title"><h4>Shift</h4></Card.Title>
                                        <Row>
                                        <div className="cardsy" >                                                  
                                                    <div className={classes.root}>
                                                        <LinearProgressWithLabel color={shiftprog >79 ? 'succes' : 'warning'} value={(valueshift/shiftvaluebar)*100} />
                                                    </div>
                                                </div>
                                        </Row>
                                        <Row>
                                            <Col md={{ span: 4 }} xs={{ span: 4 }}>
                                                <div className="cardsx" >                                      
                                                    <div className="titlesub"><h5><b>Target</b></h5></div>                                              
                                                    <div className="count"><h5>{shiftvaluebar}</h5></div>
                                                </div>
                                            </Col>
                                            <Col md={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4}}>
                                                <div className="cardsx" >                                              
                                                    <div className="titlesub"><h5><b>Actual</b></h5></div>                                              
                                                    <div className="count"><h5>{valueshift}</h5></div>                                    
                                                </div>
                                            </Col>
                                        </Row>
                                </Card>
                            </Row>
                        </Col>
                        <Col className="productCol_2" xs={12} md={6} lg={6} >
                            <Card className="progressbar">
                                <Card.Body>
                                    <div className={classes.root}>
                                        <Time topic={props.topic}/>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Box>
    )
}