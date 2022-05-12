import React, { Component } from 'react';
import axios from 'axios';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material/styles";
import Stack from '@mui/material/Stack';
import { TableRow, Typography } from '@mui/material';
import {Card,Button,CardGroup,Col, Row, Image,Container}from 'react-bootstrap'
import Search from './Search';
import { Link } from 'react-router-dom';




export default class Photos extends Component {
    state = {
        post: []
      }
    
      componentDidMount() {
        axios.get(`http://localhost:5000/users/`)
          .then(res => {
            const post = res.data;
            this.setState({ post });
            console.log(post);
          })
      }
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
        <h1>Operators</h1>
        <Search  details={this.state.post}/>
        
        
        {this.state.post.map(item => {
          return (
               
              <Col>
                <CardGroup>              
                  <Card style={{ width: '18rem' }}>
                    <Image src={'/images/'+item.photo} style={{
        maxHeight: 300,
        margin: "0 auto",
        background: "#fff",
        padding: "30px 10px"
      }}/>
                    {/* <Card.Img height={400} width={400} align='center' variant="top" src={'/images/'+item.photo} /> */}
                      <Card.Body>
                        <Card.Title><Link className="link" to={'operators/'+item.epfNum} >
                                
                            
                                <h2>{item.name}</h2>
                                </Link></Card.Title>
                        <Card.Text>
                          {item.epfNum }
                        </Card.Text>
                      </Card.Body>
                   </Card>  
                </CardGroup>
              </Col>
            );
        })}
        </Row>
       </Container>
      
    )
  }
}
