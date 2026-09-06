// ==========================================
// CareerCourse MVP2
// Career + Skills + Courses + Learning Path
// ==========================================

const careers = {


    // ==========================================
    // SOFTWARE
    // ==========================================

    "software-engineer": {
        name: "Software Engineer",
        category: "Software Development",
        description: "ออกแบบ พัฒนา ทดสอบ และดูแลซอฟต์แวร์และระบบคอมพิวเตอร์",

        skills: [
            "Programming",
            "Problem Solving",
            "Database",
            "Software Engineering",
            "Git"
        ],

        courses: [
            ["Programming Fundamentals", 98],
            ["Object-Oriented Programming", 96],
            ["Data Structures and Algorithms", 94],
            ["Database Systems", 91],
            ["Software Engineering", 90],
            ["Web Programming", 87]
        ],

        learningPath: [
            "Programming Fundamentals",
            "Object-Oriented Programming",
            "Data Structures and Algorithms",
            "Database Systems",
            "Software Engineering"
        ]
    },


    "web-developer": {
        name: "Web Developer",
        category: "Software Development",
        description: "พัฒนาเว็บไซต์และ Web Application ทั้งส่วน Front-End และ Back-End",

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Web Development",
            "Database"
        ],

        courses: [
            ["Web Design", 98],
            ["HTML & CSS", 97],
            ["JavaScript Programming", 95],
            ["Database Systems", 88],
            ["Web Programming", 96]
        ],

        learningPath: [
            "HTML & CSS",
            "JavaScript Programming",
            "Web Programming",
            "Database Systems"
        ]
    },


    "mobile-developer": {
        name: "Mobile Developer",
        category: "Software Development",
        description: "พัฒนา Application สำหรับ Smartphone และ Mobile Platform",

        skills: [
            "Programming",
            "Mobile Development",
            "UI Design",
            "Database",
            "Problem Solving"
        ],

        courses: [
            ["Programming Fundamentals", 95],
            ["Mobile Application Development", 98],
            ["Database Systems", 88],
            ["UX/UI Design", 85],
            ["Software Engineering", 84]
        ],

        learningPath: [
            "Programming Fundamentals",
            "UX/UI Design",
            "Mobile Application Development",
            "Database Systems",
            "Software Engineering"
        ]
    },


    "game-developer": {
        name: "Game Developer",
        category: "Software Development",
        description: "ออกแบบและพัฒนาเกมด้วย Programming และ Game Engine",

        skills: [
            "Programming",
            "Game Development",
            "Problem Solving",
            "3D Design",
            "Creativity"
        ],

        courses: [
            ["Programming Fundamentals", 95],
            ["Game Development", 98],
            ["Object-Oriented Programming", 92],
            ["Graphic Design", 82],
            ["3D Design", 88]
        ],

        learningPath: [
            "Programming Fundamentals",
            "Object-Oriented Programming",
            "Game Development",
            "3D Design"
        ]
    },


    // ==========================================
    // DATA / AI
    // ==========================================

    "data-analyst": {
        name: "Data Analyst",
        category: "Data",
        description: "วิเคราะห์ข้อมูลเพื่อค้นหาแนวโน้มและสนับสนุนการตัดสินใจ",

        skills: [
            "Data Analysis",
            "Statistics",
            "SQL",
            "Excel",
            "Data Visualization"
        ],

        courses: [
            ["Data Analytics", 98],
            ["Statistics", 96],
            ["Database Systems", 94],
            ["Data Visualization", 92],
            ["Business Intelligence", 88]
        ],

        learningPath: [
            "Excel & Data Fundamentals",
            "Statistics",
            "Database Systems",
            "Data Analytics",
            "Data Visualization"
        ]
    },


    "data-scientist": {
        name: "Data Scientist",
        category: "Data & AI",
        description: "วิเคราะห์ข้อมูล สร้างโมเดล และค้นหา Insight จากข้อมูล",

        skills: [
            "Python",
            "Statistics",
            "Machine Learning",
            "Data Analysis",
            "SQL"
        ],

        courses: [
            ["Python Programming", 98],
            ["Statistics", 97],
            ["Data Analytics", 96],
            ["Machine Learning", 95],
            ["Database Systems", 88],
            ["Data Visualization", 87]
        ],

        learningPath: [
            "Python Programming",
            "Statistics",
            "Database Systems",
            "Data Analytics",
            "Machine Learning",
            "Data Visualization"
        ]
    },


    "ai-engineer": {
        name: "AI Engineer",
        category: "Artificial Intelligence",
        description: "พัฒนาและประยุกต์ใช้ระบบ Artificial Intelligence",

        skills: [
            "Python",
            "Machine Learning",
            "Artificial Intelligence",
            "Deep Learning",
            "Mathematics"
        ],

        courses: [
            ["Python Programming", 98],
            ["Mathematics for Computing", 94],
            ["Machine Learning", 98],
            ["Artificial Intelligence", 99],
            ["Deep Learning", 95]
        ],

        learningPath: [
            "Python Programming",
            "Mathematics for Computing",
            "Machine Learning",
            "Artificial Intelligence",
            "Deep Learning"
        ]
    },


    "ml-engineer": {
        name: "Machine Learning Engineer",
        category: "Data & AI",
        description: "สร้าง ฝึก และนำ Machine Learning Model ไปใช้งานจริง",

        skills: [
            "Python",
            "Machine Learning",
            "Deep Learning",
            "Data Engineering",
            "Statistics"
        ],

        courses: [
            ["Python Programming", 98],
            ["Statistics", 92],
            ["Machine Learning", 99],
            ["Deep Learning", 97],
            ["Data Engineering", 94]
        ],

        learningPath: [
            "Python Programming",
            "Statistics",
            "Data Engineering",
            "Machine Learning",
            "Deep Learning"
        ]
    },


    // ==========================================
    // DATABASE / SYSTEM
    // ==========================================

    "database-administrator": {
        name: "Database Administrator",
        category: "Database",
        description: "ดูแล ออกแบบ และจัดการระบบฐานข้อมูลขององค์กร",

        skills: [
            "SQL",
            "Database",
            "Database Security",
            "Backup",
            "Problem Solving"
        ],

        courses: [
            ["Database Systems", 99],
            ["SQL Programming", 98],
            ["Database Security", 94],
            ["Operating Systems", 82],
            ["Data Management", 95]
        ],

        learningPath: [
            "Database Fundamentals",
            "SQL Programming",
            "Database Systems",
            "Data Management",
            "Database Security"
        ]
    },


    "system-analyst": {
        name: "System Analyst",
        category: "System Development",
        description: "วิเคราะห์ความต้องการและออกแบบระบบสารสนเทศให้เหมาะกับองค์กร",

        skills: [
            "System Analysis",
            "Problem Solving",
            "Database",
            "Software Engineering",
            "Communication"
        ],

        courses: [
            ["System Analysis and Design", 99],
            ["Database Systems", 90],
            ["Software Engineering", 92],
            ["Project Management", 86],
            ["Business Analysis", 95]
        ],

        learningPath: [
            "Programming Fundamentals",
            "Database Systems",
            "System Analysis and Design",
            "Software Engineering",
            "Project Management"
        ]
    },


    "software-architect": {
        name: "Software Architect",
        category: "Software Development",
        description: "ออกแบบโครงสร้างและสถาปัตยกรรมของระบบซอฟต์แวร์",

        skills: [
            "Software Architecture",
            "Programming",
            "System Design",
            "Database",
            "Cloud Computing"
        ],

        courses: [
            ["Programming Fundamentals", 90],
            ["Software Engineering", 97],
            ["System Architecture", 99],
            ["Database Systems", 90],
            ["Cloud Computing", 94]
        ],

        learningPath: [
            "Programming Fundamentals",
            "Database Systems",
            "Software Engineering",
            "System Architecture",
            "Cloud Computing"
        ]
    },


    // ==========================================
    // NETWORK / SECURITY
    // ==========================================

    "network-engineer": {
        name: "Network Engineer",
        category: "Network",
        description: "ออกแบบ ติดตั้ง และดูแลระบบเครือข่ายคอมพิวเตอร์",

        skills: [
            "Computer Networks",
            "Network Security",
            "Routing",
            "Problem Solving",
            "Linux"
        ],

        courses: [
            ["Computer Networks", 99],
            ["Network Security", 95],
            ["Operating Systems", 88],
            ["Linux Administration", 92],
            ["Cloud Computing", 84]
        ],

        learningPath: [
            "Computer Networks",
            "Operating Systems",
            "Linux Administration",
            "Network Security",
            "Cloud Computing"
        ]
    },


    "cybersecurity-analyst": {
        name: "Cybersecurity Analyst",
        category: "Cybersecurity",
        description: "ตรวจสอบและป้องกันระบบสารสนเทศจากภัยคุกคามทางไซเบอร์",

        skills: [
            "Cybersecurity",
            "Network Security",
            "Linux",
            "Risk Management",
            "Problem Solving"
        ],

        courses: [
            ["Cybersecurity Fundamentals", 99],
            ["Network Security", 98],
            ["Computer Networks", 94],
            ["Linux Administration", 91],
            ["Risk Management", 88]
        ],

        learningPath: [
            "Computer Networks",
            "Linux Administration",
            "Cybersecurity Fundamentals",
            "Network Security",
            "Risk Management"
        ]
    },


    "cloud-engineer": {
        name: "Cloud Engineer",
        category: "Cloud Computing",
        description: "ออกแบบและดูแลระบบ Cloud Infrastructure",

        skills: [
            "Cloud Computing",
            "Networking",
            "Linux",
            "DevOps",
            "System Administration"
        ],

        courses: [
            ["Computer Networks", 90],
            ["Linux Administration", 92],
            ["Cloud Computing", 99],
            ["DevOps", 97],
            ["System Administration", 94]
        ],

        learningPath: [
            "Computer Networks",
            "Linux Administration",
            "System Administration",
            "Cloud Computing",
            "DevOps"
        ]
    },


    "devops-engineer": {
        name: "DevOps Engineer",
        category: "Cloud / Software",
        description: "เชื่อมโยงกระบวนการพัฒนา Software กับการ Deploy และ Infrastructure",

        skills: [
            "DevOps",
            "Cloud Computing",
            "Linux",
            "Programming",
            "CI/CD"
        ],

        courses: [
            ["Programming Fundamentals", 85],
            ["Linux Administration", 94],
            ["Cloud Computing", 98],
            ["DevOps", 99],
            ["Software Engineering", 90]
        ],

        learningPath: [
            "Programming Fundamentals",
            "Linux Administration",
            "Software Engineering",
            "Cloud Computing",
            "DevOps"
        ]
    },


    // ==========================================
    // DESIGN
    // ==========================================

    "graphic-designer": {
        name: "Graphic Designer",
        category: "Design",
        description: "ออกแบบภาพ สื่อโฆษณา และสื่อดิจิทัล",

        skills: [
            "Graphic Design",
            "Creativity",
            "Typography",
            "Color Theory",
            "Digital Media"
        ],

        courses: [
            ["Graphic Design", 99],
            ["Digital Media Design", 96],
            ["Typography", 92],
            ["Color Theory", 90],
            ["Creative Design", 94]
        ],

        learningPath: [
            "Graphic Design",
            "Color Theory",
            "Typography",
            "Digital Media Design",
            "Creative Design"
        ]
    },


    "ux-ui-designer": {
        name: "UX/UI Designer",
        category: "Design",
        description: "ออกแบบประสบการณ์และหน้าตาของระบบให้ใช้งานง่าย",

        skills: [
            "UX Design",
            "UI Design",
            "Figma",
            "User Research",
            "Creativity"
        ],

        courses: [
            ["UX/UI Design", 99],
            ["User Experience", 98],
            ["Graphic Design", 88],
            ["Human Computer Interaction", 96],
            ["User Research", 94]
        ],

        learningPath: [
            "Graphic Design",
            "Human Computer Interaction",
            "User Research",
            "UX/UI Design"
        ]
    },


    // ==========================================
    // BUSINESS
    // ==========================================

    "digital-marketer": {
        name: "Digital Marketer",
        category: "Digital Business",
        description: "วางแผนและดำเนินการตลาดผ่านช่องทางดิจิทัล",

        skills: [
    "Digital Marketing",
    "Data Analysis",
    "Social Media",
    "SEO",
      ],
        courses: [
            ["Digital Marketing", 99],
            ["Social Media Marketing", 96],
            ["Content Marketing", 94],
            ["SEO", 92],
            ["Data Analytics", 88]
        ],

        learningPath: [
            "Digital Marketing",
            "Content Marketing",
            "Social Media Marketing",
            "SEO",
            "Data Analytics"
        ]
    },


    "business-analyst": {
        name: "Business Analyst",
        category: "Business",
        description: "วิเคราะห์ปัญหาและความต้องการทางธุรกิจเพื่อพัฒนาระบบหรือกระบวนการ",

        skills: [
            "Business Analysis",
            "Data Analysis",
            "Communication",
            "Problem Solving",
            "Project Management"
        ],

        courses: [
            ["Business Analysis", 99],
            ["Data Analytics", 91],
            ["Statistics", 84],
            ["Project Management", 95],
            ["System Analysis and Design", 94]
        ],

        learningPath: [
            "Business Fundamentals",
            "Data Analytics",
            "Business Analysis",
            "System Analysis and Design",
            "Project Management"
        ]
    },


    "it-project-manager": {
        name: "IT Project Manager",
        category: "IT Management",
        description: "บริหารโครงการด้านเทคโนโลยีสารสนเทศให้บรรลุเป้าหมาย",

        skills: [
            "Project Management",
            "Leadership",
            "Communication",
            "Risk Management",
            "Software Engineering"
        ],

        courses: [
            ["Project Management", 99],
            ["IT Management", 97],
            ["Risk Management", 94],
            ["Software Engineering", 86],
            ["Business Analysis", 88]
        ],

        learningPath: [
            "Business Fundamentals",
            "IT Management",
            "Project Management",
            "Risk Management",
            "Leadership"
        ]
    }

};


// ==========================================
// MAIN FUNCTION
// ==========================================

function recommendCourses() {

    const careerId = document.getElementById("career").value;

    const description =
        document.getElementById("career-description");

    const skillList =
        document.getElementById("skill-list");

    const courseList =
        document.getElementById("course-list");

    const pathList =
        document.getElementById("path-list");

    const skillMatchList =
        document.getElementById("skill-match-list");

    const recommendationList =
        document.getElementById("career-recommendation-list");


    if (careerId === "") {

        description.innerHTML =
            "<p>⚠️ กรุณาเลือกอาชีพก่อน</p>";

        skillList.innerHTML =
            "<p>กรุณาเลือกอาชีพเพื่อดูทักษะ</p>";

        courseList.innerHTML =
            "<p>กรุณาเลือกอาชีพเพื่อดูรายวิชา</p>";

        pathList.innerHTML =
            "<p>กรุณาเลือกอาชีพเพื่อสร้าง Learning Path</p>";

        skillMatchList.innerHTML =
            "<p>กรุณาเลือกอาชีพ</p>";

        recommendationList.innerHTML =
            "<p>กรุณาเลือกอาชีพ</p>";

        return;
    }


    const career = careers[careerId];


    // ==========================================
    // CAREER INFO
    // ==========================================

    description.innerHTML = `
        <h3>${career.name}</h3>

        <p>${career.description}</p>

        <p>
            <strong>หมวดอาชีพ:</strong>
            ${career.category}
        </p>
    `;


    // ==========================================
    // SKILLS
    // ==========================================

    skillList.innerHTML = "";

    career.skills.forEach(function(skill) {

        skillList.innerHTML += `
            <span class="skill-item">
                ✓ ${skill}
            </span>
        `;

    });


    // ==========================================
    // SKILL MATCH
    // ==========================================

    skillMatchList.innerHTML = "";

    career.skills.forEach(function(skill, index) {

        let score = 95 - (index * 4);

        skillMatchList.innerHTML += `

            <div class="skill-bar">

                <div class="skill-bar-header">

                    <strong>${skill}</strong>

                    <span>${score}%</span>

                </div>

                <div class="skill-bar-bg">

                    <div
                        class="skill-bar-fill"
                        style="width:${score}%">
                    </div>

                </div>

            </div>

        `;

    });


    // ==========================================
    // COURSES
    // ==========================================

    let courses = career.courses.slice();

    courses.sort(function(a, b) {

        return b[1] - a[1];

    });


    courseList.innerHTML = "";


    courses.forEach(function(course, index) {

        courseList.innerHTML += `

            <div class="course-card">

                <h3>
                    ${index + 1}. ${course[0]}
                </h3>

                <p class="score">
                    ⭐ ความเหมาะสม ${course[1]}%
                </p>

                <div class="reason">

                    <strong>
                        💡 เหตุผลที่แนะนำ
                    </strong>

                    <p>
                        รายวิชานี้ช่วยพัฒนาทักษะ
                        ที่เกี่ยวข้องกับอาชีพ
                        ${career.name}
                    </p>

                </div>

            </div>

        `;

    });


    // ==========================================
    // LEARNING PATH
    // ==========================================

    pathList.innerHTML = "";


    career.learningPath.forEach(function(course, index) {

        pathList.innerHTML += `

            <div class="path-item">

                <span class="path-number">

                    ${index + 1}

                </span>

                <strong>
                    STEP ${index + 1}
                </strong>

                <br>

                📚 ${course}

            </div>

        `;

    });


    // ==========================================
    // RELATED CAREERS
    // ==========================================

    recommendationList.innerHTML = "";


    const relatedCareers = Object.entries(careers)
        .filter(function(item) {

            return item[0] !== careerId;

        })
        .filter(function(item) {

            return item[1].category === career.category;

        })
        .slice(0, 3);


    if (relatedCareers.length === 0) {

        recommendationList.innerHTML =
            "<p>ยังไม่มีอาชีพที่อยู่ในหมวดเดียวกัน</p>";

    } else {

        relatedCareers.forEach(function(item, index) {

            recommendationList.innerHTML += `

                <div class="recommendation-card">

                    <div class="recommendation-number">

                        #${index + 1}

                    </div>

                    <div>

                        <h3>
                            ${item[1].name}
                        </h3>

                        <p>
                            ${item[1].description}
                        </p>

                    </div>

                </div>

            `;

        });

    }


    // Scroll ไปผลลัพธ์

    document.getElementById("career-info")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ==========================================
// FEEDBACK
// ==========================================

function sendFeedback(type) {

    const result =
        document.getElementById("feedback-result");

    if (type === "yes") {

        result.innerHTML =
            "<p class='feedback-success'>✅ ขอบคุณสำหรับ Feedback!</p>";

    } else {

        result.innerHTML =
            "<p class='feedback-success'>🙏 ขอบคุณสำหรับความคิดเห็น เราจะนำไปปรับปรุงระบบ</p>";

    }

}