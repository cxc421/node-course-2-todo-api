const env = process.env.NODE_ENV || 'development';
// console.log('env *****', env);

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
} else {
  if (!process.env.MONGODB_URI) {
    const dbuser = 'chrischuang';
    const dbpassword = 'cxc421';
    process.env.MONGODB_URI = `mongodb://${dbuser}:${dbpassword}@ds249727.mlab.com:49727/todo-api`;
  }
}
