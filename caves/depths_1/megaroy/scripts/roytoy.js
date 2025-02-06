function generate() {
  const placeholder = document.getElementById('placeholder');
  placeholder.style.visibility = 'hidden';

  const regRoy = "img/megaroy/png/Megaroy.png"
  const paperRoy = "img/megaroy/png_withpaper/Final png.png"

  const inputText = document.getElementById('input').value.toUpperCase();
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const downloadButton = document.getElementById('download');
  
  canvas.innerHTML = "";

  const spaceWidth = 400;
  const font = document.getElementById('font').value;
  const colour = document.getElementById('colour').value;

  if (font == "paper")  {
    document.getElementById("megaroy").src=paperRoy;
  } else {
    document.getElementById("megaroy").src=regRoy;
  }

  //array
  const images = [];
  let totalWidth = 0;
  const baseHeight = 1000; 
  const wideFactor = 0.9;

  //load and calc dimensions
  function loadImages() { 
      count = 0;

      for (let i = 0; i < inputText.length; i++) {
          const char = inputText[i];
          imgSrc = '';

          //special char
          if (char === '.') {
            imgSrc = `img/font_roytoy/${font}/Zfullstop.png`;
            console.log("FS src: " + imgSrc)
          } else if (char === '?') {
            imgSrc = `img/font_roytoy/${font}/Zquestion.png`;
            console.log("QM src: " + imgSrc)
          } else if (char === '!') {
            imgSrc = `img/font_roytoy/${font}/Zexclamation.png`;
            console.log("EM src: " + imgSrc)
          } else if (/[A-Z]/.test(char)) { 
            imgSrc = `img/font_roytoy/${font}/${char}.png`;
            console.log("letter src: " + imgSrc)
          }
          if (/[A-Z!?.]/.test(char)) { 
              const img = new Image();
              img.src = imgSrc;
              img.onload = function() {
                  var isWideLetter = (char === 'W' || char === 'M');
                  var isFS = (char === '.');
              
                  //scale letter
                  var scale;
                  if (isWideLetter) {
                      scale = (baseHeight * wideFactor) / img.height;
                  } else if (isFS) {
                    scale = (baseHeight * 0.18) / img.height;
                  } else {
                      scale = baseHeight / img.height;
                  }
              
                  scaleW = img.width * scale;
                  scaleH = img.height * scale;
              
                  //add 2 array
                  images.push({ img: img, char: char, scaleW: scaleW, scaleH: scaleH });
                  totalWidth += scaleW;
              
                  count++;
              
                  //after images loaded draw
                  if (count === inputText.replace(/[^A-Z!?.]/g, '').length) { // Updated regex to include !, ?, and .
                      drawImages();
                  }
              };
          } else if (char === " ") {
              totalWidth += spaceWidth;
          }
      }
  }

  //draw images
  function drawImages() {
      //canvas dimensions
      canvas.width = totalWidth;
      canvas.height = baseHeight;

      //background color
      if (colour !== 'none') {
          ctx.fillStyle = colour;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      let x = 0;

      for (let i = 0; i < inputText.length; i++) {
          const char = inputText[i];

          if (/[A-Z!?.]/.test(char)) { 
              const imgObj = images.find((item) => item.char === char);
              if (imgObj) {
                  //vert align
                  const y = baseHeight - imgObj.scaleH;
                  ctx.drawImage(imgObj.img, x, y, imgObj.scaleW, imgObj.scaleH);
                  x += imgObj.scaleW; 
              }
          } else if (char === " ") {
              x += spaceWidth;
          }
      }
  }

  loadImages();
}
  
  //download function
  function downloadImage() {
    const canvas = document.getElementById('canvas'); 
    const link = document.createElement('a');
    link.download = 'yourwords_hisflesh.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }