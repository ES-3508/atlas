import React from 'react';
import axios from 'axios';
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { styled } from "@mui/material/styles";
import { Card, Row, Col } from 'react-bootstrap'
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const normalise = (value) => ((value - 0) * 100) / (6750 - 0);

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    // backgroundColor: theme.palette.mode === 'light' ? 'primary' : 'primary',
    },
}));

function LinearProgressWithLabe(props) {
    return (
      <Box display="flex" alignItems="center">
        <Box >
        <Typography variant="body2" color="textwarning" >
            {(props.Time_from.toString()+"-"+props.Time_to.toString())}
          </Typography>
        </Box>
        <Box width="100%" mr={1}>
          <BorderLinearProgress variant="determinate" value={ normalise(props.value)} />
        </Box>
        <Box minWidth={55}>
          <Typography variant="body2" color="textPrimary"> 
            {props.value}
            
          </Typography>
        </Box>
      </Box>
    );
  }

  // LinearProgressWithLabel1.propTypes = {
  //   value: PropTypes.object.isRequired,
  // };


export default class Time extends React.Component {
  state = {
    post: []
  }

  componentDidMount() {
    const url= `http://localhost:5000/pa/time/`+this.props.topic
    axios.get(url)
      .then(res => {
        const post = res.data;
        this.setState({ post });
      })
  }

  render() {
    return (
      <Row >
          
        {
          this.state.post
            .map(person =>
              <Row className="rowWidth">              
                <LinearProgressWithLabe value={person.Final_Output} Time_from={person.Time_from} Time_to={person.Time_to} valueS={person.Cummilative_Output } />
              </Row>          
            )
        }
      </Row>
    )
    
  }
}