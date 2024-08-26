document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.github.com/users/jncurrea/repos')
        .then(response => response.json())
        .then(data => {
            const githubContainer = document.getElementById('github-container');
            data.forEach(repo => {
                const repoDiv = document.createElement('div');
                repoDiv.className = 'repo';
                repoDiv.innerHTML = `
                    <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                    <p>${repo.description}</p>
                `;
                githubContainer.appendChild(repoDiv);
            });
        });
});