function change(){
    let next;
    switch (current) {
        case 1:
            next = image2;
            current = 2;
            break;
        case 2:
            next = image3;
            current = 3;
            break;
        case 3:
            next = image1;
            current = 1;
            break;
    }
    changeImage(next)
}

let current = 1;

const image1 = "sheer bolt.jpg";

const image2 = "sheer bolt2.jpg";

const image3 = "sheer bolt3.jpg";

function changeImage(a) {
    document.getElementById("cat").src=a;
}