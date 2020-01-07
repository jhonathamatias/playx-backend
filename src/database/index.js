const mongoose = require('mongoose');
const { host, dbname, dbport, uriMongodbAtlas } = require('../config');

// mongoose.connect(`mongodb://${host}:${dbport}/${dbname}`, { 
//     useNewUrlParser: true,
//     connectTimeoutMS: 1000,
//     useCreateIndex : true
// }).
    // catch(error => console.log(error));

mongoose.connect(uriMongodbAtlas, { 
    useNewUrlParser: true,
    connectTimeoutMS: 1000,
    useCreateIndex : true
}).
    catch(error => console.log(error));

module.exports = mongoose;
