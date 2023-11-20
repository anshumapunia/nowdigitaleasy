const mongoose = require("mongoose")
const connection = mongoose.connect(
    
    "mongodb+srv://anshumapunia0:anshumapunia0@cluster0.1af6tyi.mongodb.net/nowdigitaleasy?retryWrites=true&w=majority"
);

module.exports = {
    connection
}