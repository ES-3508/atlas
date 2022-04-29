import React from 'react'
import "./production.css"
import "./hourly.css"
import "./shift.css"
import "./progress_bar.css"
import socketIOClient from "socket.io-client";
import mqtt from 'mqtt'
import { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { styled } from "@mui/material/styles";


// const ENDPOINT = "http://127.0.0.1:5054";

const ENDPOINT1 = "http://127.0.0.1:5026";
const ENDPOINT29 = "http://127.0.0.1:5055";
const ENDPOINT30 = "http://127.0.0.1:5056";
const ENDPOINT31 = "http://127.0.0.1:5057";
const ENDPOINT33 = "http://127.0.0.1:5059";


var valuebar, shiftvaluebar, topic, pathnmx, hourprogbar, valbar, shiftprogbar, shiftvalbar, timetotimeprogbar1, timetotimeprogbar2, timetotimeprogbar3, 
    timetotimeprogbar4, timetotimeprogbar5, timetotimeprogbar6, timetotimeprogbar7, timetotimeprogbar8, timetotimeprogbar9, timetotimeprogbar10, 
    timetotimeprogbar11, timetotimeprogbar12, timetotimeprogbar13, topicpr1, topicpr29, topicpr30, topicpr31, topicpr33;

// var topicpa1, topicpa2, jsonPa0M1, pa0M1, jsonPa0M2, pa0M2, timetotimeprogpa18, timetotimeprogpa19, timetotimeprogpa110, timetotimeprogpa111, timetotimeprogpa28, timetotimeprogpa29, timetotimeprogpa210, timetotimeprogpa211;

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

        // LinearProgressWithLabel.propTypes = {
        //   value: PropTypes.object.isRequired,
        // };

        function LinearProgressWithLabel1(props) {
            return (
              <Box display="flex" alignItems="center">
                <Box minWidth={55}>
                <Typography variant="body2" color="textPrimary" >{
                    props.time
                  }</Typography>
                </Box>
                <Box width="100%" mr={1}>
                  <BorderLinearProgress variant="determinate" {...props} />
                </Box>
                <Box minWidth={55}>
                  <Typography variant="body2" color="textPrimary">{`${Math.round(
                    props.value,
                  )}`}</Typography>
                </Box>
              </Box>
            );
          }
    
          // LinearProgressWithLabel1.propTypes = {
          //   value: PropTypes.object.isRequired,
          // };
    
          function LinearProgressWithLabel2(props) {
            return (
              <Box  display="flex" alignItems="center">
                <Box minWidth={55}>
                <Typography variant="body2" color="textwarning">{
                    props.time
                  }</Typography>
                </Box>
                <Box width="100%" mr={1}>
                  <BorderLinearProgress variant="determinate" {...props} />
                </Box>
                <Box minWidth={55}>
                  <Typography variant="body2" color="textwarning">{`${Math.round(
                    props.value,
                  )}`}</Typography>
                </Box>
              </Box>
            );
          }
    
          // LinearProgressWithLabel2.propTypes = {
          //   value: PropTypes.object.isRequired,
          // };
    
          function LinearProgressWithLabel3(props) {
            return (
              <Box  display="flex" alignItems="center">
                <Box minWidth={55}>
                <Typography variant="body2" color="textwarning">{
                    props.time
                  }</Typography>
                </Box>
                <Box width="100%" mr={1}>
                  <BorderLinearProgress variant="determinate" {...props} />
                </Box>
                <Box minWidth={55}>
                  <Typography variant="body2" color="textwarning">{`${Math.round(
                    props.value,
                  )}`}</Typography>
                </Box>
              </Box>
            );
          }
    
          // LinearProgressWithLabel3.propTypes = {
          //   value: PropTypes.object.isRequired,
          // };
    
          function LinearProgressWithLabel4(props) {
            return (
              <Box  display="flex" alignItems="center">
                <Box minWidth={55}>
                <Typography variant="body2" color="textwarning">{
                    props.time
                  }</Typography>
                </Box>
                <Box width="100%" mr={1}>
                  <BorderLinearProgress variant="determinate" {...props} />
                </Box>
                <Box minWidth={55}>
                  <Typography variant="body2" color="textwarning">{`${Math.round(
                    props.value,
                  )}`}</Typography>
                </Box>
              </Box>
            );
          }
    
          // LinearProgressWithLabel4.propTypes = {
          //   value: PropTypes.object.isRequired,
          // };
    
          function LinearProgressWithLabel5(props) {
            return (
              <Box  display="flex" alignItems="center">
                <Box minWidth={55}>
                <Typography variant="body2" color="textwarning">{
                    props.time
                  }</Typography>
                </Box>
                <Box width="100%" mr={1}>
                  <BorderLinearProgress variant="determinate" {...props} />
                </Box>
                <Box minWidth={55}>
                  <Typography variant="body2" color="textwarning">{`${Math.round(
                    props.value,
                  )}`}</Typography>
                </Box>
              </Box>
            );
          }
    
          // LinearProgressWithLabel5.propTypes = {
          //   value: PropTypes.object.isRequired,
          // };
    
          function LinearProgressWithLabel6(props) {
            return (
              <Box  display="flex" alignItems="center">
                <Box minWidth={55}>
                <Typography variant="body2" color="textwarning">{
                    props.time
                  }</Typography>
                </Box>
                <Box width="100%" mr={1}>
                  <BorderLinearProgress variant="determinate" {...props} />
                </Box>
                <Box minWidth={55}>
                  <Typography variant="body2" color="textwarning">{`${Math.round(
                    props.value,
                  )}`}</Typography>
                </Box>
              </Box>
            );
          }
    
          // LinearProgressWithLabel6.propTypes = {
          //   value: PropTypes.object.isRequired,
          // };
    
          function LinearProgressWithLabel7(props) {
            return (
              <Box  display="flex" alignItems="center">
                <Box minWidth={55}>
                <Typography variant="body2" color="textwarning">{
                    props.time
                  }</Typography>
                </Box>
                <Box width="100%" mr={1}>
                  <BorderLinearProgress variant="determinate" {...props} />
                </Box>
                <Box minWidth={55}>
                  <Typography variant="body2" color="textwarning">{`${Math.round(
                    props.value,
                  )}`}</Typography>
                </Box>
              </Box>
            );
          }
    
          // LinearProgressWithLabel7.propTypes = {
          //   value: PropTypes.object.isRequired,
          // };
    
          function LinearProgressWithLabel8(props) {
            return (
              <Box  display="flex" alignItems="center">
                <Box minWidth={55}>
                <Typography variant="body2" color="textwarning">{
                    props.time
                  }</Typography>
                </Box>
                <Box width="100%" mr={1}>
                  <BorderLinearProgress variant="determinate" {...props} />
                </Box>
                <Box minWidth={55}>
                  <Typography variant="body2" color="textwarning">{`${Math.round(
                    props.value,
                  )}`}</Typography>
                </Box>
              </Box>
            );
          }
    
          // LinearProgressWithLabel8.propTypes = {
          //   value: PropTypes.object.isRequired,
          // };
    
          function LinearProgressWithLabel9(props) {
            return (
              <Box  display="flex" alignItems="center">
                <Box minWidth={55}>
                <Typography variant="body2" color="textwarning">{
                    props.time
                  }</Typography>
                </Box>
                <Box width="100%" mr={1}>
                  <BorderLinearProgress variant="determinate" {...props} />
                </Box>
                <Box minWidth={55}>
                  <Typography variant="body2" color="textwarning">{`${Math.round(
                    props.value,
                  )}`}</Typography>
                </Box>
              </Box>
            );
          }
    
          // LinearProgressWithLabel9.propTypes = {
          //   value: PropTypes.object.isRequired,
          // };
    
          function LinearProgressWithLabel10(props) {
            return (
              <Box  display="flex" alignItems="center">
                <Box minWidth={55}>
                <Typography variant="body2" color="textwarning">{
                    props.time
                  }</Typography>
                </Box>
                <Box width="100%" mr={1}>
                  <BorderLinearProgress variant="determinate" {...props} />
                </Box>
                <Box minWidth={55}>
                  <Typography variant="body2" color="textwarning">{`${Math.round(
                    props.value,
                  )}`}</Typography>
                </Box>
              </Box>
            );
          }
    
          // LinearProgressWithLabel10.propTypes = {
          //   value: PropTypes.object.isRequired,
          // };
    
          function LinearProgressWithLabel11(props) {
            return (
              <Box  display="flex" alignItems="center">
                <Box minWidth={55}>
                <Typography variant="body2" color="textwarning">{
                    props.time
                  }</Typography>
                </Box>
                <Box width="100%" mr={1}>
                  <BorderLinearProgress variant="determinate" {...props} />
                </Box>
                <Box minWidth={55}>
                  <Typography variant="body2" color="textwarning">{`${Math.round(
                    props.value,
                  )}`}</Typography>
                </Box>
              </Box>
            );
          }
    
          // LinearProgressWithLabel11.propTypes = {
          //   value: PropTypes.object.isRequired,
          // };
    
          function LinearProgressWithLabel12(props) {
            return (
              <Box  display="flex" alignItems="center">
                <Box minWidth={55}>
                <Typography variant="body2" color="textwarning">{
                    props.time
                  }</Typography>
                </Box>
                <Box width="100%" mr={1}>
                  <BorderLinearProgress variant="determinate" {...props} />
                </Box>
                <Box minWidth={55}>
                  <Typography variant="body2" color="textwarning">{`${Math.round(
                    props.value,
                  )}`}</Typography>
                </Box>
              </Box>
            );
          }
        
        // LinearProgressWithLabel.propTypes = {
        //     value: PropTypes.object.isRequired,
        // };

        function LinearProgressWithLabel13(props) {
          return (
            <Box  display="flex" alignItems="center">
              <Box minWidth={55}>
              <Typography variant="body2" color="textwarning">{
                  props.time
                }</Typography>
              </Box>
              <Box width="100%" mr={1}>
                <BorderLinearProgress variant="determinate" {...props} />
              </Box>
              <Box minWidth={55}>
                <Typography variant="body2" color="textwarning">{`${Math.round(
                  props.value,
                )}`}</Typography>
              </Box>
            </Box>
          );
        }
      
      // LinearProgressWithLabel.propTypes = {
      //     value: PropTypes.object.isRequired,
      // };
        
        const useStyles = makeStyles({
            root: {
            width: '100%',
            },
        });

export default function Production(props) {

    const today = new Date();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const sec = today.getSeconds();

    const classes = useStyles();
    const [ valuex, setValuex ] = useState();
    const [hourprog, setHourprog] = useState();
    // const [sshiftqt, setSshiftqt] = useState();
    const [shiftprog, setShiftprog] = useState();
    const [cshiftqt, setCshiftqt] = useState();
    const [response, setResponse] = useState();
    const [responsec, setResponsec] = useState();
    const [responsem, setResponsem] = useState();
    const [ valueshift, setValueshift ] = useState();
    

    const [timetotimeprog1, setTimetotimeprog1] = useState();
    const [timetotimeprog2, setTimetotimeprog2] = useState();
    const [timetotimeprog3, setTimetotimeprog3] = useState();
    const [timetotimeprog4, setTimetotimeprog4] = useState();
    const [timetotimeprog5, setTimetotimeprog5] = useState();
    const [timetotimeprog6, setTimetotimeprog6] = useState();
    const [timetotimeprog7, setTimetotimeprog7] = useState();
    const [timetotimeprog8, setTimetotimeprog8] = useState();
    const [timetotimeprog9, setTimetotimeprog9] = useState();
    const [timetotimeprog10, setTimetotimeprog10] = useState();
    const [timetotimeprog11, setTimetotimeprog11] = useState();
    const [timetotimeprog12, setTimetotimeprog12] = useState();
    const [timetotimeprog13, setTimetotimeprog13] = useState();

    const [timetv1, setTimetv1] = useState();
    const [timetv2, setTimetv2] = useState();
    const [timetv3, setTimetv3] = useState();
    const [timetv4, setTimetv4] = useState();
    const [timetv5, setTimetv5] = useState();
    const [timetv6, setTimetv6] = useState();
    const [timetv7, setTimetv7] = useState();
    const [timetv8, setTimetv8] = useState();
    const [timetv9, setTimetv9] = useState();
    const [timetv10, setTimetv10] = useState();
    const [timetv11, setTimetv11] = useState();
    const [timetv12, setTimetv12] = useState();
    const [timetv13, setTimetv13] = useState();
   
    if (props.pa01){

        // // console.log(props.pa01)
        topic = '+/fm08/fm08dash/008'
        topicpr1 = 'data/fm08/fm08dash/008'
        pathnmx = "/pri1productiondocket"

        // const socket = socketIOClient(ENDPOINT1);
        // // // console.log(socket, "pa04open", ENDPOINT1)
        // socket.on("json", data => {
        //     setResponse(data.dataprodq)
        //     setResponsec(data.datac)
        //     setResponsem(data.datam)
        //     setCshiftqt(data.datasshift)
        //     setTimetotimeprog1(data.dataprodprog1)
        //     setTimetotimeprog2(data.dataprodprog2)
        //     setTimetotimeprog3(data.dataprodprog3)
        //     setTimetotimeprog4(data.dataprodprog4)
        //     setTimetotimeprog5(data.dataprodprog5)
        //     setTimetotimeprog6(data.dataprodprog6)
        //     setTimetotimeprog7(data.dataprodprog7)
        //     setTimetotimeprog8(data.dataprodprog8)
        //     setTimetotimeprog9(data.dataprodprog9)
        //     setTimetotimeprog10(data.dataprodprog10)
        //     setTimetotimeprog11(data.dataprodprog11)
        //     setTimetotimeprog12(data.dataprodprog12)
        //     setTimetotimeprog13(data.dataprodprog13)

        // })
    }

    if (props.pa29){

      // // console.log(props.pa02)
      topic = '+/web4/web4dash/0404'
      topicpr29 = 'data/web4/web4dash/0404'
      pathnmx = "/pri29productiondocket"

      // const socket = socketIOClient(ENDPOINT29);
      // // // console.log(socket, "pa04open", ENDPOINT1)
      // socket.on("json", data => {
      //     setResponse(data.dataprodq)
      //     setResponsec(data.datac)
      //     setResponsem(data.datam)
      //     setCshiftqt(data.datasshift)
      //     setTimetotimeprog1(data.dataprodprog1)
      //     setTimetotimeprog2(data.dataprodprog2)
      //     setTimetotimeprog3(data.dataprodprog3)
      //     setTimetotimeprog4(data.dataprodprog4)
      //     setTimetotimeprog5(data.dataprodprog5)
      //     setTimetotimeprog6(data.dataprodprog6)
      //     setTimetotimeprog7(data.dataprodprog7)
      //     setTimetotimeprog8(data.dataprodprog8)
      //     setTimetotimeprog9(data.dataprodprog9)
      //     setTimetotimeprog10(data.dataprodprog10)
      //     setTimetotimeprog11(data.dataprodprog11)
      //     setTimetotimeprog12(data.dataprodprog12)
      //     setTimetotimeprog13(data.dataprodprog13)

      // })
  }

    if (props.pa30){

        // // console.log(props.pa02)
        topic = '+/web2/web2dash/0202'
        topicpr30 = 'data/web2/web2dash/0202'
        pathnmx = "/pri30productiondocket"

        // const socket = socketIOClient(ENDPOINT30);
        // // // console.log(socket, "pa04open", ENDPOINT1)
        // socket.on("json", data => {
        //     setResponse(data.dataprodq)
        //     setResponsec(data.datac)
        //     setResponsem(data.datam)
        //     setCshiftqt(data.datasshift)
        //     setTimetotimeprog1(data.dataprodprog1)
        //     setTimetotimeprog2(data.dataprodprog2)
        //     setTimetotimeprog3(data.dataprodprog3)
        //     setTimetotimeprog4(data.dataprodprog4)
        //     setTimetotimeprog5(data.dataprodprog5)
        //     setTimetotimeprog6(data.dataprodprog6)
        //     setTimetotimeprog7(data.dataprodprog7)
        //     setTimetotimeprog8(data.dataprodprog8)
        //     setTimetotimeprog9(data.dataprodprog9)
        //     setTimetotimeprog10(data.dataprodprog10)
        //     setTimetotimeprog11(data.dataprodprog11)
        //     setTimetotimeprog12(data.dataprodprog12)
        //     setTimetotimeprog13(data.dataprodprog13)

        // })
    }

    if (props.pa31){

        // // console.log(props.pa03)
        topic = '+/bm02/bm02dash/1234'
        topicpr31 = 'data/bm02/bm02dash/1234'
        pathnmx = "/pri31productiondocket"

        // const socket = socketIOClient(ENDPOINT31);
        // // // console.log(socket, "pa04open", ENDPOINT1)
        // socket.on("json", data => {
        //     setResponse(data.dataprodq)
        //     setResponsec(data.datac)
        //     setResponsem(data.datam)
        //     setCshiftqt(data.datasshift)
        //     setTimetotimeprog1(data.dataprodprog1)
        //     setTimetotimeprog2(data.dataprodprog2)
        //     setTimetotimeprog3(data.dataprodprog3)
        //     setTimetotimeprog4(data.dataprodprog4)
        //     setTimetotimeprog5(data.dataprodprog5)
        //     setTimetotimeprog6(data.dataprodprog6)
        //     setTimetotimeprog7(data.dataprodprog7)
        //     setTimetotimeprog8(data.dataprodprog8)
        //     setTimetotimeprog9(data.dataprodprog9)
        //     setTimetotimeprog10(data.dataprodprog10)
        //     setTimetotimeprog11(data.dataprodprog11)
        //     setTimetotimeprog12(data.dataprodprog12)
        //     setTimetotimeprog13(data.dataprodprog13)

        // })
    }

    if (props.pa33){

        // // console.log(props.pa04)
        topic = '+/uv01/uv01dash/001'
        topicpr33 = 'data/uv01/uv01dash/001'
        pathnmx = "/pri33productiondocket"
       
    }

    // if (props.pa05){

    //     // // console.log(props.pa05)
    //     topic = '+/pa05/pa05dash/0505'
    // }

    // if (props.pa06){

    //     // // console.log(props.pa06)
    //     topic = '+/pa06/pa06dash/0606'
    // }

    // if (props.pa07){

    //     // // console.log(props.pa07)
    //     topic = '+/pa07/pa07dash/0707'
    // }

    // if (props.pa08){

    //     // // console.log(props.pa08)
    //     topic = '+/pa08/pa08dash/0808'
    //     // topicpa2 = 'data/pa04/pa04oeex/0404'

    // }

    // if (props.pa09){

    //     // // console.log(props.pa09)
    //     topic = '+/pa09/pa09dash/0909'
    // }

    useEffect(()=> {
        
        setTimetv1(JSON.parse(localStorage.getItem('timetv1')))
        setTimetv2(JSON.parse(localStorage.getItem('timetv2')))
        setTimetv3(JSON.parse(localStorage.getItem('timetv3')))
        setTimetv4(JSON.parse(localStorage.getItem('timetv4')))
        setTimetv5(JSON.parse(localStorage.getItem('timetv5')))
        setTimetv6(JSON.parse(localStorage.getItem('timetv6')))
        setTimetv7(JSON.parse(localStorage.getItem('timetv7')))
        setTimetv8(JSON.parse(localStorage.getItem('timetv8')))
        setTimetv9(JSON.parse(localStorage.getItem('timetv9')))
        setTimetv10(JSON.parse(localStorage.getItem('timetv10')))
        setTimetv11(JSON.parse(localStorage.getItem('timetv11')))
        setTimetv12(JSON.parse(localStorage.getItem('timetv12')))
        setTimetv13(JSON.parse(localStorage.getItem('timetv13')))

    },[])

   
    useEffect(() => {
      timetv1 !== undefined && localStorage.setItem('timetv1', JSON.stringify(timetv1));

    },[timetv1])

    useEffect(() => {
      timetv2 !== undefined && localStorage.setItem('timetv2', JSON.stringify(timetv2));

    },[timetv2])

    useEffect(() => {
      timetv3 !== undefined && localStorage.setItem('timetv3', JSON.stringify(timetv3));

    },[timetv3])

    useEffect(() => {
      timetv4 !== undefined && localStorage.setItem('timetv4', JSON.stringify(timetv4));

    },[timetv4])

    useEffect(() => {
      timetv5 !== undefined && localStorage.setItem('timetv5', JSON.stringify(timetv5));

    },[timetv5])

    useEffect(() => {
      timetv6 !== undefined && localStorage.setItem('timetv6', JSON.stringify(timetv6));

    },[timetv6])

    useEffect(() => {
      timetv7 !== undefined && localStorage.setItem('timetv7', JSON.stringify(timetv7));

    },[timetv7])

    useEffect(() => {
      timetv8 !== undefined && localStorage.setItem('timetv8', JSON.stringify(timetv8));

    },[timetv8])

    useEffect(() => {
      timetv9 !== undefined && localStorage.setItem('timetv9', JSON.stringify(timetv9));

    },[timetv9])
    
    useEffect(() => {
      timetv10 !== undefined && localStorage.setItem('timetv10', JSON.stringify(timetv10));

    },[timetv10])

    useEffect(() => {
      timetv11 !== undefined && localStorage.setItem('timetv11', JSON.stringify(timetv11));

    },[timetv11])

    useEffect(() => {
      timetv12 !== undefined && localStorage.setItem('timetv12', JSON.stringify(timetv12));

    },[timetv12])

    useEffect(() => {
      timetv13 !== undefined && localStorage.setItem('timetv12', JSON.stringify(timetv13));

    },[timetv13])


    useEffect(() => {

        const client = mqtt.connect('ws://192.168.8.110:8083/mqtt')
      
          client.on("connect", () => {
              client.subscribe(topic);
          });
      
          client.on('message', (topic, message) => {
              
             handleJsonMessage(JSON.parse(message.toString()));
            //  // console.log(message);

          if( topic === topicpr1 ){

            const socket = socketIOClient(ENDPOINT1);
            // // console.log(socket, "pa04open", ENDPOINT1)
            socket.on("json", data => {
                setResponse(data.dataprodq)
                setResponsec(data.datac)
                setResponsem(data.datam)
                setCshiftqt(data.datasshift)
                setTimetotimeprog1(data.dataprodprog1)
                setTimetotimeprog2(data.dataprodprog2)
                setTimetotimeprog3(data.dataprodprog3)
                setTimetotimeprog4(data.dataprodprog4)
                setTimetotimeprog5(data.dataprodprog5)
                setTimetotimeprog6(data.dataprodprog6)
                setTimetotimeprog7(data.dataprodprog7)
                setTimetotimeprog8(data.dataprodprog8)
                setTimetotimeprog9(data.dataprodprog9)
                setTimetotimeprog10(data.dataprodprog10)
                setTimetotimeprog11(data.dataprodprog11)
                setTimetotimeprog12(data.dataprodprog12)
                setTimetotimeprog13(data.dataprodprog13)
    
            })
          }

          if( topic === topicpr29 ){

            const socket = socketIOClient(ENDPOINT29);
            // // console.log(socket, "pa04open", ENDPOINT1)
            socket.on("json", data => {
                setResponse(data.dataprodq)
                setResponsec(data.datac)
                setResponsem(data.datam)
                setCshiftqt(data.datasshift)
                setTimetotimeprog1(data.dataprodprog1)
                setTimetotimeprog2(data.dataprodprog2)
                setTimetotimeprog3(data.dataprodprog3)
                setTimetotimeprog4(data.dataprodprog4)
                setTimetotimeprog5(data.dataprodprog5)
                setTimetotimeprog6(data.dataprodprog6)
                setTimetotimeprog7(data.dataprodprog7)
                setTimetotimeprog8(data.dataprodprog8)
                setTimetotimeprog9(data.dataprodprog9)
                setTimetotimeprog10(data.dataprodprog10)
                setTimetotimeprog11(data.dataprodprog11)
                setTimetotimeprog12(data.dataprodprog12)
                setTimetotimeprog13(data.dataprodprog13)
    
            })
          }

          if( topic === topicpr30 ){

            const socket = socketIOClient(ENDPOINT30);
            // // console.log(socket, "pa04open", ENDPOINT1)
            socket.on("json", data => {
                setResponse(data.dataprodq)
                setResponsec(data.datac)
                setResponsem(data.datam)
                setCshiftqt(data.datasshift)
                setTimetotimeprog1(data.dataprodprog1)
                setTimetotimeprog2(data.dataprodprog2)
                setTimetotimeprog3(data.dataprodprog3)
                setTimetotimeprog4(data.dataprodprog4)
                setTimetotimeprog5(data.dataprodprog5)
                setTimetotimeprog6(data.dataprodprog6)
                setTimetotimeprog7(data.dataprodprog7)
                setTimetotimeprog8(data.dataprodprog8)
                setTimetotimeprog9(data.dataprodprog9)
                setTimetotimeprog10(data.dataprodprog10)
                setTimetotimeprog11(data.dataprodprog11)
                setTimetotimeprog12(data.dataprodprog12)
                setTimetotimeprog13(data.dataprodprog13)
    
            })
          }

          if( topic === topicpr31 ){

            const socket = socketIOClient(ENDPOINT31);
            // // console.log(socket, "pa04open", ENDPOINT1)
            socket.on("json", data => {
                setResponse(data.dataprodq)
                setResponsec(data.datac)
                setResponsem(data.datam)
                setCshiftqt(data.datasshift)
                setTimetotimeprog1(data.dataprodprog1)
                setTimetotimeprog2(data.dataprodprog2)
                setTimetotimeprog3(data.dataprodprog3)
                setTimetotimeprog4(data.dataprodprog4)
                setTimetotimeprog5(data.dataprodprog5)
                setTimetotimeprog6(data.dataprodprog6)
                setTimetotimeprog7(data.dataprodprog7)
                setTimetotimeprog8(data.dataprodprog8)
                setTimetotimeprog9(data.dataprodprog9)
                setTimetotimeprog10(data.dataprodprog10)
                setTimetotimeprog11(data.dataprodprog11)
                setTimetotimeprog12(data.dataprodprog12)
                setTimetotimeprog13(data.dataprodprog13)
    
            })
          }

          if( topic === topicpr33 ){

            const socket = socketIOClient(ENDPOINT33);
            // // console.log(socket, "pa04open", ENDPOINT1)
            socket.on("json", data => {
                setResponse(data.dataprodq)
                setResponsec(data.datac)
                setResponsem(data.datam)
                setCshiftqt(data.datasshift)
                setTimetotimeprog1(data.dataprodprog1)
                setTimetotimeprog2(data.dataprodprog2)
                setTimetotimeprog3(data.dataprodprog3)
                setTimetotimeprog4(data.dataprodprog4)
                setTimetotimeprog5(data.dataprodprog5)
                setTimetotimeprog6(data.dataprodprog6)
                setTimetotimeprog7(data.dataprodprog7)
                setTimetotimeprog8(data.dataprodprog8)
                setTimetotimeprog9(data.dataprodprog9)
                setTimetotimeprog10(data.dataprodprog10)
                setTimetotimeprog11(data.dataprodprog11)
                setTimetotimeprog12(data.dataprodprog12)
                setTimetotimeprog13(data.dataprodprog13)
    
            })
          }

          });
            
       
    
        return () => {
          if(client)
          client.end() 
        }
        },[])
  

        const handleJsonMessage = (json) => {
          
          setValuex(json.productionHourly)
          setValueshift(json.productionShift)
          setHourprog(json.productionHourly)
          setShiftprog(json.productionShift)

          // const today = new Date();
          // const hour = today.getHours();
          // const minute = today.getMinutes();
          // const sec = today.getSeconds();

          if (((hour === 7) && (minute === 0) && (sec === 0)) || ((hour === 19) && (minute === 0) && (sec === 0))) {
            // window.localStorage.clear();
            window.localStorage.removeItem('timetotimeprog1');
            window.localStorage.removeItem('timetotimeprog2');
            window.localStorage.removeItem('timetotimeprog3');
            window.localStorage.removeItem('timetotimeprog4');
            window.localStorage.removeItem('timetotimeprog5');
            window.localStorage.removeItem('timetotimeprog6');
            window.localStorage.removeItem('timetotimeprog7');
            window.localStorage.removeItem('timetotimeprog8');
            window.localStorage.removeItem('timetotimeprog9');
            window.localStorage.removeItem('timetotimeprog10');
            window.localStorage.removeItem('timetotimeprog11');
            window.localStorage.removeItem('timetotimeprog12');
            window.location.reload(false);
            
          }

          if ((hour === 7) || (hour === 8) || (hour === 9) || (hour === 10) || (hour === 11) || (hour === 12) || (hour === 13) || (hour === 14) || (hour === 15) || (hour === 16)|| (hour === 17) || (hour === 18)) {
           
            // setTimetv1("7 - 8")
            setTimetv1("8 - 9")
            setTimetv2("9 - 10")
            setTimetv3("10 - 11")
            setTimetv4("11 - 12")
            setTimetv5("12 - 13")
            setTimetv6("13 - 14")
            setTimetv7("14 - 15")
            setTimetv8("15 - 16")
            setTimetv9("16 - 17")
            setTimetv10("17 - 18")
            setTimetv11("18 - 19")
          }

          if ((hour === 19) || (hour === 20) || (hour === 21) || (hour === 22) || (hour === 23) || (hour === 0) || (hour === 1) || (hour === 2) || (hour === 3) || (hour === 4)|| (hour === 5) || (hour === 6)) {

            setTimetv1("19 - 20")
            setTimetv2("20 - 21")
            setTimetv3("21 - 22")
            setTimetv4("22 - 23")
            setTimetv5("23 - 0")
            setTimetv6("0 - 1")
            setTimetv7("1 - 2")
            setTimetv8("2 - 3")
            setTimetv9("3 - 4")
            setTimetv10("4 - 5")
            setTimetv11("5 - 6")
            setTimetv12("6 - 7")
            setTimetv13("7 - 8")
          }   

        }

          if( timetotimeprog1 >= 80){
            timetotimeprogbar1 = "success";
          }else{
            timetotimeprogbar1 = "warning";
          }

          if( timetotimeprog2 >= 80){
            timetotimeprogbar2 = "success";
          }else{
            timetotimeprogbar2 = "warning";
          }

          if( timetotimeprog3 >= 80){
            timetotimeprogbar3 = "success";
          }else{
            timetotimeprogbar3 = "warning";
          }

          if( timetotimeprog4 >= 80){
            timetotimeprogbar4 = "success";
          }else{
            timetotimeprogbar4 = "warning";
          }

          if( timetotimeprog5 >= 80){
            timetotimeprogbar5 = "success";
          }else{
            timetotimeprogbar5 = "warning";
          }

          if( timetotimeprog6 >= 80){
            timetotimeprogbar6 = "success";
          }else{
            timetotimeprogbar6 = "warning";
          }

          if( timetotimeprog7 >= 80){
            timetotimeprogbar7 = "success";
          }else{
            timetotimeprogbar7 = "warning";
          }

          if( timetotimeprog8 >= 80){
            timetotimeprogbar8 = "success";
          }else{
            timetotimeprogbar8 = "warning";
          }

          if( timetotimeprog9 >= 80){
            timetotimeprogbar9 = "success";
          }else{
            timetotimeprogbar9 = "warning";
          }

          if( timetotimeprog10 >= 80){
            timetotimeprogbar10 = "success";
          }else{
            timetotimeprogbar10 = "warning";
          }

          if( timetotimeprog11 >= 80){
            timetotimeprogbar11 = "success";
          }else{
            timetotimeprogbar11 = "warning";
          }

          if( timetotimeprog12 >= 80){
            timetotimeprogbar12 = "success";
          }else{
            timetotimeprogbar12 = "warning";
          }

          if( timetotimeprog13 >= 80){
            timetotimeprogbar13 = "success";
          }else{
            timetotimeprogbar13 = "warning";
          }

        //   if( value >= 80){
        //       valuebar = '#5EC248';
        //   }else{
        //       valuebar = 'red';
        //   }
  
        // valbar = Math.round((response/3600)*((60*responsem) + responsec));

        // if( ((hourprog/valbar)*100) >= 80){
        //     hourprogbar = "success";
        // }else{
        //     hourprogbar = "warning";
        // }

        // // shiftvalbar = Math.round(response/3600)*((60*responsem) + responsec) + Math.abs(sshiftqt);
        // shiftvalbar = Math.round(response/3600)*((60*responsem) + responsec) + Math.abs(cshiftqt);
        // if( ((shiftprog/shiftvalbar)*100) >= 80){
        //     shiftprogbar = "success";
        // }else{
        //     shiftprogbar = "warning";
        // }

        // valuebar = Math.round((response/3600)*((60*responsem) + responsec));
        // shiftvaluebar = Math.round(response/3600)*((60*responsem) + responsec) + Math.abs(cshiftqt);

        valbar = Math.round((response/3600)*((60*minute) + sec));

        if( ((hourprog/valbar)*100) >= 80){
            hourprogbar = "success";
        }else{
            hourprogbar = "warning";
        }

        // shiftvalbar = Math.round(response/3600)*((60*responsem) + responsec) + Math.abs(sshiftqt);
        shiftvalbar = Math.round(response/3600)*((60*minute) + sec) + Math.abs(cshiftqt);
        if( ((shiftprog/shiftvalbar)*100) >= 80){
            shiftprogbar = "success";
        }else{
            shiftprogbar = "warning";
        }

        valuebar = Math.round((response/3600)*((60*minute) + sec));
        shiftvaluebar = Math.round(response/3600)*((60*minute) + sec) + Math.abs(cshiftqt);

        // console.log("Mins"+minute,"Secs"+sec,"Shiftval"+shiftvaluebar,"Valbar"+valuebar)


    return (
        <div>

            <Card className="production">
                <Card.Header >
                    <Row>
                        <Col className="titlemain"><h3>PRODUCTION</h3></Col>
                        <Col className="production_icon"><Link className="link" to={{pathname: pathnmx}} ><PlayCircleOutlineIcon/></Link></Col>
                    </Row>
                  
                </Card.Header>

                <Card.Body>
                    <Row xs={1} md={2} className="productContainer">

                        <Col className="productCol_1" md={{ span: 0.1 }} xs={12} md={6} lg={6} >
                            <Row  >
                                <Card className="hourly">

                                    {/* <Card.Body> */}
                                        <div className="title"><h4>Hourly</h4></div>
                                        <Row>
                                        <div className="cardsy" >
                                             
                                                    <div className={classes.root}>
                                                        <LinearProgressWithLabel color={hourprogbar} value={(hourprog/valbar)*100} />
                                                    </div>

                                        </div>
                                        </Row>
                                        <Row>
                                            <Col md={{ span: 4 }} xs={{ span: 4 }}>
                                                <div className="cardsx" >
                                 
                                                    <div className="titlesub"><h5><b>Target</b></h5></div>                                                     
                                                    <div className="count"><h5>{valuebar}</h5></div>
                                     
                                                </div>
                                            </Col>
                                            <Col md={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4 }}>
                                            <div className="cardsx" >
                                       
                                                    <div className="titlesub"><h5><b>Actual</b></h5></div>
                                                    <div className="count"><h5>{valuex}</h5></div>

                                                </div>
                                            </Col>
                                        </Row>

                                </Card>
                            </Row>
                            <Row  >
                                <Card className="shift">

                                    {/* <Card.Body> */}
                                        <Card.Title className="title"><h4>Shift</h4></Card.Title>
                                        <Row>
                                        <div className="cardsy" >
                                                  
                                                    <div className={classes.root}>
                                                        <LinearProgressWithLabel color={shiftprogbar} value={(shiftprog/shiftvalbar)*100} />
                                                    </div>
                                                </div>
                                        </Row>
                                        <Row>
                                            <Col md={{ span: 4 }} xs={{ span: 4 }}>
                                                <div className="cardsx" >
                                                   
                                                    <div className="titlesub"><h5><b>Target</b></h5></div>                                              
                                                    <div className="count"><h5>{shiftvaluebar}</h5></div>
                                     
                                                </div>
                                            </Col>
                                            <Col md={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4}}>
                                            <div className="cardsx" >
                                                   
                                                    <div className="titlesub"><h5><b>Actual</b></h5></div>                                              
                                                    <div className="count"><h5>{valueshift}</h5></div>
                                     
                                                </div>
                                            </Col>
                                        </Row>

                                </Card>
                            </Row>
                        </Col>
                        <Col className="productCol_2" xs={12} md={6} lg={6} >
                            <Card className="progressbar">

                                <Card.Body>

                                    <div className={classes.root}>
                                        <Row>
                                        <Row className="rowWidth"><LinearProgressWithLabel1 color={timetotimeprogbar1} time={timetv1} value={timetotimeprog1} /></Row>
                                        <Row className="rowWidth"><LinearProgressWithLabel2 color={timetotimeprogbar2} time={timetv2} value={timetotimeprog2} /></Row>
                                        <Row className="rowWidth"><LinearProgressWithLabel3 color={timetotimeprogbar3} time={timetv3} value={timetotimeprog3} /></Row>
                                        <Row className="rowWidth"><LinearProgressWithLabel4 color={timetotimeprogbar4} time={timetv4} value={timetotimeprog4} /></Row>
                                        <Row className="rowWidth"><LinearProgressWithLabel5 color={timetotimeprogbar5} time={timetv5} value={timetotimeprog5} /></Row>
                                        <Row className="rowWidth"><LinearProgressWithLabel6 color={timetotimeprogbar6} time={timetv6} value={timetotimeprog6} /></Row>
                                        <Row className="rowWidth"><LinearProgressWithLabel7 color={timetotimeprogbar7} time={timetv7} value={timetotimeprog7} /></Row>
                                        <Row className="rowWidth"><LinearProgressWithLabel8 color={timetotimeprogbar8} time={timetv8} value={timetotimeprog8} /></Row>
                                        <Row className="rowWidth"><LinearProgressWithLabel9 color={timetotimeprogbar9} time={timetv9} value={timetotimeprog9} /></Row>
                                        <Row className="rowWidth"><LinearProgressWithLabel10 color={timetotimeprogbar10} time={timetv10} value={timetotimeprog10} /></Row>
                                        <Row className="rowWidth"><LinearProgressWithLabel11 color={timetotimeprogbar11} time={timetv11} value={timetotimeprog11} /></Row>
                                        <Row className="rowWidth"><LinearProgressWithLabel12 color={timetotimeprogbar12} time={timetv12} value={timetotimeprog12} /></Row>
                                        <Row className="rowWidth"><LinearProgressWithLabel13 color={timetotimeprogbar13} time={timetv13} value={timetotimeprog12} /></Row>
                                        </Row>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                </Card.Body>
            </Card>

        </div>
    )
}