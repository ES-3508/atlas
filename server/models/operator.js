const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const operatorSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    epfNum:{
        type:String 
    },

    photo: {
        type: String
    }
},
{
    collection: 'pa08Operators'
});

const Operator = mongoose.model('Operator', operatorSchema);

module.exports = Operator;