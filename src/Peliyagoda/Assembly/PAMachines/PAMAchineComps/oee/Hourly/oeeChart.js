import "./ochart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, YAxis, ResponsiveContainer } from 'recharts';
// import { useEffect, useState } from 'react';
import { useEffect } from 'react';
import mqtt from 'mqtt'

var data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, name1, name2, name3, name4, name5, name6, name7, name8, name9,  name10, name11, name12;
var pa0M, jsonPa0M, patopic, patopicdata;

var data = [];

export default function Oee() {

    
    const [ valuex, setValuex ] = useState([]);

    useEffect(() => {

        const client = mqtt.connect('ws://192.168.8.110:8083/mqtt')
        const topic1="data/pa08/pa08dash/0808";
        client.on('connect', function() {
        client.subscribe(topic1);
        console.log("Client has subscribed")
        });

        client.on('message', (topic, message) => {
        handleJsonMessage(JSON.parse(message.toString()));
        

        });
    },[])
  

    const handleJsonMessage = (json) => {      
        setValuex(...valuex,json.availHourly)
        
    }



      return(

        <div className="pchart">
             <ResponsiveContainer width="100%" aspect={5 / 1.8}>
             <LineChart data={valuex}>
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


