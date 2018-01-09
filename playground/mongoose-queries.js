const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

const id = '5a532d862b5ae76b6805cb3d';

User.findById(id).then(user => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log(user);
}).catch(e => console.log(user));


// const id = '5a546a5120dbd6f76d353d90';
//
// if ( !ObjectID.isValid(id) ) {
//   return console.log('ID not valid');
// }
// const id = '6a546a5120dbd6f76d353d90';

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));
