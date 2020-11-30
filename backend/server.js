const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
require('./database');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const users = require('../api/users');
app.use('/api/users',users);

var testAPIRouter = require("../api/testapi");
app.use("/testAPI", testAPIRouter);


app.use(express.static(path.join(__dirname,'../build')))
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'../build'))
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

