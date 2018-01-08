const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a531214ad5bce7881700f57')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a530456f54e0566a4fd9603')
  }, {
    $set: {
      name: 'Chris'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then(result => {
    console.log(result);
  });

});
