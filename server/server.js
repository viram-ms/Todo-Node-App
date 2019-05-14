var {mongoose} = require('./db/mongoose');
var {User} = require('./models/users');
var {Todo} = require('./models/todos');

var express= require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());


app.post('/todos',(req,res)=>{
    // console.log(req.body);

    var todo = new Todo({
        text:req.body.text
    });

    todo.save().then((result)=>{
        console.log(result);
        res.status(200).send(result);
    },(e)=>{
        console.log(e);
        res.status(400).send(e);
    });
});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.send(e);
    })
})


app.listen(3000,()=>{
    console.log('started on port 3000')
});

module.exports = {app};




// var newUser = new User({
//     email:'srupal@gmail.com'
// })



// var newTodo = new Todo({
//     text:'cook dinner',    
// });

// var newTodo3 = new Todo({
//     text:'take bath in evening',
//     completed:false
// })

// newTodo.save().then((result)=>{
//     console.log(result);
// },(e)=>{
//     console.log(e);
// });

// newTodo3.save().then((result)=>{
//     console.log(result);
// },(e)=>{
//     console.log(e);
// });

// newUser.save().then((result)=>{
//     console.log(result);
// },(e)=>{
//     console.log(e);
// })

