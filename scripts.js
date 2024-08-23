console.clear();
const button = document.getElementById('surprise');

button.addEventListener('click', () => {
    setTimeout(() => {
        alert('Surprise! Your page has been reorganized!');
        document.getElementById('about').removeChild(button);
        
        const exp = document.getElementById('experience');
        const courses = document.getElementById('courses');
        const about = document.getElementById('about');
        const hr = document.querySelector('hr');
        
        // reorder the page
        document.body.removeChild(exp);
        document.body.removeChild(courses);
        document.body.removeChild(about);

        document.body.appendChild(exp);
        document.body.appendChild(courses);
        document.body.appendChild(about);

        let opacity = 1;
        const opacityInterval = setInterval(() => {
            opacity -= 0.1
            document.body.style.opacity = opacity;
            if (opacity <= 0.3) {
                clearInterval(opacityInterval);
                alert('Just kidding! Your page has been restored!');
                document.body.style.opacity = 1;

                // restore the page
                document.body.removeChild(exp);
                document.body.removeChild(courses);
                document.body.removeChild(about);

                about.insertBefore(button, about.firstChild);
                document.body.appendChild(about);
                document.body.appendChild(courses);
                document.body.appendChild(exp);
            }
        }, 1000);
    }, 5000);
});