const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataCovid = new Schema({
    tanggal: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    usia: {
        type: Number,
        required: true,
    },
    noPasien_id: {
        type: String,
        required: true,
    },
    author: {
        type: Object,
        required: true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('DataCovid', DataCovid);