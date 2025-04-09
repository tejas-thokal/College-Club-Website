const mongoose = require("mongoose");

const coreTeamMemberSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    photo: String,
    role: String,
    department: String
});

// Define faculty Team schema
const facultyMemberSchema = new mongoose.Schema({
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
    photo: String,
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
    linkedin: String,
});

// Define Club Schema
const clubSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    vision: { type: [String], required: true }, // Vision stored as an array of points
    mission: { type: [String], required: true }, // Mission stored as an array of points
    clubLogo: { type: String, required: true },
    social_links: socialLinksSchema,
    coreTeam: [coreTeamMemberSchema],
    facultyTeam: [facultyMemberSchema],
    domains: [domainSchema],
    photoGallery: [photoGallerySchema]
});

// Create Club Model
const Club = mongoose.model('Club', clubSchema);

module.exports = Club;

