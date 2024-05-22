window.onload = () => {
    main();
}

function main() {
    const body = document.querySelector('body');
    const btn = document.getElementById('change-color'); // corrected method name
    const output = document.getElementById('output');

    btn.addEventListener('click', function () {
        const bgcolor = generateRgbColor();
        body.style.background = bgcolor;
        output.value = bgcolor
    });

}

function generateRgbColor() {
    const red = Math.floor(Math.random() * 255); // corrected range
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
