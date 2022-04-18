const express = require('express')
const TodoController = require('../controller/TodoController')
const Todo = require('../model/Todo')


const router = express.Router()

router.get('/', (req, res)=>{
    res.send("This is api")
})

router.get("/lists",TodoController.getLists )
router.post('/add', TodoController.addList)
router.get('/delete/:id', TodoController.deleteList)
router.post('/update', TodoController.updateList)


module.exports =router