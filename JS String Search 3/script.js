//Example 1
    let a = "Please locate where 'locate' occurs!";
    let b = a.indexOf("locate");
    document.getElementById("ex1").innerHTML = b;

//Example 2
    let c = "Please locate where 'locate' occurs!";
    let d = c.lastIndexOf("locate");
    document.getElementById("ex2").innerHTML = " " + d;

//Example 3 
   let e = "Please locate where 'locate' occurs!";
   let f = e.indexOf("John");
   document.getElementById("ex3").innerHTML = "Output "+ "🚒" + f;

//Example 4
    let g = "Please locate where 'locate' occurs!";
    let h = g.indexOf("locate",15)
    document.getElementById("ex4").innerHTML = h;

//Example 5
    let i = "Please locate where 'locate' occurs!";
    let j = i.lastIndexOf("locate",15)
    document.getElementById("ex5").innerHTML = j;

//Example 6
    let k = "Please locate where 'locate' occurs!";
    let l = k.search("locate");
    document.getElementById("ex6").innerHTML = l;

//Example 7
    let m = "Please locate where 'locate' occurs!";
    let n = m.search(/locate/);
    document.getElementById("ex7").innerHTML = n;

//Example 8
    let o = "The rain in SPAIN stays maninly in the plain";
    let p = o.match("ain");
    document.getElementById("ex8").innerHTML = p.length + " " + p;

//Example 9
    let q = "The rain in SPAIN stays mainly in the plain";
    let r = q.match(/ain/);
    document.getElementById("ex9").innerHTML = "Output- " + r.length + " " +  r;

//Example 10
    let s = "The rain in SPAIN stays mainly in the plain";
    let t = s.match(/ain/gi);
    document.getElementById("ex10").innerHTML = "Output - " + t.length + " " + t;

//Example 11
    let u = "I love cats. Cats are very easy to love. Cats are very popular."
    let v = u.matchAll("Cats");
    document.getElementById("ex11").innerHTML = "Output - " + Array.from(v);

//Example 12
    let w = "I love cats. Cats are very easy to love. Cats are very popular."
    let x = w.matchAll(/Cats/g);
    document.getElementById("ex12").innerHTML = "Output - " + Array.from(x);

//Example 13
    let y = "I love cats. Cats are very easy to love. Cats are very popular."
    let z = y.matchAll(/Cats/gi);
    document.getElementById("ex13").innerHTML = "Output - " + Array.from(z);

//Example 14
    let aa = "Hellow world, welcome to the universe.";
    document.getElementById("ex14").innerHTML ="Output - " + aa.includes("world");

//Example 15
    let bb = "Hellow world, welcome to the universe.";
    document.getElementById("ex15").innerHTML = "Output - " + bb.includes("world", 12);

//Example 16
    let cc = "Hell0 world, welcome to the universe.";
    document.getElementById("ex16").innerHTML = "Output - " + cc.startsWith("Hello");

//Exmaple 17
    let dd = "Hell0 world, welcome to the universe.";
    document.getElementById("ex17").innerHTML = "Output - " + dd.startsWith("world");

//Example 18
    let ee = "Hell0 world, welcome to the universe.";
    document.getElementById("ex18").innerHTML = "Output - " + ee.startsWith("world", 5);

//Example 19
    let ff = "Hell0 world, welcome to the universe.";
    document.getElementById("ex19").innerHTML = "Output - " + ff.startsWith("world", 6);

//Example 20
    let gg = "John Doe";
    document.getElementById("ex20").innerHTML = "Output - " + gg.endsWith("Doe");

//Example 21
    let hh = "Hell0 world, welcome to the universe.";
    document.getElementById("ex21").innerHTML = "Output - " + hh.endsWith("welcome", 20);
