const express = require('express');
const pa = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { response } = require('express');
const mqtt = require('mqtt');

const schedule = require('node-schedule');
const app = express();
app.use(cors());
app.use(bodyParser.json());
var today= new Date();
var str=today.getFullYear().toString()+"-0"+(today.getMonth()+1).toString()+'-' +today.getDate().toString()
const prod = require('./models/prod-docketPA08');

mongoose.connect('mongodb://localhost:27017/Atlas_Production_DataBase',(err)=>{
    if(!err) console.log("db connected");
    else console.log('err');
})

//mqtt connection
var client = mqtt.connect('ws://192.168.8.110:8083/mqtt');
//mqtt topics
const topic1="data/pa04/pa04dash/0404";
const topic2="data/pa05/pa05dash/0505";
const topic3="data/pa06/pa06dash/0606";
const topic4="data/pa07/pa07dash/0707";
const topic5="data/pa08/pa08dash/0808";
const topic6="data/pa09/pa09dash/0909";
client.on('connect', function() {
    client.subscribe(topic1);
    client.subscribe(topic2);
    client.subscribe(topic3);
    client.subscribe(topic4);
    client.subscribe(topic5);
    client.subscribe(topic6);
    
    
    console.log("Client has subscribed")
});
var docket=[];
var t
 
let i=0;
schedule.scheduleJob('30 * * * * *',function(){
    today= new Date();
    str=today.getFullYear().toString()+"-0"+(today.getMonth()+1).toString()+'-' +today.getDate().toString()
    client.on('message', function(topic,message){
        t='pa'+topic.slice(-2)
    docket = JSON.parse(message.toString());
    //console.log(docket)
    
    }) 
    if(true){
        console.log(docket)
        i=i+1;
        const filter = { Date:str,Time_from:today.getHours(),machine:t};
        console.log(today.getHours());
        const update = { Date:str,
        Time_from:today.getHours(),
        Time_to:today.getHours()+1,
        Production_Plan_Quantity:6750,
        machine:t,
        Cummilative_Plan_Quantity:0,
        Final_Output:docket.productionHourly,
        Cummilative_Output:docket.productionShift,
        Refill_Rejection:docket.refilStopHourly,
        Plug_Rejection:docket.plugHourly,
        Cap_Rejection:docket.capHourly};
    

        prod.find({}).sort("Timer_from")

        console.log(docket.productionShift,docket._groupName,i,str);

        prod.findOneAndUpdate(filter, {$set:update}, {upsert:true},(err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }else{
            console.log('updated');
        }
    
        
    });
    
    docket=[];


    }
    

   
    
       
    
})
    
    

pa.route('/').get(function(req, res) {
    prod.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});
pa.route('/time/:machine').get(function(req, res) {
    prod.find({Date:str,machine:req.params.machine},function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
            console.log(req.params.machine)
        }
    });
});
pa.route('/time/:machine/:date').get(function(req, res) {
    prod.find({Date:req.params.date, machine:req.params.machine},function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
    console.log("machine: ", req.params.machine,req.params.date);
   
   // res.send(req.params['machine']);
});

// pa.route('/time/:machine/:date').post(function(req, res) {
//     prod.find({Date:req.params.date},function(err, todos) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(todos);
//         }
//     });
//     console.log("machine: ", req.params.machine);
//     console.log(req.body.date)
   
//     res.send(todos);
// });

app.use('/pa', pa);
//app.listen(4000, function() {
  //  console.log("Server is running on Port: " + 5000);
//});
app.listen(5000)