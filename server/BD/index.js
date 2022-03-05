const mongoose = require('mongoose');
const STRRING_CONNECTION = process.env.SRTING_CONNECTION
mongoose.connect(STRRING_CONNECTION,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log("mongoBD is connection"))
.catch(rej => console.error(rej))

module.exports = mongoose.connection;