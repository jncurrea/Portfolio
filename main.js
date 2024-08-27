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
    var vizWidth = Math.min(window.innerWidth * 0.9, 800); // 90% of the window width, but no more than 800
    var vizHeight = vizWidth * 0.6; // Aspect ratio (adjust as needed)

    var divElement1 = document.getElementById('viz1724702839630');
    var vizElement1 = divElement1.getElementsByTagName('object')[0];
    vizElement1.style.width = vizWidth + 'px';
    vizElement1.style.height = vizHeight + 'px';
    var scriptElement1 = document.createElement('script');
    scriptElement1.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement1.parentNode.insertBefore(scriptElement1, vizElement1);

    var divElement2 = document.getElementById('viz1724703197137');
    var vizElement2 = divElement2.getElementsByTagName('object')[0];
    vizElement2.style.width = vizWidth + 'px';
    vizElement2.style.height = vizHeight + 'px';
    var scriptElement2 = document.createElement('script');
    scriptElement2.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement2.parentNode.insertBefore(scriptElement2, vizElement2);

    //Timeline
    const timelineData = [
        { title: 'Master of Science, Business Analytics', description: 'The University of Texas at Austin', date: 'July 2024 - May 2025' },
        { title: 'Sr. Data Analyst, Digital Channels', description: 'Banco de Bogota - Bogota, Colombia', date: 'Oct 2022 - Jul 2024' },
        { title: 'Jr. Data Analyst, Supply Chain & Warehouse Operations', description: 'Merqueo - Bogota, Colombia', date: 'Mar 2022 - Oct 2022' },
        { title: 'Bootcamp, Data Analysis & Visualization', description: 'The University of Texas at Austin - McCombs School of Business', date: 'December 2021 - July 2022' },
        { title: 'Business Intelligence Analyst', description: 'Puntos Colombia - Bogota, Colombia', date: 'June 2021 - Aug 2021' },
        { title: 'Business Intelligence Analyst', description: 'SoyYo, Servicios de Identidad Digital - Bogota, Colombia', date: 'June 2020 - Aug 2020' },
        { title: 'Bachelor of Science, Mathematics & Information Technology', description: 'The University of Texas at Tyler (Honors Program)', date: 'August 2017 - December 2021' }
    ];

    const timelineContainer = document.querySelector('.timeline');

    timelineData.forEach((event, index) => {
        const eventHTML = `
            <div class="timeline-event">
                <div class="timeline-content">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                    <span class="date">${event.date}</span>
                </div>
            </div>
        `;
        timelineContainer.innerHTML += eventHTML;
    });

    // Intersection Observer for triggering animations when in view
    const timelineEvents = document.querySelectorAll('.timeline-event');

    const observerOptions = {
        threshold: 0.3 // Trigger when 30% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Stop observing once the animation has been triggered
            }
        });
    }, observerOptions);

    timelineEvents.forEach(event => {
        observer.observe(event);
    });

    // Show the Overview tab by default
    document.getElementById('overview').classList.add('active');
    
});
