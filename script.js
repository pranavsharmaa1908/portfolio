document.addEventListener('DOMContentLoaded', () => {
    console.log('AI Portfolio Initialized');

    // Dynamic Date
    const dateElement = document.querySelector('.date');
    if (dateElement) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = new Date().toLocaleDateString('en-US', options);
        dateElement.textContent = new Date().toLocaleDateString('en-US', options);
    }

    // Update Header with GitHub Link
    if (typeof profile !== 'undefined') {
        updateHeader();
    }

    // Render Profile (Homepage)
    const profileContainer = document.getElementById('profile-container');
    if (profileContainer && typeof profile !== 'undefined') {
        renderProfile(profileContainer);
    }

    // Render Projects List (Homepage)
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer && typeof projects !== 'undefined') {
        renderProjectsList(projectsContainer);
    }

    // Render Stack (Homepage)
    const stackContainer = document.getElementById('stack-container');
    if (stackContainer && typeof profile !== 'undefined') {
        renderStack(stackContainer);
    }

    // Render Project Detail (Project Page)
    const projectDetailContainer = document.getElementById('project-detail-container');
    if (projectDetailContainer && typeof projects !== 'undefined') {
        renderProjectDetail(projectDetailContainer);
    }



    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});

function renderProjectsList(container) {
    container.innerHTML = '';
    projects.forEach((project, index) => {
        const article = document.createElement('article');
        article.className = 'news-article';

        // Create a snippet of the details (first 2 sentences)
        const sentences = project.impact.split('.').filter(s => s.trim().length > 0);
        const snippet = sentences.slice(0, 2).join('.') + '.';

        article.innerHTML = `
            <h3 class="headline"><a href="project.html?id=${project.id}" class="project-link">${project.headline}</a></h3>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <span class="dateline" style="margin-bottom: 0;">${project.dateline} —</span>
                ${project.github ? `
                <a href="${project.github}" target="_blank" title="View Code" style="color: var(--text-ink); display: flex; align-items: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                </a>` : ''}
            </div>
            <p class="article-body">
                <span class="drop-cap">${snippet.charAt(0)}</span>${snippet.slice(1)}
                <a href="project.html?id=${project.id}" class="read-more">[Read Full Story]</a>
            </p>
        `;

        container.appendChild(article);

        // Add separator if not the last item
        if (index < projects.length - 1) {
            const hr = document.createElement('hr');
            hr.className = 'article-separator';
            container.appendChild(hr);
        }
    });
}



function renderProjectDetail(container) {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const project = projects.find(p => p.id === projectId);

    if (!project) {
        container.innerHTML = '<p>Project not found. <a href="index.html">Return to Home</a>.</p>';
        return;
    }

    document.title = `${project.name} - The AI Engineer Chronicle`;

    container.innerHTML = `
        <article class="project-article">
            <div class="project-content">
                <h2 class="headline large-headline">${project.headline}</h2>
                <div class="project-meta">
                    <span class="dateline">${project.dateline} —</span>
                    <span class="project-name-tag">Project: ${project.name}</span>
                    ${project.github ? `
                    <a href="${project.github}" target="_blank" title="View Code" style="color: var(--text-ink); display: flex; align-items: center;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </a>` : ''}
                </div>
                
                <div class="article-body">
                    <p><span class="drop-cap">${project.details.charAt(0)}</span>${project.details.slice(1)}</p>
                    
                    <div class="impact-box">
                        <h4>Impact Analysis</h4>
                        <p>${project.impact}</p>
                    </div>
                </div>
            </div>
            
            <div class="project-visual">
                ${project.image ? `
                <figure>
                    <img src="${project.image}" alt="${project.name} Screenshot" class="project-image">
                    <figcaption>Fig 1. ${project.name} in action.</figcaption>
                </figure>
                ` : ''}

                <div class="stack-box">
                    <h4>Tech Stack</h4>
                    <ul class="stack-list">
                        ${project.stack.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </article>
    `;
}



function renderProfile(container) {
    container.innerHTML = `
        <h2 class="column-header">About</h2>

        <div class="profile-image-container">
            <img src="${profile.image}" alt="${profile.name}" class="profile-img">
        </div>

        <div class="bio-section">
            <h3>Pranav Sharma</h3>
            <p>${profile.bio}</p>
            <a href="resume/resume.pdf" class="download-btn" download>Download my resume</a>
        </div>

        <div class="contact-box">
            <h3>Subscription / Contact</h3>
            <p>For inquiries, collaborations, or just to say hello:</p>
            <p class="email"><a href="mailto:${profile.email}" style="color: inherit; text-decoration: none;">${profile.email}</a></p>
        </div>
    `;
}

function renderStack(container) {
    if (!profile.stack || profile.stack.length === 0) return;

    container.innerHTML = `
        <h2 class="column-header">Tech Stack</h2>
        <div class="stack-box">
            <ul class="stack-list">
                ${profile.stack.map(tech => `<li><a href="https://www.google.com/search?q=${encodeURIComponent(tech + ' programming')}" target="_blank">${tech}</a></li>`).join('')}
            </ul>
        </div>
    `;
}

function updateHeader() {
    const editorSpan = document.querySelector('.editor');
    if (editorSpan && profile.github) {
        const githubLink = document.createElement('a');
        githubLink.href = profile.github;
        githubLink.target = '_blank';
        githubLink.title = 'GitHub Profile';
        githubLink.style.display = 'flex';
        githubLink.style.alignItems = 'center';
        githubLink.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="github-icon" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
        `;
        editorSpan.appendChild(githubLink);
    }
}
