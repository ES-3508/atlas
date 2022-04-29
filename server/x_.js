const express = require('express');
const pa08Routes = express.Router();
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
var docket=[];
 
let i=0;
schedule.scheduleJob('30 * * * * *',function(){
    today= new Date();
    str=today.getFullYear().toString()+"-0"+(today.getMonth()+1).toString()+'-' +today.getDate().toString()
    client.on('message', function(topic,message){
    docket = JSON.parse(message.toString());
    print(docket)
    
    }) 
    if(docket.productionHourly){
        console.log(docket)
        i=i+1;
        const filter = { Date:str,Time_from:today.getHours()};
        console.log(today.getHours());
        const update = { Date:str,
        Time_from:today.getHours(),
        Time_to:today.getHours()+1,
        Production_Plan_Quantity:6750,
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
    
    

pa08Routes.route('/').get(function(req, res) {
    prod.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});
pa08Routes.route('/time/').get(function(req, res) {
    prod.find({Date:str},function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

app.use('/pa08', pa08Routes);
//app.listen(4000, function() {
  //  console.log("Server is running on Port: " + 5000);
//});
app.listen(4000,'192.168.8.110')