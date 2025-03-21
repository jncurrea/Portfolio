document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');
    const timelineEvents = document.querySelectorAll('.timeline2 .container2');
    const typingTextElement = document.getElementById("typing-text");
    
    // ✅ Ensure the "Overview" tab is active by default
    document.getElementById('overview').classList.add('active');

    // ✅ Typing Effect for "Who am I?"
    if (typingTextElement) {  // Ensures the element exists before running the script
        const text = `I'm Jose Nicolas Currea, born and raised in Bogota, Colombia. Grew up playing tennis and soccer with one clear goal: become a pro in either of the two.
        After a few years, my goals changed and I started thinking about going to the US for college. In 2017, this dream became a reality, and I got a scholarship to play DII tennis at The University of Texas at Tyler.
        In Tyler, I ended up pursuing a Bachelor of Science in Mathematics & Information Technology, where I discovered my passion for data analytics and data science.

        In a more professional context, I am a data enthusiast with a strong foundation in Mathematics, Information Technology, and Business Analytics. 
        I've developed my skills across industries like banking and online retail, where I've built predictive models, optimized processes, and created clear, actionable insights that drive real business outcomes.
        I am a great team player (both on and off the tennis court) and work well in both team and individual settings.
        I'm passionate about using data to solve problems and thrive in roles where I can bridge the gap between technical details and strategic decisions.

        Looking ahead, I’m excited to continue growing in advanced analytics and leadership, using data to make a meaningful impact in a forward-thinking organization.
        My ultimate goal is to keep on climbing the ladder of success in the data field and get to work with my two passions: data and sports.`;
        let index = 0;
        const speed = 40; // Typing speed in milliseconds

        function typeWriter() {
            if (index < text.length) {
                typingTextElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, speed);
            }
        }

        typeWriter(); // Run the typing effect ONCE on page load
    }

    // ✅ Smooth scroll & active tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.getElementById(this.dataset.tab);

            if (target) {
                // Remove active class from all content
                contents.forEach(content => content.classList.remove('active'));
                // Add active class to selected content
                target.classList.add('active');

                // Smooth scrolling
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ✅ Intersection Observer for Experience Timeline animations
    if (timelineEvents.length > 0) {
        const observerOptions = { threshold: 0.3 }; // Trigger when 30% of the element is visible

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target); // Stop observing once triggered
                }
            });
        }, observerOptions);

        timelineEvents.forEach(event => observer.observe(event));
    }
});

