var express = require("express");
var app = express();
const mqtt = require("mqtt");
const mqttclient = mqtt.connect('ws://192.168.8.110:8083/mqtt');
const mongo = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectId;
const cors = require('cors');
var assert = require('assert');
const http = require("http").Server(express);

const topic = '+/uv01/uv01dash/001';

const url = 'mongodb://127.0.0.1:27017/';

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: [],
    credentials: true
  }
});

var prodq, cummq, tfrom, tto, sshift, shift, shiftplan, hrefill, hplug, hcap, hprodx, hoee, soee, sprodx,
    cuout, ctot, prodprog1, prodprog2, prodprog3, prodprog4, prodprog5, prodprog6, prodprog7, 
    prodprog8, prodprog9, prodprog10, prodprog11, prodprog12, prodprog13, oeeprog1, oeeprog2,
    oeeprog3, oeeprog4, oeeprog5, oeeprog6, oeeprog7, oeeprog8, oeeprog9, oeeprog10, oeeprog11,
    oeeprog12, oeeprog13, soeeprog1, soeeprog2, soeeprog3, soeeprog4, soeeprog5, soeeprog6, soeeprog7, 
    soeeprog8, soeeprog9, soeeprog10, soeeprog11, soeeprog12, soeeprog13;

server = require('http').Server(app);
PORT = process.env.PORT || 5059;

app.use(cors());
app.use(express.static(__dirname + "/public"));

mqttclient.on("connect",function(){

    // // console.log('Client connected');

    setInterval(function(){

        const today = new Date();
        const date = today.toDateString();
        const hour = today.getHours();
        const minute = today.getMinutes();
        const secs = today.getSeconds();
        // // console.log(secs);

//////////////////////////////////////////////////////////////   MQTT Subscribe Function   //////////////////////////////////////////////////////////////////

        mqttclient.subscribe(topic, function () {
          mqttclient.on('message', function (topic, message, packet) {
            // // console.log(message.toString());
            
            if (topic == 'data/uv01/uv01dash/0101'){
                pa08 = message;
            }

            if (pa08){
              
              var jsonPa08 = JSON.parse(pa08.toString());
              //// // console.log(jsonPa08);
              
                hrefill = jsonPa08.refillHourly;
                hplug = jsonPa08.plugHourly;
                hcap = jsonPa08.capHourly;
                hprodx = jsonPa08.productionHourly;
                sprodx = jsonPa08.productionShift;
                hoee = jsonPa08.oeeHourly;
                soee = jsonPa08.oeeCumalative;         
                // // console.log(jsonPa08.productionHourly);
            }
    
            });
        });
        
//////////////////////////////////////////////////////////////   MQTT Subscribe Function   //////////////////////////////////////////////////////////////////

        
//////////////////////////////////////////////////////////////   Data Update Function   //////////////////////////////////////////////////////////////////    

      if (((hour === 19) && (minute === 15) && (secs === 0)) || ((hour === 8) && (minute === 15) && (secs === 0))) {

          mongo.connect(url, function(err, dbm) {

              var dbx = dbm.db("Atlas_Production_DataBase");
              assert.equal(null, err);
              var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289e0') };
              var newvalues = { $set: { productionHourly: '0', oeeHourly: '0', oeeCumalative: '0' } };

              dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                  assert.equal(null, err);
                  console.log('Item inserted');
                  dbm.close();
                  });
          });

          mongo.connect(url, function(err, dbm) {

              var dbx = dbm.db("Atlas_Production_DataBase");
              assert.equal(null, err);
              var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289e1') };
              var newvalues = { $set: { productionHourly: '0', oeeHourly: '0', oeeCumalative: '0' } };

              dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                  assert.equal(null, err);
                  console.log('Item inserted');
                  dbm.close();
                  });
          });

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289e2') };
            var newvalues = { $set: { productionHourly: '0', oeeHourly: '0', oeeCumalative: '0' } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289e3') };
            var newvalues = { $set: { productionHourly: '0', oeeHourly: '0', oeeCumalative: '0' } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289e4') };
            var newvalues = { $set: { productionHourly: '0', oeeHourly: '0', oeeCumalative: '0' } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289e5') };
            var newvalues = { $set: { productionHourly: '0', oeeHourly: '0', oeeCumalative: '0' } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289e6') };
            var newvalues = { $set: { productionHourly: '0', oeeHourly: '0', oeeCumalative: '0' } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289e7') };
            var newvalues = { $set: { productionHourly: '0', oeeHourly: '0', oeeCumalative: '0' } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289e8') };
            var newvalues = { $set: { productionHourly: '0', oeeHourly: '0', oeeCumalative: '0' } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289e9') };
            var newvalues = { $set: { productionHourly: '0', oeeHourly: '0', oeeCumalative: '0' } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289ea') };
            var newvalues = { $set: { productionHourly: '0', oeeHourly: '0', oeeCumalative: '0' } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289eb') };
            var newvalues = { $set: { productionHourly: '0', oeeHourly: '0', oeeCumalative: '0' } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289ec') };
            var newvalues = { $set: { productionHourly: '0', oeeHourly: '0', oeeCumalative: '0' } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });

      }


        if (((hour === 8) && (minute === 59) && (secs === 59)) || ((hour === 19) && (minute === 59) && (secs === 59))) {

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289e0') };
            var newvalues = { $set: { productionHourly: hprodx, oeeHourly: hoee, oeeCumalative: soee } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });
        }

        if (((hour === 9) && (minute === 59) && (secs === 59)) || ((hour === 20) && (minute === 59) && (secs === 59))) {

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289e1') };
            var newvalues = { $set: { productionHourly: hprodx, oeeHourly: hoee, oeeCumalative: soee } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });
        }

        if (((hour === 10) && (minute === 59) && (secs === 59)) || ((hour === 21) && (minute === 59) && (secs === 59))) {

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289e2') };
            var newvalues = { $set: { productionHourly: hprodx, oeeHourly: hoee, oeeCumalative: soee } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });
        }

        if (((hour === 11) && (minute === 59) && (secs === 59)) || ((hour === 22) && (minute === 59) && (secs === 59))) {

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289e3') };
            var newvalues = { $set: { productionHourly: hprodx, oeeHourly: hoee, oeeCumalative: soee } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });
        }

        if (((hour === 12) && (minute === 59) && (secs === 59)) || ((hour === 23) && (minute === 59) && (secs === 59))) {

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289e4') };
            var newvalues = { $set: { productionHourly: hprodx, oeeHourly: hoee, oeeCumalative: soee } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });
        }

        if (((hour === 13) && (minute === 59) && (secs === 59)) || ((hour === 0) && (minute === 59) && (secs === 59))) {

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289e5') };
            var newvalues = { $set: { productionHourly: hprodx, oeeHourly: hoee, oeeCumalative: soee } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });
        }

        if (((hour === 14) && (minute === 59) && (secs === 59)) || ((hour === 1) && (minute === 59) && (secs === 59))) {

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289e6') };
            var newvalues = { $set: { productionHourly: hprodx, oeeHourly: hoee, oeeCumalative: soee } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });
        }

        if (((hour === 15) && (minute === 59) && (secs === 59)) || ((hour === 2) && (minute === 59) && (secs === 59))) {

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289e7') };
            var newvalues = { $set: { productionHourly: hprodx, oeeHourly: hoee, oeeCumalative: soee } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });
        }

        if (((hour === 16) && (minute === 59) && (secs === 59)) || ((hour === 3) && (minute === 59) && (secs === 59))) {

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289e8') };
            var newvalues = { $set: { productionHourly: hprodx, oeeHourly: hoee, oeeCumalative: soee } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });
        }

        if (((hour === 17) && (minute === 59) && (secs === 59)) || ((hour === 4) && (minute === 59) && (secs === 59))) {

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289e9') };
            var newvalues = { $set: { productionHourly: hprodx, oeeHourly: hoee, oeeCumalative: soee } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });
        }

        if (((hour === 18) && (minute === 59) && (secs === 59)) || ((hour === 5) && (minute === 59) && (secs === 59))) {

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289ea') };
            var newvalues = { $set: { productionHourly: hprodx, oeeHourly: hoee, oeeCumalative: soee } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });
        }

        if ((hour === 6) && (minute === 59) && (secs === 59)) {

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289eb') };
            var newvalues = { $set: { productionHourly: hprodx, oeeHourly: hoee, oeeCumalative: soee } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });
        }

        if ((hour === 7) && (minute === 59) && (secs === 59)) {

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            var doc_id = { _id: ObjectID('619ddd1ab3fb95ccfe2289ec') };
            var newvalues = { $set: { productionHourly: hprodx, oeeHourly: hoee, oeeCumalative: soee } };

            dbx.collection('progressandoeeuv1').updateOne(doc_id, newvalues, function(err, result) {
                assert.equal(null, err);
                console.log('Item inserted');
                dbm.close();
                });
          });
        }

//////////////////////////////////////////////////////////////   Data Update Function   //////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////   Data Display Function   //////////////////////////////////////////////////////////////////

    if (((hour >= 9) && (hour < 19))  || ((hour >= 20) && (hour <= 7))) {
    mongo.connect(url, function(err, db) {

      if (err) throw err;
      const dbo = db.db("Atlas_Production_DataBase");

      dbo.collection("progressandoeeuv1").findOne({"_id": ObjectID('619ddd1ab3fb95ccfe2289e0')},{projection: {_id: 0, productionHourly:1, oeeHourly:1, oeeCumalative:1 }}, function(err, result) {

          if (err) throw err;

          prodprog1 = result.productionHourly;
          oeeprog1 = result.oeeHourly;
          soeeprog1 = result.oeeCumalative;
      
          // console.log(prodprog1);
          db.close();

      });

      });
      }

    if (((hour >= 10) && (hour < 19))|| ((hour >= 21) && (hour <= 7))) {
    mongo.connect(url, function(err, db) {

      if (err) throw err;
      const dbo = db.db("Atlas_Production_DataBase");

          dbo.collection("progressandoeeuv1").findOne({"_id": ObjectID('619ddd1ab3fb95ccfe2289e1')},{projection: {_id: 0, productionHourly:1, oeeHourly:1, oeeCumalative:1 }}, function(err, result) {

          if (err) throw err;

          prodprog2 = result.productionHourly;
          oeeprog2 = result.oeeHourly;
          soeeprog2 = result.oeeCumalative;
          
          // console.log(prodprog2);
          db.close();

          });

      });
      }

    if (((hour >= 11) && (hour < 19)) || ((hour >= 22) && (hour <= 7))) {
    mongo.connect(url, function(err, db) {

      if (err) throw err;
      const dbo = db.db("Atlas_Production_DataBase");

          dbo.collection("progressandoeeuv1").findOne({"_id": ObjectID('619ddd1ab3fb95ccfe2289e2')},{projection: {_id: 0, productionHourly:1, oeeHourly:1, oeeCumalative:1 }}, function(err, result) {

          if (err) throw err;

          prodprog3 = result.productionHourly;
          oeeprog3 = result.oeeHourly;
          soeeprog3 = result.oeeCumalative;
          
          // console.log(prodprog3);
          db.close();

          });

      });
      }

    if (((hour >= 12) && (hour < 19)) || ((hour >= 23) && (hour <= 7)))  {
    mongo.connect(url, function(err, db) {

      if (err) throw err;
      const dbo = db.db("Atlas_Production_DataBase");

          dbo.collection("progressandoeeuv1").findOne({"_id": ObjectID('619ddd1ab3fb95ccfe2289e3')},{projection: {_id: 0, productionHourly:1, oeeHourly:1, oeeCumalative:1 }}, function(err, result) {

          if (err) throw err;

          prodprog4 = result.productionHourly;
          oeeprog4 = result.oeeHourly;
          soeeprog4 = result.oeeCumalative;
          
          // console.log(prodprog4);
          db.close();

          });

      });
      }

    if (((hour >= 13) && (hour < 19)) || ((hour >=0) && (hour <= 7)))  {
      mongo.connect(url, function(err, db) {

      if (err) throw err;
      const dbo = db.db("Atlas_Production_DataBase");

          dbo.collection("progressandoeeuv1").findOne({"_id": ObjectID('619ddd1ab3fb95ccfe2289e4')},{projection: {_id: 0, productionHourly:1, oeeHourly:1, oeeCumalative:1 }}, function(err, result) {

          if (err) throw err;

          prodprog5 = result.productionHourly;
          oeeprog5 = result.oeeHourly;
          soeeprog5 = result.oeeCumalative;
          
          // console.log(prodprog5);
          db.close();

          });

      });
      }

    if (((hour >= 14) && (hour < 19)) || ((hour >= 1) && (hour <= 7)))  {
      mongo.connect(url, function(err, db) {

      if (err) throw err;
      const dbo = db.db("Atlas_Production_DataBase");

          dbo.collection("progressandoeeuv1").findOne({"_id": ObjectID('619ddd1ab3fb95ccfe2289e5')},{projection: {_id: 0, productionHourly:1, oeeHourly:1, oeeCumalative:1 }}, function(err, result) {

          if (err) throw err;

          prodprog6 = result.productionHourly;
          oeeprog6 = result.oeeHourly;
          soeeprog6 = result.oeeCumalative;
          
          // console.log(prodprog6);
          db.close();

          });

      });
      }

    if (((hour >= 15) && (hour < 19)) || ((hour >= 2) && (hour <= 7)))  {
      mongo.connect(url, function(err, db) {

      if (err) throw err;
      const dbo = db.db("Atlas_Production_DataBase");

          dbo.collection("progressandoeeuv1").findOne({"_id": ObjectID('619ddd1ab3fb95ccfe2289e6')},{projection: {_id: 0, productionHourly:1, oeeHourly:1, oeeCumalative:1 }}, function(err, result) {

          if (err) throw err;

          prodprog7 = result.productionHourly;
          oeeprog7 = result.oeeHourly;
          soeeprog7 = result.oeeCumalative;
          
          // console.log(prodprog7);
          db.close();

          });

      });
      }

    if (((hour >= 16) && (hour < 19)) || ((hour >= 3) && (hour <= 7)))  {
      mongo.connect(url, function(err, db) {

      if (err) throw err;
      const dbo = db.db("Atlas_Production_DataBase");

          dbo.collection("progressandoeeuv1").findOne({"_id": ObjectID('619ddd1ab3fb95ccfe2289e7')},{projection: {_id: 0, productionHourly:1, oeeHourly:1, oeeCumalative:1 }}, function(err, result) {

          if (err) throw err;

          prodprog8 = result.productionHourly;
          oeeprog8 = result.oeeHourly;
          soeeprog8 = result.oeeCumalative;
          
          // console.log(prodprog8);
          db.close();

          });

      });
      }

    if (((hour >= 17) && (hour < 19)) || ((hour >= 4) && (hour <= 7)))  {
      mongo.connect(url, function(err, db) {

      if (err) throw err;
      const dbo = db.db("Atlas_Production_DataBase");

          dbo.collection("progressandoeeuv1").findOne({"_id": ObjectID('619ddd1ab3fb95ccfe2289e8')},{projection: {_id: 0, productionHourly:1, oeeHourly:1, oeeCumalative:1 }}, function(err, result) {

          if (err) throw err;

          prodprog9 = result.productionHourly;
          oeeprog9 = result.oeeHourly;
          soeeprog9 = result.oeeCumalative;
          
          // console.log(prodprog9);
          db.close();

          });

      });
      }

    if (((hour >= 18) && (hour < 19))  || ((hour >= 5) && (hour < 8)))  {
      mongo.connect(url, function(err, db) {

      if (err) throw err;
      const dbo = db.db("Atlas_Production_DataBase");

          dbo.collection("progressandoeeuv1").findOne({"_id": ObjectID('619ddd1ab3fb95ccfe2289e9')},{projection: {_id: 0, productionHourly:1, oeeHourly:1, oeeCumalative:1 }}, function(err, result) {

          if (err) throw err;

          prodprog10 = result.productionHourly;
          oeeprog10 = result.oeeHourly;
          soeeprog10 = result.oeeCumalative;
          
          // console.log(prodprog10);
          db.close();

          });

      });
      }

    if (((hour >= 19)) && ((minute >= 0) && (minute < 5)) || ((hour >= 6) && (hour < 8)))  {
      mongo.connect(url, function(err, db) {

      if (err) throw err;
      const dbo = db.db("Atlas_Production_DataBase");

          dbo.collection("progressandoeeuv1").findOne({"_id": ObjectID('619ddd1ab3fb95ccfe2289ea')},{projection: {_id: 0, productionHourly:1, oeeHourly:1, oeeCumalative:1 }}, function(err, result) {

          if (err) throw err;

          prodprog11 = result.productionHourly;
          oeeprog11 = result.oeeHourly;
          soeeprog11 = result.oeeCumalative;
          
          // console.log(prodprog11);
          db.close();

          });

      });
      }

    if (((hour >= 7) && (hour < 8)))  {
      mongo.connect(url, function(err, db) {

      if (err) throw err;
      const dbo = db.db("Atlas_Production_DataBase");

          dbo.collection("progressandoeeuv1").findOne({"_id": ObjectID('619ddd1ab3fb95ccfe2289eb')},{projection: {_id: 0, productionHourly:1, oeeHourly:1, oeeCumalative:1 }}, function(err, result) {

          if (err) throw err;

          prodprog12 = result.productionHourly;
          oeeprog12 = result.oeeHourly;
          soeeprog12 = result.oeeCumalative;
          
          // console.log(prodprog12);
          db.close();

          });

      });
      }

    if (((hour >= 8)) && ((minute >= 0) && (minute < 5)))  {
      mongo.connect(url, function(err, db) {

      if (err) throw err;
      const dbo = db.db("Atlas_Production_DataBase");

          dbo.collection("progressandoeeuv1").findOne({"_id": ObjectID('619ddd1ab3fb95ccfe2289ec')},{projection: {_id: 0, productionHourly:1, oeeHourly:1, oeeCumalative:1 }}, function(err, result) {

          if (err) throw err;

          prodprog13 = result.productionHourly;
          oeeprog13 = result.oeeHourly;
          soeeprog13 = result.oeeCumalative;
          
          // console.log(prodprog4);
          db.close();

          });

      });
      }

//////////////////////////////////////////////////////////////   Data Display Function   //////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////   Delete Function   //////////////////////////////////////////////////////////////////

    // if (((hour === 19) && (minute === 15) && (secs === 0)) || (hour === 8) && (minute === 15) && (secs === 0)) {

    //   mongo.connect(url, function(err, dbm) {

    //       var dbx = dbm.db("Atlas_Production_DataBase");
    //       assert.equal(null, err);
    //       dbx.collection('progressandoeeuv1').drop(function(err, delOK) {
    //           if (err) throw err;
    //           if (delOK) // console.log("Collection deleted");
    //       dbm.close();
    //       });

    //   });

    // }

//////////////////////////////////////////////////////////////   Delete Function   //////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////   Data Retrive Function 1  //////////////////////////////////////////////////////////////////

              if ((hour === 8 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abc1')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });
                
              }

              if ((hour === 9 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abc2')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 10 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abc3')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 11 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abc4')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 12)) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abc5')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 13 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abc6')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 14 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abc7')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 15 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abc8')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 16 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abc9')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 17 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abca')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 18 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abcb')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 19 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abcc')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 20 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abcd')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 21 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abce')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 22 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abcf')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 23 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abd0')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 0 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abd1')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 1 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abd2')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 2 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abd3')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 3 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abd4')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 4 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abd5')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 5 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abd6')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 6 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abd7')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

              if ((hour === 7 )) {

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
                  const dbo = db.db("Atlas_Production_DataBase");
          
                dbo.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abd8')},{projection: {_id: 0, Time_from:1, Time_to:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1, Shift:1, Operator_Name:1, Shift_Plan_Qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.Time_from;
                  tto = result.Time_to;
                  prodq = result.Prod_Plan_Qtny;
                  cummq = result.Cumm_Plan_Qtny;
                  shift = result.Shift;
                  shiftplan = result.Shift_Plan_Qtny;
                  // // console.log(tfrom);
                  db.close();
          
                });

              });

              }

               
//////////////////////////////////////////////////////////////   Data Retrive Function 1  //////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////   Data Retrive Function 2  //////////////////////////////////////////////////////////////////             

    mongo.connect(url, function(err, dbm) {

    if (err) throw err;
    var dbx = dbm.db("Atlas_Production_DataBase");
    
        if ((hour === 8)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abc1')},{projection: {_id: 0, Prod_Plan_Qtny:1 }}, function(err, result) {
    
            if (err) throw err;
    
            sshift = result.Prod_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 9)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abc2')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 10)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abc3')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 11)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abc4')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 12)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abc5')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 13)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abc6')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 14)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abc7')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 15)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abc8')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 16)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abc9')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 17)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abca')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 18)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abcb')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 19)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abcc')},{projection: {_id: 0, Prod_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Prod_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 20)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abcd')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 21)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abce')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 22)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abcf')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 23)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abd0')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour ===0)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abd1')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 1)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abd2')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 2)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abd3')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 3)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abd4')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 4)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abd5')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 5)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abd6')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 6)) {
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abd7')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
        if ((hour === 7)) {
    
        dbx.collection("prodsUV1").findOne({"_id": ObjectID('616688243b4be3806013abd8')},{projection: {_id: 0, Cumm_Plan_Qtny:1 }}, function(err, result) {
            
            if (err) throw err;
    
            sshift = result.Cumm_Plan_Qtny;
            dbm.close();
    
        });
        }
    
    });

//////////////////////////////////////////////////////////////   Data Retrive Function 2  //////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////   Data Storing Function - Docket  //////////////////////////////////////////////////////////////////

        if ((hour === 8) && (minute === 59) && (secs === 59)) {

            const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 9) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 10) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 11) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 12) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 13) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 14) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 15) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 16) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 17) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 18) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 19) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 20) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 21) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 22) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 23) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 0) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 1) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 2) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 3) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 4) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 5) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 6) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

        if ((hour === 7) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Date': date,
            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': sprodx,
            'Refill_Rejection': hrefill,
            'Plug_Rejection': hplug,
            'Cap_Rejection': hcap

        };

        // console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, dbm) {

            var dbx = dbm.db("Atlas_Production_DataBase");
            assert.equal(null, err);
            dbx.collection('docketUV1').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              dbm.close();
            });

          });

        }

//////////////////////////////////////////////////////////////   Data Retrive Function - Docket  //////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////   ioEmit Function   //////////////////////////////////////////////////////////////////

    io.sockets.emit('json', {

        datasshift: sshift,
        datacummq: cummq,
        datashift: shift,
        datashiftplan: shiftplan,
        dataprodq: prodq,
        datac: secs,
        datam: minute,

        dataoeeprog1: oeeprog1,
        dataoeeprog2: oeeprog2,
        dataoeeprog3: oeeprog3,
        dataoeeprog4: oeeprog4,
        dataoeeprog5: oeeprog5,
        dataoeeprog6: oeeprog6,
        dataoeeprog7: oeeprog7,
        dataoeeprog8: oeeprog8,
        dataoeeprog9: oeeprog9,
        dataoeeprog10: oeeprog10,
        dataoeeprog11: oeeprog11,
        dataoeeprog12: oeeprog12,
        dataoeeprog13: oeeprog13,

        datasoeeprog1: soeeprog1,
        datasoeeprog2: soeeprog2,
        datasoeeprog3: soeeprog3,
        datasoeeprog4: soeeprog4,
        datasoeeprog5: soeeprog5,
        datasoeeprog6: soeeprog6,
        datasoeeprog7: soeeprog7,
        datasoeeprog8: soeeprog8,
        datasoeeprog9: soeeprog9,
        datasoeeprog10: soeeprog10,
        datasoeeprog11: soeeprog11,
        datasoeeprog12: soeeprog12,
        datasoeeprog13: soeeprog13,
        
        dataprodprog1: prodprog1,
        dataprodprog2: prodprog2,
        dataprodprog3: prodprog3,
        dataprodprog4: prodprog4,
        dataprodprog5: prodprog5,
        dataprodprog6: prodprog6,
        dataprodprog7: prodprog7,
        dataprodprog8: prodprog8,
        dataprodprog9: prodprog9,
        dataprodprog10: prodprog10,
        dataprodprog11: prodprog11,
        dataprodprog12: prodprog12,
        dataprodprog13: prodprog13

    });

    },1000);

  });

  http.listen(5059, function() {
    console.log("listening on *:5059");
  });



  

/////////////////////////////////////// To read last insert field in Mongo DB ///////////////////////////////////////////////

                // mongo.connect(url, function(err, db) {
    
                //   if (err) throw err;
        
                //   const dbx = db.db("Atlas_Production_DataBase");
                
                //       dbx.collection("docketPA04").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                //           if (err) throw err;
                  
                //           cuout = data.Cummilative_Output;
        
                //           // // console.log(cuout);
                //           db.close();
                //         },);
                    
                // });

/////////////////////////////////////// To read last insert field in Mongo DB ///////////////////////////////////////////////