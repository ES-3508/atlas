var express = require("express");
var app = express();
const mqtt = require("mqtt");
const mqttclient = mqtt.connect('ws://localhost:8083/mqtt');
const cors = require('cors');
// var assert = require('assert');
const http = require("http").Server(express);

const topic1 = '+/pa04/pa04dash/0404';
const topic2 = '+/pa08/pa08dash/0808';
const topic3 = '+/pa07/pa07dash/0707';
const topic3 = '+/pa06/pa06dash/0606';

// const url = 'mongodb://localhost:27017/';

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: [],
    credentials: true
  }
});

var pa04, pa06, pa07, pa08
var pa04oee, pa06oee, pa07oee, pa08oee
var pa04hprod, pa06hprod, pa07hprod, pa08hprod
var pa04sprod, pa06sprod, pa07sprod, pa08sprod

server = require('http').Server(app);
PORT = process.env.PORT || 5058;

app.use(cors());
app.use(express.static(__dirname + "/public"));

mqttclient.on("connect",function(){

    // console.log('Client connected');

    setInterval(function(){

        // const today = new Date();
        // const date = today.toDateString();
        // const hour = today.getHours();
        // const minute = today.getMinutes();
        // const secs = today.getSeconds();
        // console.log(secs);


        mqttclient.subscribe(topic1, function () {
          mqttclient.on('message', function (topic1, message, packet) {
            // console.log(message.toString());
            
            if (topic1 == 'data/pa04/pa04dash/0404'){
                pa04 = message;
            }

            if (pa04){
              
              var jsonPa04 = JSON.parse(pa04.toString());
              console.log(jsonPa04);
                pa04hprod = jsonPa04.productionHourly;
                pa04sprod = jsonPa04.productionShift;
                pa04oee = jsonPa04.oeeHourly;      
              // console.log(hcap);
            }
    
            });
        });

        mqttclient.subscribe(topic2, function () {
          mqttclient.on('message', function (topic2, message, packet) {
            // console.log(message.toString());
              
            if (topic2 == 'data/pa08/pa08dash/0808'){
              pa08 = message;
            }

            if (pa08){
              
              var jsonPa08 = JSON.parse(pa08.toString());
              console.log(jsonPa08);
                pa08hprod = jsonPa08.productionHourly;
                pa08sprod = jsonPa08.productionShift;
                pa08oee = jsonPa08.oeeHourly;     
              // console.log(hcap);
            }

            });
        });

        mqttclient.subscribe(topic3, function () {
          mqttclient.on('message', function (topic3, message, packet) {
            // console.log(message.toString());
              
            if (topic3 == 'data/pa07/pa07dash/0707'){
              pa07 = message;
            }

            if (pa07){
              
              var jsonPa07 = JSON.parse(pa07.toString());
              console.log(jsonPa07);
                pa07hprod = jsonPa07.productionHourly;
                pa07sprod = jsonPa07.productionShift;
                pa07oee = jsonPa07.oeeHourly;     
              // console.log(hcap);
            }

            });
        });

        mqttclient.subscribe(topic4, function () {
          mqttclient.on('message', function (topic4, message, packet) {
            // console.log(message.toString());
            
            if (topic4 == 'data/pa06/pa06dash/0606'){
                pa06 = message;
            }

            if (pa06){
              
              var jsonPa06 = JSON.parse(pa06.toString());
              console.log(jsonPa06);
                pa06hprod = jsonPa06.productionHourly;
                pa06sprod = jsonPa06.productionShift;
                pa06oee = jsonPa06.oeeHourly;      
              // console.log(hcap);
            }
    
            });
        });
          
    io.sockets.emit('json', {

        datapa04sprod: pa04sprod,
        datapa04hprod: pa04hprod,
        datapa04oee: pa04oee,
        datapa08sprod: pa08sprod,
        datapa08hprod: pa08hprod,
        datapa08oee: pa08oee,
        datapa07sprod: pa07sprod,
        datapa07hprod: pa07hprod,
        datapa07oee: pa07oee,
        datapa06sprod: pa06sprod,
        datapa06hprod: pa06hprod,
        datapa06oee: pa06oee
        // datac: secs,
        // datam: minute
    });

    },1000);

  });

  http.listen(5058, function() {
    console.log("listening on *:5058");
  });