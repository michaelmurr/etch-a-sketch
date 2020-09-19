let mainDiv = document.querySelector('#main_div');
let subDiv; 
let innerDiv;
let outerDiv;

createRow();

function createRow(){
    for(let j = 0; j<=10; j++){
    outerDiv = document.createElement('div');
    outerDiv.setAttribute("id", "sub_div" + j);
    mainDiv.append(outerDiv);
    subDiv = document.querySelector('#sub_div'+j);

    for(let i = 0; i <=10; i++){
        innerDiv = document.createElement('div.container');
        subDiv.append(innerDiv);
    }

    }
}
