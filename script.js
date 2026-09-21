// ==========================================
// CareerCourse
// ระบบแนะนำรายวิชาสำหรับอาชีพที่อยากเป็น
// ==========================================

const careers = {

    "software-engineer": {
        name: "Software Engineer",
        description: "ผู้พัฒนาซอฟต์แวร์และระบบคอมพิวเตอร์ ตั้งแต่การออกแบบ เขียนโปรแกรม ทดสอบ และดูแลระบบ",

        skills: [
            "Programming",
            "Database",
            "Web Development",
            "Software Engineering"
        ],

        courses: [
            {
                name: "Software Engineering",
                score: 98,
                skills: ["Software Development", "Programming"],
                reason: "ช่วยเรียนรู้กระบวนการพัฒนาซอฟต์แวร์อย่างเป็นระบบ"
            },
            {
                name: "Programming",
                score: 95,
                skills: ["Programming"],
                reason: "ช่วยพัฒนาพื้นฐานด้านการเขียนโปรแกรม"
            },
            {
                name: "Database",
                score: 90,
                skills: ["SQL", "Database"],
                reason: "ช่วยเรียนรู้การจัดเก็บและจัดการข้อมูลในฐานข้อมูล"
            },
            {
                name: "Web Development",
                score: 88,
                skills: ["HTML", "CSS", "JavaScript"],
                reason: "ช่วยพัฒนาทักษะการสร้างเว็บไซต์และ Web Application"
            }
        ],

        learningPath: [
            "Programming",
            "Database",
            "Web Development",
            "Software Engineering"
        ]
    },


    "data-scientist": {
        name: "Data Scientist",
        description: "ผู้วิเคราะห์ข้อมูลและสร้างโมเดลเพื่อค้นหา Insight และสนับสนุนการตัดสินใจ",

        skills: [
            "Python",
            "Statistics",
            "Machine Learning",
            "SQL",
            "Data Analysis"
        ],

        courses: [
            {
                name: "Machine Learning",
                score: 98,
                skills: ["Machine Learning", "Python"],
                reason: "ช่วยพัฒนาทักษะการสร้างโมเดล Machine Learning"
            },
            {
                name: "Python Programming",
                score: 95,
                skills: ["Python", "Programming"],
                reason: "Python เป็นภาษาที่นิยมใช้ในงาน Data Science"
            },
            {
                name: "Statistics",
                score: 94,
                skills: ["Statistics", "Data Analysis"],
                reason: "ช่วยให้สามารถวิเคราะห์ข้อมูลทางสถิติได้"
            },
            {
                name: "Database",
                score: 88,
                skills: ["SQL", "Database"],
                reason: "ช่วยพัฒนาทักษะ SQL สำหรับจัดการข้อมูล"
            }
        ],

        learningPath: [
            "Python Programming",
            "Statistics",
            "Database",
            "Machine Learning"
        ]
    },


    "graphic-designer": {
        name: "Graphic Designer",
        description: "ผู้ออกแบบงานกราฟิก สื่อโฆษณา และสื่อดิจิทัล",

        skills: [
            "Graphic Design",
            "Creativity",
            "Typography",
            "Color Theory",
            "UX/UI"
        ],

        courses: [
            {
                name: "Graphic Design",
                score: 98,
                skills: ["Graphic Design"],
                reason: "ช่วยพัฒนาพื้นฐานด้านการออกแบบกราฟิก"
            },
            {
                name: "UX/UI Design",
                score: 92,
                skills: ["UX", "UI", "Figma"],
                reason: "ช่วยพัฒนาทักษะการออกแบบ User Interface และ User Experience"
            },
            {
                name: "Digital Media Design",
                score: 90,
                skills: ["Digital Design", "Creativity"],
                reason: "ช่วยพัฒนาทักษะการออกแบบสำหรับสื่อดิจิทัล"
            }
        ],

        learningPath: [
            "Graphic Design",
            "Digital Media Design",
            "UX/UI Design"
        ]
    },


    "digital-marketer": {
        name: "Digital Marketing",
        description: "ผู้วางแผนและดำเนินการตลาดผ่านช่องทางดิจิทัล",

        skills: [
            "Digital Marketing",
            "Data Analysis",
            "Social Media",
            "Content Marketing",
            "SEO"
        ],

        courses: [
            {
                name: "Digital Marketing",
                score: 98,
                skills: ["Digital Marketing"],
                reason: "ช่วยเรียนรู้หลักการตลาดดิจิทัลและการวางแผนแคมเปญ"
            },
            {
                name: "Social Media Marketing",
                score: 95,
                skills: ["Social Media", "Content Marketing"],
                reason: "ช่วยพัฒนาทักษะการตลาดบน Social Media"
            },
            {
                name: "Data Analysis",
                score: 90,
                skills: ["Data Analysis"],
                reason: "ช่วยวิเคราะห์ข้อมูลลูกค้าและประสิทธิภาพของแคมเปญ"
            },
            {
                name: "SEO",
                score: 88,
                skills: ["SEO"],
                reason: "ช่วยเรียนรู้การเพิ่มการมองเห็นเว็บไซต์บน Search Engine"
            }
        ],

        learningPath: [
            "Digital Marketing",
            "Social Media Marketing",
            "Data Analysis",
            "SEO"
        ]
    }

};


// ==========================================
// ฟังก์ชันแนะนำรายวิชา
// ==========================================

function recommendCourses() {

    const careerId = document.getElementById("career").value;

    const description = document.getElementById("career-description");
    const skillList = document.getElementById("skill-list");
    const courseList = document.getElementById("course-list");
    const pathList = document.getElementById("path-list");


    // ถ้ายังไม่ได้เลือกอาชีพ
    if (careerId === "") {

        description.innerHTML =
            "<p>⚠️ กรุณาเลือกอาชีพก่อน</p>";

        skillList.innerHTML =
            "<p>กรุณาเลือกอาชีพเพื่อดูทักษะที่จำเป็น</p>";

        courseList.innerHTML =
            "<p class='start-message'>กรุณาเลือกอาชีพเพื่อดูรายวิชาที่แนะนำ</p>";

        pathList.innerHTML =
            "<p>กรุณาเลือกอาชีพเพื่อสร้าง Learning Path</p>";

        return;
    }


    const career = careers[careerId];


    // ==========================================
    // ข้อมูลอาชีพ
    // ==========================================

    description.innerHTML =
        "<h3>" + career.name + "</h3>" +
        "<p>" + career.description + "</p>";


    // ==========================================
    // Skills
    // ==========================================

    skillList.innerHTML = "";

    career.skills.forEach(function(skill) {

        skillList.innerHTML +=
            "<span class='skill-item'>✓ " +
            skill +
            "</span>";

    });


    // ==========================================
    // เรียงรายวิชา
    // ==========================================

    const sortedCourses = career.courses.slice();

    sortedCourses.sort(function(a, b) {
        return b.score - a.score;
    });


    // ==========================================
    // แสดงรายวิชา
    // ==========================================

    courseList.innerHTML = "";

    sortedCourses.forEach(function(course, index) {

        let html = "";

        html += "<div class='course-card'>";

        html += "<h3>";
        html += (index + 1) + ". " + course.name;
        html += "</h3>";

        html += "<p class='score'>";
        html += "⭐ ความเหมาะสม: " + course.score + "%";
        html += "</p>";

        html += "<p class='skill'>";
        html += "🛠 <strong>Skills:</strong> ";
        html += course.skills.join(", ");
        html += "</p>";

        html += "<div class='reason'>";

        html += "<strong>💡 เหตุผลที่แนะนำ</strong>";

        html += "<p>";
        html += course.reason;
        html += "</p>";

        html += "</div>";

        html += "</div>";

        courseList.innerHTML += html;

    });


    // ==========================================
    // Learning Path
    // ==========================================

    pathList.innerHTML = "";

    career.learningPath.forEach(function(course, index) {

        let path = "";

        path += "<div class='path-item'>";

        path += "<span class='path-number'>";
        path += "STEP " + (index + 1);
        path += "</span>";

        path += "<br>";

        path += "📚 " + course;

        path += "</div>";

        pathList.innerHTML += path;

    });

}
