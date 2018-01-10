const mongoose = require('mongoose');
const dbuser = 'chrischuang';
const dbpassword = 'cxc421';
const mongodburi = process.env.PORT
  ? `mongodb://${dbuser}:${dbpassword}@ds249727.mlab.com:49727/todo-api`
  : 'mongodb://localhost:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(mongodburi);

module.exports = { mongoose };
