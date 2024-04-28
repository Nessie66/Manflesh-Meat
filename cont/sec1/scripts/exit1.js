
// pages
const pages = [
    "img/misc/beefeater/beefeater.html",
    "img/misc/birdy/birdy.html",
    "img/misc/cat/cat.html",
    "img/misc/chickenhunt/chickenhunt.html",
    "img/misc/down/down.html",
    "img/misc/drum/drum.html",
    "img/misc/gutless/gutless.html",
    "img/misc/idontwannaknow/idontwannaknow.html",
    "img/misc/iwonteat/iwonteat.html",
    "img/misc/jenko/jenko.html",
    "img/misc/lackofbalance/lackofbalance.html",
    "img/misc/orlok/orlok.html",
    "img/misc/volatileshore/volatileshore.html",
    "img/misc/waybacktothecar/waybacktothecar.html",
    "img/misc/wheel/wheel.html",
    "img/misc/wolf/wolf.html",
    "img/misc/wrong/wrong.html"
];

function guts(){
    console.log("guts")
    const randomIndex = Math.floor(Math.random() * (17 - 1 + 1) + 1);
    const randomPage = pages[randomIndex];
    setTimeout(function(){ window.location.href = randomPage; }, 1000);
}
