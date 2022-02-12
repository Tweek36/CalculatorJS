let inputLine = document.getElementsByClassName('input')[0]
let outputLine = document.getElementsByClassName('text')[0]

function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    if(!['0','1','2','3','4','5','6','7','8','9',')','n','l','g','(','e','!','.','/','*','-','+','^'].includes(key)) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
    if(key == 's'){
        inputLine.value += 'sin(';
    }
    if(key == 'c'){
        inputLine.value += 'cos(';
    }
    if(key == 'p'){
        inputLine.value += 'π';
    }
    if(key == 'r'){
        inputLine.value += '√(';
    }
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
 
inputLine.onkeypress = function() {
    validate(event);
    if(event.keyCode == 13){
        outputLine.textContent = calculate(inputLine.value);
    }
}

document.getElementsByClassName('...')[0].onclick = function() { 
    if(document.getElementsByClassName('default')[0].style.display == 'block') {
        document.getElementsByClassName('default')[0].style.display = 'none';
        document.getElementsByClassName('func')[0].style.display = 'block';
        inputLine.style.width = '436px';
    }
    else {
        document.getElementsByClassName('default')[0].style.display = 'block';
        document.getElementsByClassName('func')[0].style.display = 'none';
        inputLine.style.width = '284px';
    }
}

for(let i = 0; i < document.getElementsByClassName('C').length; i++){
    document.getElementsByClassName('C')[i].onclick = function() { 
        inputLine.value = "";
    }
}

for(let i = 0; i < document.getElementsByClassName('del').length; i++){
    document.getElementsByClassName('del')[i].onclick = function() { 
        inputLine.value = inputLine.value.slice(0, -1);
    }
}

for(let i = 0; i < document.getElementsByClassName('pow').length; i++){
    document.getElementsByClassName('pow')[i].onclick = function() { 
        if(['0','1','2','3','4','5','6','7','8','9',')'].includes(inputLine.value[inputLine.value.length-1])) inputLine.value += "^";
    }
}

for(let i = 0; i < document.getElementsByClassName('div').length; i++){ 
    document.getElementsByClassName('div')[i].onclick = function() {
        if(['0','1','2','3','4','5','6','7','8','9',')'].includes(inputLine.value[inputLine.value.length-1])) inputLine.value += "/";
    }
}

for(let i = 0; i < document.getElementsByClassName('mul').length; i++){
    document.getElementsByClassName('mul')[i].onclick = function() { 
        if(['0','1','2','3','4','5','6','7','8','9',')'].includes(inputLine.value[inputLine.value.length-1])) inputLine.value += "*";
    }
}

for(let i = 0; i < document.getElementsByClassName('minus').length; i++){
    document.getElementsByClassName('minus')[i].onclick = function() { 
        if(['0','1','2','3','4','5','6','7','8','9',')'].includes(inputLine.value[inputLine.value.length-1])) inputLine.value += "-";
    }
}

for(let i = 0; i < document.getElementsByClassName('plus').length; i++){
    document.getElementsByClassName('plus')[i].onclick = function() {
        if(['0','1','2','3','4','5','6','7','8','9',')'].includes(inputLine.value[inputLine.value.length-1])) inputLine.value += "+";
    }
}

for(let i = 0; i < document.getElementsByClassName('dot').length; i++){
    document.getElementsByClassName('dot')[i].onclick = function() {
        if(['0','1','2','3','4','5','6','7','8','9'].includes(inputLine.value[inputLine.value.length-1])) inputLine.value += ".";
    }
}

for(let i = 0; i < document.getElementsByClassName('ans').length; i++){
    document.getElementsByClassName('ans')[i].onclick = function() {
        outputLine.textContent = calculate(inputLine.value);
    }
}

document.getElementsByClassName('(')[0].onclick = function() {
    if(!['0','1','2','3','4','5','6','7','8','9','!','.','π','e'].includes(inputLine.value[inputLine.value.length-1])) inputLine.value += '(';
}

document.getElementsByClassName(')')[0].onclick = function() {
    if(['0','1','2','3','4','5','6','7','8','9','π','e',')','!'].includes(inputLine.value[inputLine.value.length-1])) inputLine.value += ')';
}

document.getElementsByClassName('sin')[0].onclick = function() {
    if(['/','*','-','+','(','^'].includes(inputLine.value[inputLine.value.length-1])||inputLine.value.length==0) inputLine.value += "sin(";
}

document.getElementsByClassName('cos')[0].onclick = function() {
    if(['/','*','-','+','(','^'].includes(inputLine.value[inputLine.value.length-1])||inputLine.value.length==0) inputLine.value += "cos(";
}

document.getElementsByClassName('ln')[0].onclick = function() {
    if(['/','*','-','+','(','^'].includes(inputLine.value[inputLine.value.length-1])||inputLine.value.length==0) inputLine.value += "ln(";
}

document.getElementsByClassName('lg')[0].onclick = function() {
    if(['/','*','-','+','(','^'].includes(inputLine.value[inputLine.value.length-1])||inputLine.value.length==0) inputLine.value += "lg(";
}

document.getElementsByClassName('!')[0].onclick = function() {
    if(['0','1','2','3','4','5','6','7','8','9',')'].includes(inputLine.value[inputLine.value.length-1])) inputLine.value += "!";
}

document.getElementsByClassName('root')[0].onclick = function() {
    if(['/','*','-','+','(','^'].includes(inputLine.value[inputLine.value.length-1])||inputLine.value.length==0) inputLine.value += "√(";
}

document.getElementsByClassName('e')[0].onclick = function() {
    if(['/','*','-','+','(','^'].includes(inputLine.value[inputLine.value.length-1])||inputLine.value.length==0) inputLine.value += "e";
}

document.getElementsByClassName('pi')[0].onclick = function() {
    if(['/','*','-','+','(','^'].includes(inputLine.value[inputLine.value.length-1])||inputLine.value.length==0) inputLine.value += "π";
}

for(let i = 0; i < 10; i++){
    for(let j = 0; j < document.getElementsByClassName(i.toString()).length; j++){
        document.getElementsByClassName(i.toString())[j].onclick = function() {
            if(!['!',')','π','e'].includes(inputLine.value[inputLine.value.length-1])) inputLine.value += i.toString();
        }
    }
}

function calculate(str) {
    let output = ''
    let tmp = ''
    let forciblyOpen = false
    for(let i = 0; i < str.length; i++){
        let iChar = str[i]
        if(['0','1','2','3','4','5','6','7','8','9',')','s','i','n','c','o','l','g','√'].includes(iChar)) tmp += iChar;
        switch (iChar){
            case '^':
                tmp = 'Math.pow(' + tmp + ','
                forciblyOpen = true
                break;
            case '/':
                if(forciblyOpen) {
                    tmp += ')'
                    forciblyOpen = false
                }
                tmp += '/'
                output += tmp
                tmp = ''
                break;
            case '*':
                if(forciblyOpen) {
                    tmp += ')'
                    forciblyOpen = false
                }
                tmp += '*'
                output += tmp
                tmp = ''
                break;
            case '-':
                if(forciblyOpen) {
                    tmp += ')'
                    forciblyOpen = false
                }
                tmp += '-'
                output += tmp
                tmp = ''
                break;
            case '+':
                if(forciblyOpen) {
                    tmp += ')'
                    forciblyOpen = false
                }
                tmp += '+'
                output += tmp
                tmp = ''
                break;
            case '(':
                if(str[i-2]+str[i-1] == 'ln') {
                    tmp = tmp.slice(0, -2)
                    tmp += 'Math.log('
                } else
                if(str[i-2]+str[i-1] == 'lg') {
                    tmp = tmp.slice(0, -2)
                    tmp += 'Math.log10('
                } else
                if(str[i-2]+str[i-1] == 'in') {
                    tmp = tmp.slice(0, -3)
                    tmp += 'Math.sin('
                } else
                if(str[i-2]+str[i-1] == 'os') {
                    tmp = tmp.slice(0, -3)
                    tmp += 'Math.cos('
                } else
                if(str[i-1] == '√') {
                    tmp = tmp.slice(0, -1)
                    tmp += 'Math.sqrt('
                } else {
                    output += '('
                }
                break;
            case 'e':
                output += 'Math.E'
                break;
            case 'π':
                output += 'Math.PI'
                break;
            case '!':
                output += 'factorial('+tmp+')'
                tmp=''
                break;
        }
    }
    if(forciblyOpen) tmp += ')'
    if(tmp != '') output += tmp
    console.log(output)
    let out = eval(output).toString()
    return out
}