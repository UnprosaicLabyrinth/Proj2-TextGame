function win() {
    window.location.replace("win.html");
}

function randomBackground() {
    document.body.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
}

function over() {
    console.log("hello from over")
    if (sessionStorage.getItem("loss") == "true") {
        window.location.replace("loss.html")
    }
    if (sessionStorage.getItem("win") == "true") {
        window.location.replace("win.html")
    }
}