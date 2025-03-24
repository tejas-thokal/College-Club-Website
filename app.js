const mongoose = require('mongoose');
const express=require("express");
const app=express();
const port=8080;
const ejsMate=require("ejs-mate")
const path=require("path");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views")) 
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")))
main().then((res)=>console.log("database connected..."))
.catch(err => console.log(err));

const clubSchema=new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    logo: { type: String, default:"https://www.aisa-viit.com/images/Logos/AISA-DARK.png"},
    // admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
})

const Club=new mongoose.model( "Club",clubSchema);

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wt_pbl');
}

app.listen(port,()=>{
    console.log("server is live....")
})

app.get("/",async (req,res)=>{
    try{
        let data=await Club.find();
        res.render("home.ejs",{data});
    }catch(err){
        console.group(err);
    }
})

