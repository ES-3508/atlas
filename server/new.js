const mqtt = require('mqtt');

var client = mqtt.connect('ws://192.168.8.110:8083/mqtt');
//mqtt topics
const topic1="data/pa04/pa04dash/0404";
const topic2="data/pa08/pa08dash/0808";
const topic3="data/pa07/pa07dash/0808";
const topic4="data/pa07/pa07dash/0707";
client.on('connect', function() {
    //client.subscribe(topic1);
    client.subscribe(topic3);
    //client.subscribe(topic3);
   // client.subscribe(topic4);
    
    console.log("Client has subscribed")
});