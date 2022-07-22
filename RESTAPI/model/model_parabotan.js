const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    nama: { type: String },
    keterangan: { type: String },
    jenis: { type: String },
    harga: { type: String },
    date: { type: Date, default: Date.now }

})
module.exports = mongoose.model('parabotan', UserSchema)