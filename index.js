const lowC = document.querySelector("#low-c");
lowC.addEventListener("click", function() {
    const audioLowC = new Audio("Notes/00do.mp3");
    audioLowC.play();
});

const db = document.querySelector("#db");
db.addEventListener("click", function() {
    const audioDb = new Audio("Notes/00re_b.mp3");
    audioDb.play();
});

const d = document.querySelector("#d");
d.addEventListener("click", function() {
    const audioD = new Audio("Notes/00re.mp3");
    audioD.play();
});

const eb = document.querySelector("#eb");
eb.addEventListener("click", function() {
    const audioEb = new Audio("Notes/00mi_b.mp3");
    audioEb.play();
});

const e = document.querySelector("#e");
e.addEventListener("click", function() {
    const audioE = new Audio("Notes/00mi.mp3");
    audioE.play();
});

const f = document.querySelector("#f");
f.addEventListener("click", function() {
    const audioF = new Audio("Notes/00fa.mp3");
    audioF.play();
});

const gb = document.querySelector("#gb");
gb.addEventListener("click", function() {
    const audioGb = new Audio("Notes/00sol_b.mp3");
    audioGb.play();
});

const g = document.querySelector("#g");
g.addEventListener("click", function() {
    const audioG = new Audio("Notes/00sol.mp3");
    audioG.play();
});

const ab = document.querySelector("#ab");
ab.addEventListener("click", function() {
    const audioAb = new Audio("Notes/00la_b.mp3");
    audioAb.play();
});

const a = document.querySelector("#a");
a.addEventListener("click", function() {
    const audioA = new Audio("Notes/00la.mp3");
    audioA.play();
});

const bb = document.querySelector("#bb");
bb.addEventListener("click", function() {
    const audioBb = new Audio("Notes/00si_b.mp3");
    audioBb.play();
});

const b = document.querySelector("#b");
b.addEventListener("click", function() {
    const audioB = new Audio("Notes/00si.mp3");
    audioB.play();
});

const highC = document.querySelector("#high-c");
highC.addEventListener("click", function() {
    const audioHighC = new Audio("Notes/01do.mp3");
    audioHighC.play();
});

