//🟩 push pop shift unshift splice🟩

//var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//arr.push(10);     Extra member Add in last
//arr.pop();          Remove memeber in last
//arr.unshift(0);     Add first number
//arr.shift()         Remove number first
//arr.splice(4,3)     Select Number Remove
//document.getElementById("demo").innerHTML = arr;


var ek = [1, 2, 3, 4, 5, 6, 7, 8, 9];

ek.push(10);

document.getElementById("one").innerHTML = "ek.push(10) - " + ek;


let b = [1, 2, 3, 4, 5, 6 ,7, 8, 9];
b.pop()

document.getElementById("two").innerHTML = "b.pop() - " + b


let c = [1, 2, 3, 4, 5, 6, 7, 8, 9];
c.unshift(0)

document.getElementById("three").innerHTML = " c.unshift(0) - " + c;

let d = [1, 2, 3, 4, 5, 6, 7, 8, 9];
d.shift()
document.getElementById("four").innerHTML = "d.shift() - " + d;

let e = [1, 2, 3, 4, 5, 6, 7, 8, 9];
e.splice(2,2)
document.getElementById("five").innerHTML = "e.splice(2, 2) - " + e;