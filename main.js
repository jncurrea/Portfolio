document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            const target = tab.dataset.tab;

            contents.forEach(content => {
                content.classList.remove('active');
            });

            document.getElementById(target).classList.add('active');
        });
    });

    // Show the Overview tab by default
    document.getElementById('overview').classList.add('active');

    // Load GitHub projects (if needed)
    // Load Tableau visualizations (if needed)
});
