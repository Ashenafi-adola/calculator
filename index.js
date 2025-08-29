let num ="";
let x;
let number;

function result(){
    number = String(document.getElementById("disply").innerHTML)
    console.log(number);
    
    for (a of number){
        if (a === '+' && a !==number[0]){
            operate('+');
        }
        else if (a === '*' && a !==number[0]){
            operate('*');
        }
        else if (a === '-' && a !==number[0]){
            operate('-');
        }
        else if (a === '/' && a !==number[0]){
            operate('/');
        }
    }
}
function operate(x){
    let new_num = '';
    let num1 = 0;
    let num2 = 0;
    let sign = '';
    for (i of number){
        if (i != x){
            num1 = Number(new_num += i);
        }  
        else{
            num2 = num1;
            num1 = 0;
            new_num = '';
        }  
    }
    if (x === '+'){
        num2 += num1;
    } 
    else if (x === '-') {
        num2 -= num1;
    }
    else if(x ==='*'){
        num2 *= num1;
    }
    else{
        num2 /= num1;
    }
    number = String(num2.toFixed(1));

}

function calculate(x){
    
    if (num === "" && (x === '-' || x === '+' || x === '*' || x === '/' || x === '.')){
        document.getElementById("disply").innerHTML = num;
    }
    else if(num[num.length - 1] == ('-') && (x === '-' || x === '+' || x === '*' || x === '/' || x === '.')){
        document.getElementById("disply").innerHTML = num;
    }
    else if(num[num.length - 1] == ('+') && (x === '-' || x === '+' || x === '*' || x === '/' || x === '.')){
        document.getElementById("disply").innerHTML = num;
    }
    else if(num[num.length - 1] == ('*') && (x === '-' || x === '+' || x === '*' || x === '/' || x === '.')){
        document.getElementById("disply").innerHTML = num;
    }
    else if(num[num.length - 1] == ('/') && (x === '-' || x === '+' || x === '*' || x === '/' || x === '.')){
        document.getElementById("disply").innerHTML = num;
    }
    else if(num[num.length - 1] == ('.') && (x === '-' || x === '+' || x === '*' || x === '/' || x === '.')){
        document.getElementById("disply").innerHTML = num;
    }
    else if (num === '0' && x === 0){
        document.getElementById("disply").innerHTML = num;
    }
    else if (x === '<'){
        num = num.slice(0, num.length - 1);
        document.getElementById("disply").innerHTML = num;
    }
    else if(x === '='){
        num = number;
        document.getElementById("disply").innerHTML = number;
    }
    else{
        num += String(x)
        if (x === 'C'){
            num = "";
            document.getElementById("disply").innerHTML = num;
        }
        else{
            document.getElementById("disply").innerHTML = num;
            
        }
    }
    
}