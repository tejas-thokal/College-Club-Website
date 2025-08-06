const mongoose = require('mongoose');
const Club = require("./models/club");

main().then((res) => console.log("database connected for the club collections ..."))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wt_pbl');
}


// Define Core Team Schema
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
                photo: "https://www.aisa-viit.com/images/Team/2-min.png",
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
                name: "Niraj Pandit",
                email: "suryanshbest@gmail.com",
                phone: "1234567890",
                photo: "https://www.aisa-viit.com/images/Team/niraj.png",
                role: "Finance Head",
                department: "Artificial Intelligence and Data Science"
            },
            {
                name: "Aryan Rajguru",
                email: "aryanrajguru29@gmail.com",
                phone: "1234567890",
                photo: "https://www.aisa-viit.com/images/Team/aryan.png",
                role: "V & P Head",
                department: "Artificial Intelligence and Data Science"
            },
            {  
                name: "Pranay Dabhade",
                email: "pranay.p.dabhade13@gmail.com",
                phone: "1234567890",
                photo: "https://www.aisa-viit.com/images/Team/pranay.png",
                role: "Technical Head",
                department: "Artificial Intelligence and Data Science"
            },
            {
                name: "Dhimahi Patel",
                email: "dhimahipatel297@gmail.com",
                phone: "1234567890",
                photo: "https://www.aisa-viit.com/images/Team/dhimahi.png",
                role: "Doc Head",
                department: "Artificial Intelligence and Data Science"
            },
        ],

        facultyTeam: [
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
                photo: "https://i.pinimg.com/736x/1c/90/e5/1c90e54c827284f57c8f738a9b612b6a.jpg",
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
                photo: "https://www.aisa-viit.com/images/domains/design.jpg",
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
                photo: "https://www.aisa-viit.com/images/domains/event.png",
                skillsRequired: [
                    "Financial Planning and Budgeting",
                    "Expense Tracking and Cost Management",
                    "Financial Reporting and Analysis",
                    "Investment Planning and Portfolio Management",
                    "Risk Management and Compliance",
                    "Excel and Financial Modeling",
                    "Business Strategy and Decision-Making"
                ],

                workInThisDomain: "working in the finance domain involves managing financial planning, budgeting, and investment strategies to ensure economic stability and growth. It requires expertise in data analysis, risk assessment, and regulatory compliance to optimize resources and support informed decision-making."
            },
            {
                name: "Publicity Team",
                description: "The Publicity Team is responsible for promoting events, initiatives, and brand awareness through effective marketing strategies. They handle social media management, content creation, public relations, and campaign planning to engage the target audience. The team works on designing promotional materials, writing press releases, and collaborating with media partners to maximize outreach. By leveraging digital platforms, print media, and innovative marketing techniques, they ensure visibility and engagement for various projects and events.",
                photo: "https://www.aisa-viit.com/images/domains/publicity.png",
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
                photo: "https://www.aisa-viit.com/images/domains/design.jpg",
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
                photo: "https://www.aisa-viit.com/images/domains/event.png",
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
                photo: "https://www.aisa-viit.com/images/domains/active.jpg",
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
                photo: "https://www.aisa-viit.com/images/domains/event.png",
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
                photo: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                imageUrl: "https://www.aisa-viit.com/images/Events/dss.jpeg",
                caption: "Data science Synopsys 24",
                description: "The AiSA Data Science Symposium 2024 at VIIT Pune is an event focused on cutting-edge developments in AI and data science. It features expert talks, hands-on workshops, and competitions to enhance students' technical and analytical skills. The symposium provides a platform for learning, networking, and exploring real-world applications of data science."
            },
            {
                imageUrl: "https://www.aisa-viit.com/images/DSS/b.jpg",
                caption: " Data science Synopsys 24",
                description: "Get ready for experiencing a fun filled and innovative ride in the world of data"
            },
            {
                imageUrl: "https://www.aisa-viit.com/images/DSS/a.jpg",
                caption: " Data science Synopsys 24",
                description: "Get ready for experiencing a fun filled and innovative ride in the world of data"
            },
            {
                imageUrl: "https://www.aisa-viit.com/images/DSS/d.jpg",
                caption: " Data science Synopsys 24",
                description: "Get ready for experiencing a fun filled and innovative ride in the world of data"
            },
            {
                imageUrl: "https://www.aisa-viit.com/images/DSS/e.jpg",
                caption: " Data science Synopsys 24",
                description: "Get ready for experiencing a fun filled and innovative ride in the world of data"
            },
            {
                imageUrl: "https://www.aisa-viit.com/images/DSS/f.jpg",
                caption: " Data science Synopsys 24",
                description: "Get ready for experiencing a fun filled and innovative ride in the world of data"
            },
            {
                imageUrl: "https://www.aisa-viit.com/images/DSS/i.jpg",
                caption: "Data science Synopsys 24",
                description: "Get ready for experiencing a fun filled and innovative ride in the world of data"
            },
            {
                imageUrl: "https://www.aisa-viit.com/images/domains/event.png",
                caption: "Unsupervised Learning' delivered by Mr. Lomesh Ahire Sir.",
                description: "Wonderful guest lecture on the topic 'Unsupervised Learning' delivered by Mr. Lomesh Ahire Sir. We are glad that Sir spared his valuable time to guide the students. Thank you Lomesh Ahire Sir on behalf of whole Dept. Of AI&DS, VIIT."
            },
            {
                imageUrl: "https://www.aisa-viit.com/images/Events/viz.jpeg",
                caption: "VIZ-A-THON 3.0",
                description: "The event aligns perfectly with our mission of driving innovation and supporting the next generation of talent. Hackathons like this are essential to nurturing creativity, problem-solving, and innovation. They provide students with a platform to apply theoretical knowledge to practical challenges, to work collaboratively, and to push the boundaries of their capabilities. The participants of our young minds were absolutely commendable and refreshing. The solutions and ideas presented were not only creative but also had real-world implications."
            },
            {
                imageUrl: "https://www.aisa-viit.com/images/Events/perc.jpeg",
                caption: "Gandharv Perception",
                description: "​Perception 24 is an upcoming technical extravaganza at VIIT's Gandharva festival, promising an electrifying fusion of technology and innovation. Attendees can expect a series of engaging events that showcase the latest advancements in the tech world. This much-awaited event aims to provide a platform for students to demonstrate their technical prowess and creativity"
            },
            {
                imageUrl: "https://www.aisa-viit.com/images/Vizathon/b.jpg",
                caption: " Viz-A-Thon 2.0!",
                description: "Get ready for experiencing a fun filled and innovative ride in the world of data"
            },
            {
                imageUrl: "https://www.aisa-viit.com/images/Vizathon/a.jpg",
                caption: " Viz-A-Thon 2.0!",
                description: "Get ready for experiencing a fun filled and innovative ride in the world of data"
            },
            {
                imageUrl: "https://www.aisa-viit.com/images/Vizathon/e.jpg",
                caption: " Viz-A-Thon 2.0!",
                description: "Get ready for experiencing a fun filled and innovative ride in the world of data"
            },
            {
                imageUrl: "https://www.aisa-viit.com/images/Vizathon/f.jpg",
                caption: " Viz-A-Thon 2.0!",
                description: "Get ready for experiencing a fun filled and innovative ride in the world of data"
            }, 
            {
                imageUrl: "https://www.aisa-viit.com/images/Vizathon/i.jpg",
                caption: " Viz-A-Thon 2.0!",
                description: "Get ready for experiencing a fun filled and innovative ride in the world of data"
            },
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
                name: "Pragati Patil",
                email: "pragatipatil@gmail.com",
                phone: "1234567890",
                photo: "https://cdn.ieeeviitsb.in/committeeData/Pragati%20Patil.jpeg?Expires=1744379438&Key-Pair-Id=KWEN588JG0UGT&Signature=JhTdPAH5lAztH2Qsyt7TwoXXclXlyjqBxeqn3~0z1xCkB5WM6jMVZmIL4nnmf~XA0daz~y~22IHMP9pAQv0dDePnhNM5-JTnDMrzJpB~nQWXgi8t14W0oN533hOeGPDmc1goI~rY78rD76kiRXB1K-GYGezlLe-lZ4NYflmEdIu0AYllF1MxencG~vuZjv7b7uWzF2AXTgSjPyXqJm-qUjbtmvMYvLo77erm4ePLA8lpL1AZBzXz3ZKd88rnv73KstZw4Im8TdvA43x0uShiq9sC0SIZZxhT6PRCBY0XwJkNSCdop4~TUQW4lvEoompwPcY4-x1D2jB0HwukTy8-VQ__",
                role: "Chairperson",
                department: "Electronics and Telecommunication Engineering"
            },
            {
                name: "Apratim Phadke",
                email: "Apratimphadke@gmail.com",
                phone: "1234567890",
                photo: "https://cdn.ieeeviitsb.in/committeeData/Apratim%20Phadke.jpeg?Expires=1744379438&Key-Pair-Id=KWEN588JG0UGT&Signature=h0FAmTGQHQQ9gZ-oAlsMPstQ-o4vMaZ~6cF2xxCjrbDhwZTdz5OcT4OfNQbtoQHM0iIjoYuckd1x13i6c17MU5-Y8xpRdMfbOmpoIkVEkKeGjTyTNQEAGyvL9iEvTJLKWK0-fqRD-I-aJT4ivbZe1g~jjXFMXW3E87vFj5csRxQ3LWhCW-Kapt5ARGoCv2SEWBuCiMururxt7flihT3A0mHR2dgR0YynF97wOUqbyHgH9rjojOzqB4V43a9zrekLBAvVeKR1nJDpzKiSH6sCGK3v03RIDIfQJXYoJ6lvsVImsHF-6rJGxILqwiYqi6s3sH52zi4j7Jt-ALmlc2dx2g__",
                role: "General Manager",
                department: "Electronics and Telecommunication Engineering"
            },
            {
                name: "Sakshi Girase",
                email: "Sakshigirase@gmail.com",
                phone: "1234567890",
                photo: "https://cdn.ieeeviitsb.in/committeeData/Sakshi%20Girase.jpeg?Expires=1744379438&Key-Pair-Id=KWEN588JG0UGT&Signature=NJaDKrDsMjr5BILfomX3Uo173VsKEBruwzQQU-7USEoXCOZWuQDtMrxFzv6JYMa27Haewbf4tX4AXyRxXwQJKdn89t2eHYzwMLpBg7MtgxHIbKZ0~4ZUe6TMeW0OX~gXBTPwTUQCdZc5s4fr6yLJozsmlUhi-TPuBzD5srcxETsUn46rPYAq2Uq00oTI4WLrSqRENHzLNzg~fzOSKSYKUl-xpIlIPjWWdCg7WEd1do-z~~MhgpRudZjPQCcLkHE0UhvcwhNdhn77sCIkQctPPv6kqpkqtW~9CHs7yJ4M2X6~N8u~GCFGlGkV9AQ3O839zbwzhLvgs2PnnKrQzatUQA__",
                role: "Vice Chairperson",
                department: "Electronics and Telecommunication Engineering"
            },
            {
                name: "Pratik Yadav",
                email: "Pratikyadav@gmail.com",
                phone: "1234567890",
                photo: "https://cdn.ieeeviitsb.in/committeeData/Pratik%20Yadav.jpeg?Expires=1744379438&Key-Pair-Id=KWEN588JG0UGT&Signature=AtdWX1NH84oN3oZHie1mKBji9lwq-5LepgLT0hymuUPq8p-260b-tTnNWcVcJjmRW0ogMLWkSCn-ZHDICHmEWA3wEzobmzWmLC7Mgoy8Mqhscne9Z4nVOVAynDcqrfYRnugryxL9Ew~yi5oWoMgurQUfceBEN7TTz2BXaaA-jkiyLpCWoOluw5zubjKYJ5WyVr~W-hBZBwnMMSBDmkQ8AYg5q2Arb-teIOqlkUc8qurppl8FcInf3cs6h3E1sSeTL2PgfR~Aw29X2lY011HDyxQKrWRUibf81Z0Orcr53KYDSP9eRiNHl6a4hdCjfK7SrGZFZFE45AWu2PuKW2TYXQ__",
                role: "Secretary",
                department: "Electronics and Telecommunication Engineering"
            },
            {
                name: "Atharva Joshi",
                email: "Atharvajoshi@gmail.com",
                phone: "1234567890",
                photo: "https://cdn.ieeeviitsb.in/committeeData/Atharva%20Joshi.jpeg?Expires=1744379438&Key-Pair-Id=KWEN588JG0UGT&Signature=t7MkZdXGw3D0pRoOMSmEvzXIzmrG2Xao-xrVHFMFbfjZ7P4LVSg9Zal87aY8JqT84fvxtNWmoM10mrTjHCYUdEwpQ0BX3eqmBBET4JVGo7CjfhEepEHjfo7kgg9Vjn2LabskVxPP4C7Un6iHzM5YVPnNWDoY9WR06AroZu-lcJhlkQbERb7UtLI46ng~8whie-YCkReyoB7zZLwO6N2Qi9r0c3JteNjeHi94vUxPIdLQuzOGkdd3k9FO334vdlMN8l7qa4c7hveC8wWHseBxza7FgZx4P1NhQBr6j79AnnNwDxPeLcepueEa~5dEcNSJ0B1BEI6P00wiwbLcvnw0uA__",
                role: "Treasurer",
                department: "Electronics and Telecommunication Engineering"
            },
            {
                name: "Darshith Shetty",
                email: "Darshithshetty@viit.ac.in",
                phone: "9876543210",
                photo: "https://cdn.ieeeviitsb.in/committeeData/Darshith%20Shetty.jpeg?Expires=1744379438&Key-Pair-Id=KWEN588JG0UGT&Signature=KgAT9oVwhk51pOWM5dGzv2ns-6VClFsS6vsypKu7U-ccOCHSv-vVH9oL0cdQroAVkPColY2Jn6fXu212kQDUS22QcKBHly2RWNWmdz0SmIWUlsmMsKSsvl9GphE-SIgJ~RmMq8CbQapgusKr1KXjL641V8DRHa~4vI62QZi-fF8XKbcoKkU3A9QKPEIy8vuOWaozHUIwoq3ITbiqppqVgVzEVo7Y3eYXdBIwa~HTqcA3LmzmFFoUbvUL5VhAtI5zAq9xXfZpi4f4JiwVZuEzC-AHQh4i8mC8azbg~i7VfNps5A6ZT5GO52bvNS5l~A87HtehWmTJZk0RicOx5CpISg__",
                role: "Joint Secretoryr",
                department: "Electronics and Telecommunication Engineering"
            },
            {
                name: "Mayuresh Marade",
                email: "Mayureshmarade@viit.ac.in",
                phone: "8765432109",
                photo: "https://cdn.ieeeviitsb.in/committeeData/Mayuresh%20Marade.jpeg?Expires=1744379438&Key-Pair-Id=KWEN588JG0UGT&Signature=vsbluObKzZlZ0U585a6asuEE-U1q81zA8-jZvOhmgje2gjfIYnOSOjNqTTf0V8sjATq64U3k1q55sqZfpy2jNmpmHi5zgGJJoRCVRsvVjD4rXmxWjtCjZAT48-GdX1NXhiebbKAjVIIlZ0jGDx-yvLWZ~cQnC5hheN1ZuDl4qCcof6fuXA6BFREsoqbrKFWQ3ZooRUDDNrtGMQQnGROniMKvFgU9uL45dCZ15d4z7Ge1likMCO85t2WHIhtWxCo8Z15GmknycgfcJtQlnVzR~dt~F-fqR2wjMIhOLKDXhTsQevD9ooUxKTxuFl4YFZb8LGbCugK5COtMdy2CSmWf7w__",
                role: "Joint Treasurer",
                department: "Electronics and Telecommunication Engineering"
            },
            {
                name: "Abhishek Mallav",
                email: "Abhishekmallav@viit.ac.in",
                phone: "8888744203",
                photo: "https://cdn.ieeeviitsb.in/committeeData/Abhishek%20Mallav.jpeg?Expires=1744379438&Key-Pair-Id=KWEN588JG0UGT&Signature=4o2CKl9qdRp4CNbMnff6SNrIjkZJV3AfMivQg47MCJvEUZ~VNfwislViDO6hnWUcYpngQ1HmaewkFH6F7DN-kvc3Gqbh6RcVz4XMg79JuLHWic~nOjD7CMnk-Ri7QbXQ5967jMTu3uaygylQSZrcvxRlJv8aAqqgc3v3kLfYbqneKytNF60eUWL5wYs8DBKoWO58EiCSGXkcuemD~3dXcWynubt5LFDMmZODLRJ6lZUeJjMQk~sb6oRMbjKX61X8bj1~WZcW2XqmDhL4~Pq1q8ypLVVO1TTHMlYViDQX3JrBHoIZJvIOqogrm8AT3Fi5yCABg3KxO76vovWzNxXEtw__",
                role: "Technical Head",
                department: "Electronics and Telecommunication Engineering"
            },
            {
                name: "Atharva Khandagale",
                email: "Atharvakhandagale@viit.ac.in",
                phone: "8888744203",
                photo: "https://cdn.ieeeviitsb.in/committeeData/Atharva%20Khandagale.jpeg?Expires=1744379439&Key-Pair-Id=KWEN588JG0UGT&Signature=4oaxtXRZparL9vGx7mhavZO-8QdsMiwtSoXKvjjgGcnEbRcGxd73vEXvyjFjC8jz2BsjOkH0pZcEdQrVsIf8fEZqk6XyH59deMCFPtPz7ia0f6i2wu50ua-9xp0nZvHzymdeWeFpneLtcXdV1CLU5tTy~5U6egzn3BUUFtlN2todXnIINITqkRIucNC5eJ2bE7xq1ljC7GW3Lofwfmno0wBT2KUFMagDmBeFW-sH9yUnWnLYQRXXJzTh7Ban77IEmNtFw0OkTT6itdpR83nBuR7NSC545XaNGvRMetUZ9sGQOgnuadNev57bF8mjFp9nflKX442tTsWW~dyV07LrrA__",
                role: "Web Devlopment Head",
                department: "Electronics and Telecommunication Engineering"
            },
            {
                name: "Hamza Khanji",
                email: "Hamzakhanjia@viit.ac.in",
                phone: "8888744203",
                photo: "https://cdn.ieeeviitsb.in/committeeData/Hamza%20Khanji.jpeg?Expires=1744379439&Key-Pair-Id=KWEN588JG0UGT&Signature=uDaRqEui~w6rbQutIcAnL6rjrnnC4OWNDcvXbZeMigAkpisZ-DeD29Nv9XmyaTAaEKOtrs1LambIxnPBhKShEDYvcMFsmB8e6IxGi2p2anktxY7eQiPz0PTNMI6WlUmjNKxwTzN78Lh3cbwUZ8D4~pqnkkKk5085am4koBteAwthy0qHeNIha~yg6YAYC5qZJ-No-FBmPsTGq3FCxKXokUtnIQB7Fq9aoB0uNBh6cudlwd5DkoIu9k3F3RNVTWXjInvQU77tUVV28l2pDk6E-k7a~xTg~2UVqtGQAyYLjNLBOZ9cv-UTGKha2YvGSmYa2oN0Z8h5aNYza5AAQjxTQA__",
                role: "Documentation Head",
                department: "Electronics and Telecommunication Engineering"
            }
        ],

        facultyTeam: [
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
                photo: "https://i.pinimg.com/736x/1c/90/e5/1c90e54c827284f57c8f738a9b612b6a.jpg",
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
                photo: "https://www.aisa-viit.com/images/Team/1-min.png",
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
                photo: "https://www.aisa-viit.com/images/Team/1-min.png",
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
                photo: "https://www.aisa-viit.com/images/Team/1-min.png",
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
                photo: "https://www.aisa-viit.com/images/Team/1-min.png",
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
                photo: "https://www.aisa-viit.com/images/Team/1-min.png",
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
                photo: "https://www.aisa-viit.com/images/Team/1-min.png",
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
                photo: "https://www.aisa-viit.com/images/Team/1-min.png",
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
                photo: "https://www.aisa-viit.com/images/Team/1-min.png",
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
                imageUrl: "https://iic.viit.ac.in/images/IEEE/DSC_01.jpg",
                caption: "IEEE National Conference",
                description: "A flagship event featuring keynote speakers, technical paper presentations, and panel discussions."
            },
            {
                imageUrl: "https://iic.viit.ac.in/images/IEEE/DSC_02.jpg",
                caption: "IEEE National Conference",
                description: "A 24-hour coding competition where students develop innovative tech solutions."
            },
            {
                imageUrl: "https://iic.viit.ac.in/images/IEEE/DSC_03.jpg",
                caption: "IEEE National Conference",
                description: "An electrifying robotics competition where teams battle their self-built robots."
            },
            {
                imageUrl: "https://iic.viit.ac.in/images/IEEE/DSC_04.jpg",
                caption: "IEEE National Conference",
                description: "Hands-on training on Artificial Intelligence and Internet of Things applications."
            },
            {
                imageUrl: "https://iic.viit.ac.in/images/IEEE/DSC_07.jpg",
                caption: "IEEE National Conference",
                description: "A visit to leading tech industries to understand real-world applications of engineering."
            },
            {
                imageUrl: "https://iic.viit.ac.in/images/IEEE/DSC_06.jpg",
                caption: "IEEE National Conference",
                description: "A visit to leading tech industries to understand real-world applications of engineering."
            },
            {
                imageUrl: "https://iic.viit.ac.in/images/IEEE/eh1.jpeg",
                caption: "THE ERROR HUNT IEEE",
                description: "A visit to leading tech industries to understand real-world applications of engineering."
            },
            {
                imageUrl: "https://iic.viit.ac.in/images/IEEE/eh2.jpeg",
                caption: "THE ERROR HUNT IEEE",
                description: "A visit to leading tech industries to understand real-world applications of engineering."
            },
            {
                imageUrl: "https://iic.viit.ac.in/images/IEEE/eh3.jpeg",
                caption: "THE ERROR HUNT IEEE",
                description: "A visit to leading tech industries to understand real-world applications of engineering."
            },
            {
                imageUrl: "https://iic.viit.ac.in/images/IEEE/ad1.jpeg",
                caption: "THE ADEPTUS IEEE",
                description: "A visit to leading tech industries to understand real-world applications of engineering."
            },
            {
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D22AQGhiNgl3g3yJw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1725257654346?e=1747267200&v=beta&t=Djo-sC7XSrhkPEZSU5qLfRAvS-mkHmTsvv3bUjp1vj8",
                caption: "Python Odyssey",
                description: "A visit to leading tech industries to understand real-world applications of engineering."
            },
            {
                imageUrl: "https://cdn.ieeeviitsb.in/eventsData/Gallery/Python1.jpg?Expires=1744382807&Key-Pair-Id=KWEN588JG0UGT&Signature=Aa0DEYuK~E7tsbIxWClI9-m5h3N6nfOPSoK6jyBI1-0kWVUZo4dlAG00aNBgQ2FJvPtMduZNCxKuR3AitVZ59BhmItY61FCCsdhf8KqO~69-3wbaDv2SS7URl1Cn1blTP-JyiTBsH-zTxwjEX8SXUvVKQZZ2AynUL8NgxRwFDyyOlBtkuXsp7rm2b1YhTXM94Bb6J1mcKIdLdUkWPryHxepasKszkQvj0ZZswX507U-MXmEaJxrojG564YQzxW7rcdiS9gyZnuIM4Ntk0Y4Fg5BCqYQL8VgwDoGI5texN0FF3MqAUuDM1BJX41cp~RSlaXM1SYJp5A1O7yBgeGpyPA__",
                caption: "Python Odyssey",
                description: "A visit to leading tech industries to understand real-world applications of engineering."
            }
        ]
    },


    // Third club EDC CLUB --------------------------------------------------------------------------------------------------------------------------------------------------------------------

    {
        name: "EDC Entrepreneurship Development Cell",
        description: "Entrepreneurship Development Cell was established to push students to the forefront of the outside world but also help raise their quality and worth in the industry. To give an understanding & hands-on experience of working of an organization & its various departments contributing to the organisation's overall success. To promote, sustain, practice and manifest the spirit of entrepreneurship among individuals by providing them a platform to convert their ideas into successful ventures.",
    
        vision: [
            "To create a dynamic ecosystem that nurtures and supports student entrepreneurs.",
            "To bridge the gap between academic knowledge and real-world business applications.",
            "To inspire students to take entrepreneurial initiatives and start their own ventures.",
            "To collaborate with industry leaders, investors, and mentors to facilitate startup growth.",
            "To establish VIIT Pune as a center for innovation and entrepreneurship."
        ],
        mission: [
            "Providing hands-on training, workshops, and mentorship programs on entrepreneurship.",
            "Organizing startup boot camps, business plan competitions, and hackathons.",
            "Connecting students with industry leaders, investors, and successful entrepreneurs.",
            "Facilitating incubation support, funding opportunities, and legal advisory for startups.",
            "Building a strong network of student entrepreneurs and alumni entrepreneurs."
        ],
    
        clubLogo: "https://edcviit.com/assets20/css/EDC_LOGO.png",
        social_links: {
            instagram: "https://www.instagram.com/edc_viit",
            linkedin: "https://www.linkedin.com/company/edc-viit"
        },
        coreTeam: [
            {
                name: "Ojas Deshpande",
                email: "Ojasoeshpande.edc@gmail.com",
                phone: "9876543210",
                photo: "https://edcviit.com/assets/img/Our%20Team/Ojas.png",
                role: "President",
                department: "Entrepreneurship & Innovation"
            },
            {
                name: "Aum Chhajed",
                email: "Aumchhajed@gmail.com",
                phone: "9876543211",
                photo: "https://edcviit.com/assets/img/Our%20Team/Aum.png",
                role: "General Manager",
                department: "Entrepreneurship & Innovation"
            },
            {
                name: "Krishna Jodh",
                email: "Krishnajodh@gmail.com",
                phone: "9876543212",
                photo: "https://edcviit.com/assets/img/Our%20Team/Krishna.png",
                role: "Cheif Finance Officer",
                department: "Entrepreneurship & Innovation"
            },
            {
                name: "Sanket Nabade",
                email: "Sanketnabade@gmail.com",
                phone: "9876543213",
                photo: "https://edcviit.com/assets/img/Our%20Team/Sanket_N.png",
                role: "General secratory",
                department: "Entrepreneurship & Innovation"
            },
            {
                name: "Parth Kulat",
                email: "Parthkulat@gmail.com",
                phone: "9876543215",
                photo: "https://edcviit.com/assets/img/Our%20Team/Parth.png",
                role: "Technical Head",
                department: "Entrepreneurship & Innovation"
            },
            {
                name: "Srivatsa Ankamwar",
                email: "Srivatsaankamwar@viit.ac.in",
                phone: "9988776655",
                photo: "https://edcviit.com/assets/img/Our%20Team/Srivatsa.png",
                role: "Start-Up Executive",
                department: "Entrepreneurship & Innovation"
            }
        ],

        facultyTeam: [
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
                photo: "https://i.pinimg.com/736x/1c/90/e5/1c90e54c827284f57c8f738a9b612b6a.jpg",
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
                photo: "https://www.aisa-viit.com/images/Team/1-min.png",
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
                photo: "https://www.aisa-viit.com/images/Team/1-min.png",
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
                photo: "https://www.aisa-viit.com/images/Team/1-min.png",
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
                photo: "https://www.aisa-viit.com/images/Team/1-min.png",
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
                photo: "https://www.aisa-viit.com/images/Team/1-min.png",
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
                photo: "https://www.aisa-viit.com/images/Team/1-min.png",
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
        ],
        photoGallery: [
            {
                imageUrl: "https://www.viit.ac.in/images/Life-at-VIIT/EDC/EDC-1.jpg",
                caption: "Vishwapreneur",
                description: "A flagship event featuring keynote speakers, technical paper presentations, and panel discussions."
            },
            {
                imageUrl: "https://www.viit.ac.in/images/Life-at-VIIT/EDC/EDC-2.jpg",
                caption: "Vishwapreneur",
                description: "A 24-hour coding competition where students develop innovative tech solutions."
            },
            {
                imageUrl: "https://www.viit.ac.in/images/Life-at-VIIT/EDC/EDC-3.jpg",
                caption: "Vishwapreneur",
                description: "An electrifying robotics competition where teams battle their self-built robots."
            },
            {
                imageUrl: "https://www.viit.ac.in/images/Life-at-VIIT/EDC/EDC-4.jpg",
                caption: "Vishwapreneur",
                description: "Hands-on training on Artificial Intelligence and Internet of Things applications."
            },
            {
                imageUrl: "https://www.viit.ac.in/images/Life-at-VIIT/EDC/EDC-5.jpg",
                caption: "Vishwapreneur",
                description: "A visit to leading tech industries to understand real-world applications of engineering."
            },
            {
                imageUrl: "https://www.viit.ac.in/images/Life-at-VIIT/EDC/EDC-14.png",
                caption: "WorkShops Session",
                description: "A visit to leading tech industries to understand real-world applications of engineering."
            },
            {
                imageUrl: "https://www.viit.ac.in/images/Life-at-VIIT/EDC/EDC-14.png",
                caption: "WorkShops Session",
                description: "A visit to leading tech industries to understand real-world applications of engineering."
            },
            {
                imageUrl: "https://www.viit.ac.in/images/Life-at-VIIT/EDC/EDC-15.jpg",
                caption: "WorkShops Session",
                description: "A visit to leading tech industries to understand real-world applications of engineering."
            },
            {
                imageUrl: "https://www.viit.ac.in/images/Life-at-VIIT/EDC/EDC-19.jpg",
                caption: "Agnitio B-Plan Competition",
                description: "A visit to leading tech industries to understand real-world applications of engineering."
            },
            {
                imageUrl: "https://www.viit.ac.in/images/Life-at-VIIT/EDC/EDC-20.jpg",
                caption: "Agnitio B-Plan Competition",
                description: "A visit to leading tech industries to understand real-world applications of engineering."
            },
            {
                imageUrl: "https://www.viit.ac.in/images/Life-at-VIIT/EDC/EDC-20.jpg",
                caption: "Agnitio B-Plan Competition",
                description: "A visit to leading tech industries to understand real-world applications of engineering."
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