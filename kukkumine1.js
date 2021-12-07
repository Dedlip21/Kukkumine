var x=40, y=80, r=30, ysamm=-10, ykiirendus=1;
var x2=60, y2=80, r2=5, ysamm2=-10, ykiirendus2=1;
var x3=25, y3=80, r3=5, ysamm3=-10, ykiirendus3=1;

var t, g, g2, g3; //tahvel, graafiline kontekst
// liigutab palli liigu() funkstiooniga
// 100 - tähenda 10 korda sekundis
function algus(){
    t=document.getElementById("tahvel");
    g=t.getContext("2d");

    g2=t.getContext("2d");
    g2=g;

    g2=t.getContext("2d");
    g3=g;

    setInterval('liigu()', 20);
}
// joonistab palli
function joonista(){
    g.clearRect(0, 0, t.width, t.height);
    g.strokeStyle="blue";
    g.fillStyle="red";
    g.beginPath()
    g.arc(x, y, r, 0, 2*Math.PI, true);
    g.stroke() // joon
    g.fill(); // taust

    g2.strokeStyle="black";
    g2.fillStyle="black";
    g2.beginPath()
    g2.arc(x2, y2, r2, 0, 2*Math.PI, true);
    g2.stroke() // joon
    g2.fill(); // taust

    g3.strokeStyle="black";
    g3.fillStyle="black";
    g3.beginPath()
    g3.arc(x3, y3, r3, 0, 2*Math.PI, true);
    g3.stroke() // joon
    g3.fill(); // taust
}
// kukkumine alla
function liigu(){
    y=y+ysamm;
    ysamm=ysamm+ykiirendus;

    y2=y2+ysamm2;
    ysamm2=ysamm2+ykiirendus2;

    y3=y3+ysamm3;
    ysamm3=ysamm3+ykiirendus3;



    joonista();
}

function changeR(){
}

function hiirAlla(e){
    var tahvlikoht=t.getBoundingClientRect();
    var hx=e.clientX-tahvlikoht.left;
    var hy=e.clientY-tahvlikoht.top;
    x=hx;
    y=hy;
    ysamm=0;

    var hx2=e.clientX-tahvlikoht.left;
    var hy2=e.clientY-tahvlikoht.top;
    x2=hx2;
    y2=hy2;
    ysamm2=0;

    var hx3=e.clientX-tahvlikoht.left;
    var hy3=e.clientY-tahvlikoht.top;
    x3=hx3;
    y3=hy3;
    ysamm3=0;
}


