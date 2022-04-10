// Set Up Canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var frameInterval;
var fps = 24;

// Controle Variables
var particlesAmount = 50,
    particleMinSize = 1,
    particleMaxSize = 3,
    particleMinSpeed = 1,
    particleMaxSpeed = 2,
    lineDistance = 100,
    hasClicked = false;


particles = [];
lines = [];

// Main Draw function
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (hasClicked == false) {
        drawText();
    }
    particles.forEach(drawParticles);
    lines.forEach(drawLines);
}

function drawText() {
    ctx.fillStyle = "rgba(255,255,255,0.2)";
    ctx.font = "50px Arial";
    ctx.textAlign = "center";
}

function drawParticles(p) {
    // ctx.shadowBlur = p.r*2;
    // ctx.shadowColor = 'yellow';

    ctx.fillStyle = "#37CCD7";
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

function drawLines(l) {
    // ctx.shadowBlur = 5;
    // ctx.shadowColor = 'yellow';
    ctx.strokeStyle = "rgba(58,69,88," + l.a + ")";
    ctx.beginPath();
    ctx.moveTo(l.x1, l.y1);
    ctx.lineTo(l.x2, l.y2);
    ctx.closePath();
    ctx.stroke();
}

function createParticles(amountNew, xy) {
    var p = particles;
    for (var i = 0; i < amountNew; i++) {

        if (xy.x == 0 && xy.y == 0) {
            var randX = Math.floor(Math.random() * canvas.width) + 1;
            var randY = Math.floor(Math.random() * canvas.height) + 1;
        } else {
            var randX = xy.x;
            var randY = xy.y;
        }
        var newP = {
            x: randX,
            y: randY,
            oldX: randX,
            oldY: randY,
            tx: Math.floor(Math.random() * canvas.width) + 1,
            ty: Math.floor(Math.random() * canvas.height) + 1,
            s: Math.floor(Math.random() * (particleMaxSpeed - particleMinSpeed + 1)) +
                particleMinSpeed,
            r: Math.floor(Math.random() * (particleMaxSize - particleMinSize + 1)) +
                particleMinSize
        };
        p.push(newP);
    }
}

function updateParticles() {
    for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        var nx = p.tx - p.x,
            ny = p.ty - p.y,
            dist = Math.sqrt(nx * nx + ny * ny);

        var velX = nx / dist * p.s,
            velY = ny / dist * p.s;

        p.oldx = p.x;
        p.oldy = p.y;
        p.x += velX;
        p.y += velY;

        if (
            p.x < p.tx + p.s &&
            p.x > p.tx - p.s &&
            p.y < p.ty + p.s &&
            p.y > p.ty - p.s
        ) {
            p.tx = Math.floor(Math.random() * canvas.width) + 1;
            p.ty = Math.floor(Math.random() * canvas.height) + 1;
        }
    }
}

function checkLines() {
    lines = [];
    for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        for (var j = 0; j < particles.length; j++) {
            var p2 = particles[j];
            var dist = Math.sqrt(Math.pow(p2.x - p.x, 2) + Math.pow(p2.y - p.y, 2));
            if (dist < lineDistance) {
                var newLine = {
                    x1: p.x,
                    x2: p2.x,
                    y1: p.y,
                    y2: p2.y,
                    a: 1 - dist / lineDistance
                };
                lines.push(newLine);
            }
        }


    }
}


function checkMouse(e) {
    hasClicked = true;
    var mouse = { x: 0, y: 0 };
    var rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    createParticles(1, mouse);
}

// Canvas Resize
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    var toSend = { x: 0, y: 0 };
    createParticles(particlesAmount, toSend);
    draw();
}
resizeCanvas();

// Main Frame Loop
function frame() {
    frameInterval = setTimeout(function() {

        //Logic Fnctions
        updateParticles();

        checkLines();
        //Draw Screen
        draw();
        //Next Frame
        // console.log(canvas.height, canvas.width);
        requestAnimationFrame(frame);
    }, 1000 / fps);
}
// Start Frame Loop
var toSend = { x: 0, y: 0 };
createParticles(particlesAmount, toSend);

frame();

// Event Listeners
window.addEventListener("resize", resizeCanvas, false);
// document.getElementById("canvas").addEventListener("mousemove", checkMouse);
document.getElementById("canvas").addEventListener("mousedown", checkMouse);

(function($) {

    'use strict';

    // variables
    let $isAnimatedSecond = $('.second .is-animated'),
        $isAnimatedSecondSingle1 = $('.second .is-animated__single1'),
        $isAnimatedSecondSingle2 = $('.second .is-animated__single2')

    let $isAnimatedThird = $('.third .is-animated'),
        $isAnimatedThirdSingle1 = $('.third .is-animated__single1')

    let $isAnimatedFourth = $('.fourth .is-animated'),
        $isAnimatedFourthSingle1 = $('.fourth .is-animated__single1')

    let $isAnimatedFifth = $('.fifth .is-animated'),
        $isAnimatedfifthSingle1 = $('.fifth .is-animated__single1'),
        $isAnimatedfifthSingle2 = $('.fifth .is-animated__single2')

    let $isAnimatedSixth = $('.sixth .is-animated'),
        $isAnimatedSixthSingle1 = $('.sixth .is-animated__single1'),
        $isAnimatedSixthSingle2 = $('.sixth .is-animated__single2'),
        $isAnimatedSixthSingle3 = $('.sixth .is-animated__single3')

    let $isAnimatedSeventh = $('.seventh .is-animated'),
        $isAnimatedSeventhSingle1 = $('.seventh .is-animated__single1'),
        $isAnimatedSeventhSingle2 = $('.seventh .is-animated__single2')

    let $isAnimatedEighth = $('.eighth .is-animated'),
        $isAnimatedEighthSingle1 = $('.eighth .is-animated__single1'),
        $isAnimatedEighthSingle2 = $('.eighth .is-animated__single2')

    // initialize fullPage
    $('#fullpage').fullpage({
        scrollOverflow: true,
        anchors: ['home', 'about', 'services', 'sectors', 'management', 'features', 'numbers', 'contactus'],
        menu: '#menu',
        lazyLoad: true,
        verticalCentered: true,
        // easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        fadingEffect: true,
        paddingTop: "2rem",
        paddingBottom: "2rem",
        onLeave: function(origin) {
            if (origin.index == 0) {
                $isAnimatedSecond.addClass('animate__animated animate__fadeInTopLeft');
                $isAnimatedSecondSingle1.addClass('animate__animated animate__fadeInLeft animate__delay-2s')
                $isAnimatedSecondSingle2.addClass('animate__animated animate__fadeInRight animate__delay-3s')
            } else if (origin.index == 1) {
                $isAnimatedThird.addClass('animate__animated animate__fadeInTopLeft')
                $isAnimatedThirdSingle1.addClass('animate__animated animate__fadeInUp animate__delay-2s')
            } else if (origin.index == 2) {
                $isAnimatedFourth.addClass('animate__animated animate__fadeInTopLeft')
                $isAnimatedFourthSingle1.addClass('animate__animated animate__fadeIn animate__delay-2s')
            } else if (origin.index == 3) {
                $isAnimatedFifth.addClass('animate__animated animate__fadeInTopLeft')
                $isAnimatedfifthSingle1.addClass('animate__animated animate__fadeInLeft animate__delay-2s')
                $isAnimatedfifthSingle2.addClass('animate__animated animate__fadeInRight animate__delay-3s')
            } else if (origin.index == 4) {
                $isAnimatedSixth.addClass('animate__animated animate__fadeInTopLeft')
                $isAnimatedSixthSingle1.addClass('animate__animated animate__fadeInLeft animate__delay-2s')
                $isAnimatedSixthSingle2.addClass('animate__animated animate__fadeInRight animate__delay-2s')
                $isAnimatedSixthSingle3.addClass('animate__animated animate__fadeInDownBig animate__delay-2s')
            } else if (origin.index == 5) {
                $isAnimatedSeventh.addClass('animate__animated animate__fadeInTopLeft')
                $isAnimatedSeventhSingle1.eq(0).addClass('animate__animated animate__fadeInUp animate__delay-2s')
                $isAnimatedSeventhSingle1.eq(1).addClass('animate__animated animate__fadeInDown animate__delay-3s')
                $isAnimatedSeventhSingle1.eq(2).addClass('animate__animated animate__fadeInUp animate__delay-2s')
                $isAnimatedSeventhSingle1.eq(3).addClass('animate__animated animate__fadeInDown animate__delay-3s')
                $isAnimatedSeventhSingle1.eq(4).addClass('animate__animated animate__fadeInUp animate__delay-2s')
                $isAnimatedSeventhSingle1.eq(5).addClass('animate__animated animate__fadeInDown animate__delay-3s')
                $isAnimatedSeventhSingle1.eq(6).addClass('animate__animated animate__fadeInUp animate__delay-2s')
                $isAnimatedSeventhSingle2.addClass('animate__animated animate__fadeIn animate__delay-3s')
            } else if (origin.index == 6) {
                $isAnimatedEighth.addClass('animate__animated animate__fadeInTopLeft')
                $isAnimatedEighthSingle1.addClass('animate__animated animate__fadeInLeft animate__delay-2s')
                $isAnimatedEighthSingle2.addClass('animate__animated animate__fadeInRight animate__delay-2s')
            }
        }
    });
})(jQuery);

let buttonToggle = () => {
    const button = document.getElementById("menu-button").classList,
        isopened = "is-opened";
    let isOpen = button.contains(isopened);
    if (isOpen) {
        button.remove(isopened);
    } else {
        button.add(isopened);
    }
}