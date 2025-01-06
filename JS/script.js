function greet () {
    alert("Get Ready to Play!")
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
        if (x >= 0 && y >= 0 && x <= 1500 && y <= 700) {
            switch (event.key) {
                case 'ArrowUp':
                case 'W':
                case 'w':

                    y -= 4; // Move up
                    break;
                case 'ArrowDown':
                case 'S':
                case 's':
                    y += 4; // Move down
                    break;
                case 'ArrowLeft':
                case 'A':
                case 'a':
                    x -= 4; // Move left
                    dino.style.transform = 'scaleX(-1)'; /* Flips the div horizontally */
                    break;
                case 'ArrowRight':
                case 'D':
                case 'd':
                    x += 4; // Move right
                    dino.style.transform = 'scaleX(1)'; /* Flips the div horizontally */
                    break;
                default:
                    return; // Ignore other keys
            
            }
        } else {
            x = 50
            y = 200
        }

        // Update the dino position
        dino.style.top = `${y}px`;
        dino.style.left = `${x}px`;

    });
}

// Call the keyPressed function to activate the listener
keyPressed()
moveBox()
