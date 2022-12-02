let p;
let p1;

function init(){
    p = document.getElementById("p");
    p.addEventListener("mouseover",over);
    p.addEventListener("mouseout",out);

    p1 = document.getElementById("p1");
    p1.addEventListener("mouseover",over_a);
    p1.addEventListener("mouseout",out_a);

    p2 = document.getElementById("p2");
    p2.addEventListener("mouseover",over_b);
    p2.addEventListener("mouseout",out_b);

    p3 = document.getElementById("p3");
    p3.addEventListener("mouseover",over_c);
    p3.addEventListener("mouseout",out_c);
}
function over() {
    re.style.cssText='text-shadow:2px 2px 7px greenyellow';
}
function out() {
    re.style.cssText='text-shadow:0px';
}

function over_a() {
    re_a.style.cssText='text-shadow:2px 2px 5px salmon';
}
function out_a() {
    re_a.style.cssText='text-shadow:0px';
}

function over_b() {
    re_b.style.cssText='text-shadow:2px 2px 7px yellow';
}
function out_b() {
    re_b.style.cssText='text-shadow:0px';
}

function over_c() {
    re_c.style.cssText='text-shadow:2px 2px 5px skyblue';
}
function out_c() {
    re_c.style.cssText='text-shadow:0px';
}