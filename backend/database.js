const mongoose = require('mongoose');
const connection = "mongodb+srv://dbadmin:<password>@cluster0.eb2so.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));