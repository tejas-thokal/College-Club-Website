const mongoose = require('mongoose');

main().then((res) => console.log("database connected..."))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wt_pbl');
}


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

// Define Club Schema
const clubSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    clubLogo: String,
    social_links: socialLinksSchema,
    coreTeam: [coreTeamMemberSchema],
    domains: [domainSchema],
    photoGallery: [photoGallerySchema]
});

// Create Club Model
const Club = mongoose.model('Club', clubSchema);

// <<<<<<< HEAD
// Club.insertMany([
//     { name: 'AISA', description: 'AI & Machine Learning Club' },
//         { name: 'IEEE', description: 'Institute of Electrical and Electronics Engineers',logo:"https://brand-experience.ieee.org/wp-content/uploads/2016/12/LogoTest-e1481836752230.png" },
//         { name: 'EDC', description: 'Entrepreneurship Development Cell', logo:"https://edcviit.com/assets20/css/EDC_LOGO.png" },
//         { name: 'Vishwa Racers', description: 'Automobile Engineering Club', logo:"/Images/vishwa-racers-logo.jpeg" },
//         { name: 'GFG', description: 'GeeksForGeeks Coding Club',logo:"https://media.geeksforgeeks.org/wp-content/uploads/20201013141649/389.PNG" },
//         { name: 'NSS VIIT', description: 'Sports Club at VIIT',logo:"https://res.cloudinary.com/diyw5ilre/image/upload/v1714587159/nss-logo_wecruv.png" }
// ]).then((data)=>{
//     console.log("inserted");
// }).catch((err)=> console.log(err));
// =======
// Sample Data for Insertion
const sampleData = [
    {


        // The Artificial Intelligence Student's Association at VIIT College connects AI enthusiasts through workshops, projects, and networking, providing resources and mentorship to help students excel in AI and Data

        name: "AISA Club",
        description: "The Artificial Intelligence Student's Association at VIIT Collage Connect AI enthusiasts through workshops, projects, and networking, providing resources and mentorship to help students excel in AI and Data ",
        clubLogo: "https://www.aisa-viit.com/images/Logos/AISA-DARK.png",
        social_links: {
            instagram: "https://www.instagram.com/aisa_viit",
            linkedin: "https://www.linkedin.com/company/aisaviit/posts/?feedView=all"
        },
        coreTeam: [
            {
                name: "Suryansh Mani",
                email: "suryanshbest@gmail.com",
                phone: "1234567890",
                photo: "https://www.aisa-viit.com/images/Team/1-min.png",
                role: "President",
                department: "Artificial Intelligence and Data Science"
            },
            {
                name: "Tanush Lichade",
                email: "tanushlichade@gmail.com",
                phone: "1234567890",
                photo: "https://example.com/jane.jpg",
                role: "Vice President",
                department: "Artificial Intelligence and Data Science"
            },
            {        
                name: "Aadesh Bajare",
                email: "aadeshb121@gmail.com",
                phone: "1234567890",
                photo: "https://www.aisa-viit.com/images/Team/3-min.png",
                role: "Secretary",
                department: "Artificial Intelligence and Data Science"
            },
            {        
                name: "Eshan Puradupadhye",
                email: "eshanpuradupadhye1519@gmail.com",
                phone: "1234567890",
                photo: "https://www.aisa-viit.com/images/Team/4-min.png",
                role: "Treasurer",
                department: "Artificial Intelligence and Data Science"
            },
            {        
                name: "Siddhi Auti",
                email: "autisiddhi01@gmail.com",
                phone: "1234567890",
                photo: "https://www.aisa-viit.com/images/Team/5-min.png",
                role: "HR Manager",
                department: "Artificial Intelligence and Data Science"
            },
            {        
                name: "Prof.Santosh Kumar",
                email: "santosh.kumar@viit.ac.in",
                phone: "9970279566",
                photo: "https://media.licdn.com/dms/image/v2/C4E03AQEDomocGo8t2Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1646811948086?e=1748476800&v=beta&t=idTvOK84Uo1LT2PKFUJQjhEqhpCTcQkg8UJky_TcW7g",
                role: "Head of Department",
                department: "Artificial Intelligence and Data Science"
            },
            {        
                name: "Prof. Renu Kachhoria",
                email: "renu.kachhoria@viit.ac.in",
                phone: "8888744203",
                photo: "https://www.viit.ac.in/images/profiler/avatar1299_caa3a99760cd9c54c79f9763b2da52a5.png",
                role: "Faculty Co-ordinator",
                department: "Artificial Intelligence and Data Science"
            }
        ],
        domains: [
            {
                name: "Technical Team",
                description: "The Technical Team is responsible for managing and developing digital solutions, ensuring seamless functionality across platforms. It handles website development, software maintenance, and technical troubleshooting for projects and events. The team collaborates to innovate and implement cutting-edge technologies to enhance user experience and efficiency.",
                skillsRequired: [
                    "Programming (HTML, CSS, JavaScript, Python, Java)",
                    "Database Management (MySQL, MongoDB, PostgreSQL)",
                    "Version Control (Git, GitHub)",
                    "Problem-Solving and Debugging",
                    "Server Management (Node.js, Express.js)",
                    "Cloud Computing (AWS, Firebase)",
                    "Collaboration and Communication",
                    "UI/UX Design Understanding",
                    "Machine Learning & AI (TensorFlow, PyTorch, Scikit-learn)",
                    "Data Visualization (Matplotlib, Seaborn, Power BI, Tableau)",
                    "Big Data Technologies (Hadoop, Spark)",
                    "Statistical Analysis & Mathematics",
                    "Data Cleaning & Preprocessing",
                    "Natural Language Processing (NLP)"
                  ],
                workInThisDomain: "Working in this domain requires expertise in software development, data management, and AI-driven technologies to build efficient and scalable solutions. The role involves analyzing data, developing intelligent systems, and ensuring seamless integration across platforms for enhanced user experience and decision-making."
            },
            {
                name: "Design Team",
                description: "The Design Team is responsible for creating visually appealing and user-friendly designs that enhance the overall user experience. They focus on UI/UX design, graphic design, branding, and prototyping, using tools like Figma, Adobe XD, Canva, and Photoshop. The team collaborates with developers and stakeholders to ensure seamless integration of design elements into projects. Their work involves crafting intuitive interfaces, engaging visuals, and maintaining consistency across digital and print media to effectively communicate ideas and elevate the brand identity.",
                skillsRequired:[
                    "UI/UX Design (Figma, Adobe XD, Sketch)",
                    "Graphic Design (Photoshop, Illustrator, Canva)",
                    "Prototyping and Wireframing",
                    "Typography and Color Theory",
                    "Responsive Design and Accessibility",
                    "User Research and Testing"
                  ],
                workInThisDomain: "Working in the design domain involves creating visually engaging and user-centric designs that enhance digital and print experiences. It requires expertise in UI/UX principles, graphic design, branding, and prototyping, along with creativity and problem-solving skills to deliver aesthetically pleasing and functional solutions."
            },
            {
                name: "Finance  Team",
                description: "The Finance Team plays a crucial role in managing an organization's financial health by overseeing budgeting, expense tracking, financial reporting, and investment planning. They ensure proper fund allocation, risk management, and compliance with financial regulations to maintain transparency and efficiency. The team also analyzes financial data, forecasts future trends, and develops strategies for cost optimization and sustainable growth. Through effective financial management, they support decision-making and contribute to the organization's long-term success.",
                skillsRequired:[
                    "Financial Planning and Budgeting",
                    "Expense Tracking and Cost Management",
                    "Financial Reporting and Analysis",
                    "Investment Planning and Portfolio Management",
                    "Risk Management and Compliance",
                    "Excel and Financial Modeling",
                    "Business Strategy and Decision-Making"
                  ],
                  
                workInThisDomain: "orking in the finance domain involves managing financial planning, budgeting, and investment strategies to ensure economic stability and growth. It requires expertise in data analysis, risk assessment, and regulatory compliance to optimize resources and support informed decision-making."
            },
            {
                name: "Publicity Team",
                description: "The Publicity Team is responsible for promoting events, initiatives, and brand awareness through effective marketing strategies. They handle social media management, content creation, public relations, and campaign planning to engage the target audience. The team works on designing promotional materials, writing press releases, and collaborating with media partners to maximize outreach. By leveraging digital platforms, print media, and innovative marketing techniques, they ensure visibility and engagement for various projects and events.",
                skillsRequired:[
                    "Social Media Management (Instagram, Twitter, LinkedIn)",
                    "Content Creation and Copywriting",
                    "Digital Marketing (SEO, SEM, Email Marketing)",
                    "Graphic Design (Canva, Photoshop, Illustrator)",
                    "Public Relations and Media Handling",
                    "Event Promotion",
                    "Video Editing and Motion Graphics (Premiere Pro, After Effects)",
                    "Creative Thinking and Brand Strategy"
                  ],
                workInThisDomain: "Working in the publicity domain involves developing marketing strategies, managing digital campaigns, and engaging with the audience to enhance visibility. It requires expertise in content creation, public relations, and media outreach to effectively promote events and initiatives, ensuring maximum reach and impact."
            },
            {
                name: "Active Members Team",
                description: "The Active Members Team plays a crucial role in ensuring the smooth execution of various events, projects, and initiatives. They actively participate in brainstorming sessions, event planning, and on-ground execution to support the organization’s goals. This team is responsible for coordinating with different departments, assisting in logistics, and ensuring efficient communication and teamwork. Their dedication and enthusiasm drive the success of events, workshops, and community engagement activities.",
                skillsRequired:[
                    "Event Planning and Coordination",
                    "Teamwork and Collaboration",
                    "Communication and Interpersonal Skills",
                    "Problem-Solving and Quick Decision-Making",
                    "Time Management and Multitasking",
                    "Leadership and Responsibility",
                    "Public Speaking and Presentation",
                    "Networking and Community Engagement",
                  ],
                  
                workInThisDomain: "Working in the Active Members domain involves actively participating in events, coordinating with teams, and ensuring smooth execution of tasks. It requires strong communication, teamwork, and problem-solving skills to handle responsibilities efficiently and contribute to the overall success of projects and initiatives."
            },
            {
                name: "Event Management Team",
                description: "The Event Management Team is responsible for planning, organizing, and executing events seamlessly. They handle venue selection, logistics, budgeting, scheduling, and coordination to ensure the success of various events. The team collaborates with different departments, manages on-site execution, and troubleshoots any issues that arise during the event. They also focus on marketing, sponsorships, and audience engagement to maximize participation and impact. Their goal is to deliver well-organized and memorable events while maintaining efficiency and professionalism.",
                skillsRequired:[
                    "Event Planning and Scheduling",
                    "Budgeting and Cost Control",
                    "Marketing and Promotion Strategies",
                    "Sponsorship and Partnership Management",
                    "Time Management and Multitasking",
                    "Public Relations and Communication",
                  ],
                  
                workInThisDomain: "Working in the Event Management domain involves strategizing, planning, and executing events efficiently while ensuring smooth coordination among different teams. It requires strong organizational, communication, and problem-solving skills to handle logistics, engage audiences, and deliver successful events."
            },
            {
                name: "Documentation Team",
                description: "The Documentation Team is responsible for maintaining accurate records, reports, and official documents related to events, meetings, and projects. They ensure that all essential information is properly structured, stored, and accessible for future reference. This team works on writing reports, preparing minutes of meetings (MoMs), creating guidelines, and managing project documentation to maintain clarity and transparency. Their work plays a crucial role in preserving organizational knowledge, ensuring smooth workflow, and assisting in decision-making processes.",
                skillsRequired:[
                    "Technical Writing and Report Writing",
                    "Minutes of Meeting (MoM) Preparation",
                    "Research and Data Compilation",
                    "Content Structuring and Organization",
                    "Proficiency in Documentation Tools (MS Word, Google Docs, LaTeX)",
                    "Version Control and File Management",
                    "Communication and Collaboration",
                    "Proofreading and Editing",
                  ],
                  
                workInThisDomain: "Working in the Documentation domain involves recording, organizing, and managing important data, reports, and project details to ensure proper documentation and knowledge retention. It requires attention to detail, strong writing skills, and proficiency in documentation tools to maintain clarity and accuracy in organizational records."
            },
            {
                name: "Social Media Team",
                description: "The Social Media Team is responsible for managing and enhancing the organization’s digital presence across various platforms. They handle content creation, audience engagement, branding, and digital marketing strategies to promote events, initiatives, and key messages. The team works on designing visually appealing posts, writing engaging captions, analyzing social media trends, and ensuring consistent interaction with the audience. Their goal is to increase reach, engagement, and brand awareness through creative and strategic social media campaigns.",
                skillsRequired:[
                    "Content Creation and Copywriting",
                    "Social Media Management (Instagram, Facebook, LinkedIn, Twitter, YouTube)",
                    "Graphic Design (Canva, Photoshop, Illustrator)",
                    "Video Editing and Motion Graphics (Premiere Pro, After Effects)",
                  ],
                  
                workInThisDomain: "Working in the Social Media domain involves creating engaging content, managing digital campaigns, and interacting with the audience to build a strong online presence. It requires creativity, strategic planning, and data analysis skills to ensure impactful social media marketing and consistent brand growth."
            },
            {
                name: "Core Team",
                description: "The Core Team serves as the backbone of the organization, overseeing operations, decision-making, and strategic planning. They are responsible for team coordination, project management, leadership, and ensuring smooth execution of initiatives. The team works closely with all departments, providing guidance, setting goals, and making key decisions that align with the organization’s vision and objectives. Their role includes resource management, conflict resolution, and long-term planning to ensure efficiency, growth, and sustainability.",
                skillsRequired:[
                    "Leadership and Decision-Making",
                    "Project Management and Strategic Planning",
                    "Team Coordination and Delegation",
                    "Problem-Solving and Critical Thinking",
                    "Budgeting and Resource Management",
                    "Communication",
                    "Event Planning and Execution",
                    "Networking and Stakeholder Management",
                  ],
                  
                workInThisDomain: "Working in the Core Team domain involves leading teams, making strategic decisions, and ensuring smooth operations across all departments. It requires strong leadership, problem-solving, and organizational skills to drive growth, maintain efficiency, and achieve long-term goals."
            }
        ],
        photoGallery: [
            {
                imageUrl: "https://example.com/event1.jpg",
                caption: "Tech Club's AI workshop event",
                description: "An interactive workshop on Artificial Intelligence where participants learned about Neural Networks and Deep Learning. The event included hands-on coding sessions and expert talks from industry leaders."
            },
            {
                imageUrl: "https://example.com/event2.jpg",
                caption: "Web development bootcamp",
                description: "A 3-day intensive bootcamp covering front-end and back-end development using HTML, CSS, JavaScript, and Node.js. Attendees built their own full-stack applications by the end of the event."
            }
        ]
    }
];

// Insert Sample Data
Club.insertMany(sampleData)
    .then(() => {
        console.log("Data inserted successfully");
        mongoose.connection.close();
    })
    .catch(err => console.log(err));