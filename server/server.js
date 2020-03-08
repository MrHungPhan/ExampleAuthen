const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('./db');
const useRouter = require('./routes/user.router');

connectDB();
const app = express();
const PORT = 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/user', useRouter);

app.listen(PORT, () => console.log('server is running on port' + PORT))