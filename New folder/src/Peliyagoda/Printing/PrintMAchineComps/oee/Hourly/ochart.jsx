import "./ochart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, YAxis, ResponsiveContainer } from 'recharts';
// import { useEffect, useState } from 'react';
import { useEffect } from 'react';
import mqtt from 'mqtt'

var data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, name1, name2, name3, name4, name5, name6, name7, name8, name9,  name10, name11, name12;
var pa0M, jsonPa0M, patopic, patopicdata;

var data = [];

export default function Oee(props) {

    if (props.charttopicpa01){

        console.log(props.charttopicpa01)
        patopic = '+/pa01/pa01dash/0101'
        patopicdata = 'data/pa01/pa01dash/0101'
    }
    if (props.charttopicpa02){

        console.log(props.charttopicpa02)
        patopic = '+/pa02/pa02dash/0202'
        patopicdata = 'data/pa02/pa02dash/0202'
    }
    if (props.charttopicpa03){

        console.log(props.charttopicpa03)
        patopic = '+/pa03/pa03dash/0303'
        patopicdata = 'data/pa03/pa03dash/0303'
    }
    if (props.charttopicpa04){

        console.log(props.charttopicpa04)
        patopic = '+/pa04/pa04dash/0404'
        patopicdata = 'data/pa04/pa04dash/0404'
    }
    if (props.charttopicpa05){

        console.log(props.charttopicpa05)
        patopic = '+/pa05/pa05dash/0505'
        patopicdata = 'data/pa05/pa05dash/0505'
    }
    if (props.charttopicpa06){

        console.log(props.charttopicpa06)
        patopic = '+/pa06/pa06dash/0606'
        patopicdata = 'data/pa06/pa06dash/0606'
    }
    if (props.charttopicpa07){

        console.log(props.charttopicpa07)
        patopic = '+/pa07/pa07dash/0707'
        patopicdata = 'data/pa07/pa07dash/0707'
    }
    if (props.charttopicpa08){

        console.log(props.charttopicpa08)
        patopic = '+/pa08/pa08dash/0808'
        patopicdata = 'data/pa08/pa08dash/0808'
    }
    if (props.charttopicpa09){

        console.log(props.charttopicpa09)
        patopic = '+/pa09/pa09dash/0909'
        patopicdata = 'data/pa09/pa09dash/0909'
    }

    // const [oee, setOee] = useState();
   
    useEffect(() => {
        
        const client = mqtt.connect('ws://192.168.8.110:8083/mqtt')
  
        client.on("connect", () => {
            // console.log("connected");
            client.subscribe(patopic);
        });
  
        client.on('message', (topic, message) => {
            
        handleJsonMessage(JSON.parse(message.toString()));
        //console.log(message);
  
        if (topic === patopicdata){
          pa0M = message;
        }
  
  
          const today = new Date();
          const hour = today.getHours();
          const minute = today.getMinutes();
          const sec = today.getSeconds();
  
          // console.log(minute);
  
          if (pa0M) {
            
            // console.log(message.toString());
            jsonPa0M = JSON.parse(pa0M.toString());

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

            }
  
            
              if ((hour === 7) || (hour === 19)) {
                data1 = jsonPa0M.oeeHourly;
              }
              
              if ((hour === 8) || (hour === 20)) {
                data2 = jsonPa0M.oeeHourly;
              }
  
              if ((hour === 9) || (hour === 21)) {
                data3 = jsonPa0M.oeeHourly;
              }
  
              if ((hour === 10) || (hour === 22)) {
                data4 = jsonPa0M.oeeHourly;
              }
              
              if ((hour === 11) || (hour === 23)) {
                data5 = jsonPa0M.oeeHourly;
              }
              
              if ((hour === 12) || (hour === 0)) {
                data6 = jsonPa0M.oeeHourly;
              }
              
              if ((hour === 13) || (hour === 1)) {
                data7 = jsonPa0M.oeeHourly;
              }
              
              if ((hour === 14) || (hour === 2)) {
                data8 = jsonPa0M.oeeHourly;
              }
              
              if ((hour === 15) || (hour === 3)) {
                data9 = jsonPa0M.oeeHourly;
              }
              
              if ((hour === 16) || (hour === 4)) {
                data10 = jsonPa0M.oeeHourly;
              }
              
              if ((hour === 17) || (hour === 5)) {
                data11 = jsonPa0M.oeeHourly;
              }
  
              if ((hour === 18) || (hour === 6)) {
                data12 = jsonPa0M.oeeHourly;
              }
            
  
            data = [
              
              {
                name: name1,
                value: data1,
              },
              {
                name: name2,
                value: data2,
              },
              {
                name: name3,
                value: data3,
              },
              {
                name: name4,
                value: data4,
              },
              {
                name: name5,
                value: data5,
              },
              {
                name: name6,
                value: data6,
              },
              {
                name: name7,
                value: data7,             
              },
              {
                name: name8,
                value: data8,              
              },
              {
                name:name9,
                value: data9,             
              },
              {
                name: name10,
                value: data10,             
              },
              {
                name: name11,
                value: data11,             
              },
              {
                name: name12,
                value: data12,      
              },
            
            ];
          
            //data1 !== undefined && localStorage.setItem('data1', JSON.stringify(data1));
            // data2 !== undefined && localStorage.setItem('data2', JSON.stringify(data));
            // data3 !== undefined && localStorage.setItem('data3', JSON.stringify(data));
            
          }
  
          });

          return () => {
            if(client)
            client.end() 
          }
          },[])

          const handleJsonMessage = (json) => {
            // setOee(json.oeeHourly)
            // console.log(json);
          }

      return(

        <div className="pchart">
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
      
      )

}


