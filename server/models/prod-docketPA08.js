const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let proddocketPA08 = new Schema({
    Date: {
        type: String
    },
    Time_from: {
        type: String
    },
    Time_to: {
        type: String
    },
    machine:{
        type:String
    },
    Production_Plan_Quantity: {
        type: String,
        default: 0
    },
    Cummilative_Plan_Quantity: {
        type: String,
        default: 0
    },
    Final_Output: {
        type: String,
        default: 0
    },
    Cummilative_Output: {
        type: String,
        default: 0
    },
    Refill_Rejection: {
        type: String,
        default: 0
    },
    Plug_Rejection: {
        type: String,
        default: 0
    },
    Cap_Rejection: {
        type: String,
        default: 0
    }
}, {
        collection: 'timeToTime'
    })

module.exports = mongoose.model('docketPA08', proddocketPA08)