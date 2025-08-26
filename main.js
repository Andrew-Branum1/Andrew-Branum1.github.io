document.addEventListener('DOMContentLoaded', () => {
    const skillsContainer = document.getElementById('skills-container');
    const projectsContainer = document.getElementById('projects-container');

    // Populate Skills
    portfolioData.skills.forEach(skill => {
        const skillElement = document.createElement('span');
        skillElement.className = 'bg-brand-light-purple text-brand-yellow py-2 px-4 rounded-lg';
        skillElement.textContent = skill;
        skillsContainer.appendChild(skillElement);
    });

    // Populate Projects
    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'bg-brand-light-purple rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300';
        projectCard.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-2xl font-bold text-white mb-2">${project.title}</h3>
                <p class="text-gray-400 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tags.map(tag => `<span class="text-sm bg-gray-700 text-brand-yellow py-1 px-3 rounded-full">${tag}</span>`).join('')}
                </div>
                <div class="flex space-x-4">
                    <a href="${project.githubUrl}" target="_blank" class="text-brand-yellow hover:underline">GitHub</a>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
});