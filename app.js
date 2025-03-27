// This is all required packages...........

const mongoose = require('mongoose');
const express = require("express");
const app = express();
const port = 8080;
const ejsMate = require("ejs-mate");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));

app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// Define Core Team Schema
const coreTeamMemberSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    photo: String,
    role: String,
    department: String
});

// Define Domain Schema
const domainSchema = new mongoose.Schema({
    name: String,
    description: String,
    skillsRequired: [String],
    workInThisDomain: String
});

// Define Photo Gallery Schema
const photoGallerySchema = new mongoose.Schema({
    imageUrl: String,
    caption: String,
    description: String
});

// Define Social Links Schema
const socialLinksSchema = new mongoose.Schema({
    instagram: String,
    linkedin : String,
});


const clubSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    clubLogo: {type: String ,required :true },
    social_links: socialLinksSchema,
    coreTeam: [coreTeamMemberSchema],
    domains: [domainSchema],
    photoGallery: [photoGallerySchema]
});
const Club = new mongoose.model("Club", clubSchema);

main().then((res)=>console.log("database connected..."))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wt_pbl');
}


const eventSchema=new mongoose.Schema({
    Event_Name:{type:String,required:true},
    Event_Description:{type:String,required:true},
    Event_Image:{type:String,default:"https://i.pinimg.com/736x/c6/f7/5c/c6f75cdadb474ef4b0761dc94a8fc731.jpg"},
    Event_Link:{type:String}
})

const Event=mongoose.model("Event",eventSchema);

app.listen(port, () => {
    console.log("server is live....")
})

app.get("/", async (req, res) => {
    try {
        let data = await Club.find();
        let event= await Event.find();
        // console.log(event);
        console.log(data[0].clubLogo);
        res.render("home", { data,event });
    } catch (err) {
        console.group(err);
    }
});

app.get("/college_club/addEvent",(req,res)=>{
    res.render("addEvent.ejs");
});

app.post("/college_club/addEvent", async (req, res) => {
    try {
        // Ensure the request body has the correct structure
        const { Event_Name, Event_Description, Event_Image, Event_Link } = req.body;

        if (!Event_Name || !Event_Description || !Event_Link) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Create a new event document
        const newEvent = new Event({
            Event_Name: req.body.Event_Name,
            Event_Description: req.body.Event_Description,
            Event_Image: req.body.Event_Image || undefined,  // Ensures Mongoose applies the default value
            Event_Link: req.body.Event_Link
        });
        

        // Save the event
        await newEvent.save();
        // console.log(newEvent);
        res.render("home.ejs");

        res.status(201).json({ message: "Event added successfully", event: newEvent });
    } catch (error) {
        console.error("Error adding event:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


app.get("/college_club/club",async (req,res)=>{
    let club = await Club.find();
    res.render("club",{club});
});


app.get("/college-club/:id", async (req, res) => {
    try {
        const club = await Club.findById(req.params.id);
        if (!club) {
            return res.status(404).send("Club not found");
        }
        res.render("club", { club }); // Pass data to EJS file
    } catch (error) {
        console.error("Error fetching club:", error);
        res.status(400).send("Invalid Club ID");
    }
});