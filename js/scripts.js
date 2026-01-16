document.addEventListener('DOMContentLoaded', () => {
    renderProfile();
    renderSkills();
    renderExperience();
    fetchGitHubProjects();
    setupThemeToggle();
    setupContactForm();
    setCurrentYear();
});

function renderProfile() {
    const p = portfolioData.profile;
    document.title = `${p.name} - ${p.title}`;
    document.getElementById('nav-brand-name').textContent = p.name;
    document.getElementById('hero-name').textContent = p.name;
    document.getElementById('hero-title').textContent = p.title;
    document.getElementById('hero-bio').textContent = p.bio;
    document.getElementById('resume-download').href = p.resumeUrl;
    document.getElementById('footer-name').textContent = p.name;

    const imgContainer = document.getElementById('hero-image-container');
    imgContainer.innerHTML = `<img src="${p.profileImage}" alt="${p.name}" class="hero-img mb-4">`;

    const socialLinks = document.getElementById('footer-social-links');
    socialLinks.innerHTML = `
        <a href="${p.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="${p.github}" target="_blank"><i class="fab fa-github"></i></a>
    `;
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    const categories = [...new Set(portfolioData.skills.map(s => s.category))];

    container.innerHTML = categories.map(cat => `
        <div class="col-md-6 mb-5">
            <div class="card h-100 p-4">
                <h4 class="mb-4 text-center">${cat}</h4>
                ${portfolioData.skills.filter(s => s.category === cat).map(skill => `
                    <div class="mb-3">
                        <div class="d-flex justify-content-between mb-1">
                            <span class="skill-info fw-bold"><i class="${skill.icon} me-2 text-primary"></i>${skill.name}</span>
                            <span class="proficiency-text">${skill.proficiency}%</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: ${skill.proficiency}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderExperience() {
    const container = document.getElementById('experience-container');
    container.innerHTML = portfolioData.experience.map(exp => `
        <div class="card mb-4 shadow-sm">
            <div class="card-body p-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h5 class="card-title fw-bold m-0">${exp.role}</h5>
                    <small class="text-muted">${exp.period}</small>
                </div>
                <h6 class="text-primary mb-3">${exp.company}</h6>
                <p class="card-text opacity-75">${exp.description}</p>
            </div>
        </div>
    `).join('');
}

async function fetchGitHubProjects() {
    const container = document.getElementById('projects-container');
    const githubUrl = portfolioData.profile.github;
    const username = githubUrl.endsWith('/') ? githubUrl.split('/').slice(-2)[0] : githubUrl.split('/').pop();
    const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`;

    try {
        container.innerHTML = '<div class="col-12 text-center py-5"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div></div>';

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Failed to fetch from GitHub');
        const repos = await response.json();

        if (!repos || repos.length === 0) {
            renderProjects(portfolioData.projects);
            return;
        }

        const projects = repos.map(repo => ({
            title: repo.name,
            description: repo.description || "No description provided.",
            image: "assets/project-placeholder.png",
            github: repo.html_url,
            demo: repo.homepage || "#",
            technologies: repo.language || "Various"
        }));

        renderProjects(projects);
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        renderProjects(portfolioData.projects);
    }
}

function renderProjects(projectsToRender) {
    const container = document.getElementById('projects-container');
    const projects = projectsToRender || portfolioData.projects;

    container.innerHTML = projects.map(proj => `
        <div class="col-md-6 col-lg-4">
            <div class="card h-100 p-0 overflow-hidden">
                <div class="position-relative">
                    <img src="${proj.image}" class="card-img-top" alt="${proj.title}" 
                         onerror="this.src='https://via.placeholder.com/400x200?text=${proj.title}'" 
                         style="height: 200px; object-fit: cover;">
                </div>
                <div class="card-body p-4">
                    <h5 class="card-title fw-bold">${proj.title}</h5>
                    <p class="card-text mb-3">${proj.description.length > 100 ? proj.description.substring(0, 100) + '...' : proj.description}</p>
                    <div class="mb-3">
                        <small class="tech-badge">${proj.technologies}</small>
                    </div>
                    <div class="d-flex gap-2">
                        ${proj.demo !== '#' ? `<a href="${proj.demo}" target="_blank" class="btn btn-sm btn-primary">Demo</a>` : ''}
                        <a href="${proj.github}" target="_blank" class="btn btn-sm btn-outline-primary">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const body = document.body;

    function updateIcon(isLight) {
        if (isLight) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    }

    themeToggle.addEventListener('click', () => {
        const isLight = body.classList.toggle('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        updateIcon(isLight);
    });

    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        updateIcon(true);
    }
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name');
        const subject = formData.get('subject');
        const message = formData.get('message');
        const email = portfolioData.profile.email;

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\n\n${message}`)}`;
        window.location.href = mailtoLink;
    });
}

function setCurrentYear() {
    const el = document.getElementById('current-year');
    if (el) el.textContent = new Date().getFullYear();
}

