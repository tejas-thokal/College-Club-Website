const mongoose = require('mongoose');

main().then((res) => console.log("database connected for the club collections ..."))
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
    domains: [domainSchema],
    photoGallery: [photoGallerySchema]
});

// Create Club Model
const Club = mongoose.model('Club', clubSchema);


// Sample Data for Insertion
const sampleData = [
    {
        name: "AISA Artificial Intelligence Student's Association",
        description: "The Artificial Intelligence Student's Association at VIIT Collage Connect AI enthusiasts through workshops, projects, and networking, providing resources and mentorship to help students excel in AI and Data ",

        vision: [
            "To establish a thriving AI and Data Science community that fosters innovation and research.",
            "To bridge the gap between theoretical knowledge and real-world AI applications.",
            "To create a collaborative environment for students to explore AI-driven solutions.",
            "To empower students with the latest AI, machine learning, and data analytics skills.",
            "To become a hub for AI enthusiasts, researchers, and industry professionals."
        ],
        mission: [
            "Providing hands-on training, workshops, and mentorship in AI and data science.",
            "Organizing hackathons, competitions, and projects to encourage practical learning.",
            "Collaborating with academia and industry to promote AI-based research and innovation.",
            "Facilitating interdisciplinary projects that integrate AI into various fields of study.",
            "Creating an inclusive and knowledge-driven community passionate about AI advancements."
        ],


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
                skillsRequired: [
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
                skillsRequired: [
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
                skillsRequired: [
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
                skillsRequired: [
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
                skillsRequired: [
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
                skillsRequired: [
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
                skillsRequired: [
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
                skillsRequired: [
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
                imageUrl: "https://instagram.fnag1-6.fna.fbcdn.net/v/t51.29350-15/412034832_612502090967536_4421873081870501385_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjg1M3g1Njguc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fnag1-6.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QHYeAja4ysi-CQMIcfQzkXSoU8xel60ym1usUFz5aMYkbRSWk5aqAXwJe15j6tiKqW0iBqcKj-4F8peftYkLcYL&_nc_ohc=ltpiy_iO2QkQ7kNvgHv1N9J&_nc_gid=lE29187Phtymc-zwYJWtMg&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzI2MTg4MjkyMzA4OTc5MDgxNQ%3D%3D.3-ccb7-5&oh=00_AYHloTjYmLinvpOS0RbhceZBacuL-SrGPfsbGsE5zXbReA&oe=67E95673&_nc_sid=22de04",
                caption: " Viz-A-Thon 2.0!",
                description: "Get ready for experiencing a fun filled and innovative ride in the world of data"
            },
            {
                imageUrl: "https://instagram.fnag1-5.fna.fbcdn.net/v/t51.29350-15/403917836_1034445994462687_8756592109102410397_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjYyMXg0NjYuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fnag1-5.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2QHYeAja4ysi-CQMIcfQzkXSoU8xel60ym1usUFz5aMYkbRSWk5aqAXwJe15j6tiKqW0iBqcKj-4F8peftYkLcYL&_nc_ohc=eHXGTGJ5l7UQ7kNvgE6BnMf&_nc_gid=lE29187Phtymc-zwYJWtMg&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzI0MDk3NTQxMTI2MzU2MDgyNw%3D%3D.3-ccb7-5&oh=00_AYE3VAWVVp4Jbhz4U9KEkS0t9QTEKbajDn6JZojxS9GvHw&oe=67E975B0&_nc_sid=22de04",
                caption: "Viz-A-Thon 2.0!",
                description: "enthusiasts,the very first Viz-a-Thon was a grand success Not only did it portray the creativity of the participants but also forced them to think beyond the box such that it became difficult for the judges to choose the best visualisation"
            },
            {
                imageUrl: "https://instagram.fnag1-3.fna.fbcdn.net/v/t51.29350-15/315928710_140685325398324_6112801324721492124_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4ODEwLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.fnag1-3.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2QHdrtAawHr1s6mQ_njCewxO5dIATFRvo2ZpZJjMZtH4-SiU56hy2r3Mq-akveEdmAOZOamLmB79oNCM-7UxAwE0&_nc_ohc=kFwPifDkZzQQ7kNvgG6rJ3Z&_nc_gid=djg6-G-SB7jtnXDunEJNHw&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=Mjk3MzU3MDUzODk2Nzg2ODAxOQ%3D%3D.3-ccb7-5&oh=00_AYGKuBkbrfHdD3rC05lX8lOrotdZqCvz-_b8MGR7sZlB5A&oe=67E94D5A&_nc_sid=22de04",
                caption: "Unsupervised Learning' delivered by Mr. Lomesh Ahire Sir.",
                description: "Wonderful guest lecture on the topic 'Unsupervised Learning' delivered by Mr. Lomesh Ahire Sir. We are glad that Sir spared his valuable time to guide the students. Thank you Lomesh Ahire Sir on behalf of whole Dept. Of AI&DS, VIIT."
            },
            {
                imageUrl: "https://instagram.fnag1-2.fna.fbcdn.net/v/t51.29350-15/279380422_536442324548130_3070273423421495222_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjk5Nng5OTYuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fnag1-2.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QEBEI0OT2EtHMwhQqOvvYtyZsBv3ADOPjq9qaN_YwoJnrOstSqF2DpdRF66mhpFO0n5uBipohEvzTNCphY-lMXA&_nc_ohc=UIcmkN9MrVEQ7kNvgF4_51I&_nc_gid=dFE1iG4a6Bq_-NBPav5GLg&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MjgyNjQzNTk1NjUzNDYwNzgwNA%3D%3D.3-ccb7-5&oh=00_AYEot2yTJN5OfSyhvdGSyDWQPlAl3zyPLXtGnbaZJILI3A&oe=67E96293&_nc_sid=22de04",
                caption: " Greetings from S4DS: Student Chapter VIIT",
                description: "Cheerful and energetic Inauguration of Society for Data Science Student Chapter VIIT , in presence of respected President Dr.Amol Goje and Secretary Dr.Neha Sharma.Happy to announce that it is the First Professional Student Chapter of AI & DS Dept. We are keen on taking this Student Chapter to greater heights and set a benchmark for the young and inspiring minds!!"
            },
            {
                imageUrl: "https://instagram.fnag1-5.fna.fbcdn.net/v/t51.29350-15/465480477_2012333629187323_267213002862347259_n.jpg?stp=dst-jpg_e15_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fnag1-5.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2QFWRLlJnClGLWx_5l1HDTDmwZ4iCiBvoHjDG-X2nFXB0iMNLh3GzH6af7ivY1xDjSPzhysSFYgQPxc_JuWWrDdh&_nc_ohc=pSxHrd4GXpQQ7kNvgFP7hsa&_nc_gid=KAowL__XEzvpltGYiPuM0w&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzQ5NTMyMTI3OTc0NDYxMTI1NA%3D%3D.3-ccb7-5&oh=00_AYG_ZiN96NKdzzegCHuqSIjJm0GG02FUftGx8MNZw3f_HQ&oe=67E97D7D&_nc_sid=22de04",
                caption: "VIZ-A-THON 3.0",
                description: "The event aligns perfectly with our mission of driving innovation and supporting the next generation of talent. Hackathons like this are essential to nurturing creativity, problem-solving, and innovation. They provide students with a platform to apply theoretical knowledge to practical challenges, to work collaboratively, and to push the boundaries of their capabilities. The participants of our young minds were absolutely commendable and refreshing. The solutions and ideas presented were not only creative but also had real-world implications."
            },
            {
                imageUrl: "https://instagram.fnag1-3.fna.fbcdn.net/v/t51.29350-15/433778082_7724077624278840_560768824305644827_n.jpg?stp=dst-jpg_e35_p480x480_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IlNUT1JZLmltYWdlX3VybGdlbi4xMTcweDIwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fnag1-3.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2QE_glF-nuXpWhHgLf_l5nj-1XF601YkAQDu1jWsA0-zfdqvK9RwasULgxoKR3nrrNK4DP8PM-MW71wbtOvUzMBu&_nc_ohc=tCjHED-RpCsQ7kNvgEaSdbJ&_nc_gid=kDOCLAe0xXM1eoja8SM-FQ&edm=ADDLYBMBAAAA&ccb=7-5&ig_cache_key=MzMzMjkwMzQyOTA2NTYxNzA0Mw%3D%3D.3-ccb7-5&oh=00_AYFws7FUsRGsZqGRRpT65DSumyQfxRpbF8rIMivloO-f6A&oe=67E962ED&_nc_sid=56bdfd",
                caption: "Data science Synopsys 24",
                description: "The AiSA Data Science Symposium 2024 at VIIT Pune is an event focused on cutting-edge developments in AI and data science. It features expert talks, hands-on workshops, and competitions to enhance students' technical and analytical skills. The symposium provides a platform for learning, networking, and exploring real-world applications of data science."
            },
            {
                imageUrl: "https://instagram.fnag1-2.fna.fbcdn.net/v/t51.29350-15/428493098_298838899876974_4515743920736197084_n.webp?stp=dst-jpg_e35_p480x480_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IlNUT1JZLmltYWdlX3VybGdlbi4xMDgweDE5MjAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fnag1-2.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QEibQzBBjjE3uQSx_Sr7qUcL1i1-1otP0D7bs273_nIcGqqxj3Bdz_VsS878w4msHSzvTnaCHe3o8U_J6l_e3fs&_nc_ohc=LE9huGMkjX4Q7kNvgFsyx6f&_nc_gid=Jxr5K_1T-lAA6fGcDSsUqQ&edm=AGFyKLkBAAAA&ccb=7-5&ig_cache_key=MzMwNjc0NjY5MzE0NTM2MDkzOQ%3D%3D.3-ccb7-5&oh=00_AYHHFLtTKm99J5gLEZFtIQU6_6sfG6uN8-aDVdwugvSdKw&oe=67E97529&_nc_sid=5a0a6d",
                caption: "Gandharv Perception",
                description: "​Perception 24 is an upcoming technical extravaganza at VIIT's Gandharva festival, promising an electrifying fusion of technology and innovation. Attendees can expect a series of engaging events that showcase the latest advancements in the tech world. This much-awaited event aims to provide a platform for students to demonstrate their technical prowess and creativity"
            }
        ]
    },



    // second club ===========================================================================================
    {
        name: "IEEE VIIT Student Branch",
        description: "The IEEE VIIT Student Branch fosters innovation and technical excellence at VIIT Pune. It provides students with opportunities to engage in workshops, hackathons, research, and networking with industry professionals. The club empowers members through mentorship, technical projects, and leadership opportunities, promoting advancements in engineering and technology.",
        vision: [
            "To establish a thriving AI and Data Science community that fosters innovation and research.",
            "To bridge the gap between theoretical knowledge and real-world AI applications.",
            "To create a collaborative environment for students to explore AI-driven solutions.",
            "To empower students with the latest AI, machine learning, and data analytics skills.",
            "To become a hub for AI enthusiasts, researchers, and industry professionals."
        ],
        mission: [
            "Providing hands-on training, workshops, and mentorship in AI and data science.",
            "Organizing hackathons, competitions, and projects to encourage practical learning.",
            "Collaborating with academia and industry to promote AI-based research and innovation.",
            "Facilitating interdisciplinary projects that integrate AI into various fields of study.",
            "Creating an inclusive and knowledge-driven community passionate about AI advancements."
        ],


        clubLogo: "https://imgs.search.brave.com/C5ZORQuhU3WNUGT_cm6C775pDSzE4PlX7R39K5xoVgw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzAz/L0lFRUUtTG9nby01/MDB4MjgxLnBuZw",
        social_links: {
            instagram: "https://www.instagram.com/ieee_viit/",
            linkedin: "https://www.linkedin.com/company/ieee-viit-student-branch/"
        },
        coreTeam: [
            {
                name: "Atharv Divekar",
                email: "atharvdivekar@gmail.com",
                phone: "1234567890",
                photo: "https://example.com/atharv.jpg",
                role: "Chairperson",
                department: "Electronics and Telecommunication Engineering"
            },
            {
                name: "Rushikesh Patil",
                email: "rushikeshpatil@gmail.com",
                phone: "1234567890",
                photo: "https://example.com/rushikesh.jpg",
                role: "Technical Team Associate",
                department: "Artificial Intelligence and Data Science"
            },
            {
                name: "Pranav Kshirsagar",
                email: "pranavkshirsagar@gmail.com",
                phone: "1234567890",
                photo: "https://example.com/pranav.jpg",
                role: "Vice Chairperson",
                department: "Computer Engineering"
            },
            {
                name: "Mrunmayee Patil",
                email: "mrunmayeepatil@gmail.com",
                phone: "1234567890",
                photo: "https://example.com/mrunmayee.jpg",
                role: "Secretary",
                department: "Electronics and Telecommunication Engineering"
            },
            {
                name: "Vedant Kulkarni",
                email: "vedantkulkarni@gmail.com",
                phone: "1234567890",
                photo: "https://example.com/vedant.jpg",
                role: "Treasurer",
                department: "Computer Engineering"
            },
            {
                name: "Prof. Rajesh Chavan",
                email: "rajesh.chavan@viit.ac.in",
                phone: "9876543210",
                photo: "https://example.com/rajesh.jpg",
                role: "Faculty Advisor",
                department: "Electronics and Telecommunication Engineering"
            },
            {
                name: "Prof. Supriya Patil",
                email: "supriya.patil@viit.ac.in",
                phone: "8765432109",
                photo: "https://example.com/supriya.jpg",
                role: "Faculty Coordinator",
                department: "Computer Engineering"
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
                skillsRequired: [
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
                skillsRequired: [
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
                skillsRequired: [
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
                skillsRequired: [
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
                skillsRequired: [
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
                skillsRequired: [
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
                skillsRequired: [
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
                skillsRequired: [
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
                imageUrl: "https://example.com/images/ieee-tech-symposium.jpg",
                caption: "IEEE Tech Symposium",
                description: "A flagship event featuring keynote speakers, technical paper presentations, and panel discussions."
            },
            {
                imageUrl: "https://example.com/images/ieee-hackathon.jpg",
                caption: "IEEE Hackathon 2024",
                description: "A 24-hour coding competition where students develop innovative tech solutions."
            },
            {
                imageUrl: "https://example.com/images/ieee-robo-wars.jpg",
                caption: "Robo Wars",
                description: "An electrifying robotics competition where teams battle their self-built robots."
            },
            {
                imageUrl: "https://example.com/images/ieee-workshop.jpg",
                caption: "AI & IoT Workshop",
                description: "Hands-on training on Artificial Intelligence and Internet of Things applications."
            },
            {
                imageUrl: "https://example.com/images/ieee-industrial-visit.jpg",
                caption: "Industry Connect Visit",
                description: "A visit to leading tech industries to understand real-world applications of engineering."
            }
        ]
    },


    // Third club EDC CLUB 

    {
        "name": "EDC Entrepreneurship Development Cell",
        "description": "The Entrepreneurship Development Cell (EDC) at VIIT Pune is dedicated to fostering a culture of innovation and entrepreneurship. It empowers students to develop their entrepreneurial mindset, providing mentorship, resources, and networking opportunities to transform ideas into successful ventures.",
    
        "vision": [
            "To create a dynamic ecosystem that nurtures and supports student entrepreneurs.",
            "To bridge the gap between academic knowledge and real-world business applications.",
            "To inspire students to take entrepreneurial initiatives and start their own ventures.",
            "To collaborate with industry leaders, investors, and mentors to facilitate startup growth.",
            "To establish VIIT Pune as a center for innovation and entrepreneurship."
        ],
        "mission": [
            "Providing hands-on training, workshops, and mentorship programs on entrepreneurship.",
            "Organizing startup boot camps, business plan competitions, and hackathons.",
            "Connecting students with industry leaders, investors, and successful entrepreneurs.",
            "Facilitating incubation support, funding opportunities, and legal advisory for startups.",
            "Building a strong network of student entrepreneurs and alumni entrepreneurs."
        ],
    
        "clubLogo": "https://www.viit.ac.in/images/clubs/EDC-logo.png",
        "social_links": {
            "instagram": "https://www.instagram.com/edc_viit",
            "linkedin": "https://www.linkedin.com/company/edc-viit"
        },
        "coreTeam": [
            {
                "name": "Rajesh Sharma",
                "email": "rajeshsharma.edc@gmail.com",
                "phone": "9876543210",
                "photo": "https://www.viit.ac.in/images/clubs/EDC-Team/Rajesh-Sharma.png",
                "role": "President",
                "department": "Entrepreneurship & Innovation"
            },
            {
                "name": "Pooja Nair",
                "email": "poojanair.edc@gmail.com",
                "phone": "9876543211",
                "photo": "https://www.viit.ac.in/images/clubs/EDC-Team/Pooja-Nair.png",
                "role": "Vice President",
                "department": "Entrepreneurship & Innovation"
            },
            {
                "name": "Amit Deshmukh",
                "email": "amitdeshmukh.edc@gmail.com",
                "phone": "9876543212",
                "photo": "https://www.viit.ac.in/images/clubs/EDC-Team/Amit-Deshmukh.png",
                "role": "Secretary",
                "department": "Entrepreneurship & Innovation"
            },
            {
                "name": "Ananya Kulkarni",
                "email": "ananyakulkarni.edc@gmail.com",
                "phone": "9876543213",
                "photo": "https://www.viit.ac.in/images/clubs/EDC-Team/Ananya-Kulkarni.png",
                "role": "Treasurer",
                "department": "Entrepreneurship & Innovation"
            },
            {
                "name": "Rohan Patil",
                "email": "rohanpatil.edc@gmail.com",
                "phone": "9876543214",
                "photo": "https://www.viit.ac.in/images/clubs/EDC-Team/Rohan-Patil.png",
                "role": "Marketing Head",
                "department": "Entrepreneurship & Innovation"
            },
            {
                "name": "Sakshi Verma",
                "email": "sakshiverma.edc@gmail.com",
                "phone": "9876543215",
                "photo": "https://www.viit.ac.in/images/clubs/EDC-Team/Sakshi-Verma.png",
                "role": "Event Coordinator",
                "department": "Entrepreneurship & Innovation"
            },
            {
                "name": "Prof. Anil Mehta",
                "email": "anil.mehta@viit.ac.in",
                "phone": "9988776655",
                "photo": "https://www.viit.ac.in/images/faculty/anil-mehta.png",
                "role": "Faculty Mentor",
                "department": "Entrepreneurship & Innovation"
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
                description: "The Design Team is responsible for creating visually appealing and user-friendly designs that enhance the overall user experience. They focus on UI/UX design, graphic design, branding, and prototyping, using tools like Figma, Adobe XD, Canva, and Photoshop. The team collaborates with developers and stakeholders to ensure seamless integration of design elements into projects.",
                skillsRequired: [
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
                name: "Finance Team",
                description: "The Finance Team plays a crucial role in managing an organization's financial health by overseeing budgeting, expense tracking, financial reporting, and investment planning. They ensure proper fund allocation, risk management, and compliance with financial regulations to maintain transparency and efficiency.",
                skillsRequired: [
                    "Financial Planning and Budgeting",
                    "Expense Tracking and Cost Management",
                    "Financial Reporting and Analysis",
                    "Investment Planning and Portfolio Management",
                    "Risk Management and Compliance",
                    "Excel and Financial Modeling",
                    "Business Strategy and Decision-Making"
                ],
                workInThisDomain: "Working in the finance domain involves managing financial planning, budgeting, and investment strategies to ensure economic stability and growth. It requires expertise in data analysis, risk assessment, and regulatory compliance to optimize resources and support informed decision-making."
            },
            {
                name: "Publicity Team",
                description: "The Publicity Team is responsible for promoting events, initiatives, and brand awareness through effective marketing strategies. They handle social media management, content creation, public relations, and campaign planning to engage the target audience.",
                skillsRequired: [
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
                description: "The Active Members Team plays a crucial role in ensuring the smooth execution of various events, projects, and initiatives. They actively participate in brainstorming sessions, event planning, and on-ground execution to support the organization’s goals.",
                skillsRequired: [
                    "Event Planning and Coordination",
                    "Teamwork and Collaboration",
                    "Communication and Interpersonal Skills",
                    "Problem-Solving and Quick Decision-Making",
                    "Time Management and Multitasking",
                    "Leadership and Responsibility",
                    "Public Speaking and Presentation",
                    "Networking and Community Engagement"
                ],
                workInThisDomain: "Working in the Active Members domain involves actively participating in events, coordinating with teams, and ensuring smooth execution of tasks. It requires strong communication, teamwork, and problem-solving skills to handle responsibilities efficiently and contribute to the overall success of projects and initiatives."
            },
            {
                name: "Event Management Team",
                description: "The Event Management Team is responsible for planning, organizing, and executing events seamlessly. They handle venue selection, logistics, budgeting, scheduling, and coordination to ensure the success of various events.",
                skillsRequired: [
                    "Event Planning and Scheduling",
                    "Budgeting and Cost Control",
                    "Marketing and Promotion Strategies",
                    "Sponsorship and Partnership Management",
                    "Time Management and Multitasking",
                    "Public Relations and Communication"
                ],
                workInThisDomain: "Working in the Event Management domain involves strategizing, planning, and executing events efficiently while ensuring smooth coordination among different teams. It requires strong organizational, communication, and problem-solving skills to handle logistics, engage audiences, and deliver successful events."
            },
            {
                name: "Core Team",
                description: "The Core Team serves as the backbone of the organization, overseeing operations, decision-making, and strategic planning. They are responsible for team coordination, project management, leadership, and ensuring smooth execution of initiatives.",
                skillsRequired: [
                    "Leadership and Decision-Making",
                    "Project Management and Strategic Planning",
                    "Team Coordination and Delegation",
                    "Problem-Solving and Critical Thinking",
                    "Budgeting and Resource Management",
                    "Communication",
                    "Event Planning and Execution",
                    "Networking and Stakeholder Management"
                ],
                workInThisDomain: "Working in the Core Team domain involves leading teams, making strategic decisions, and ensuring smooth operations across all departments. It requires strong leadership, problem-solving, and organizational skills to drive growth, maintain efficiency, and achieve long-term goals."
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