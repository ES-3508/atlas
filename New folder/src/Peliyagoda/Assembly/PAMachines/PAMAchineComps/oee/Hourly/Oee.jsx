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
    const [oeeH1, setOeeH1] = useState();
    const [oeeH2, setOeeH2] = useState();
    const [oeeH3, setOeeH3] = useState();
    const [oeeH4, setOeeH4] = useState();
    const [oeeH5, setOeeH5] = useState();
    const [oeeH6, setOeeH6] = useState();
    const [oeeH7, setOeeH7] = useState();
    const [oeeH8, setOeeH8] = useState();
    const [oeeH9, setOeeH9] = useState();
    const [oeeH10, setOeeH10] = useState();
    const [oeeH11, setOeeH11] = useState();
    const [oeeH12, setOeeH12] = useState();
    const [oeeH13, setOeeH13] = useState();


    if (props.pa01){

        // // console.log(props.pa01)
        topic = '+/pa01/pa01dash/0101'
        // topicd = 'data/pa01/pa01dash/0101'
    }
    if (props.pa02){

        // // console.log(props.pa02)
        topic = '+/pa02/pa02dash/0202'
        // topicd = 'data/pa02/pa02dash/0202'
    }
    if (props.pa03){

        // // console.log(props.pa03)
        topic = '+/pa03/pa03dash/0303'
        // topicd = 'data/pa03/pa03dash/0303'
    }
    if (props.pa04){

        // // console.log(props.pa04)
        topic = '+/pa04/pa04dash/0404'
        // topicd4 = 'data/pa04/pa04dash/0404'

        const socket = socketIOClient(ENDPOINT1);
        // // console.log(socket, "pa04open", ENDPOINT1)
        socket.on("json", data => {
            setOeeH1(data.dataoeeprog1)
            setOeeH2(data.dataoeeprog2)
            setOeeH3(data.dataoeeprog3)
            setOeeH4(data.dataoeeprog4)
            setOeeH5(data.dataoeeprog5)
            setOeeH6(data.dataoeeprog6)
            setOeeH7(data.dataoeeprog7)
            setOeeH8(data.dataoeeprog8)
            setOeeH9(data.dataoeeprog9)
            setOeeH10(data.dataoeeprog10)
            setOeeH11(data.dataoeeprog11)
            setOeeH12(data.dataoeeprog12)
            setOeeH13(data.dataoeeprog13)
            // // console.log(data.dataoeeprog1)
        })
        
    }
    if (props.pa05){

        // // console.log(props.pa05)
        topic = '+/pa05/pa05dash/0505'
        // topicd = 'data/pa05/pa05dash/0505'
    }
    if (props.pa06){

        // // console.log(props.pa06)
        topic = '+/pa06/pa06dash/0606'
        // topicd = 'data/pa06/pa06dash/0606'
    }
    if (props.pa07){

        // // console.log(props.pa07)
        topic = '+/pa07/pa07dash/0707'
        // topicd8 = 'data/pa07/pa07dash/0707'
    }
    if (props.pa08){

        // // console.log(props.pa08)
        topic = '+/pa08/pa08dash/0808'
        // topicd8 = 'data/pa08/pa08dash/0808'

        const socket = socketIOClient(ENDPOINT2);
        // // console.log(socket, "pa08open", ENDPOINT2)
        socket.on("json", data => {
            setOeeH1(data.dataoeeprog1)
            setOeeH2(data.dataoeeprog2)
            setOeeH3(data.dataoeeprog3)
            setOeeH4(data.dataoeeprog4)
            setOeeH5(data.dataoeeprog5)
            setOeeH6(data.dataoeeprog6)
            setOeeH7(data.dataoeeprog7)
            setOeeH8(data.dataoeeprog8)
            setOeeH9(data.dataoeeprog9)
            setOeeH10(data.dataoeeprog10)
            setOeeH11(data.dataoeeprog11)
            setOeeH12(data.dataoeeprog12)
            setOeeH13(data.dataoeeprog13)
            // // console.log(data.dataoeeprog1)
        })

    }
    if (props.pa09){

        // // console.log(props.pa09)
        topic = '+/pa09/pa09dash/0909'
        topicd = 'data/pa09/pa09dash/0909'
    }


    useEffect(() => {

        const client = mqtt.connect('ws://192.168.8.110:8083/mqtt')
    
        client.on("connect", () => {
            // console.log("connected");
            client.subscribe(topic);
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

            if ((hour === 19) || (hour === 20) || (hour === 21) || (hour === 22) || (hour === 23) || (hour === 0) || (hour === 1) || (hour === 2) || (hour === 3) || (hour === 4)|| (hour === 5) || (hour === 6) || (hour === 7)) {
              
              name1 = '19';
              name2 = '20';
              name3 = '21';
              name4 = '22';
              name5 = '23';
              name6 = '0';
              name7 = '1';
              name8 = '2';
              name9 = '3';
              name10 = '4';
              name11 = '5';
              name11 = '6';
              name12 = '7';
              // name13 = '7';

            }
            
            }

            if ((hour === 7) || (hour === 19)) {
              data1 = oeeH1;
            }
            
            if ((hour === 8) || (hour === 20)) {
              data2 = oeeH2;
            }

            if ((hour === 9) || (hour === 21)) {
              data3 = oeeH3;
            }

            if ((hour === 10) || (hour === 22)) {
              data4 = oeeH4;
            }
            
            if ((hour === 11) || (hour === 23)) {
              data5 = oeeH5;
            }
            
            if ((hour === 12) || (hour === 0)) {
              data6 = oeeH6;
            }
            
            if ((hour === 13) || (hour === 1)) {
              data7 = oeeH7;
            }
            
            if ((hour === 14) || (hour === 2)) {
              data8 = oeeH8;
            }
            
            if ((hour === 15) || (hour === 3)) {
              data9 = oeeH9;
            }
            
            if ((hour === 16) || (hour === 4)) {
              data10 = oeeH10;
            }
            
            if ((hour === 17) || (hour === 5)) {
              data11 = oeeH11;
            }

            if ((hour === 18) || (hour === 6)) {
              data12 = oeeH12;
            }

            if ((hour === 17) || (hour === 7)) {
              data13 = oeeH13;
            }
          

          data = [
            
            {
              name: name1,
              value: oeeH1,
            },
            {
              name: name2,
              value: oeeH2,
            },
            {
              name: name3,
              value: oeeH3,
            },
            {
              name: name4,
              value: oeeH4,
            },
            {
              name: name5,
              value: oeeH5,
            },
            {
              name: name6,
              value: oeeH6,
            },
            {
              name: name7,
              value: oeeH7,             
            },
            {
              name: name8,
              value: oeeH8,              
            },
            {
              name:name9,
              value: oeeH9,             
            },
            {
              name: name10,
              value: oeeH10,             
            },
            {
              name: name11,
              value: oeeH11,             
            },
            {
              name: name12,
              value: oeeH12,      
            },
            {
              name: name13,
              value: oeeH13,      
            },
          
          ];

        
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
                      
                        <ResponsiveContainer width="100%" aspect={5 / 1.8}>
                            <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey='name' />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey='value' stroke="#003366" strokeWidth={2} activeDot={{ r: 8 }} fill="#003366"/>
                            </LineChart>
                        </ResponsiveContainer>
                        
                        </div>
                    </Row>
                </Card.Body>
            </Card>
        
    )
}

