const express = require('express');
const pa08Routes = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { response } = require('express');
const mqtt = require('mqtt');
const schedule = require('node-schedule');
let today = new Date();
const str=today.getFullYear().toString()+'-'+(today.getMonth()+1).toString()+'-'+today.getDate();
console.log(str);

const app = express();
app.use(cors());
app.use(bodyParser.json());

const prod = require('./models/prod-docketPA08');
const timeTo = require('./models/timetotime');

mongoose.connect('mongodb://localhost:27017/Atlas_Production_DataBase',(err)=>{
    if(!err) console.log("db connected");
    else console.log('err');
})

//mqtt connection
var client = mqtt.connect('ws://192.168.8.110:8083/mqtt');
//mqtt topics
const topic1="data/pa07/pa07dash/9999";
const topic2="data/pa08/pa08dash/0808";
const topic3="data/pa07/pa07dash/0808";
const topic4="data/pa07/pa07dash/0707";
client.on('connect', function() {
    //client.subscribe(topic1);
    client.subscribe(topic4);
    //client.subscribe(topic3);
   // client.subscribe(topic4);
    
    console.log("Client has subscribed")
});

 
let i=0;
let docket=[];
schedule.scheduleJob('1 1 1 * * *',function(){
    today= new Date();
    client.on('message', function(topic,message){
        docket = JSON.parse(message.toString());
        console.log(docket)
    });
    prod({
        //Final_Output:docket.productionShift
        Date:str,
        Time_from:today.getHours() ,
        Time_to:today.getHours()+1,
        Production_Plan_Quantity:6750,
        Cummilative_Plan_Quantity:0,
        Final_Output:docket.productionHourly,
        Cummilative_Output:docket.productionShift,
        Refill_Rejection:docket.refilStopSh,
        Plug_Rejection:docket.labelStopShift,
        Cap_Rejection:docket.capStopShift
    }).save();

    const filter = { Date:str };
    console.log(today.getHours())
    const update = { value: docket.productionHourly };

    let doc =  timeTo.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true // Make this update into an upsert
      });
    console.log(today)
    console.log(docket)//docket.productionShift,docket._groupName,i++);
        
})

pa08Routes.route('/').get(function(req, res) {
    prod.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            //console.log(todos)
            res.json(todos);
        }
    });
});
pa08Routes.route('/time').get(function(req, res) {
    prod.find({Date:str},function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            console.log(todos)
            res.json(todos);
        }
    });
});

app.use('/pa08', pa08Routes);
app.listen(5000, function() {
    console.log("Server is running on Port: " + 5000);
});

