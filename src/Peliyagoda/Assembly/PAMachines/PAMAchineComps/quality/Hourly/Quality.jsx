import React from 'react'
import "./quality.css"
// import Rejections from "./Rejections"
// import MinorStoppages from "./MinorStoppages"
// import Breakdown from "./Breakdown"
import mqtt from 'mqtt'
import { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

var topic

export default function Quality(props) {

    const [breakdown, setBreakdown] = useState();
    const [refillrejection, setRefillrejection] = useState();
    const [plugrejection, setPlugrejection] = useState();
    const [caprejection, setCaprejection] = useState();
    const [airstoppage, setAirstoppage] = useState();
    const [capstoppage, setCapstoppage] = useState();
    const [stopperstoppage, setStopperstoppage] = useState();
    const [refilstoppage, setRefilstoppage] = useState();
    const [labelstoppage, setLabelstoppage] = useState();
    const [countstoppage, setCountstoppage] = useState();

    if (props.pa01){

        // console.log(props.pa01)
        topic = '+/pa01/pa01dash/0101'

    }
    if (props.pa02){

        // console.log(props.pa02)
        topic = '+/pa02/pa02dash/0202'

    }
    if (props.pa03){

        // console.log(props.pa03)
        topic = '+/pa03/pa03dash/0303'

    }
    if (props.pa04){

        // console.log(props.pa04)
        topic = '+/pa04/pa04dash/0404'

    }
    if (props.pa05){

        // console.log(props.pa05)
        topic = '+/pa05/pa05dash/0505'

    }
    if (props.pa06){

        // console.log(props.pa06)
        topic = '+/pa06/pa06dash/0606'

    }
    if (props.pa07){

        // console.log(props.pa07)
        topic = '+/pa07/pa07dash/0707'

    }
    if (props.pa08){

        // console.log(props.pa08)
        topic = '+/pa08/pa08dash/0808'

    }
    if (props.pa09){

        // console.log(props.pa09)
        topic = '+/pa09/pa09dash/0909'

    }

    useEffect(() => {
            
        const client = mqtt.connect('ws://192.168.8.110:8083/mqtt')

        client.on("connect", () => {
            // console.log("connected");
            client.subscribe(topic);
        });

        client.on('message', (topic, message) => {
            
        handleJsonMessage(JSON.parse(message.toString()));
        //console.log(message);
        });


        return () => {
            if(client)
            client.end() 
        }
        },[])

        const handleJsonMessage = (json) => {
            setBreakdown()
            setRefillrejection(json.refillShift)
            setPlugrejection(json.plugShift)
            setCaprejection(json.capShift)
            setAirstoppage(json.airStopShift)
            setCapstoppage(json.capStopShift)
            setStopperstoppage(json.stopperStopShift)
            setRefilstoppage(json.refilStopShift)
            setLabelstoppage(json.labelStopShift)
            setCountstoppage(json.countStopShift)
            // console.log(json);
        }

    return (

        <Card className="quality">
            <Card.Body>
                <Row>
                    <div className="marginsx">
                        <Card.Title>
                            <h4>REJECTIONS</h4>
                        </Card.Title>
                    </div>
                </Row>
                <Row>
                    {/* <Card> */}
                    <div className="marginsy">
                    {/* <Card.Body> */}
                        <Row>
                            <Col xs={11} md={11} >
                                {/* <h4><Rejections/></h4> */}
                                <div className="tile">
                                <h4><span className="rejectionCount">{Math.abs(refillrejection) + Math.abs(plugrejection) + Math.abs(caprejection)}</span></h4>
                                    {/* <span className="playCircleOutIcon" > <PlayCircleOutlineIcon/></span> */}
                                </div>
                            </Col> 
                            <Col xs={1} md={1} ><PlayCircleOutlineIcon/></Col>
                        </Row>
                    {/* </Card.Body> */}
                    </div>
                    {/* </Card> */}
                </Row>
                <Row >
                    <div className="marginsx">
                        <Card.Title>
                            <h4>MINOR STOPPAGES</h4>
                        </Card.Title>
                    </div>
                    
                </Row>
                <Row>
                    {/* <Card> */}
                    <div className="marginsy">
                        {/* <Card.Body> */}
                        {/* <h4><MinorStoppages/></h4> */}
                        <div className="tile">
                            <h4><span className="minorStoppages_value">{Math.round((Math.abs(airstoppage) + Math.abs(capstoppage) + Math.abs(stopperstoppage) + Math.abs(refilstoppage) + Math.abs(labelstoppage) + Math.abs(countstoppage))/60)} min</span></h4>
                            {/* <h4><span className="minorStoppages">min</span></h4> */}
                        </div>
                        {/* </Card.Body> */}
                    </div>
                    {/* </Card> */}
                </Row>
                <Row> 
                    <div className="marginsx">
                        <Card.Title>
                            <h4>BREAKDOWN</h4>
                        </Card.Title>
                    </div>
                </Row>
                <Row>
                    {/* <Card> */}
                        <div className="marginsy">
                        {/* <Card.Body> */}
                        <Row>
                            <Col xs={11} md={11} >
                                {/* <h4><Breakdown/></h4> */}
                                <div className="tile">
                                    <h4><span className="breakdown_value">{breakdown} min</span></h4>
                                    {/* <h4><span className="breakdown">min</span></h4> */}
                                    {/* <span className="playCircleOutIcon_3" > <PlayCircleOutlineIcon/></span> */}
                                </div>
                            </Col>

                            <Col xs={1} md={1} ><PlayCircleOutlineIcon/></Col>
                        </Row>
                        {/* </Card.Body> */}
                        </div>
                    {/* </Card> */}
                </Row>
            </Card.Body>
        </Card>

    )
}
