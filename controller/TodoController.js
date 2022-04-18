
const { aggregate } = require('../model/Todo')
const Todo = require('../model/Todo')

function getLists (req,res){
    Todo.find({}, (err, data)=>{
        if (err) res.json({ success: false, data: error });
        else res.json({ success: true, data: data });
    })
}

function addList (req, res){
    list = req.body;
    console.log(list)
    let newList = new Todo(list)
    newList.save()
        .then(data => res.json({success: true, data: data}))
        .catch(err=> res.json({success: false, error: err}))

}

function deleteList(req, res){
    Todo.findByIdAndDelete(req.params.id, (err, data)=>{
        if(err) {res.json({success: false, error: err})}
        else { res.json({success: true, data: data}) }
    })
}

function updateList(req, res){
    Todo.findByIdAndUpdate(req.body._id, req.body, (err, data)=>{
        if (err) {res.json({success: false, error: err})}
        else{
            res.json({success: true, data: data})
        }
    } )
}


module.exports = {
    getLists,
    addList,
    deleteList,
    updateList
}