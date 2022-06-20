const schedule = require('node-schedule');
const mongoose = require('mongoose');
const prod = require('./models/prod-docketPA08');
const mqtt = require('mqtt');

mongoose.connect('mongodb://localhost:27017/Atlas_Production_DataBase',(err)=>{
    if(!err) console.log("db connected");
    else console.log('err');
})


function machine(t) {
    const topic="data/"+t+'/'+t+"dash/"+t.slice(-2)+t.slice(-2);
    //console.log(topic)

    //mqtt connection
    var client = mqtt.connect('ws://192.168.8.110:8083/mqtt');

    client.on('connect', function() {
        client.subscribe(topic); 
        console.log("Client has subscribed")
    });
    
var docket=[];
 
let i=0;
schedule.scheduleJob('30 * * * * *',function(){
    


    today= new Date();
    str=today.getFullYear().toString()+"-0"+(today.getMonth()+1).toString()+'-' +today.getDate().toString()
    client.on('message', function(topic,message){
    docket = JSON.parse(message.toString());
    //console.log(docket)
    
    }) 
    if(true){
        console.log(docket,t)
        i=i+1;
        const filter = {
        Date:str,Time_from:today.getHours(),machine:t};
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
        Cap_Rejection:docket.capHourly,
        Operator:docket.operator,
        Oee:docket.oeeHourly,
        OeeAvailability:docket.availHourly,
        OeeQuality:docket.qualHourly
    };
    

        prod.find({}).sort("Timer_from")

        console.log(docket.productionShift,docket._groupName,i,str);

        prod.findOneAndUpdate(filter, {$set:update}, {upsert:true},(err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }else{
            console.log('updated',topic);
        }        
    });   
    docket=[];
    }    
})

    
}
const pa01 = machine("pa01")
const pa02 = machine("pa02")
const pa03 = machine("pa03")
const pa04 = machine("pa04")
const pa05 = machine("pa05")
const pa06 = machine("pa06")
const pa07 = machine("pa07")
const pa08 = machine("pa08")
const pa09 = machine("pa09")


const web02 = machine("web02")
const web04 = machine("web04")
const fm08 = machine("fm08")