const btnGenerate = document.querySelector("#btn-gnrt");

btnGenerate.addEventListener("click", colorGenerate);

function colorGenerate() {
    for (const i = 1; i <= 5; i++) {
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);

        //var hexValue = red.toString(16) + green.toString(16) + blue.toString(16);

        let containerId = "container-" + i.toString();
        //const hexOutputId = "hex-output-" + i.toString();
        //const rgbOutputId = "rgb-output-" + i.toString();

        document.getElementsByClassName(containerId).style.backgroundColor = `rgb(${red},${green},${blue})`;
    }
}