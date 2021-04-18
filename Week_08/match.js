// 使用状态机，字符串是否有匹配某个字符串
function match(string) {
    let state = start; // state：表示状态机的当前状态
    for(let c of string) {
        state = state(c);
    }
    return state === end;
}
function start(c) {
    if(c === 'a') {
        return foundA;
    } else {
        return start; 
    }
}
function end(c) {
    return end;
}
function foundA(c) {
    if(c === "b") {
        return foundC;
    } else {
        return start(c);
    }
}
function foundB(c) {
    if(c === "c") {
        return foundC;
    } else {
        return start(c);
    }
}
function foundC(c) {
    if(c === "a") {
        return foundA2;
    } else {
        return start(c);
    }
}
function foundA2(c) {
    if(c === 'b') {
       return foundA3; 
    } else {
        start(c)
    }
}
function foundA3(c) {
    if(c === 'a') {
       return foundB3; 
    } else {
        start(c)
    }
}
function foundB3(c) {
    if(c === 'b') {
       return foundB2; 
    } else {
        start(c)
    }
}

function foundB2(c) {
    if(c === "x") {
        return end;
    } else {
        return foundC(c);
    }
}
console.log(match("abaaaababababx"))
