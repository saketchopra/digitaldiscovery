function changeColor() {
    var bdColor = document.body.style.backgroundColor;
    if (bdColor == "" || bdColor == "transparent" || bdColor == "white") {
        bdColor = "black";
        document.body.style.backgroundColor = bdColor;
        document.body.style.color = "white";
        document.getElementById("musicHeadColor").style.backgroundColor = "#f8f8f";
        document.getElementById("musicHeadColor").style.backgroundColor = "#292929";
        document.getElementById("darkText").style.display = "none";
        document.getElementById("whiteText").style.display = "block";
        document.getElementById("dkBtn").style.backgroundColor = "white";
        document.getElementById("dkBtn").style.color = "black";
    } else {
        bdColor = "transparent";
        document.body.style.backgroundColor = bdColor;
        document.body.style.color = "black";
        document.getElementById("darkText").style.display = "block";
        document.getElementById("whiteText").style.display = "none";
        document.getElementById("dkBtn").style.backgroundColor = "black";
        document.getElementById("dkBtn").style.color = "white";
    }
}