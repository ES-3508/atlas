import axios from "axios";
import React,{ useEffect, useState } from "react";
import {Card,Button,CardGroup,Col,Image, Row, Container}from 'react-bootstrap'
import mqtt from 'mqtt/dist/mqtt'

const baseURL = `http://192.168.8.110:5000/users/img`;

export default function App(props) {

  var x,t;
  
    if(props.topic){
        t=props.topic
        //"data/pa07/pa07dash/0808";
        x="data/"+t+'/'+t+"dash/"+t.slice(-2)+t.slice(-2)       
    }
  const [post, setPost] = useState(null);
  const [number, setNumber] = useState("");

  const handleJsonMessage = (json) => {      
    setNumber(json.operator)
    
  }
  



  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      //console.log(number)
    });

    const client = mqtt.connect('ws://192.168.8.110:8083/mqtt')
        client.on('connect', function() {
        client.subscribe(x);
        console.log("Client has subscribed")
        });

        client.on('message', (topic, message) => {
        handleJsonMessage(JSON.parse(message.toString()));
        

        });
  }, []);
  function findOperator(operaotor){
    if (operaotor.epfNum== number){
      return operaotor
    }
    
  }
  //const operator = post.filter(x=> x.epfNum=='22');

  if (!post) return null;

  return (
    <div>
     <h1> Operator</h1>
     {number}
    

      {post.map(item => {
        if(item.epfNum===number){
          return (
            <Col>
                <CardGroup>              
                  <Card style={{ width: '18rem' }}>
                    {/* <Card.Img  roundedCircle='true'	
 align='center' variant="top" src={'/images/'+item.photo} /> */}
 <Col xs={6} md={4}>
      <Image src={'/images/'+item.photo} />
    </Col>
                      <Card.Body>
                        <Card.Title>{item.name }</Card.Title>
                        <Card.Text>
                          {item.epfNum }
                        </Card.Text>
                      </Card.Body>
                   </Card>  
                </CardGroup>
              </Col>
              
            
              
            );

        }
          
        })}
    </div>
  );
}