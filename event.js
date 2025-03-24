const mongoose = require('mongoose');

main().then((res)=>console.log("database connected..."))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wt_pbl');
}


const eventSchema=new mongoose.Schema({
    Event_Name:{
        type:String,required:true
    },
    Event_Description:{
        type:String,required:true
    },
    Event_Image: { 
        type: String, default: "/Images/vishwa-racers-logo.jpeg" 
    },
    Event_Link:{
        type:String
    }
})

const Event=mongoose.model("Event",eventSchema);

