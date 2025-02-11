const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const svgElement = document.querySelector('svg');

//scaling factor for res
const scaleFactor = 2;

//original size for transforms
const originalWidth = 382.5;
const originalHeight = 719.5;

let selectedImage = null;
let placedImages = {}; 

const partSelectImgs = document.querySelectorAll(".partSelect img");

//resize canvas
function resizeCanvas() {
    //svg size
    const svgRect = svgElement.getBoundingClientRect();
    const svgWidth = svgRect.width;
    const svgHeight = svgRect.height;

    canvas.style.width = `${svgWidth}px`;
    canvas.style.height = `${svgHeight}px`;

    //internal res
    canvas.width = svgWidth * scaleFactor;
    canvas.height = svgHeight * scaleFactor;

    //reset and scale
    ctx.setTransform(1, 0, 0, 1, 0, 0); 
    ctx.scale(scaleFactor, scaleFactor);

    updateCanvas();
}

resizeCanvas();

window.addEventListener('resize', resizeCanvas);

//Image select
partSelectImgs.forEach(img => {
    img.addEventListener("click", function () {
        partSelectImgs.forEach(img => {
            img.classList.remove("selected");
            if (img.classList.contains("placed")) {
                img.style.borderColor = "blue"; 
            }
        });

        //border red
        if (selectedImage === this.src && this.classList.contains("placed")) {
            this.style.borderColor = "red"; 
            selectedImage = this.src; 
        } else {
            this.classList.add("selected");
            this.style.borderColor = "red";
            selectedImage = this.src;
        }
    });
});

//SVG zone
function svgZone(segment) {
    if (!selectedImage) return; //do nothing

    //already placed image
    if (placedImages[segment]) {
        let prevImgElement = [...partSelectImgs].find(img => img.src === placedImages[segment]);
        if (prevImgElement) {
            prevImgElement.classList.remove("placed");
            prevImgElement.style.borderColor = "none";
        }
    }

    let selectedImgElement = [...partSelectImgs].find(img => img.src === selectedImage);
    if (!selectedImgElement) return;

    //store selection
    placedImages[segment] = selectedImage;

    //update image border
    selectedImgElement.classList.remove("selected");
    selectedImgElement.classList.add("placed");
    selectedImgElement.style.borderColor = "blue"; 

    selectedImage = null;

    updateCanvas();
}

//canvas update
function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //scale factors
    const svgRect = svgElement.getBoundingClientRect();
    const scaleX = svgRect.width / originalWidth;
    const scaleY = svgRect.height / originalHeight;

    for (let segment in placedImages) {
        let img = new Image();
        let forCanvasPath = placedImages[segment].replace('img/puzzleroy/pieces/', 'img/puzzleroy/pieces/forCanvas/');
        img.src = forCanvasPath;

        img.onload = () => {
            let transform = getTransformForSegment(segment, scaleX, scaleY);

            ctx.save();
            ctx.translate(transform.x, transform.y);
            ctx.rotate(transform.rotation);
            ctx.scale(transform.scaleX, transform.scaleY);
            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
            ctx.restore();
        };
    }
}

//transformations
function getTransformForSegment(segment, scaleX, scaleY) {
    const baseTransforms = {
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
        "heart": { x: 190, y: 220, rotation: 0.04, scaleX: 0.14, scaleY: 0.14 },
    };

    let base = baseTransforms[segment] || { x: 0, y: 0, rotation: 0, scaleX: 1, scaleY: 1 };

    return {
        x: base.x * scaleX,
        y: base.y * scaleY,
        rotation: base.rotation,
        scaleX: base.scaleX * scaleX,
        scaleY: base.scaleY * scaleY,
    };
}

//win conditions
document.querySelector(".gestate button").addEventListener("click", function () {
    let correctCount = 0;
    let totalSegments = Object.keys(correctMap).length;
    let heart = false;

    for (let segment in correctMap) {
        let correctImagePath = correctMap[segment].split('/').pop();  
        let placedImagePath = placedImages[segment] ? placedImages[segment].split('/').pop() : '';
        
        if (placedImagePath === correctImagePath) {
            correctCount++;
            
            if (segment === "heart" && placedImagePath === "heart.png") {
                heart = true;
            }
        }
    }

    if (correctCount >= 3) {
        localStorage.setItem("win", "1");
        localStorage.setItem("lose", "0");
        if (heart) {
            localStorage.setItem("heart", "1");
        }
        window.location.href = 'abominations/gestating.html';
    } else {
        localStorage.setItem("lose", "1");
        localStorage.setItem("win", "0");
        window.location.href = 'abominations/gestating.html';
    }
});


//download function
function downloadImage() {
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
    "heart": "img/puzzleroy/pieces/heart.png",
};
