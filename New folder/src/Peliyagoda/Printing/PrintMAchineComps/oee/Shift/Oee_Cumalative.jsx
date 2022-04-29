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

var data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, name1, name2, name3, name4, name5, name6, name7, name8, name9,  name10, name11, name12, name13, topicx;
// var pa0M, jsonPa0M, topicd;

var data = [];

const ENDPOINT1 = "http://127.0.0.1:5026";
const ENDPOINT29 = "http://127.0.0.1:5055";
const ENDPOINT30 = "http://127.0.0.1:5056";
const ENDPOINT31 = "http://127.0.0.1:5057";
const ENDPOINT33 = "http://127.0.0.1:5059";



export default function Oee(props) {

    const today = new Date();
      const hour = today.getHours();
      const minute = today.getMinutes();
      const sec = today.getSeconds();

    const [oee, setOee] = useState();
    const [oeeC1, setOeeC1] = useState();
    const [oeeC2, setOeeC2] = useState();
    const [oeeC3, setOeeC3] = useState();
    const [oeeC4, setOeeC4] = useState();
    const [oeeC5, setOeeC5] = useState();
    const [oeeC6, setOeeC6] = useState();
    const [oeeC7, setOeeC7] = useState();
    const [oeeC8, setOeeC8] = useState();
    const [oeeC9, setOeeC9] = useState();
    const [oeeC10, setOeeC10] = useState();
    const [oeeC11, setOeeC11] = useState();
    const [oeeC12, setOeeC12] = useState();
    const [oeeC13, setOeeC13] = useState();

    if (props.pa01){

      // console.log(props.pa01)
      topicx = '+/fm08/fm08dash/008'

      const socket = socketIOClient(ENDPOINT1);
      // console.log(socket, "pa04open", ENDPOINT1)
      socket.on("json", data => {
        setOeeC1(data.datasoeeprog1)
        setOeeC2(data.datasoeeprog2)
        setOeeC3(data.datasoeeprog3)
        setOeeC4(data.datasoeeprog4)
        setOeeC5(data.datasoeeprog5)
        setOeeC6(data.datasoeeprog6)
        setOeeC7(data.datasoeeprog7)
        setOeeC8(data.datasoeeprog8)
        setOeeC9(data.datasoeeprog9)
        setOeeC10(data.datasoeeprog10)
        setOeeC11(data.datasoeeprog11)
        setOeeC12(data.datasoeeprog12)
        setOeeC13(data.datasoeeprog13)

      })
  }

  if (props.pa29){

    // console.log(props.pa02)
    topicx = '+/web4/web4dash/0404'

    const socket = socketIOClient(ENDPOINT29);
    // console.log(socket, "pa04open", ENDPOINT1)
    socket.on("json", data => {
      setOeeC1(data.datasoeeprog1)
      setOeeC2(data.datasoeeprog2)
      setOeeC3(data.datasoeeprog3)
      setOeeC4(data.datasoeeprog4)
      setOeeC5(data.datasoeeprog5)
      setOeeC6(data.datasoeeprog6)
      setOeeC7(data.datasoeeprog7)
      setOeeC8(data.datasoeeprog8)
      setOeeC9(data.datasoeeprog9)
      setOeeC10(data.datasoeeprog10)
      setOeeC11(data.datasoeeprog11)
      setOeeC12(data.datasoeeprog12)
      setOeeC13(data.datasoeeprog13)

    })
}

  if (props.pa30){

      // console.log(props.pa02)
      topicx = '+/web2/web4dash/0202'

      const socket = socketIOClient(ENDPOINT30);
      // console.log(socket, "pa04open", ENDPOINT1)
      socket.on("json", data => {
        setOeeC1(data.datasoeeprog1)
        setOeeC2(data.datasoeeprog2)
        setOeeC3(data.datasoeeprog3)
        setOeeC4(data.datasoeeprog4)
        setOeeC5(data.datasoeeprog5)
        setOeeC6(data.datasoeeprog6)
        setOeeC7(data.datasoeeprog7)
        setOeeC8(data.datasoeeprog8)
        setOeeC9(data.datasoeeprog9)
        setOeeC10(data.datasoeeprog10)
        setOeeC11(data.datasoeeprog11)
        setOeeC12(data.datasoeeprog12)
        setOeeC13(data.datasoeeprog13)

      })
  }

  if (props.pa31){

      // console.log(props.pa03)
      topicx = '+/bm02/bm02dash/1234'

      const socket = socketIOClient(ENDPOINT31);
      // console.log(socket, "pa04open", ENDPOINT1)
      socket.on("json", data => {
        setOeeC1(data.datasoeeprog1)
        setOeeC2(data.datasoeeprog2)
        setOeeC3(data.datasoeeprog3)
        setOeeC4(data.datasoeeprog4)
        setOeeC5(data.datasoeeprog5)
        setOeeC6(data.datasoeeprog6)
        setOeeC7(data.datasoeeprog7)
        setOeeC8(data.datasoeeprog8)
        setOeeC9(data.datasoeeprog9)
        setOeeC10(data.datasoeeprog10)
        setOeeC11(data.datasoeeprog11)
        setOeeC12(data.datasoeeprog12)
        setOeeC13(data.datasoeeprog13)

      })
  }

  if (props.pa33){

      // console.log(props.pa04)
      topicx = '+/uv01/uv01dash/001'
      // topicpa1 = 'data/pa04/pa04dash/0404'
     
  }
    // if (props.pa05){

    //     // console.log(props.pa05)
    //     topicx = '+/pa05/pa05dash/0505'
    //     // topicd = 'data/pa05/pa05dash/0505'
    // }
    // if (props.pa06){

    //     // console.log(props.pa06)
    //     topicx = '+/pa06/pa06dash/0606'
    //     // topicd = 'data/pa06/pa06dash/0606'
    // }
    // if (props.pa07){

    //     // console.log(props.pa07)
    //     topicx = '+/pa07/pa07dash/0707'
    //     // topicd = 'data/pa07/pa07dash/0707'
    // }
    // if (props.pa08){

    //     // console.log(props.pa08)
    //     topicx = '+/pa08/pa08dash/0808'
    //     // topicd = 'data/pa08/pa08dash/0808'

    //     const socket = socketIOClient(ENDPOINT2);
    //     // console.log(socket, "pa08open", ENDPOINT2)
    //     socket.on("json", data => {
    //         setOeeC1(data.datasoeeprog1)
    //         setOeeC2(data.datasoeeprog2)
    //         setOeeC3(data.datasoeeprog3)
    //         setOeeC4(data.datasoeeprog4)
    //         setOeeC5(data.datasoeeprog5)
    //         setOeeC6(data.datasoeeprog6)
    //         setOeeC7(data.datasoeeprog7)
    //         setOeeC8(data.datasoeeprog8)
    //         setOeeC9(data.datasoeeprog9)
    //         setOeeC10(data.datasoeeprog10)
    //         setOeeC11(data.datasoeeprog11)
    //         setOeeC12(data.datasoeeprog12)
    //         setOeeC13(data.datasoeeprog13)

    //     })
    // }
    // if (props.pa09){

    //     // console.log(props.pa09)
    //     topicx = '+/pa09/pa09dash/0909'
    //     // topicd = 'data/pa09/pa09dash/0909'
    // }

    useEffect(() => {
              
        const client = mqtt.connect('ws://192.168.8.110:8083/mqtt')
    
        client.on("connect", () => {
            console.log("connected");
            client.subscribe(topicx);
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
          setOee(json.oeeCumalative)
          // console.log(json);

            if (((hour === 7) && (minute === 0) && (sec === 0)) || ((hour === 19) && (minute === 0) && (sec === 0))) {
              window.location.reload(false);
            }

            if ((hour === 7) || (hour === 8) || (hour === 9) || (hour === 10) || (hour === 11) || (hour === 12) || (hour === 13) || (hour === 14) || (hour === 15) || (hour === 16)|| (hour === 17) || (hour === 18)) {
             
              name1 = '7';
              name2 = '8';
              name3 = '9';
              name4 = '10';
              name5 = '11';
              name6 = '12';
              name7 = '13';
              name8 = '14';
              name9 = '15';
              name10 = '16';
              name11 = '17';
              name11 = '18';

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
              name13 = '7';

            }
          
          }

          if ((hour === 7) || (hour === 19)) {
            data1 = oeeC1;
          }
          
          if ((hour === 8) || (hour === 20)) {
            data2 = oeeC2;
          }

          if ((hour === 9) || (hour === 21)) {
            data3 = oeeC3;
          }

          if ((hour === 10) || (hour === 22)) {
            data4 = oeeC4;
          }
          
          if ((hour === 11) || (hour === 23)) {
            data5 = oeeC5;
          }
          
          if ((hour === 12) || (hour === 0)) {
            data6 = oeeC6;
          }
          
          if ((hour === 13) || (hour === 1)) {
            data7 = oeeC7;
          }
          
          if ((hour === 14) || (hour === 2)) {
            data8 = oeeC8;
          }
          
          if ((hour === 15) || (hour === 3)) {
            data9 = oeeC9;
          }
          
          if ((hour === 16) || (hour === 4)) {
            data10 = oeeC10;
          }
          
          if ((hour === 17) || (hour === 5)) {
            data11 = oeeC11;
          }

          if ((hour === 18) || (hour === 6)) {
            data12 = oeeC12;
          }

          if ((hour === 17) || (hour === 7)) {
            data13 = oeeC13;
          }
        

        data = [
          
          {
            name: name1,
            value: oeeC1,
          },
          {
            name: name2,
            value: oeeC2,
          },
          {
            name: name3,
            value: oeeC3,
          },
          {
            name: name4,
            value: oeeC4,
          },
          {
            name: name5,
            value: oeeC5,
          },
          {
            name: name6,
            value: oeeC6,
          },
          {
            name: name7,
            value: oeeC7,             
          },
          {
            name: name8,
            value: oeeC8,              
          },
          {
            name:name9,
            value: oeeC9,             
          },
          {
            name: name10,
            value: oeeC10,             
          },
          {
            name: name11,
            value: oeeC11,             
          },
          {
            name: name12,
            value: oeeC12,      
          },
          {
            name: name13,
            value: oeeC13,      
          },
        
        ];



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
                            <Line type="monotone" dataKey='value' stroke="#003366" strokeWidth={2} activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                        
                        </div>
                    </Row>
                </Card.Body>
            </Card>
        
    )
}

