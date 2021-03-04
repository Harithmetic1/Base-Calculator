let fromBase = document.getElementById("base");
let toBase = document.getElementById("base2");
let calcBtn = document.getElementsByClassName("calc_btn")


function calculate(){
    document.getElementById("digit2").value = " ";
    document.getElementById("digit_solution").innerHTML = " ";
    let digit = document.getElementById("digit").value;
    let base =  fromBase.options[fromBase.selectedIndex].value;
    let divisor = toBase.options[toBase.selectedIndex].value;
    let string = digit.toString(), answer = 0, index = 0, division, remainder, array = [], limit, array2 = [],baseTen = 0, reverse; 
        
    //to convert to base 10
    for(let i = string.length - 1; i >= 0 ; i--){  
    x = string[i];
    switch (string[i]){
    case "a":
    x = 10
    break;
    case "b":
    x = 11
    break;
    case "c":
    x = 12
    break;
    case "d":
    x = 13
    break;
    case "e":
    x = 14
    break;
    case "f":
    x = 15
    break;
    default:
    x = string[i];
}
    answer += parseInt(x) * (Math.pow(base, index));
    index++;
}
    baseTen = answer;
    //to convert to binary
    while(limit != 0){
    division = parseInt(answer) / divisor;
    remainder = parseInt(answer) % divisor;
    let v = remainder;
    switch (remainder){
      case 10:
    v = "a"
    break;
    case 11:
    v = "b";
    break;
    case 12:
    v = "c";
    break;
    case 13:
    v = "d"
    break;
    case 14:
    v = "e";
    break;
    case 15:
    v = "f"
    break;
    default:
    v = remainder;
    }
    array.push(v);
    if(division == 0){
        limit = 0;
}
    answer = division;
}
for(let j = array.length - 2; j >= 0; j--){
    reverse = array[j];
    array2.push(reverse);
}
    array = array2;
    let finalAns = array.join('');
    document.getElementById("digit2").value += finalAns;
    document.getElementById("digit_solution").innerHTML += `<span>${finalAns}</span>`;
}


