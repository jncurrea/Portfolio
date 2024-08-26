document.addEventListener('DOMContentLoaded', function() {
    // List of repositories to include (only those you want to show)
    const selectedRepos = [
        'Neural_Network_Charity_Analysis',
        'PROJECT',
        'TAKEHOME_SCOTT'
    ];

    // Fetch all repositories from GitHub
    fetch('https://api.github.com/users/jncurrea/repos')
        .then(response => response.json())
        .then(data => {
            const githubContainer = document.getElementById('github-container');

            // Filter and display only the selected repositories
            data.forEach(repo => {
                if (selectedRepos.includes(repo.name)) {
                    const repoDiv = document.createElement('div');
                    repoDiv.className = 'repo';
                    repoDiv.innerHTML = `
                        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                        <p>${repo.description || 'No description available.'}</p>
                    `;
                    githubContainer.appendChild(repoDiv);
                }
            });

            // Add a link to view more projects on GitHub
            const moreProjectsLink = document.createElement('p');
            moreProjectsLink.innerHTML = 'For more projects, please visit <a href="https://github.com/jncurrea" target="_blank">https://github.com/jncurrea</a>';
            githubContainer.appendChild(moreProjectsLink);
        })
        .catch(error => console.error('Error fetching GitHub repositories:', error));
});
