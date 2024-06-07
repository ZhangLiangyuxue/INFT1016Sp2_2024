// Step 3: Add 2 buttons to change image and description in the gallery section.
document.addEventListener("DOMContentLoaded", function() {
    // Write the basic information for robot and binary.
    const imageInfo = {
        robot: {
            src: "robot.jpeg",
            description: '"Robot at the British Library Science Fiction Exhibition" by BadgerGravling is licensed under CC BY-SA 2.0. To view a copy of this license, visit https://openverse.org/image/19818e1d-d0ee-429f-99ba-1c7fb7740808?q=robots.',
            alt: "A robot"
        },
        binary: {
            src: "Binary code.jpeg",
            description: '"Binary code background on blue digital screen. Nubmers one and zero." by Martin Vorel is licensed under CC0 - Public Domain license & Royalty free. To view a copy of license, visit https://libreshot.com/binary-code/.',
            alt: "A long binary string"
        }
    }});

    // Create the window function to change the image, make sure to define the changeImage function correctly.
    window.changeImage = function(imageKey) {
        const image = document.getElementById("displayedImage");
        const description = document.getElementById("imageDescription");

        if (imageInfo[imageKey]) {
            image.src = imageInfo[imageKey].src;
            image.alt = imageInfo[imageKey].alt;
            description.innerHTML = imageInfo[imageKey].description;
        }
    };

    // Set default image
    changeImage('robot.jpeg')

    const themeToggleBtn = document.getElementById("themeToggleBtn");
    themeToggleBtn.addEventListener("click", function() {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
    });

    function displayDateTime() {
        const now = new Date();
        const dateTimeString = now.toLocaleString();
        document.getElementById("dateTime").textContent = dateTimeString;
    }

    displayDateTime();