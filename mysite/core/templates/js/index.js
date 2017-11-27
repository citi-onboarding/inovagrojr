function myFunction() {
    var x = document.getElementById("inicio");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}