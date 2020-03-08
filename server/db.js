const mongoose = require('mongoose');

const url = 'mongodb+srv://HungPhan:hung5995@cluster0-armbp.mongodb.net/test?retryWrites=true&w=majority';

const connectDb = async () => {
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('DB connnected...!')
}

module.exports = connectDb;