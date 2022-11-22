function showAlert() {
    alert("You're intruding!")
}

function over() {
    if (sessionStorage.getItem("loss") == "true") {
        console.log(sessionStorage.getItem("loss"))
        window.location.replace(loss.html)
    }
    if (sessionStorage.getItem("win") == "true") {
        window.location.replace(win.html)
    }
}