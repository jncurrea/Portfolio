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

    // Load Tableau projects
    var divElement1 = document.getElementById('viz1724702839630');
    var vizElement1 = divElement1.getElementsByTagName('object')[0];
    vizElement1.style.width = '1000px';  // Adjusted width
    vizElement1.style.height = '600px';  // Adjusted height
    var scriptElement1 = document.createElement('script');
    scriptElement1.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement1.parentNode.insertBefore(scriptElement1, vizElement1);

    var divElement2 = document.getElementById('viz1724703197137');
    var vizElement2 = divElement2.getElementsByTagName('object')[0];
    vizElement2.style.width = '1000px';  // Adjusted width
    vizElement2.style.height = '600px';  // Adjusted height
    var scriptElement2 = document.createElement('script');
    scriptElement2.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement2.parentNode.insertBefore(scriptElement2, vizElement2);

    // Show the Overview tab by default
    document.getElementById('overview').classList.add('active');
    
});
