import { Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import axios from 'axios'

const normalise = (value) => ((value - 0) * 100) / (6750 - 0);

// Example component that utilizes the `normalise` function at the point of render.
function LinearProgress(props) {
  return (
    <React.Fragment>
      <Typography>
          From {props.timeFrom} to {props.timeTo}
      </Typography>
      <LinearProgress variant="determinate" value={normalise(props.value)} />
      <Typography>
        {props.value} qts
      </Typography>
    </React.Fragment>
  );
}

export default class TimeToTime extends Component {
    state = {
            progress: []
      }
    
      componentDidMount() {
        axios.get(`http://localhost:5000/pa08/time`)
          .then(res => {
            const progress = res.data
            this.setState({ progress });
            console.log(progress);
           ;
           })
      }
  render() {
    return (
      <div>timeToTime
      {this.state.progress.map(item => {
        return (
            <Row key={item._id}>
                <LinearProgress value={item.FinalOutput} timeFrom={item.time_from} timeTo={item.time_to} />
            </Row>
          
        );
      })}
      </div>
    )
  }
}
