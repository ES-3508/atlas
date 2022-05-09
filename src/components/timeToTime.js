import React, { Component } from 'react';
import axios from 'axios';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material/styles";
import Stack from '@mui/material/Stack';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default class TimeToTime extends Component {
    state = {
        progress: []
      }
      
    
      componentDidMount() {
        axios.get(`http://localhost:4000/pa08/time/`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
            console.log(persons);
          })
      }
  render() {
    return (
      <div>
        timeToTime
        
        
        {this.state.progress.map(item => {
            return (
              <Box sx={{ width: '100%' }}>
                <LinearProgress variant="determinate" value= { item.Time_from} />
              </Box>
              
               
                
            );
          })}
       </div>
      
    )
  }
}
