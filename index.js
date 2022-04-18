require('dotenv').config()
const port = 3000;
const cors = require('cors')
const express = require("express")
const connection = require('./database')
const apiRoutes = require('./Routes/api')
const app = express();
app.use(express.json())
app.use(cors())



app.use('/api', apiRoutes);

app.all('*', (req, res)=>{
    res.status(404).json({
        success: false,
        message: `Can't find ${req.originalUrl} on this server`
    })
})

app.listen(port, ()=>{
    console.log("server running at port " + port)
})
