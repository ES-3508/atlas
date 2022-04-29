import React from 'react'
import "./QualityOee.css"


import { useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap'

import { LineChart, Line, XAxis, CartesianGrid, Tooltip, YAxis, ResponsiveContainer } from 'recharts'
import { Link } from "react-router-dom";
import mqtt from 'mqtt';
import GaugeChart from 'react-gauge-chart';

function QualityOee() {

    const [ valuex, setValuex ] = useState();
    //const [data,setData]=useState();
    const data = [];

const rand = 300;
for (let i = 0; i < 7; i++) {
  let d = {
    year: 2000 + i,
    value: Math.random() * (rand + 50) + 100
  };

  data.push(d);
}

    useEffect(() => {

        const client = mqtt.connect('ws://192.168.8.110:8083/mqtt')
        const topic1="data/pa08/pa08dash/0808";
        client.on('connect', function() {
        client.subscribe(topic1);
        console.log("Client has subscribed")
        });

        client.on('message', (topic, message) => {
        handleJsonMessage(JSON.parse(message.toString()));
        

        });
    },[])
  

    const handleJsonMessage = (json) => {      
        setValuex(json.qualHourly)
        
    }

    return (
        <div >
            <Card className="Performance_card">
                <Card.Body>
            <Row>
                <Card className="Performance_title">
                    <Card.Body>
                    <Card.Title>QualityOee</Card.Title>

                    
                    </Card.Body>
                </Card>

            </Row>
            
            <Row>
            <Card className="gauge_chart">
                <Card.Body>
                <Row className="overall_gauge_chart">
                    {/* <div className="overall_gauge_chart"> */}
                        <ResponsiveContainer width="100%" aspect={4/1}>
                            <GaugeChart id="gauge_chart_oee" 
                                nrOfLevels={200}
                                arcPadding={0} 
                                cornerRadius={0}
                                colors={["#FF0000", "#00FF00"]} 
                                arcWidth={0.2} 
                                percent={valuex/100} 
                                textColor={"000000"}
                                needleColor={"#757575"}
                                needleBaseColor={"#c2ac6b"}
                                animate={true}
                            />
                        </ResponsiveContainer>
                    {/* </div> */}
                    </Row>
                </Card.Body>
            </Card>
            </Row>
            
            <Row>
            <Card >
                
                <Card.Body>
                    <ResponsiveContainer width="100%" aspect={5 / 2}>
                        {/* <LineChart data={data} margin={{ right: 3}} >
                            <XAxis dataKey='name' />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey='value' stroke="#003366" strokeWidth={2} activeDot={{ r: 8 }} fill="#003366"/>
                        </LineChart> */}
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
                           <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
                           <XAxis dataKey="year" />
                           <YAxis />
                           </LineChart>
                    </ResponsiveContainer>
                </Card.Body>
            </Card>
            </Row>

            {/* <div className="availability_tile"> <span className="Title_1">Availability</span></div>
                <div className="gauge_chart"></div>
                <div className="line_chart"></div>
                 */}
           </Card.Body>
            </Card> 
        </div>
    )
}

export default QualityOee
