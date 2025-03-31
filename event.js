const mongoose = require('mongoose');

main().then((res)=>console.log("database connected for the Event collections ..."))
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
        type: String, default: "https://www.aisa-viit.com/images/Logos/AISA-DARK.png" 
    },
    Event_Link:{
        type:String
    },
    Event_Type : {
        type:String,
        enum: ["Online"," Offiline"],
        required:true
    }
});

const Event=mongoose.model("Event",eventSchema);



