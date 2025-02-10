let selectedImage = null;
let placedImages = {}; // Keeps track of placed images
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Select an image
document.querySelectorAll(".partSelect img").forEach(img => {
    img.addEventListener("click", function () {
        // Deselect previously selected image and reset borders to blue
        document.querySelectorAll(".partSelect img").forEach(img => {
            img.classList.remove("selected");
            if (img.classList.contains("placed")) {
                img.style.borderColor = "blue"; // Placed images should still have blue border
            }
        });

        // If the image is already selected and placed (blue border), change it to red
        if (selectedImage === this.src && this.classList.contains("placed")) {
            this.style.borderColor = "red"; // Change border to red
            selectedImage = this.src; // Re-select the image
        } else {
            // If it's a newly selected image, add the selected class and set border to red
            this.classList.add("selected");
            this.style.borderColor = "red";
            selectedImage = this.src;
        }
    });
});

// Handle SVG segment selection
function svgZone(segment) {
    console.log(segment)
    if (!selectedImage) return; // If no image is selected, do nothing

    // If this segment already has a placed image, reset its border and association
    if (placedImages[segment]) {
        // Find the previous placed image for this segment
        let prevImgElement = [...document.querySelectorAll(".partSelect img")].find(img => img.src === placedImages[segment]);
        if (prevImgElement) {
            prevImgElement.classList.remove("placed");
            prevImgElement.style.borderColor = "none"; // Reset the border of the previously placed image
        }
    }

    // Find the image element that matches the selected image
    let selectedImgElement = [...document.querySelectorAll(".partSelect img")].find(img => img.src === selectedImage);
    if (!selectedImgElement) return;

    // Store the selection
    placedImages[segment] = selectedImage;

    // Update the image appearance
    selectedImgElement.classList.remove("selected");
    selectedImgElement.classList.add("placed");
    selectedImgElement.style.borderColor = "blue"; // Set border to blue after placing

    // Reset selectedImage
    selectedImage = null;

    // Update the canvas
    updateCanvas();
}

// Update the canvas with placed images
function updateCanvas() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw each placed image on the canvas
    for (let segment in placedImages) {
        let img = new Image();

        // Modify the image source to point to the "forCanvas" directory
        let forCanvasPath = placedImages[segment].replace('img/puzzleroy/pieces/', 'img/puzzleroy/pieces/forCanvas/');
        img.src = forCanvasPath;

        img.onload = () => {
            // Apply transformations based on the segment
            let transform = getTransformForSegment(segment);
            ctx.save();
            ctx.translate(transform.x, transform.y);
            ctx.rotate(transform.rotation);
            ctx.scale(transform.scaleX, transform.scaleY);
            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
            ctx.restore();
        };
    }
}


// Define transformations for each segment
function getTransformForSegment(segment) {
    const transforms = {
        "H": { x: 180, y: 10, rotation: 0.03, scaleX: 0.21, scaleY: 0.21 },
        "LH": { x: 180, y: 120, rotation: 1.6, scaleX: 0.11, scaleY: 0.11 },
        "LE": { x: 80, y: 140, rotation: 1.6, scaleX: 0.1, scaleY: 0.1 },
        "LA": { x: 70, y: 240, rotation: -1.5, scaleX: 0.075, scaleY: 0.075 },
        "LAP": { x: 130, y: 200, rotation: 0.03, scaleX: 0.08, scaleY: 0.08 },
        "RH": { x: 80, y: 240, rotation: 0.05, scaleX: 0.11, scaleY: 0.11 },
        "LT": { x: 120, y: 300, rotation: 0.09, scaleX: 0.09, scaleY: 0.09 },
        "LTH": { x: 105, y: 395, rotation: 0.15, scaleX: 0.1, scaleY: 0.1 },
        "LL1": { x: 55, y: 455, rotation: -0.14, scaleX: 0.105, scaleY: 0.105 },
        "LL2": { x: 70, y: 550, rotation: -0.2, scaleX: 0.1, scaleY: 0.1 },
        "LF": { x: 150, y: 630, rotation: 1.45, scaleX: 0.11, scaleY: 0.11 },
        "RF": { x: 380, y: 630, rotation: 1.65, scaleX: 0.13, scaleY: 0.13 },
        "RL": { x: 245, y: 500, rotation: -0.05, scaleX: 0.12, scaleY: 0.12 },
        "RTH": { x: 330, y: 460, rotation: 2, scaleX: 0.11, scaleY: 0.11 },
        "C": { x: 240, y: 430, rotation: 1.65, scaleX: 0.11, scaleY: 0.11 },
        "RA2": { x: 175, y: 325, rotation: 0.04, scaleX: 0.11, scaleY: 0.11 },
        "RE": { x: 240, y: 330, rotation: 0.04, scaleX: 0.11, scaleY: 0.11 },
        "RA1": { x: 300, y: 250, rotation: 0.05, scaleX: 0.11, scaleY: 0.11 },
        "RS": { x: 345, y: 215, rotation: 1.65, scaleX: 0.11, scaleY: 0.11 },
        "RT": { x: 278, y: 270, rotation: 1.6, scaleX: 0.09, scaleY: 0.09 },
        
    };
    return transforms[segment] || { x: 0, y: 0, rotation: 0, scaleX: 1, scaleY: 1 };
}

// Check if the player wins
document.querySelector(".gestate button").addEventListener("click", function () {
    let correctCount = 0;
    let totalSegments = Object.keys(correctMap).length;

    for (let segment in correctMap) {
        // Compare the correct image to the placed image without base URL or query params
        let correctImagePath = correctMap[segment].split('/').pop();  // Get the filename only
        let placedImagePath = placedImages[segment] ? placedImages[segment].split('/').pop() : '';

        // Log to see the paths being compared
        console.log(`Checking segment: ${segment}, placed: ${placedImagePath}, correct: ${correctImagePath}`);

        if (placedImagePath === correctImagePath) {
            correctCount++;
        }
    }

    if (correctCount >= 5) {
        alert("You win!");
    } else {
        alert("You lose!");
    }
    downloadImage();
});

  //download function
  function downloadImage() {
    const canvas = document.getElementById('canvas'); 
    const link = document.createElement('a');
    link.download = 'whathaveyoumade.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

const correctMap = {
    "H": "img/puzzleroy/pieces/20.png",
    "LH": "img/puzzleroy/pieces/17.png",
    "LE": "img/puzzleroy/pieces/19.png",
    "LA": "img/puzzleroy/pieces/16.png",
    "LAP": "img/puzzleroy/pieces/6.png",
    "RS": "img/puzzleroy/pieces/10.png",
    "RA1": "img/puzzleroy/pieces/12.png",
    "RE": "img/puzzleroy/pieces/8.png",
    "RTH": "img/puzzleroy/pieces/7.png",
    "RL": "img/puzzleroy/pieces/11.png",
    "RF": "img/puzzleroy/pieces/4.png",
    "LF": "img/puzzleroy/pieces/3.png",
    "LL2": "img/puzzleroy/pieces/18.png",
    "LL1": "img/puzzleroy/pieces/14.png",
    "LTH": "img/puzzleroy/pieces/5.png",
    "C": "img/puzzleroy/pieces/2.png",
    "RA2": "img/puzzleroy/pieces/15.png",
    "LT": "img/puzzleroy/pieces/9.png",
    "RT": "img/puzzleroy/pieces/1.png",
    "RH": "img/puzzleroy/pieces/13.png",
};