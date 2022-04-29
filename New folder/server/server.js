let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let database = require('./database/db');


// const prodRoute = require('../server/routes/prod.routes')
const prodRoutePA04 = require('../server/routes/prod.routesPA04')
const prodRoutePA08 = require('../server/routes/prod.routesPA08')
const prodRoutePA07 = require('../server/routes/prod.routesPA07')
const prodRoutePA06 = require('../server/routes/prod.routesPA06')


mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database connected sucessfully !')
},
    error => {
        console.log('Database could not be connected : ' + error)
    }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
// app.use('/productions', prodRoute)
app.use('/productionsPA04', prodRoutePA04)
app.use('/productionsPA08', prodRoutePA08)
app.use('/productionsPA07', prodRoutePA07)
app.use('/productionsPA06', prodRoutePA06)

const port = process.env.PORT || 4999;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// Error Handling
app.use((req, res, next) => {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});