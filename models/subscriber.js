const mongoose = require('mongoose')
//allow us to create a model to interact with the database in a really easy way

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribedToChannel: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

//the model function takes two properties, name of the model in our database, schema that corresponds to that model
module.exports = mongoose.model('Subscriber', subscriberSchema)