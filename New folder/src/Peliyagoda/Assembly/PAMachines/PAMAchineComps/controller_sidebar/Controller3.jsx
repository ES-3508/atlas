import React from 'react'
import "./controller.css"
import "../RightSidebar/rightSidebar.css"
import { Card, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Switch from '@material-ui/core/Switch';
// import status from "../../../../../images/green_button.png";
import profile from "../../../../../images/operator/operator.jpg";
import temp from "../../../../../images/temp.png";
import humidity from "../../../../../images/humid.png";
import Button from '@material-ui/core/Button';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Link } from "react-router-dom";
import axios from "axios"


function Controller() {

  const [latitude,setLatitude]=useState(0);
  const[longitude,setLongitude]=useState(0);
  const[temperature,setTemperature]=useState(0);
  const[humid,setHumidity]=useState(0);

  const savePositionToState= (position)=>{
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }
  const fetchWeather = async ()=>{
    try{
       window.navigator.geolocation.getCurrentPosition(savePositionToState);
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c6120f2227f59fede6d9cdfe5114e0fc&units=metric`);
      console.log(res.data);
      setTemperature(res.data.main.temp);
      setHumidity(res.data.main.humidity);
    }catch(err){
      console.error(err);
    }

  }
  useEffect(()=>{
    fetchWeather();
  }, [latitude,longitude]); 

    return (


        <Card className="sidebarCard"  >

            <Card.Body> {/* machine info card begin */}

                <Row>
                    <Col className="machineTitle"> <Card.Title> <Link className="link" to={{ pathname: '/pa03controller' }} >
                        PA03 </Link> </Card.Title> </Col>
                    <Col><Switch /></Col>
                    <Col >
                        <Row className="operatorRow">
                            <img src={profile} alt="machine operator" className="profile" />
                        </Row>
                        <Row>
                            <p className="text-muted text-center ">Azzam</p>
                        </Row>
                    </Col>
                </Row>


                <Row className="speed_div">
                    <Col xs={3} md={3} className="p-0 Title" ><h5>Speed </h5></Col>
                    <Col  xs={3} md={3} className="speedCount">  <h3 id="display">0</h3></Col>
                    <Col  className="arrowUp" xs={3} md={3} > <Button color="primary" ><ArrowCircleUpIcon/></Button></Col>
                    <Col  className="arrowDown" xs={3} md={3} > <Button color="primary"  ><ArrowCircleDownIcon/></Button></Col>

                </Row>




            </Card.Body>
            <Card.Footer className="text-muted">
                <Row className="alert">
                    <Col className="temp"><img src={temp} alt="temperature" /></Col> <Col className="tempCount" ><h5>{temperature}</h5></Col>
                    <Col className="humid" ><img src={humidity} alt="humidity" className="humidCount" /> </Col> <Col ><h5>{humid}%</h5></Col>
                </Row>
            </Card.Footer>
        </Card>


    )
}

export default Controller

