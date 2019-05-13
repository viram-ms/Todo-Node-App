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

    //deletemany

    db.collection('TODOS').deleteMany({test:'something to do'}).then((result)=>{
     console.log(result);   
    })

    //deleteone

    db.collection('TODOS').deleteOne({test:'i want to do something'}).then((result)=>{
        console.log(result);   
       })
    //findone and delete

    db.collection('TODOS').findOneAndDelete({completed:false}).then((result)=>{
        console.log(result);
    },(err)=>{
        console.log(err);

    })

  

    

    // client.close();
});