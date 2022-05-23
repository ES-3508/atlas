const mongoose = require('mongoose');
const mqtt = require('mqtt');
const schedule = require('node-schedule');
var today= new Date();


const prod = require('./models/prod-docketPA08');

var str=today.getFullYear().toString()+"-0"+(today.getMonth()+1).toString()+'-' +today.getDate().toString()

mongoose.connect('mongodb://localhost:27017/Atlas_Production_DataBase',(err)=>{
    if(!err) console.log("db connected");
    else console.log('err');
})

// //mqtt connection
// var client = mqtt.connect('ws://192.168.8.110:8083/mqtt');
// //mqtt topics
// const topic1="data/pa04/pa04dash/0404";
// const topic2="data/pa05/pa05dash/0505";
// const topic3="data/pa06/pa06dash/0606";
// const topic4="data/pa07/pa07dash/0707";
// const topic5="data/pa08/pa08dash/0808";
// const topic6="data/pa09/pa09dash/0909";
// client.on('connect', function() {
//     client.subscribe(topic1);

//     console.log("Client has subscribed")
// });
// var docket=[];
// var t
 
// let i=0;
// schedule.scheduleJob('30 * * * * *',function(){
//     today= new Date();
//     str=today.getFullYear().toString()+"-0"+(today.getMonth()+1).toString()+'-' +today.getDate().toString()
//     client.on('message', function(topic,message){
//         t='pa'+topic.slice(-2)
//     docket = JSON.parse(message.toString());
//     //console.log(docket)
    
//     }) 
//     if(true){
//         console.log(docket)
//         i=i+1;
//         const filter = { Date:str,Time_from:today.getHours(),machine:t};
//         console.log(today.getHours());
//         const update = { Date:str,
//         Time_from:today.getHours(),
//         Time_to:today.getHours()+1,
//         Production_Plan_Quantity:6750,
//         machine:t,
//         Cummilative_Plan_Quantity:0,
//         Final_Output:docket.productionHourly,
//         Cummilative_Output:docket.productionShift,
//         Refill_Rejection:docket.refilStopHourly,
//         Plug_Rejection:docket.plugHourly,
//         Cap_Rejection:docket.capHourly};
    

//         prod.find({}).sort("Timer_from")

//         console.log(docket.productionShift,docket._groupName,i,str);

//         prod.findOneAndUpdate(filter, {$set:update}, {upsert:true},(err, doc) => {
//         if (err) {
//             console.log("Something wrong when updating data!");
//         }else{
//             console.log('updated');
//         }
    
        
//     });
    
//     docket=[];


//     }  
// })

function machine(t){
    var client = mqtt.connect('ws://192.168.8.110:8083/mqtt');
    const topic ="data/"+t+'/'+t+"dash/"+t.slice(-2)+t.slice(-2)
    client.on('connect', function() {
        
        client.subscribe(topic);
    
        console.log("Client has subscribed",topic)
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
        
        
        }) 
        if(true){
            console.log(docket, t)
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
    
            console.log(docket.productionShift,t,i,str);
    
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
var pa08 = machine.call(this, "pa08");
var pa07 = machine.call(this, "pa07");
var pa03 = machine.call(this, "pa03");
var web04= machine.call(this, "web04");
var web02= machine.call(this, "web02");
var pa06= machine.call(this, "pa06");
var pa06= machine.call(this, "pa04");
    

