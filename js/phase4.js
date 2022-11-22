function init() {
    document.getElementById("lives").textContent = `Lives: ${sessionStorage.getItem("lives4")}`
    if (sessionStorage.getItem("lives4") == "0") {
        window.location.replace("loss.html");
    }
}

function takeLife() {
    sessionStorage.setItem("lives4", sessionStorage.getItem("lives4") - 1)
    document.getElementById("lives").textContent = `Lives: ${sessionStorage.getItem("lives4")}`
}

function over() {
    if (sessionStorage.getItem("loss") == "true") {
        window.location.replace(loss.html)
    }
    if (sessionStorage.getItem("win") == "true") {
        window.location.replace(win.html)
    }
}