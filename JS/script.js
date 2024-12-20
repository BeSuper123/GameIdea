function greet () {
    alert("hello world")
}

function keyPressed () {
    // Listen for keyboard input
    document.addEventListener('keydown', function(event) {
        // Display the key pressed
        document.getElementById('output').textContent = 'You pressed: ' + event.key;
    });
}

function moveBox () {
    // Initial position in pixels
    var x = 50;
    var y = 200;

    // Event listener for keydown
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                y -= 4; // Move up
                break;
            case 'ArrowDown':
                y += 4; // Move down
                break;
            case 'ArrowLeft':
                x -= 4; // Move left
                dino.style.transform = 'scaleX(-1)'; /* Flips the div horizontally */
                break;
            case 'ArrowRight':
                x += 4; // Move right
                dino.style.transform = 'scaleX(1)'; /* Flips the div horizontally */
                break;
            default:
                return; // Ignore other keys
        }

        // Update the dino position
        dino.style.top = `${y}px`;
        dino.style.left = `${x}px`;
    });
}

// Call the keyPressed function to activate the listener
keyPressed()
moveBox()
