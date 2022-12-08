function init() {
    console.log(sessionStorage.getItem("lives3"));
    document.getElementById("lives").textContent = `Lives: ${sessionStorage.getItem("lives3")}`
    if (sessionStorage.getItem("lives3") == "0") {
        window.location.replace("loss.html");
    }
}

function takeLife() {
    sessionStorage.setItem("lives3", sessionStorage.getItem("lives3") - 1)
    document.getElementById("lives").textContent = `Lives: ${sessionStorage.getItem("lives3")}`
    if (sessionStorage.getItem("lives3") == "0") {
        window.location.replace("loss.html");
    }
}

function changePhase() {
    window.location.replace("phase4.html");
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
