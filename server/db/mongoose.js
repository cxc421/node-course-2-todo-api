const mongoose = require('mongoose');
const dbuser = 'chrischuang';
const dbpassword = 'cxc421';
const mongodburi = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(mongodburi, {useMongoClient: true});

module.exports = { mongoose };
