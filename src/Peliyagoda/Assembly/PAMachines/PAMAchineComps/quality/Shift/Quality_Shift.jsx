import React from 'react'
import "./quality.css"
// import Rejections from "./Rejections_Shift"
// import MinorStoppages from "./MinorStoppages_Shift"
// import Breakdown from "./Breakdown_Shift"
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

    var x,t;

    if(props.topic){
        t=props.topic
        //"data/pa07/pa07dash/0808";
        x="data/"+t+'/'+t+"dash/"+t.slice(-2)+t.slice(-2)
       
    }
    

    useEffect(() => {
            
        const client = mqtt.connect('ws://192.168.8.110:8083/mqtt')

        client.on("connect", () => {
            // console.log("connected");
            client.subscribe(x);
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
            setAirstoppage(json.airStopHourly)
            setCapstoppage(json.capStopHourly)
            setStopperstoppage(json.stopperStopHourly)
            setRefilstoppage(json.refilStopHourly)
            setLabelstoppage(json.labelStopHourly)
            setCountstoppage(json.countStopHourly)
            setRefillrejection(json.refillHourly)
            setPlugrejection(json.plugHourly)
            setCaprejection(json.capHourly)
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