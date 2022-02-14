let inputLine = document.getElementsByClassName('input')[0]
let outputLine = document.getElementsByClassName('text')[0]

function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    if(!['0','1','2','3','4','5','6','7','8','9',')','n','l','g','(','e','!','.','/','*','-','+'].includes(key)) {
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
    if(key == '^'){
        inputLine.value += '^(';
    }
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
 
inputLine.onkeypress = function() {
    validate(event);
    if(event.keyCode == 13){
        try {
            outputLine.textContent = calculate(inputLine.value);
        } catch (error) {
            outputLine.textContent = 'Ошибка'
            console.log(error)
        }
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
        if(['0','1','2','3','4','5','6','7','8','9',')'].includes(inputLine.value[inputLine.value.length-1])) inputLine.value += "^(";
    }
}

for(let i = 0; i < document.getElementsByClassName('div').length; i++){ 
    document.getElementsByClassName('div')[i].onclick = function() {
        if(['0','1','2','3','4','5','6','7','8','9',')',].includes(inputLine.value[inputLine.value.length-1])) inputLine.value += "/";
    }
}

for(let i = 0; i < document.getElementsByClassName('mul').length; i++){
    document.getElementsByClassName('mul')[i].onclick = function() { 
        if(['0','1','2','3','4','5','6','7','8','9',')','π','e'].includes(inputLine.value[inputLine.value.length-1])) inputLine.value += "*";
    }
}

for(let i = 0; i < document.getElementsByClassName('minus').length; i++){
    document.getElementsByClassName('minus')[i].onclick = function() { 
        if(['0','1','2','3','4','5','6','7','8','9',')','(','π','e'].includes(inputLine.value[inputLine.value.length-1])||inputLine.value.length==0) inputLine.value += "-";
    }
}

for(let i = 0; i < document.getElementsByClassName('plus').length; i++){
    document.getElementsByClassName('plus')[i].onclick = function() {
        if(['0','1','2','3','4','5','6','7','8','9',')','π','e'].includes(inputLine.value[inputLine.value.length-1])) inputLine.value += "+";
    }
}

for(let i = 0; i < document.getElementsByClassName('dot').length; i++){
    document.getElementsByClassName('dot')[i].onclick = function() {
        if(['0','1','2','3','4','5','6','7','8','9'].includes(inputLine.value[inputLine.value.length-1])) inputLine.value += ".";
    }
}

for(let i = 0; i < document.getElementsByClassName('ans').length; i++){
    document.getElementsByClassName('ans')[i].onclick = function() {
        try {
            outputLine.textContent = calculate(inputLine.value);
        } catch (error) {
            outputLine.textContent = 'Ошибка'
            console.log(error)
        }
    }
}

document.getElementsByClassName('(')[0].onclick = function() {
    if(!['0','1','2','3','4','5','6','7','8','9','!','.','π','e'].includes(inputLine.value[inputLine.value.length-1])) inputLine.value += '(';
}

document.getElementsByClassName(')')[0].onclick = function() {
    let o = 0
    let c = 0
    for(let i in inputLine.value){
        if(inputLine.value[i]=='(') o++;
        if(inputLine.value[i]==')') c++;
    }
    if(o-c&&['0','1','2','3','4','5','6','7','8','9','π','e',')','!'].includes(inputLine.value[inputLine.value.length-1])) inputLine.value += ')';
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

for(let i = 0; i < document.getElementsByClassName('!').length; i++){
    document.getElementsByClassName('!')[i].onclick = function() {
        if(['0','1','2','3','4','5','6','7','8','9',')'].includes(inputLine.value[inputLine.value.length-1])) inputLine.value += "!";
    }
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
    for(let i = 0; i < str.length; i++){
        let iChar = str[i]
        if(['0','1','2','3','4','5','6','7','8','9',')','s','i','n','c','o','l','g','√','^','/','*','-','+','.'].includes(iChar)) output += iChar;
        switch (iChar){
            case '(':
                if(output[output.length-2]+output[output.length-1] == 'ln') {
                    output = output.slice(0, -2)
                    output += 'Math.log('
                } else
                if(output[output.length-2]+output[output.length-1] == 'lg') {
                    output = output.slice(0, -2)
                    output += 'Math.log10('
                } else
                if(output[output.length-2]+output[output.length-1] == 'in') {
                    output = output.slice(0, -3)
                    output += 'Math.sin('
                } else
                if(output[output.length-2]+output[output.length-1] == 'os') {
                    output = output.slice(0, -3)
                    output += 'Math.cos('
                } else
                if(output[output.length-1] == '√') {
                    output = output.slice(0, -1)
                    output += 'Math.sqrt('
                } else 
                if(output[output.length-1] == '^'){
                    output = output.slice(0, -1)
                    let openParenthesis = 0
                    let closeParenthesis = 0
                    let tmp = ''
                    if(output[output.length-1] == ')'){
                        do{
                            if(output[output.length-1] == ')') closeParenthesis++
                            if(output[output.length-1] == '(') openParenthesis++
                            tmp += output[output.length-1]
                            output = output.slice(0,-1)
                        }while(closeParenthesis - openParenthesis);
                    } else {
                        do {
                            tmp += output[output.length-1]
                            output = output.slice(0,-1)
                        } while (output&&!['/','*','-','+'].includes(output[output.length-1]));
                    }
                    tmp = tmp.split("").reverse().join("")
                    output += 'Math.pow(' + tmp + ','
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
                let openParenthesis = 0
                let closeParenthesis = 0
                let tmp = ''
                if(output[output.length-1] == ')'){
                    do{
                        if(output[output.length-1] == ')') closeParenthesis++
                        if(output[output.length-1] == '(') openParenthesis++
                        tmp += output[output.length-1]
                        output = output.slice(0,-1)
                    }while(closeParenthesis - openParenthesis);
                } else {
                    do {
                        tmp += output[output.length-1]
                        output = output.slice(0,-1)
                    } while (output&&!['/','*','-','+'].includes(output[output.length-1]));
                }
                tmp = tmp.split("").reverse().join("")
                output += 'factorial(' + tmp + ')' 
                break;
        }
    }
    let o = 0
    let c = 0
    for(let i = 0; i < output.length; i++) {
        if(output[i]=='(') o++;
        if(output[i]==')') c++;
    }
    for(let i = 0; i < o - c; i++) {
        output += ')'
        inputLine.value += ')'
    }
    console.log(output)
    let out = eval(output).toString()
    return out
}