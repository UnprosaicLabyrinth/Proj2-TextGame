function init() {
    sessionStorage.setItem("lives3", 3);
    sessionStorage.setItem("lives4", 3);
    if (sessionStorage.getItem("phase2") == "true") {
        console.log(sessionStorage.getItem("phase2"))
        document.getElementById("message1").textContent = "So you got Phase 2";
        document.getElementById("message2").textContent = "Try this one.";
    }
}

function changePhase() {
    if (sessionStorage.getItem("phase2") == "true") {
        window.location.replace("phase3.html");
    }
}

function over() {
    if (sessionStorage.getItem("loss") == "true") {
        window.location.replace(loss.html)
    }
    if (sessionStorage.getItem("win") == "true") {
        window.location.replace(win.html)
    }
}