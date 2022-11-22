function changeColor() {
    document.getElementById("title").style.color = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`
}

function over() {
    if (sessionStorage.getItem("loss") == "true") {
        window.location.replace(loss.html)
    }
    if (sessionStorage.getItem("win") == "true") {
        window.location.replace(win.html)
    }
}