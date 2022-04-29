import React from 'react'
import "./rightSidebar.css"
import { Card, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import status from "../../../../../images/green_button.png";
import profile from "../../../../../images/operator/operator.jpg";
import temp from "../../../../../images/temp.png";
import humidity from "../../../../../images/humid.png";
import { Link } from "react-router-dom";
import socketIOClient from "socket.io-client";
import { Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
//import socketIOClient from "socket.io-client";
import axios from "axios"

const ENDPOINT = "http://127.0.0.1:5054";


export default function RightSidebar() {

    var showdate = new Date();
    var displaytodaysdate = showdate.getDate() + ' ' + (showdate.toLocaleString('default', {month:'long'})) + ' ' + showdate.getFullYear();
    // var date = showdate.toDateString();

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [temperature, setTemperature] = useState(0);
    const [humid, setHumidity] = useState(0);

    const savePositionToState = (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    }
    const fetchWeather = async () => {
        try {
            window.navigator.geolocation.getCurrentPosition(savePositionToState);
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c610f2227f59fede6d9cdfe5114e0fc&units=metric`);
            console.log(res.data);
            setTemperature(res.data.main.temp);
            setHumidity(res.data.main.humidity);
        } catch (err) {
            console.error(err);
        }

    }
    useEffect(() => {
        fetchWeather();
    }, [latitude, longitude]);

    const [response, setResponse] = useState();
    const [shiftx, setShiftx] = useState();
    const [sshiftqt, setSshiftqt] = useState();
  
    useEffect(() => {
          
          const socket = socketIOClient(ENDPOINT, {secure: true}, {
            withCredentials: true,
            extraHeaders: {
            }
          });
          socket.on("json", data => {
              setResponse(data.dataprodq)
              setShiftx(data.datashift)
              setSshiftqt(data.datashiftplan)
            // console.log(data.datav);
          });
  
      return () => {
  
      }
      },[])



    return (

        <Card className="sidebarCard"  >

            <Card.Body> {/* machine info card begin */}
                <Card className="machineInfo" >
                    <Card.Body>
                        <Row>
                            <Col className="machineTitle"> <Card.Title> <Link className="link" to={{ pathname: '/pa07controller' }} >
                                <h4>PA07</h4> </Link> </Card.Title> </Col>
                            <Col><img src={status} alt="machine status" className="status mr-2" /> </Col>
                            <Col >
                                <Row className="operatorRow">
                                    <img src={profile} alt="machine operator" className="profile" />
                                </Row>
                                <Row>
                                    <p className="text-muted text-center "><h4>Azzam</h4></p>
                                </Row>
                            </Col>
                        </Row>


                        <Row >
                            <Col className="p-0" ><Card.Text> <h4>{displaytodaysdate}</h4></Card.Text> </Col>

                        </Row>

                    </Card.Body>
                </Card>{/* machine info card end */}

                {/* <ListGroup  variant="flush">
                    <ListGroup.Item>Shift</ListGroup.Item>
                    <ListGroup.Item>Product</ListGroup.Item>
                    <ListGroup.Item>Shift Target</ListGroup.Item>
                    <ListGroup.Item>Hourly Target</ListGroup.Item>
                
                <ListGroup.Item>status</ListGroup.Item>
                
                <ListGroup.Item>Machine Speed</ListGroup.Item>
                
                <ListGroup.Item>Power Consumption</ListGroup.Item>
                
                </ListGroup> */}

<TableContainer >
              <Table sx={{ minWidth: 20}} aria-label="simple table">

                <TableHead>

                  <TableRow className="sidebarListItem">
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="left" >Shift</TableCell>
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="center">:</TableCell>
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="left">{shiftx}</TableCell>
                  </TableRow>

                  <TableRow className="sidebarListItem">
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="left">Product</TableCell>
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="center">:</TableCell>
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="left">Atlas Chooty</TableCell>
                  </TableRow>

                  <TableRow className="sidebarListItem">
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="left">Shift Target</TableCell>
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="center">:</TableCell>
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="left">{sshiftqt} Nos</TableCell>
                  </TableRow>

                  <TableRow className="sidebarListItem">
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="left">Hourly Target</TableCell>
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="center">:</TableCell>
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="left">{response} Nos</TableCell>
                  </TableRow>

                  <TableRow className="sidebarListItem">
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="left">Status</TableCell>
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="center">:</TableCell>
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="left">Running</TableCell>
                  </TableRow>

                  <TableRow className="sidebarListItem">
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="left">Machine Speed</TableCell>
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="center">:</TableCell>
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="left"></TableCell>
                  </TableRow>

                  <TableRow className="sidebarListItem">
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="left">Power Consumption</TableCell>
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="center">:</TableCell>
                    <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }} align="left"></TableCell>
                  </TableRow>

                </TableHead>

              </Table>
            </TableContainer>

                {/* <TableContainer >
                    <Table sx={{ minWidth: 0 }} aria-label="simple table">

                        <TableHead>

                            <TableRow className="sidebarListItem">
                                <TableCell sx={{ padding: 1 }, { fontWeight: 'medium' }, { padding: 16 }} align="left" >Shift</TableCell>
                                <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }, { fontWeight: 'medium' }, { padding: 16 }} align="center">:</TableCell>
                                <TableCell sx={{ padding: 1 }, { fontWeight: 'medium' }, { padding: 16 }} align="left"></TableCell>
                            </TableRow>

                            <TableRow className="sidebarListItem">
                                <TableCell sx={{ padding: 1 }, { fontWeight: 'medium' }, { padding: 16 }} align="left">Product</TableCell>
                                <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }, { fontWeight: 'medium' }, { padding: 16 }} align="center">:</TableCell>
                                <TableCell sx={{ padding: 1 }, { fontWeight: 'medium' }, { padding: 16 }} align="left">Atlas Chooty</TableCell>
                            </TableRow>

                            <TableRow className="sidebarListItem">
                                <TableCell sx={{ padding: 1 }, { fontWeight: 'medium' }, { padding: 16 }} align="left">Shift Target</TableCell>
                                <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }, { fontWeight: 'medium' }, { padding: 16 }} align="center">:</TableCell>
                                <TableCell sx={{ padding: 1 }, { fontWeight: 'medium' }, { padding: 16 }} align="left">Nos</TableCell>
                            </TableRow>

                            <TableRow className="sidebarListItem">
                                <TableCell sx={{ padding: 1 }, { fontWeight: 'medium' }, { padding: 16 }} align="left">Hourly Target</TableCell>
                                <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }, { fontWeight: 'medium' }, { padding: 16 }} align="center">:</TableCell>
                                <TableCell sx={{ padding: 1 }, { fontWeight: 'medium' }, { padding: 16 }} align="left">Nos</TableCell>
                            </TableRow>

                            <TableRow className="sidebarListItem">
                                <TableCell sx={{ padding: 1 }, { fontWeight: 'medium' }, { padding: 16 }} align="left">Status</TableCell>
                                <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }, { fontWeight: 'medium' }, { padding: 16 }} align="center">:</TableCell>
                                <TableCell sx={{ padding: 1 }, { fontWeight: 'medium' }, { padding: 16 }} align="left">Running</TableCell>
                            </TableRow>

                            <TableRow className="sidebarListItem">
                                <TableCell sx={{ padding: 1 }, { fontWeight: 'medium' }, { padding: 16 }} align="left">Machine Speed</TableCell>
                                <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }, { fontWeight: 'medium' }, { padding: 16 }} align="center">:</TableCell>
                                <TableCell sx={{ padding: 1 }, { fontWeight: 'medium' }, { padding: 16 }} align="left"></TableCell>
                            </TableRow>

                            <TableRow className="sidebarListItem">
                                <TableCell sx={{ padding: 1 }, { fontWeight: 'medium' }, { padding: 16 }} align="left">Power Consumption</TableCell>
                                <TableCell sx={{ paddingTop: 1.5 , paddingBottom: 1.5 }, { fontWeight: 'medium' }, { padding: 16 }} align="center">:</TableCell>
                                <TableCell sx={{ padding: 1 }, { fontWeight: 'medium' }, { padding: 16 }} align="left"></TableCell>
                            </TableRow>

                        </TableHead>

                    </Table>
                </TableContainer> */}
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
