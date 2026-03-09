let b = document.body;
b.style.backgroundColor = "rgb(186, 121, 96)";
b.style.color="white";

console.log(b);

let a = document.getElementById("div");
a.style.backgroundColor = "rgb(95, 42, 23)";
a.style.borderRadius="5px";
a.style.margin = "10px";
a.style.width="300px";
a.style.height="300px";
console.log(a);

let k=document.getElementById("p1")
k.style.marginTop="20px";
k.style.marginLeft="20px";
k.style.marginRight="20px";
k.style.marginBottom="0px";
k.style.padding="2px";
k.style.textAlign="center";

let k1=document.getElementById("p2")
k1.style.marginTop="2px";
k1.style.padding="2px";
k1.style.marginLeft="20px";
k1.style.marginRight="20px";
k1.style.textAlign="center";

let l=document.getElementById("p3")
l.style.marginTop="20px";
l.style.marginLeft="20px";
l.style.marginRight="20px"
l.style.marginBottom="1px";
l.style.padding="2px";
l.style.textAlign="center";

let bt=document.getElementById("dob")
bt.style.marginTop="20px";
bt.style.marginRight="20px";
bt.style.marginLeft="50px";
bt.style.padding="2px";
bt.style.width="200px";
bt.style.textAlign="center";

let btn=document.getElementById("btn")
btn.style.marginLeft="120px";
btn.style.marginRight="120px";
btn.style.marginTop="2px";
btn.style.marginBottom="20px";
btn.style.padding="2px";
btn.style.backgroundColor="blue";
btn.style.textAlign="center";

let p = document.getElementById("p4");
let p1 = document.getElementById("p5");
p.style.marginTop="2px";
p.style.padding="2px";
p.style.marginLeft="20px";
p.style.marginRight="20px";
p.style.textAlign="center";

p1.style.marginBottom="20px";
p1.style.marginTop="2px";
p1.style.padding="2px";
p1.style.marginLeft="20px";
p1.style.marginRight="20px";
p1.style.marginBottom="20px";
p1.style.textAlign="center";


function ac() {
    let n = document.getElementById("dob");
    let v = new Date(n.value); // input should be type="date"
    let c = new Date("2026-02-01"); // target date

    let u = c.getFullYear() - v.getFullYear(); // simple year difference
    
    p.innerHTML = "Your age is " + u +" years old."
    if (u>=18){
        p1.innerHTML = "  ";
    }
    else{
        p1.innerHTML = "  ";
    }
}

document.getElementById("btn").addEventListener("click", ac);
