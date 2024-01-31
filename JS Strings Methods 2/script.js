//Example 1 
    //The length property returns the length of a string:

    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let length = text.length;
   document.getElementById("ex1").innerHTML = length;

//Example 3
    //There are 3 methods for extractig a part of a string
    // 1. slice(start, end), 2. substring(start, end), 3.substr(start, length)
    let a = "Apple, Banana, Kiwi";
    let part = a.slice(7,13);
    document.getElementById("ex3").innerHTML = part;

//Note: JavaScript counts positons from zero. First postion is 0.  Second postion is 1.

//Example 4
    //If you omit the second parameter, the method will slice out the rest of the string:
    let b = "Apple, Banana, Kiwi";
    let c = b.slice(7);
    document.getElementById("ex4").innerHTML = c;

//Example 5
    // If parameter is negative, the position is counted from the end of the string:
    let d = "Apple, Banana, Kiwi";
    let e = d.slice(-12);
    document.getElementById("ex5").innerHTML = e;

//Example 6
    // This example slices out a portion of a string from positon -12 to position -6:
    let f = "Apple, Banana, Kiwi";
    let g = f.slice(-12, -6)
    document.getElementById("ex6").innerHTML = g;

//Example 7
    // substring() is smiliar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().
    
    let h = "Apple, Banana, Kiwi";
    let i = h.substring(7,13);
    document.getElementById("ex7").innerHTML = i;

//Example 8
    //substr() is similar to slice().
    //The difference is that the second parameter specifies the length of the extracted part.

    let j = "Apple, Banana, Kiwi";
    let k = j.substr(7,6);
    document.getElementById("ex8").innerHTML = k;

//Example 9
    let l = "Apple, Banana, Kiwi";
    let m = l.substr(7);
    document.getElementById("ex9").innerHTML = m;

//Exampel 10
    //If the first parameter is negative, the position counts from the end of the string.
    let n = "Apple, Banana, Kiwi";
    let o = n.substr(-4);
    document.getElementById("ex10").innerHTML = o;

//Example 12
    // The replace() method  replaces a specified value with another value in a string:
  
   function myFunction() {
    let p = document.getElementById("ex12").innerHTML;

    document.getElementById("ex12").innerHTML = p.replace("Microsoft!", "W3Schools")
   }

//Note
    // The replace() method does not change the string is called on.   
    // The replace() method returns a new string.
    // The replace() method replace only the first match
    // If you want to replace all matches, use a regular expression with the/g flag set. See example below.

//Example 13
    //regular expression with an /i flag (insensitive):
   function mywork() {
    let q = document.getElementById("ex13").innerHTML;
   document.getElementById("ex13").innerHTML = q.replace(/MICROSOFT/i,"W3Schools");
   }

//Example 14
   // regular expression with a /g flag (global match):
   function myFunction1(){
    let r = document.getElementById("ex14").innerHTML;
    document.getElementById("ex14").innerHTML = r.replace(/Microsoft/g, "W3Schools");
   }

//Example 15
   let s = "I love cats. Cats are very easy to love. Cats are very popoular.";
   s = s.replaceAll("Cats","dogs");
   s = s.replaceAll("cats", "dogs")

   document.getElementById("ex15").innerHTML = s;

//Example 16
   //replaceAll() is an ES2021 feature.

   let u = "I love cats. Cats are very easy to love. Cats are very popoular.";
   u = u.replaceAll(/Cats/g,"Dogs");
   u = u.replaceAll(/cats/g, "dogs");

   document.getElementById("ex16").innerHTML = u;

   //replaceAll() is an ES2021 feature.
   //replaceAll() does not work in Internaet Explorer.

//Example 18
   //Coverting string to upper case:
   function myFunction2() {
    let v = document.getElementById("ex18").innerHTML;

    document.getElementById("ex18").innerHTML = v.toUpperCase();
   }

//Examle 19
   //Covert string to lower case:
   function myFunction3() {
    let w = document.getElementById("ex19").innerHTML;

    document.getElementById("ex19").innerHTML = w.toLowerCase();
   }

//Example 20
   // The concat() method joins tow or more strings:
   let x = "Hello";
   let y = "World!";
   let z = x.concat(" ", y);
   document.getElementById("ex20").innerHTML = z;

//Example 21
   let aa = "            Hello       World!         ";
   let bb = aa.trim();
   document.getElementById("ex21").innerHTML = "Lenght aa = " + aa.length + "<br> Lenght bb = " + bb.length;

//Example 22
   //ECMAScript 2019 added the String method trimStart() to JavaScript.

   //The trimStart() method works like trim(), but removes whitespace only from the start of a string.
   let cc = "           Hello      World!";
   let dd = cc.trimStart();
   document.getElementById("ex22").innerHTML = "Lenth cc = " + cc.length + "<br> lenth dd = " + dd.length;

//Example 23
   let ee = "    Hello    World!    ";
   let ff = ee.trimEnd();
   document.getElementById("ex23").innerHTML = "lenth ee = " + ee.length + " <br> lenght ff = " + ff.length ;

//Example 25
  let gg = "5";
  gg = gg.padStart(4,"0");
  document.getElementById("ex25").innerHTML = gg;

//Example 25-1
   let hh = "5";
   document.getElementById("ex25-1").innerHTML = hh.padStart(4,"X")

//Example 26
  let ii = 5;
  let jj = ii.toString();
  document.getElementById("ex26").innerHTML = jj.padStart(4,0);

//Example 27
   let kk = "5";
   kk = kk.padEnd(4,"0");
   document.getElementById("ex27").innerHTML = kk;

//Example 27-1
   let ll = "5";
   ll = ll.padEnd(4,"X");
   document.getElementById("ex27-1").innerHTML = ll;

//Example 28
   let mm = 5;
   let nn = mm.toString();
   document.getElementById("ex28").innerHTML = nn.padEnd(4,"X");

//Example 30
   var oo = "HELLO WORLD";
   document.getElementById("ex30").innerHTML = oo.charAt();

//Example 31
   let pp = "HELLO WORLD";
   document.getElementById("ex31").innerHTML = pp.charCodeAt(0);

//Example 32
   let qq = "HELLOW WORLD";
   document.getElementById("ex32").innerHTML = qq[0];

//Example 33
   let rr = "a,b,c,d,e,f";
   const ss = rr.split(",");
   document.getElementById("ex33").innerHTML = ss[0];

//Example 34
   let tt = "HELLO WORLD";
   const uu = tt.split("");
   tt = "";
   for (let iii = 0;
         iii < uu.length;
         iii++)
         {tt += uu[iii]+ "<br>" } 
   document.getElementById("ex34").innerHTML = tt;