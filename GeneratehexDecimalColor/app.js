window.onload = () => {
    main();
}

function main() {
    const body = document.querySelector('body');
    const copyBtn = document.getElementById('copy-btn'); // corrected method name
    const output = document.getElementById('output');
    const changeBtn = document.getElementById('change-color');

   changeBtn.addEventListener('click', function () {
        const bgcolor = generateRgbColor();
        body.style.background = bgcolor;
        output.value = bgcolor
   });
    copyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(output.value);
        console.log(navigator.clipboard.writeText = (output.value))
    });

}

function generateRgbColor() {
    const red = Math.floor(Math.random() * 255); // corrected range
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
