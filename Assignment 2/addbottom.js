// Step 3: Add 2 buttons to change image and description in the gallery section.
// Use var function to define variable getElementById, make sure to define the myclick function correctly.
document.addEventListener("DOMContentLoaded", () => {
    function changeImage(imageSrc, description, link) {
        const mainImage = document.getElementById("mainImage");
        const descriptionElement = document.getElementById("description");

        mainImage.src = imageSrc;
        descriptionElement.innerHTML = `"${description}" is licensed under CC BY-SA 2.0. To view a copy of this license, visit <a href="${link}">this link</a>.`;
    }
    // Write function toggleTheme() to change different colot theme.
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem('theme', newTheme);
    }

    document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
    //Step 6: Write function applyStoredTheme() to read the theme preferences from local storage, then apply it when the pages loads on html.
    function applyStoredTheme() {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            document.documentElement.setAttribute("data-theme", storedTheme);
        }
    }
    //Step4: Display the current date and time with function updateTime
    function updateTime() {
        document.getElementById('dateTime').innerText = new Date().toLocaleString();
    }
    // Call updateTime function.
    updateTime();
    // Update time dynamically
    setInterval(updateTime, 1000);

    // Write the submit form 
    function submitForm(event) {
        event.preventDefault();
        const userName = document.getElementById('userName').value;
        window.location.search = `?userName=${userName}`;
    }

    document.getElementById('nameForm').addEventListener('submit', submitForm);

    // Call defined functions.
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    displayGreeting();
    // Call updateTime function.
    updateTime();
    // Update time dynamically
    setInterval(updateTime, 1000);
    //Step5: Create dynamic update heading
    //Write the displayGreeting function for searching in html web.
    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return params.get('username')
    }
    // update the heading with the user's name dynamically.
    function updateHeading() {
        const userName = getQueryParams();
        if (userName) {
            const header = document.getElementById('header');
            header.innerText = `Hello, ${userName}`;
        }
    }

    window.onload = function(){
        applyStoredTheme();
        updateHeading();
    };

    applyStoredTheme();
    updateHeading();
}); 
