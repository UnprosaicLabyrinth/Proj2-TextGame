function init() {
    sessionStorage.setItem("phase1", false);
    console.log(sessionStorage.getItem("phase1"));
}

let img3 = 1;
function joker3Handler() {
    console.log(sessionStorage.getItem("phase1"))
    if (sessionStorage.getItem("phase1") == null) {
        if (img3 == 0) {
            document.getElementById("joker3Img").src = "images/0B.jpeg";
            img3 = 1;
        } else if (img3 == 1) {
            document.getElementById("joker3Img").src = "images/joker.jpg";
            img3 = 0;
        }
    } else {
        if (img3 == 1) {
            document.getElementById("joker3Img").src = "images/joker.jpg";
            img3 = 0;
        } else if (img3 == 0) {
            document.getElementById("joker3Img").src = "images/14H.jpeg";
            img3 = 2;
        } else {
            document.getElementById("joker3Img").src = "images/joker.jpg";
            //img3 = 2;
        }
    }
}

let img1 = 1;
function joker1Handler() {
    if (sessionStorage.getItem("phase1") == null) {
        if (img1 == 0) {
            document.getElementById("joker1Img").src = "images/0B.jpeg";
            img1 = 1;
        } else if (img1 == 1) {
            document.getElementById("joker1Img").src = "images/joker.jpg";
            img1 = 0;
        }
    } else {
        if (img1 == 1) {
            document.getElementById("joker1Img").src = "images/joker.jpg";
            img1 = 0;
        } else if (img1 == 0) {
            document.getElementById("joker1Img").src = "images/14S.jpeg";
            img1 = 2;
        } else {
            document.getElementById("joker1Img").src = "images/joker.jpg";
            img1 = 2;
        }
    }
}

let img2 = 1;
function joker2Handler() {
    if (sessionStorage.getItem("phase1") == null) {
        if (img2 == 0) {
            document.getElementById("joker2Img").src = "images/0B.jpeg";
            img2 = 1;
        } else if (img2 == 1) {
            document.getElementById("joker2Img").src = "images/joker.jpg";
            img2 = 0;
        }
    } else {
        if (img2 == 1) {
            document.getElementById("joker2Img").src = "images/joker.jpg";
            img2 = 0;
        } else if (img2 == 0) {
            document.getElementById("joker2Img").src = "images/14D.jpeg";
            img2 = 2;
        } else {
            document.getElementById("joker2Img").src = "images/joker.jpg";
            //img2 = 2;
        }
    }
}

function changeColor(id) {
    document.getElementById(id).style.color = "purple"
}

function updatePhaseVar() {
    sessionStorage.setItem("phase1", true);
}

function over() {
    if (sessionStorage.getItem("loss") == "true") {
        window.location.replace(loss.html)
    }
    if (sessionStorage.getItem("win") == "true") {
        window.location.replace(win.html)
    }
}