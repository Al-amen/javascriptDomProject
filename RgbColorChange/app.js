window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-color'); // corrected method name

    btn.addEventListener('click', function () {
        const bgcolor = generateRgbColor();
        root.style.background = bgcolor;
    });

}

function generateRgbColor() {
    const red = Math.floor(Math.random() * 256); // corrected range
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
}
