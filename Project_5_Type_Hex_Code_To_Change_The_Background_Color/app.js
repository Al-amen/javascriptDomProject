


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
        navigator.clipboard.writeText(output.value)
        if(div !== null) {
            div.remove();
            div = null;
        }


        if(validHashValue(output.value)) {
            
            generateToastMessage(`${output.value} copied`);
        }
        else{
            alert("Invalid color code")
        }
        

        
        
    });
    output.addEventListener('keyup',function(e){
        const color = e.target.value;
        
        if(color && validHashValue(color)){
            body.style.backgroundColor = color;
            console.log(color);
        }
        else {
            console.log("not valid");
        }
    })
    


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


/**
 * @param {string} color : ;
 */

function validHashValue(color){
    if(color.length !== 7) {
        console.log(color.length)
        return false;
    }
    if(color[0] !== '#') {
        return false;
    }

    color = color.substring(1);

    return /^[0-9A-Fa-f]{6}$/i.test(color);
}
    
    