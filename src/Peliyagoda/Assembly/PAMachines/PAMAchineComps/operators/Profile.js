
import axios from "axios";
import React,{ useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import {Card,Button,CardGroup,Col, Row, Container}from 'react-bootstrap'
export default function Profile() {
    const [post,setPost]=useState([]);
    const {number}=useParams();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const url= 'http://localhost:5000/pa/time/'+number
        // axios.post(url, data)
        //      .then(res => {
        //         console.log(res);
        //         setPost(res.json())
        //      })
        //      .catch(err => {
        //         console.log(err);
        //      });
        axios.delete(url)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
      }) 
    }

    useEffect(() => {
        axios.get(`http://localhost:5001/users/`).then((response) => {
          setPost(response.data);
          
        });
    
    
        
      }, []);
  return (
    <div>Profile
    
        {number}
        <br/>
        

{post.map(item => {
          if(number===item.epfNum){
            return (     
                     
                <Col>
                  <CardGroup>              
                    <Card style={{ width: '18rem' }}>
                      <Card.Img height={100} width={30} align='center' variant="top" src={'/images/'+item.photo} />
                        <Card.Body>
                          <Card.Title>
                                  
                              
                                  <h2>{item.name}</h2>
                                  </Card.Title>
                          <Card.Text>
                            {item.epfNum }
                            <button onClick={handleSubmit}>delete</button>
                          </Card.Text>
                        </Card.Body>
                     </Card>  
                  </CardGroup>
                </Col>
              );
          }
        })}
        
    </div>
   
  )
}
