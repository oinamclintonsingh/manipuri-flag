function toggleDescription(color) {
    const colorDiv = document.querySelector(`.${color}`);
    const isExpanded = colorDiv.classList.contains('expanded');
    const descriptions = document.querySelectorAll('.wakhanthok');

    // Hide all descriptions and collapse all color divs
    descriptions.forEach(wakhanthok => {
        wakhanthok.parentElement.classList.remove('expanded');
    });

    // If the clicked color div was not expanded, expand it and show its description
    if (!isExpanded) {
        colorDiv.classList.add('expanded');
    }
}

// Add an event listener to the document to handle clicks outside the expanded area
document.addEventListener('click', function(event) {
    const expandedDiv = document.querySelector('.ka-khal.expanded');
    if (expandedDiv && !expandedDiv.contains(event.target)) {
        expandedDiv.classList.remove('expanded');
    }
});

// ********************************************

// *****************************************
// Khonthok
let currentAudio = null;

document.querySelectorAll(".khonjel").forEach(button => {
    button.addEventListener("click", function() {
        // Find the parent wakhanthok element
        const wakhanthokDiv = this.closest(".wakhanthok");
        // Get the id of the wakhanthok element
        const colorId = wakhanthokDiv.id;
        // Stop the currently playing sound and play the new one
        makeSound(colorId);
    });
});

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
});

function makeSound(colorId) {
    // Stop the current audio if it is playing
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset playback position to the start
    }

    // Create a new audio object based on the colorId
    switch (colorId) {
        case "red":
            currentAudio = new Audio("/assets/sounds/01_Mangang_01.mp3");
            break;

        case "white":
            currentAudio = new Audio("/assets/sounds/02_Luwang_01.mp3");
            break;

        case "black":
            currentAudio = new Audio("/assets/sounds/03_Khuman_01.mp3");
            break;

        case "yellow":
            currentAudio = new Audio("/assets/sounds/04_Angom_01.mp3");
            break;

        case "red-black":
            currentAudio = new Audio("/assets/sounds/05_Moirang_01.mp3");
            break;

        case "purple":
            currentAudio = new Audio("/assets/sounds/06_Khaba-Nganba_01.mp3");
            break;

        case "sky-blue":
            currentAudio = new Audio("/assets/sounds/07_Salai-Leishangthem_01.mp3");
            break;

        default:
            console.log("No sound mapped for:", colorId);
            return; // Exit the function if no sound is mapped
    }

    // Play the new audio
    currentAudio.play();
}


// ********************************************
// Pointer
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const firanElements = document.querySelectorAll('.firan');

let timeout;
window.addEventListener('scroll', () => {
    firanElements.forEach(firanElement => {
        const colorRepresentation = firanElement.querySelector('.wakhanthok');
        const pointerIcon = firanElement.querySelector('.pointer-icon');
        
        if (isElementInViewport(colorRepresentation)) {
            pointerIcon.classList.add('visible');
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                pointerIcon.classList.remove('visible');
            }, 1000); // Adjust as needed
        } else {
            pointerIcon.classList.remove('visible');
        }
    });
});


