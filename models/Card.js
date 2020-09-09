const mongoose = require('mongoose')


const cardSchema = new mongoose.Schema({ 
    name: {
        type:'string',
        required: true
    }, img: {
        type: 'string',
        required: true
    }
});


module.exports = mongoose.model("Card", cardSchema)