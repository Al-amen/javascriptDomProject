


let div = null;


window.onload = function(){
    main();
}


function main() {
    body = document.querySelector('body')
    const changeBtn = document.getElementById("change-btn");
    const copyBtn = document.getElementById("copy-btn");
    const output = document.getElementById("output");
    

    changeBtn.addEventListener('click',function(){
       const rgb = generateRgbColor();
       console.log(rgb);
       body.style.backgroundColor = rgb;
       output.value = rgb;
    });
    copyBtn.addEventListener('click',function() {
        navigator.clipboard.writeText(output.value);
        if(div != null) {
            div.remove();
            div = null;
        }
        generateToastMessage(`${output.value} copied`);

        
        
    });


}

function generateRgbColor(){

    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

}

function generateToastMessage(mgs){

    div = document.createElement("div");
    div.className = 'toast-message toast-message-slide-in'
    div.innerText = mgs; 
    div.addEventListener('click',function(){
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out');

        div.addEventListener('animationend',function(){
            div.remove();
            div = null
        })

    });
    body.appendChild(div);

}