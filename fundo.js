const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const nuvens = [];

for(let i=0;i<8;i++){
    nuvens.push({
        x: Math.random()*canvas.width,
        y: Math.random()*250,
        tamanho: 60 + Math.random()*80,
        velocidade: 0.2 + Math.random()*0.4
    });
}

let birdX = -100;
let birdY = 180;
let birdDir = 1;

function desenharSol(){

    const grad = ctx.createRadialGradient(
        120,120,20,
        120,120,100
    );

    grad.addColorStop(0,"#fff176");
    grad.addColorStop(1,"#ffca28");

    ctx.fillStyle = grad;

    ctx.beginPath();
    ctx.arc(120,120,70,0,Math.PI*2);
    ctx.fill();
}

function desenharNuvens(){

    ctx.fillStyle="white";

    nuvens.forEach(n=>{

        ctx.beginPath();

        ctx.arc(n.x,n.y,n.tamanho*0.3,0,Math.PI*2);
        ctx.arc(n.x+40,n.y-15,n.tamanho*0.4,0,Math.PI*2);
        ctx.arc(n.x+90,n.y,n.tamanho*0.35,0,Math.PI*2);

        ctx.fill();

        n.x += n.velocidade;

        if(n.x > canvas.width+150){
            n.x = -150;
        }
    });
}

function desenharMontanhas(){

    const montanhas = [
        {x:-100,w:500,h:250,c:"#66bb6a"},
        {x:250,w:600,h:320,c:"#43a047"},
        {x:700,w:550,h:280,c:"#2e7d32"}
    ];

    montanhas.forEach(m=>{

        ctx.fillStyle = m.c;

        ctx.beginPath();

        ctx.moveTo(m.x,canvas.height);

        ctx.quadraticCurveTo(
            m.x + m.w/2,
            canvas.height - m.h,
            m.x + m.w,
            canvas.height
        );

        ctx.fill();
    });
}

function desenharArvores(){

    for(let i=0;i<20;i++){

        let x = i * 100;

        ctx.fillStyle="#5d4037";
        ctx.fillRect(
            x,
            canvas.height-120,
            15,
            50
        );

        ctx.fillStyle="#2e7d32";

        ctx.beginPath();
        ctx.arc(
            x+7,
            canvas.height-130,
            30,
            0,
            Math.PI*2
        );

        ctx.fill();
    }
}

function desenharPassaro(){

    birdX += 2;

    if(birdX > canvas.width + 100){
        birdX = -100;
    }

    birdY += Math.sin(Date.now()*0.003) * 0.8;

    ctx.save();

    ctx.translate(
        birdX,
        birdY
    );

    // asa

    ctx.fillStyle="#d97706";

    ctx.beginPath();

    ctx.ellipse(
        -10,
        0,
        15,
        8,
        Math.sin(Date.now()*0.01),
        0,
        Math.PI*2
    );

    ctx.fill();

    // corpo

    ctx.fillStyle="#f59e0b";

    ctx.beginPath();
    ctx.arc(0,0,20,0,Math.PI*2);
    ctx.fill();

    // olho

    ctx.fillStyle="white";
    ctx.beginPath();
    ctx.arc(8,-5,5,0,Math.PI*2);
    ctx.fill();

    ctx.fillStyle="black";
    ctx.beginPath();
    ctx.arc(10,-5,2,0,Math.PI*2);
    ctx.fill();

    // bico

    ctx.fillStyle="red";

    ctx.beginPath();
    ctx.moveTo(18,0);
    ctx.lineTo(32,5);
    ctx.lineTo(18,10);
    ctx.fill();

    ctx.restore();
}

function animar(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    const ceu = ctx.createLinearGradient(
        0,
        0,
        0,
        canvas.height
    );

    ceu.addColorStop(0,"#6ec6ff");
    ceu.addColorStop(1,"#dff7ff");

    ctx.fillStyle = ceu;
    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    desenharSol();
    desenharNuvens();
    desenharMontanhas();
    desenharArvores();
    desenharPassaro();

    requestAnimationFrame(animar);
}

animar();