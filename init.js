const mongoose = require('mongoose');

main().then((res)=>console.log("database connected..."))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wt_pbl');
}

const clubSchema=new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    logo: { type: String, default:"https://www.aisa-viit.com/images/Logos/AISA-DARK.png"},
    // admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
})

const Club=new mongoose.model( "Club",clubSchema);

Club.insertMany([
    { name: 'AISA', description: 'AI & Machine Learning Club' },
        { name: 'IEEE', description: 'Institute of Electrical and Electronics Engineers',logo:"https://brand-experience.ieee.org/wp-content/uploads/2016/12/LogoTest-e1481836752230.png" },
        { name: 'EDC', description: 'Entrepreneurship Development Cell', logo:"https://edcviit.com/assets20/css/EDC_LOGO.png" },
        { name: 'Vishwa Racers', description: 'Automobile Engineering Club', logo:"/Images/vishwa-racers-logo.jpeg" },
        { name: 'GFG', description: 'GeeksForGeeks Coding Club',logo:"https://media.geeksforgeeks.org/wp-content/uploads/20201013141649/389.PNG" },
        { name: 'NSS VIIT', description: 'Sports Club at VIIT',logo:"https://res.cloudinary.com/diyw5ilre/image/upload/v1714587159/nss-logo_wecruv.png" }
]).then((data)=>{
    console.log("inserted");
}).catch((err)=> console.log(err));