const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove

// Todo.findByIdAndRemove("5a56d749ad5bce7881702660").then(todo => {
//   console.log(todo);
// });

Todo.findOneAndRemove({_id: '5a56d7b4ad5bce7881702676'}).then(todo => {
  console.log(todo);
});
