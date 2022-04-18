const mongoose =  require('mongoose')

mongoose
    .connect("mongodb+srv://Temuulen:Pa55w0rd!@cluster0.wbtgo.mongodb.net/exam?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then( ()=> console.log("Mongo db successfully connected"))
    .catch(err => console.log(err))

module.exports = mongoose;