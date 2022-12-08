function showAlert() {
    alert("You're intruding!")
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