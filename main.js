document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');

    // Smooth scroll and show active tab content
    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.getElementById(this.dataset.tab);

            // Remove active class from all content
            contents.forEach(content => content.classList.remove('active'));
            // Add active class to selected content
            target.classList.add('active');

            // Smooth scrolling
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Intersection Observer for Experience Timeline animations
    const timelineEvents = document.querySelectorAll('.timeline2 .container2');

    const observerOptions = {
        threshold: 0.3 // Trigger when 30% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Stop observing once triggered
            }
        });
    }, observerOptions);

    timelineEvents.forEach(event => {
        observer.observe(event);
    });

    // Show the Overview tab by default
    document.getElementById('overview').classList.add('active');
});
