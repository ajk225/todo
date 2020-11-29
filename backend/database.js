const mongoose = require('mongoose');
const connection = "mongodb+srv://dbadmin:secrets@cluster0.eb2so.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));