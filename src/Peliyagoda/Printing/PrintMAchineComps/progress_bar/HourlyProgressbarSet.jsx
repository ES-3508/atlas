import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Row, Col } from 'react-bootstrap'
// import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import mqtt from 'mqtt'
import { useEffect, useState } from 'react';
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
// import { Table, TableCell, TableContainer, TableBody, TableRow } from '@mui/material';
// import { CProgress, CProgressBar } from '@coreui/react';
// import { Container, Row, Col } from 'react-bootstrap';

var topic, timetotimeprogbar1, timetotimeprogbar2, timetotimeprogbar3, timetotimeprogbar4, timetotimeprogbar5, timetotimeprogbar6, timetotimeprogbar7, timetotimeprogbar8, timetotimeprogbar9, timetotimeprogbar10, timetotimeprogbar11, timetotimeprogbar12

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

      LinearProgressWithLabel1.propTypes = {
        value: PropTypes.number.isRequired,
      };

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

      LinearProgressWithLabel2.propTypes = {
        value: PropTypes.number.isRequired,
      };

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

      LinearProgressWithLabel3.propTypes = {
        value: PropTypes.number.isRequired,
      };

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

      LinearProgressWithLabel4.propTypes = {
        value: PropTypes.number.isRequired,
      };

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

      LinearProgressWithLabel5.propTypes = {
        value: PropTypes.number.isRequired,
      };

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

      LinearProgressWithLabel6.propTypes = {
        value: PropTypes.number.isRequired,
      };

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

      LinearProgressWithLabel7.propTypes = {
        value: PropTypes.number.isRequired,
      };

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
            <Box minWidth={45}>
              <Typography variant="body2" color="textwarning">{`${Math.round(
                props.value,
              )}`}</Typography>
            </Box>
          </Box>
        );
      }

      LinearProgressWithLabel8.propTypes = {
        value: PropTypes.number.isRequired,
      };

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

      LinearProgressWithLabel9.propTypes = {
        value: PropTypes.number.isRequired,
      };

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

      LinearProgressWithLabel10.propTypes = {
        value: PropTypes.number.isRequired,
      };

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

      LinearProgressWithLabel11.propTypes = {
        value: PropTypes.number.isRequired,
      };

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

      LinearProgressWithLabel12.propTypes = {
        value: PropTypes.number.isRequired,
      };


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});


export default function LinearWithValueLabel(props) {

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

    const classes = useStyles();
    
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

    useEffect(()=> {
        
        setTimetotimeprog1(JSON.parse(localStorage.getItem('timetotimeprog1')))
        setTimetotimeprog2(JSON.parse(localStorage.getItem('timetotimeprog2')))
        setTimetotimeprog3(JSON.parse(localStorage.getItem('timetotimeprog3')))
        setTimetotimeprog4(JSON.parse(localStorage.getItem('timetotimeprog4')))
        setTimetotimeprog5(JSON.parse(localStorage.getItem('timetotimeprog5')))
        setTimetotimeprog6(JSON.parse(localStorage.getItem('timetotimeprog6')))
        setTimetotimeprog7(JSON.parse(localStorage.getItem('timetotimeprog7')))
        setTimetotimeprog8(JSON.parse(localStorage.getItem('timetotimeprog8')))
        setTimetotimeprog9(JSON.parse(localStorage.getItem('timetotimeprog9')))
        setTimetotimeprog10(JSON.parse(localStorage.getItem('timetotimeprog10')))
        setTimetotimeprog11(JSON.parse(localStorage.getItem('timetotimeprog11')))
        setTimetotimeprog12(JSON.parse(localStorage.getItem('timetotimeprog12')))

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

    },[])

    useEffect(() => {
      timetotimeprog1 !== undefined && localStorage.setItem('timetotimeprog1', JSON.stringify(timetotimeprog1));

    },[timetotimeprog1])

    useEffect(() => {
      timetotimeprog2 !== undefined && localStorage.setItem('timetotimeprog2', JSON.stringify(timetotimeprog2));

    },[timetotimeprog2])

    useEffect(() => {
      timetotimeprog3 !== undefined && localStorage.setItem('timetotimeprog3', JSON.stringify(timetotimeprog3));

    },[timetotimeprog3])

    useEffect(() => {
      timetotimeprog4 !== undefined && localStorage.setItem('timetotimeprog4', JSON.stringify(timetotimeprog4));

    },[timetotimeprog4])

    useEffect(() => {
      timetotimeprog5 !== undefined && localStorage.setItem('timetotimeprog5', JSON.stringify(timetotimeprog5));

    },[timetotimeprog5])

    useEffect(() => {
      timetotimeprog6 !== undefined && localStorage.setItem('timetotimeprog6', JSON.stringify(timetotimeprog6));

    },[timetotimeprog6])

    useEffect(() => {
      timetotimeprog7 !== undefined && localStorage.setItem('timetotimeprog7', JSON.stringify(timetotimeprog7));

    },[timetotimeprog7])

    useEffect(() => {
      timetotimeprog8 !== undefined && localStorage.setItem('timetotimeprog8', JSON.stringify(timetotimeprog8));

    },[timetotimeprog8])

    useEffect(() => {
      timetotimeprog9 !== undefined && localStorage.setItem('timetotimeprog9', JSON.stringify(timetotimeprog9));

    },[timetotimeprog9])

    useEffect(() => {
      timetotimeprog10 !== undefined && localStorage.setItem('timetotimeprog10', JSON.stringify(timetotimeprog10));

    },[timetotimeprog10])

    useEffect(() => {
      timetotimeprog11 !== undefined && localStorage.setItem('timetotimeprog11', JSON.stringify(timetotimeprog11));

    },[timetotimeprog11])

    useEffect(() => {
      timetotimeprog12 !== undefined && localStorage.setItem('timetotimeprog12', JSON.stringify(timetotimeprog12));

    },[timetotimeprog12])


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
        
        const client = mqtt.connect('ws://192.168.8.110:8083/mqtt')
    
        client.on("connect", () => {
            // console.log("connected");
            client.subscribe(topic);
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

          const today = new Date();
          const hour = today.getHours();
          const minute = today.getMinutes();
          const sec = today.getSeconds();

          if (((hour === 7) && (minute === 0) && (sec === 0)) || ((hour === 19) && (minute === 0) && (sec === 0))) {
            window.location.reload(false);
          }

          if ((hour === 7) || (hour === 8) || (hour === 9) || (hour === 10) || (hour === 11) || (hour === 12) || (hour === 13) || (hour === 14) || (hour === 15) || (hour === 16)|| (hour === 17) || (hour === 18)) {
           
            setTimetv1("7 - 8")
            setTimetv2("8 - 9")
            setTimetv3("9 - 10")
            setTimetv4("10 - 11")
            setTimetv5("11 - 12")
            setTimetv6("12 - 13")
            setTimetv7("13 - 14")
            setTimetv8("14 - 15")
            setTimetv9("15 - 16")
            setTimetv10("16 - 17")
            setTimetv11("17 - 18")
            setTimetv12("18 - 19")
            
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
          }   

          if ((hour === 7) || (hour === 19)) {
            setTimetotimeprog1(json.productionHourly)
          }

          if ((hour === 8) || (hour === 20)) {
            setTimetotimeprog2(json.productionHourly)
          }   

          if ((hour === 9) || (hour === 21)) {
            setTimetotimeprog3(json.productionHourly)
          }

          if ((hour === 10) || (hour === 22)) {
            setTimetotimeprog4(json.productionHourly)
          }

          if ((hour === 11) || (hour === 23)) {
            setTimetotimeprog5(json.productionHourly)
          }

          if ((hour === 12) || (hour === 0)) {
            setTimetotimeprog6(json.productionHourly)
          }

          if ((hour === 13) || (hour === 1)) {
            setTimetotimeprog7(json.productionHourly)
          }

          if ((hour === 14) || (hour === 2)) {
            setTimetotimeprog8(json.productionHourly)
          }

          if ((hour === 15) || (hour === 3)) {
            setTimetotimeprog9(json.productionHourly)
          }

          if ((hour === 16) || (hour === 4)) {
            setTimetotimeprog10(json.productionHourly)
          }

          if ((hour === 17) || (hour === 5)) {
            setTimetotimeprog11(json.productionHourly)
          }

          if ((hour === 18) || (hour === 6)) {
            setTimetotimeprog12(json.productionHourly)
          }

          // console.log(json);
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




  return (
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
    </Row>
    </div>
  );
}
























////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

          // if ((hour === 20)) {
          //   setTimetotimeprog2(json.productionHourly)
          // }  
          
          // if ((hour === 21)) {
          //   setTimetotimeprog3(json.productionHourly)
          // }
          
          // if ((hour === 22)) {
          //   setTimetotimeprog4(json.productionHourly)
          // }

          // if ((hour === 23)) {
          //   setTimetotimeprog5(json.productionHourly)
          // }

          // if ((hour === 0)) {
          //   setTimetotimeprog6(json.productionHourly)
          // }

          // if ((hour === 1)) {
          //   setTimetotimeprog7(json.productionHourly)
          // }

          // if ((hour === 2)) {
          //   setTimetotimeprog8(json.productionHourly)
          // }

          // if ((hour === 3)) {
          //   setTimetotimeprog9(json.productionHourly)
          // }

          // if ((hour === 4)) {
          //   setTimetotimeprog10(json.productionHourly)
          // }

          // if ((hour === 5)) {
          //   setTimetotimeprog11(json.productionHourly)
          // }

          // if ((hour === 6)) {
          //   setTimetotimeprog12(json.productionHourly)
          // }