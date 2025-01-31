document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.timeline-event').forEach(event => {
        // Extract the year from data-description (first 4 characters)
        let description = event.getAttribute('data-description');
        let year = description.substring(0, 4);

        // Find the corresponding <span> and insert the year
        let yearSpan = event.querySelector('.timeline-year');
        if (yearSpan) {
            yearSpan.textContent = year;
        }

        // Add hover effect (background color change)
        event.addEventListener('mouseover', () => {
            event.style.backgroundColor = '#6C5B7B';
        });
        event.addEventListener('mouseout', () => {
            event.style.backgroundColor = '#BAD8B6';
        });
    });
});


