// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// var user = {name:'viram',age:20};

// var {name}=user;
// console.log(name);



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
    return console.log('unable to connect to mongo db');
    }
    console.log('mongodb connected');
    const db = client.db('TodoApp');

    db.collection('TODOS').insertOne({
        
        test:'manything to do',
        completed:true
    },(err,result)=>{
        if(err){
            return console.log('unable to insert tab',err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    });

    client.close();
});