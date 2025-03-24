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
        { name: 'IEEE', description: 'Institute of Electrical and Electronics Engineers' },
        { name: 'EDC', description: 'Entrepreneurship Development Cell' },
        { name: 'Vishwaracers', description: 'Automobile Engineering Club' },
        { name: 'GFG', description: 'GeeksForGeeks Coding Club' },
        { name: 'SPORTS VIIT', description: 'Sports Club at VIIT' }
]).then((data)=>{
    console.log("inserted");
}).catch((err)=> console.log(err));