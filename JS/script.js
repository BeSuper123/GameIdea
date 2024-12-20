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
                y -= 2; // Move up
                break;
            case 'ArrowDown':
                y += 2; // Move down
                break;
            case 'ArrowLeft':
                x -= 2; // Move left
                break;
            case 'ArrowRight':
                x += 2; // Move right
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