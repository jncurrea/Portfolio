document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');
    const timelineEvents = document.querySelectorAll('.timeline2 .container2');
    const typingTextElement = document.getElementById("typing-text");
    
    // ✅ Ensure the "Overview" tab is active by default
    document.getElementById('overview').classList.add('active');

    // ✅ Typing Effect for "Who am I?"
    if (typingTextElement) {  // Ensures the element exists before running the script
        const text = `Hi, I'm Jose Nicolas Currea — born and raised in Bogotá, Colombia. 🇨🇴
                    I grew up playing tennis and soccer, with one goal: becoming a pro athlete. 🎾⚽
                    Over time, my goals evolved. In 2017, I moved to the U.S. on a tennis scholarship at UT Tyler. 🧳
                    There, I earned a B.S. in Mathematics & Information Technology — and found my passion for data. 💡📊
                    Since then, I’ve worked in banking and online retail — building models, optimizing processes, and delivering data-driven insights. 📈💼
                    I’m a team player (on and off the court), and I love solving real problems where tech meets strategy. 🧠🤝
                    Now, I’m pursuing an MS in Business Analytics at UT Austin, growing in leadership and advanced analytics. 🎓🔍
                    My mission? To make an impact at the intersection of **data and sports** — my two biggest passions. 🚀🏟️`;
        let index = 0;
        const speed = 20;

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

    // ✅ Experience Slider (Carousel) Code
    // Make sure your HTML for the Experience section uses .experience-slider, .cards-wrapper, etc.
    const wrapper = document.querySelector('.cards-wrapper');
    const cards = document.querySelectorAll('.experience-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
  
    let currentIndex = 0;
    const totalCards = cards.length;
  
    function showCard(index) {
      wrapper.style.transform = `translateX(-${index * 100}%)`;
    }
  
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      showCard(currentIndex);
    });
  
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalCards;
      showCard(currentIndex);
    });
  
    showCard(currentIndex); // Show the first card initially
});

