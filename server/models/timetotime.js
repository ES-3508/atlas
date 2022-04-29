const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let timeToTimeSchema = new Schema({
    name: {
        type: String
    },
    value: {
        type: String
    }
    
}, {
        collection: 'timetotime'
    })

module.exports = mongoose.model('timeToTime', timeToTimeSchema)