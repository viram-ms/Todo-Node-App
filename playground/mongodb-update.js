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

    // db.collection('TODOS').findOneAndUpdate({
    //         _id: new ObjectID('5cd9bf8c98de443edc71eb5c')
    //     }, {
    //         $set: {
    //             completed: true

    //         }
    //     }, {
    //         returnOriginal: false
    //     })
    //     .then((result) => {
    //         console.log(result);
    //     }, (err) => {
    //         console.log(err);

    //     });

        db.collection('USERS').findOneAndUpdate({name:'yash'},{
            $set:{
                name:'manv', 
            },
            $inc:{
                age:5
            }
           
        },{
            returnOriginal:false
        }).then((result)=>{
            console.log(result);
        })

    // client.close();
});