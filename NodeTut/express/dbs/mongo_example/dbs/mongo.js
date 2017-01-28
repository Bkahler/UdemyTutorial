var mongoose = require('mongoose');

mongoose.connect( 'mongodb://bkahler:joeboxer@ds143767.mlab.com:43767/nodepractice');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String,
});

module.exports = mongoose.model('Person', personSchema);
