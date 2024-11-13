const mongoose = require('mongoose');
const Chat= require('./models/chat.js');



main().then(()=>console.log("connection is sucessfull"))
.catch(err=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allChats = ([
    {from:"tony", to:"peter", msg :"hi parker",created_at: new Date()},
    {from:"thor", to:"hulk",msg:"i am stronger", created_at: new Date()},
    {from:"superman", to:"joker", msg:"i will kill you", created_at: new Date()},
    {from:"alfred", to:"batman",  msg:"take rest",created_at: new Date()},
    {from:"captain", to:"tony", msg :"think", created_at: new Date()},
    {from:"bucky", to:"steve",  msg :"i can do this all day",created_at: new Date()},
    {from:"peter", to:"gwen", msg:"i am spiderman", created_at: new Date()},
    {from:"hulk", to:"thanos", msg:"i am sorry" ,created_at: new Date()},
    {from:"batman", to:"all", msg:"i am rich ",  created_at: new Date()}
])


Chat.insertMany(allChats)

