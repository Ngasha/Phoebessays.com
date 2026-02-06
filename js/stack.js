document.addEventListener('DOMContentLoaded', () => {
    const stackContainer = document.getElementById('essay-stack-container');
    
    if (!stackContainer) return;

    // Fetch data
    fetch('data/projects.json')
        .then(response => response.json())
        .then(data => {
            renderStack(data);
        })
        .catch(error => console.error('Error loading projects:', error));

    function renderStack(projects) {
        // Take top 5 for the stack visual
        const stackProjects = projects.slice(0, 5);
        
        stackContainer.innerHTML = ''; // Clear existing
        
        stackProjects.forEach((project, index) => {
            const card = document.createElement('div');
            card.classList.add('essay-card');
            card.dataset.index = index;
            
            // Stagger effects
            card.style.setProperty('--i', index);
            
            card.innerHTML = `
                <div class="card-content">
                    <span class="card-category">${project.category}</span>
                    <h3 class="card-title">${project.title}</h3>
                    <p class="card-preview">${project.preview}</p>
                    <div class="card-footer">
                        <span class="card-date">${project.date}</span>
                        <a href="${project.link}" class="card-link">Read More &rarr;</a>
                    </div>
                </div>
            `;
            
            // Event Listeners for interaction
            card.addEventListener('click', () => {
                stackContainer.classList.toggle('expanded');
            });

            stackContainer.appendChild(card);
        });

        // Add a "back" card to give depth if needed, or rely on CSS pseudo-elements
    }
});
