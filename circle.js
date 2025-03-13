document.getElementById("circle-container").addEventListener("click", function(event) {
    // Create a new div element
    const circle = document.createElement("div");
    circle.classList.add("circle");
    
    // Set the size of the circle (you can change the size)
    const size = Math.random() * 50 + 20; // Random size between 20px and 70px
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    // Position the circle at the cursor click position
    circle.style.left = `${event.clientX - size / 2}px`;
    circle.style.top = `${event.clientY - size / 2}px`;

    // Append the circle to the container
    document.getElementById("circle-container").appendChild(circle);
});