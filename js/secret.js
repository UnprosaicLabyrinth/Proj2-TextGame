function init() {
    if (sessionStorage.getItem("phase3") != "true") {
        sessionStorage.setItem("lives3", 3);
    }
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
        window.sessionStorage.setItem("phase3",  true);
    }
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