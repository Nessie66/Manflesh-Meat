window.onload = function() {
    let h1 = document.getElementsByTagName("h1")[0];
    console.log(localStorage.getItem("qScore"))
    let score = localStorage.getItem("qScore");
    h1.innerHTML = score;
}