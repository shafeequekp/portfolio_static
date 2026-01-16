const portfolioData = {
    profile: {
        name: "Muhammed Shafeek",
        title: "Python Developer",
        bio: "Python Developer at Classyserver Technologies, Kochi. Specializing in building scalable applications, microservices, and ETL pipelines.",
        email: "shafeequevesala@gmail.com",
        linkedin: "https://www.linkedin.com/in/shafeek-kp/",
        github: "https://github.com/shafeequekp",
        profileImage: "assets/profile.jpg",
        resumeUrl: "assets/resume.pdf"
    },
    skills: [
        { name: "Python", proficiency: 90, icon: "fab fa-python", category: "Backend" },
        { name: "Django", proficiency: 90, icon: "fas fa-code", category: "Backend" },
        { name: "Django REST Framework", proficiency: 85, icon: "fas fa-cogs", category: "Backend" },
        { name: "FastAPI", proficiency: 80, icon: "fas fa-bolt", category: "Backend" },
        { name: "Java Basics", proficiency: 60, icon: "fab fa-java", category: "Backend" },
        { name: "Pandas", proficiency: 75, icon: "fas fa-table", category: "Backend" },
        { name: "Celery", proficiency: 70, icon: "fas fa-tasks", category: "Backend" },
        { name: "Redis", proficiency: 70, icon: "fas fa-database", category: "Backend" },
        { name: "Postgres", proficiency: 85, icon: "fas fa-database", category: "Backend" },
        { name: "AWS", proficiency: 70, icon: "fab fa-aws", category: "Tools" },
        { name: "Docker", proficiency: 75, icon: "fab fa-docker", category: "Tools" },
        { name: "CI/CD", proficiency: 70, icon: "fas fa-sync", category: "Tools" },
        { name: "Nginx/Apache", proficiency: 65, icon: "fas fa-server", category: "Tools" },
        { name: "Linux", proficiency: 80, icon: "fab fa-linux", category: "Tools" },
        { name: "Microservices", proficiency: 75, icon: "fas fa-network-wired", category: "Technical" },
        { name: "ETL", proficiency: 70, icon: "fas fa-stream", category: "Technical" },
        { name: "DSA", proficiency: 70, icon: "fas fa-brain", category: "Technical" },
        { name: "Debugging/Logging", proficiency: 85, icon: "fas fa-bug", category: "Technical" },
        { name: "QA", proficiency: 65, icon: "fas fa-vial", category: "Technical" },
        { name: "HTML5", proficiency: 95, icon: "fab fa-html5", category: "Frontend" },
        { name: "CSS3", proficiency: 85, icon: "fab fa-css3-alt", category: "Frontend" },
        { name: "JavaScript", proficiency: 80, icon: "fab fa-js", category: "Frontend" },
        { name: "Bootstrap", proficiency: 85, icon: "fab fa-bootstrap", category: "Frontend" },
        { name: "React", proficiency: 65, icon: "fab fa-react", category: "Frontend" }
    ],
    experience: [
        {
            role: "Senior Software Engineer",
            company: "Classyserver Technologies Pvt. Ltd",
            period: "May 2022 - Present",
            description: "Working on multiple projects involving Python, Django, and full-stack development, with a focus on creating scalable solutions. Implemented backend services and integrated with cloud provider (AWS). Leading teams and mentoring junior developers, fostering skill development and improving team collaboration."
        },
        {
            role: "Software Engineer",
            company: "Duklr Analytics Pvt. Ltd",
            period: "March 2021 - May 2022",
            description: "Led the development of web-based applications and services using Python, Django and AWS. Designed scalable software components and ensured optimal performance. Collaborated with cross-functional teams (product managers, UX/UI, and QA) to deliver key features. Managed the product lifecycle from definition and design to implementation and deployment."
        }
    ],
    projects: [
        {
            title: "Project 1",
            description: "A placeholder for your first project. Detailed description will come here.",
            image: "assets/project1.png",
            github: "https://github.com/shafeequekp",
            demo: "#",
            technologies: "Python, Django"
        },
        {
            title: "Project 2",
            description: "A placeholder for your second project. Detailed description will come here.",
            image: "assets/project2.png",
            github: "https://github.com/shafeequekp",
            demo: "#",
            technologies: "Next.js, Tailwind"
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
