import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import mqtt from 'mqtt'
import socketIOClient from "socket.io-client";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from 'react';

const ENDPOINT = "http://127.0.0.1:5054";

var shiftprogbar, shiftvalbar, topic

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

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <BorderLinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={45}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LinearWithValueLabel(props) {

  const classes = useStyles();
  const [shiftprog, setShiftprog] = useState();
  const [sshiftqt, setSshiftqt] = useState();
  const [response, setResponse] = useState();
  const [responsec, setResponsec] = useState();
  const [responsem, setResponsem] = useState();

      if (props.probarpa01){

          console.log(props.probarpa01)
          topic = '+/pa01/pa01dash/0101'

      }
      if (props.probarpa02){

          console.log(props.probarpa02)
          topic = '+/pa02/pa02dash/0202'

      }
      if (props.probarpa03){

          console.log(props.probarpa03)
          topic = '+/pa03/pa03dash/0303'

      }
      if (props.probarpa04){

          console.log(props.probarpa04)
          topic = '+/pa04/pa04dash/0404'

      }
      if (props.probarpa05){

          console.log(props.probarpa05)
          topic = '+/pa05/pa05dash/0505'

      }
      if (props.probarpa06){

          console.log(props.probarpa06)
          topic = '+/pa06/pa06dash/0606'

      }
      if (props.probarpa07){

          console.log(props.probarpa07)
          topic = '+/pa07/pa07dash/0707'

      }
      if (props.probarpa08){

          console.log(props.probarpa08)
          topic = '+/pa08/pa08dash/0808'

      }
      if (props.probarpa09){

          console.log(props.probarpa09)
          topic = '+/pa09/pa09dash/0909'

      }
    
    useEffect(() => {
        
        const client = mqtt.connect('ws://192.168.8.110:8083/mqtt')
    
        client.on("connect", () => {
            // console.log("connected");
            client.subscribe(topic);
        });
    
        client.on('message', (topic, message) => {
            
           handleJsonMessage(JSON.parse(message.toString()));
           //console.log(message);
        });
    
        const socket = socketIOClient(ENDPOINT);
          socket.on("json", data => {
            setResponse(data.dataprodq)
            setResponsec(data.datac)
            setResponsem(data.datam)
            setSshiftqt(data.datasshift)
            // console.log(data.datav);
            // console.log(data.datac);
            // console.log(data.datam);
          });
    
        return () => {
            if(client)
            client.end() 
        }
        },[])

        const handleJsonMessage = (json) => {
            setShiftprog(json.productionShift)
          // console.log(json);
          }


          shiftvalbar = Math.round(response/3600)*((60*responsem) + responsec) + Math.abs(sshiftqt);

          if( ((shiftprog/shiftvalbar)*100) >= 80){
              shiftprogbar = "success";
          }else{
              shiftprogbar = "warning";
          }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setHourprog((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
  //   }, 800);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

    //   if( hourprog >= 80){
    //     hourprogbar = "primary";
    // }else{
    //     hourprogbar = "secondary";
    // }

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel color={shiftprogbar} value={(shiftprog/shiftvalbar)*100} />
    </div>
  );
}