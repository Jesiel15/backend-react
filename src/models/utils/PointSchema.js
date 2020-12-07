const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    type:{
        type: String,   
        enum: ['Point'],
        requerid: true,
    },
    coordinates: {
        type: [Number],
        requerid: true,
    },
});

module.exports = PointSchema; 

