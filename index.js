const btnGenerate = document.querySelector("#btn-gnrt");
const mainSection = document.querySelector("#section-main");

mainSection.style.display = "none";

btnGenerate.addEventListener("click", colorGenerate);


function colorGenerate() {
    mainSection.style.display = "grid";
    for (let i = 1; i <= 5; i++) {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        let redString = red.toString(16);
        let greenString = green.toString(16);
        let blueString = blue.toString(16);

        if(redString.length < 2) {
           redString =  redString.padStart(2, '0');
        }
        if(greenString.length < 2) {
           greenString =  greenString.padStart(2, '0');
        }
        if(blueString.length < 2) {
           blueString = blueString.padStart(2, '0');
        }

        let hexValue = redString + greenString + blueString;

        let containerClass = ".container-" + i.toString();
        let hexOutputClass = ".hex-output-" + i.toString();
        let rgbOutputClass = ".rgb-output-" + i.toString();

        document.querySelector(containerClass).style.backgroundColor = `rgb(${red},${green},${blue})`;
        document.querySelector(hexOutputClass).innerText = "#" + hexValue;
        document.querySelector(rgbOutputClass).innerText = `rgb(${red},${green},${blue})`;
    }
}