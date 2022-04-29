// const emitter = new EventEmitter();
// emitter.setMaxListeners(0);

let express = require('express');
// let mongoose = require('mongoose');
// let cors = require('cors');
// let bodyParser = require('body-parser');




require('events').EventEmitter.defaultMaxListeners = Infinity;

 




const DocketdbPA04 = require('../server/Assembly/docketdbPA04')
const DocketdbPA08 = require('../server/Assembly/docketdbPA08')

const DocketdbFM8 = require('../server/Printing/docketdbFM8')
const DocketdbWEB2 = require('../server/Printing/docketdbWEB2')
const DocketdbWEB4 = require('../server/Printing/docketdbWEB4')
const DocketdbBM2 = require('../server/Printing/docketdbBM2');
const { EventEmitter } = require('stream');
// const DocketdbUV1 = require('../server/Printing/docketdbUV1')
// const emitter = new EventEmitter();
// emitter.setMaxListeners(200);


const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));


const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})


// Error Handling
// app.use((req, res, next) => {
//     next(createError(404));
// });


// 