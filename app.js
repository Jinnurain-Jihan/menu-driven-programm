

function add(){
    let num1=20;
    let num2=10;
    alert(`The summation of ${num1} and ${num2} are = ${num1+num2}`);
}
function sub(){
    let num1=20;
    let num2=10;
    alert(`The subtraction of ${num1} and ${num2} are = ${num1-num2}`);
}
function mul(){
    let num1=20;
    let num2=10;
    alert(`The multiplication of ${num1} and ${num2} are = ${num1*num2}`);
}
function div(){
    let num1=20;
    let num2=10;
    alert(`The division of ${num1} and ${num2} are = ${num1/num2}`);
}

let anyNumber=parseInt(prompt("Enter your choice(1,2,3,4):"));
switch(anyNumber){
    case 1:
        add();
        break;
    case 2:
        sub();
        break;
    case 3:
        mul();
        break;
    case 4:
        div();
        break;
}