import React from 'react'
import "./oee.css"
import "./ochart.css"
import { Card, Row, Col } from 'react-bootstrap'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, YAxis, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom";
import mqtt from 'mqtt'
import { useEffect, useState } from 'react';
import GaugeChart from 'react-gauge-chart'
import socketIOClient from "socket.io-client";

var topicd, topicd4, topicd8, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, name1, name2, name3, name4, name5, name6, name7, name8, name9,  name10, name11, name12, name13, topic;
var pa0M, jsonPa0M;




var data = [];

const ENDPOINT1 = "http://127.0.0.1:5004";
const ENDPOINT2 = "http://127.0.0.1:5008";


export default function Oee(props) {

    const today = new Date();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const sec = today.getSeconds();

    const [oee, setOee] = useState();
    
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

        });

    
        return () => {
            if(client)
            client.end() 
        }
        },[])

        const handleJsonMessage = (json) => {
            setOee(json.oeeHourly)
            // // console.log(json);
            // // console.log("OEE VALUES"+ oeeH7)
        }

            if (((hour === 7) && (minute === 0) && (sec === 0)) || ((hour === 19) && (minute === 0) && (sec === 0))) {
              window.location.reload(false);
            }

            if ((hour === 7) || (hour === 8) || (hour === 9) || (hour === 10) || (hour === 11) || (hour === 12) || (hour === 13) || (hour === 14) || (hour === 15) || (hour === 16)|| (hour === 17) || (hour === 18)) {
             
              name1 = '8';
              name2 = '9';
              name3 = '10';
              name4 = '11';
              name5 = '12';
              name6 = '13';
              name7 = '14';
              name8 = '15';
              name9 = '16';
              name10 = '17';
              name11 = '18';
              // name12 = '19';

            }


        
          // // console.log("OEE VALUES"+ oeeH1, oeeH2, oeeH3, oeeH4, oeeH5, oeeH6, oeeH7)
          // // console.log("OEE VALUES"+ data1, data2, data3, data4, data5, data6, data7)

    return (
      
            <Card className="oee" >
                <Card.Header>
                    <Row>
                            <Col className="titlemainoee" ><Card.Title><h2>OEE</h2></Card.Title></Col> 
                            <Col className="oee_icon" > <Link className="link" to={{ pathname: '/pa04oee'} } ><PlayCircleOutlineIcon/></Link></Col>
                    </Row>
                </Card.Header>
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
                                percent={oee/100} 
                                textColor={"000000"}
                                needleColor={"#757575"}
                                needleBaseColor={"#c2ac6b"}
                                animate={true}
                            />
                        </ResponsiveContainer>
                    {/* </div> */}
                    </Row>
                    <Row >
                        <div className="oeechart">
                      
                        {/* <ResponsiveContainer width="100%" aspect={5 / 1.8}>
                            <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey='name' />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey='value' stroke="#003366" strokeWidth={2} activeDot={{ r: 8 }} fill="#003366"/>
                            </LineChart>
                        </ResponsiveContainer> */}
                        
                        </div>
                    </Row>
                </Card.Body>
            </Card>
        
    )
}

