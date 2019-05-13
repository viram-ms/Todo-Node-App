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

    // db.collection('TODOS').find({_id:new ObjectID( '5cd9bf8c98de443edc71eb5c')}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log(err);
    // })

    //   db.collection('TODOS').find().count().then((count)=>{
    //     console.log('Todos count:',count);
    //     // console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log(err);
    // })

    db.collection('USERS').find({name:'viram'}).toArray().then((person)=>{
        console.log(JSON.stringify(person,undefined,2));
    },(err)=>{
        console.log(err);
    })

    // client.close();
});