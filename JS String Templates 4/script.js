//Example 1
    let a = `Hello World!`;
    document.getElementById("ex1").innerHTML = " Output - " + a;

//Example 2
    let b = `He's often called "Johnny"`;
    document.getElementById("ex2").innerHTML = "Output - " + b;

//Example 3
    let c = `The quick
    brown fox
    jumps over
    the lazy dog`;
    document.getElementById("ex3").innerHTML = "Output - " + c;

//Example 4
    let d = "John";
    let e = "Doe";
    let f = `Welcome ${d}, ${e}!`;
    document.getElementById("ex4").innerHTML = "Output - " + f;

//Example 5
    let g = 10;
    let h = 0.25;
    let i = `Total: ${(g * (1+h)).toFixed(2)}`;
    document.getElementById("ex5").innerHTML = "Output - " + i;

// NOTE: Automatic replacing of expressions with real values is called string interpolation.

//Example 6
    let j = "Templates Literals";
    let k = ["Templates literals", "javascript", "es6"];
    let l = `<h2>${j}</h2><ul>`;
    for (const x of tags) {
        l += `<li>${x}</li>`;
    }
    l += `</ul>`;

    document.getElementById("ex6").innerHTML = "Output - " l;
