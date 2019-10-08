
document.addEventListener("DOMContentLoaded", main);

function main() {
    document.getElementById("calculator").addEventListener("input", calculate);
}

function calculate(event) {
    let tv = null;
    let aspectRatio = document.getElementById("aspectRatio").value;
    if (event.target.id === "height") {
        tv = new TV(null,event.target.value,aspectRatio);
        document.getElementById("width").value = tv.largestWidthFromHeight;
        document.getElementById("maxsizeOfTv").innerHTML = `Largest TV to buy: ${tv.maxInchesForTv}`
    } 
    else if (event.target.id === "width") {
        tv = new TV(event.target.value,null,aspectRatio);
        document.getElementById("height").value = tv.largestHeightFromWidth;
        document.getElementById("maxsizeOfTv").innerHTML = `Largest TV to buy: ${tv.maxInchesForTv}`
    }
}