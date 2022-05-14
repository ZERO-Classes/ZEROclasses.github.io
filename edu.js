function about() {
    document.getElementById("about-us").style.display = "block";
    document.getElementById("contact-us").style.display = "none";
    document.getElementById("home-3000").style.display = "none";
}
function home() {
    document.getElementById("home-3000").style.display = "block";
    document.getElementById("about-us").style.display = "none";
    document.getElementById("contact-us").style.display = "none";
}
function contact() {
    document.getElementById("contact-us").style.display = "block";
    document.getElementById("about-us").style.display = "none";
    document.getElementById("home-3000").style.display = "none";
}
function back(){
    document.getElementById("contact-us").style.display = "block";
    document.getElementById("about-us").style.display = "block";
    document.getElementById("home-3000").style.display = "block";
}

document.getElementById("list").style.display = "none";

function burger(){
    document.getElementById("hamburger").classList.toggle('change');
    if(document.getElementById("list").style.display === "none")
    {
        document.getElementById("list").style.display = "block";
    }
    else if(document.getElementById("list").style.display === "block")
    {
        document.getElementById("list").style.display = "none"
    }
}

function theme() {
    let a = Math.floor(Math.random() * 10);
    if (a === 0) {
        document.getElementById("navigation").style.backgroundImage = "url('slight.avif')"
        document.getElementById("body").style.backgroundColor = "white"
        document.getElementById("body").style.color = "black";
        document.getElementById("education").style.backgroundColor = "#fe4066";
    }
    if (a === 1) {
        document.getElementById("navigation").style.backgroundImage = "url('nightlong.avif')"
        document.getElementById("body").style.backgroundColor = "rgb(0, 31, 3)"
        document.getElementById("body").style.color = "white";
        document.getElementById("education").style.backgroundColor = "#5d1926";
        document.getElementById("reserved").style.color = "white";
    }
    if (a === 2) {
        document.getElementById("navigation").style.backgroundImage = "url('extradark.avif')"
        document.getElementById("body").style.backgroundColor = "#1d2026"
        document.getElementById("body").style.color = "white";
        document.getElementById("education").style.backgroundColor = "#5d1926";
        document.getElementById("reserved").style.color = "white";
    }
    if (a === 3) {
        document.getElementById("navigation").style.backgroundImage = "url('darkest.avif')"
        document.getElementById("body").style.backgroundColor = "black"
        document.getElementById("body").style.color = "white";
        document.getElementById("education").style.backgroundColor = "#5d1926";
        document.getElementById("reserved").style.color = "white";
    }
    if (a === 4) {
        document.getElementById("navigation").style.backgroundImage = "url('hole.avif')"
        document.getElementById("body").style.backgroundColor = "black"
        document.getElementById("body").style.color = "white";
        document.getElementById("education").style.backgroundColor = "#5d1926";
        document.getElementById("reserved").style.color = "white";
    }
    if (a === 5) {
        document.getElementById("navigation").style.backgroundImage = "url('moonknight.avif')"
        document.getElementById("body").style.backgroundColor = "rgb(0, 1, 24)"
        document.getElementById("body").style.color = "white";
        document.getElementById("education").style.backgroundColor = "#5d1926";
        document.getElementById("reserved").style.color = "white";
    }
    if (a === 6) {
        document.getElementById("navigation").style.backgroundImage = "url('light.avif')"
        document.getElementById("body").style.backgroundColor = "rgb(225 193 225)"
        document.getElementById("body").style.color = "black";
        document.getElementById("education").style.backgroundColor = "#fe4066";
        document.getElementById("reserved").style.color = "black";
    }
    if (a === 7) {
        document.getElementById("navigation").style.backgroundImage = "url('sky2.avif')"
        document.getElementById("body").style.backgroundColor = "#e9d9e9"
        document.getElementById("body").style.color = "black";
        document.getElementById("education").style.backgroundColor = "#fe4066";
        document.getElementById("reserved").style.color = "black";
       
    }
    if (a === 8) {
        document.getElementById("navigation").style.backgroundImage = "url('sky5.avif')"
        document.getElementById("body").style.backgroundColor = "#1e2e36";
        document.getElementById("body").style.color = "white";
        document.getElementById("education").style.backgroundColor = "#5d1926";
        document.getElementById("reserved").style.color = "white";
    }
    if (a === 9) {
        document.getElementById("navigation").style.backgroundImage = "url('sky7.avif')"
        document.getElementById("body").style.backgroundColor = "#d9d9d9"
        document.getElementById("body").style.color = "black";
        document.getElementById("education").style.backgroundColor = "#fe4066";
        document.getElementById("reserved").style.color = "black";
    }
}

/*nightlong,extradark,darkest,hole and moonknight*/
//light,slight,sky2,sky5 and sky7

//document.getElementById("navigation").style.backgroundImage = "url('../image/slight.avif')"