/* ===========================================
   ELEMENTS
=========================================== */

const pages = [
    document.getElementById("page1"),
    document.getElementById("page2"),
    document.getElementById("page3"),
    document.getElementById("page4"),
    document.getElementById("page5"),
    document.getElementById("endingPage")
];

const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const next3 = document.getElementById("next3");
const next4 = document.getElementById("next4");

const yesBtn = document.getElementById("yesBtn");
const timeBtn = document.getElementById("timeBtn");

const typing1 = document.getElementById("typing1");
const typing2 = document.getElementById("typing2");
const typing3 = document.getElementById("typing3");

const result = document.getElementById("result");
const finalMessage = document.getElementById("finalMessage");


/* ===========================================
   PAGE CHANGE
=========================================== */

function showPage(index) {

    pages.forEach(page => {
        page.classList.add("hidden");
    });

    pages[index].classList.remove("hidden");

}


/* ===========================================
   TYPE WRITER
=========================================== */

function typeWriter(element, text, speed) {

    element.innerHTML = "";

    let i = 0;

    function type() {

        if (i < text.length) {

            element.innerHTML += text.charAt(i);

            i++;

            setTimeout(type, speed);

        }

    }

    type();

}


/* ===========================================
   PAGE 1
=========================================== */

next1.onclick = function () {

    showPage(1);

    typeWriter(

        typing1,

`Sometimes...

Life quietly brings someone into our world...

without asking for permission.

And before we even realize it...

they become someone special.`,

25

    );

};


/* ===========================================
   PAGE 2
=========================================== */

next2.onclick = function () {

    showPage(2);

    typeWriter(

        typing2,

`Maybe...

You never noticed.

But every conversation with you

became one of my favorite parts of the day.

Little by little...

you became someone

I genuinely looked forward to talking to.`,

25

    );

};


/* ===========================================
   PAGE 3
=========================================== */

next3.onclick = function () {

    showPage(3);

    typeWriter(

        typing3,

`I tried many times

to tell you.

But words

never felt enough.

So...

I built this little website.

Just for you. ❤️`,

25

    );

};


/* ===========================================
   PAGE 4
=========================================== */

next4.onclick = function () {

    showPage(4);

};
/* ===========================================
   YES BUTTON
=========================================== */

yesBtn.onclick = function () {

    // YES চাপলে Ending Page-এ যাবে
    showPage(5);

    // Ending Page-এ Love Message দেখাবে
    finalMessage.innerHTML = `
        <div style="text-align:center; padding:30px;">

            <div style="font-size:70px;">❤️</div>

            <h1 style="color:#ff2d55; font-size:48px;">
                Love You Babe ❤️
            </h1>

            <p style="font-size:24px; line-height:1.8; color:white;">

                You just made my heart smile. 💖

                <br><br>

                Thank you for saying <b>YES</b>.

                <br><br>

                I promise to cherish you,
                respect you,
                and keep making you smile.

                <br><br>

                Forever starts today. ❤️

            </p>

        </div>
    `;

    createHeartRain();

};


/* ===========================================
   I NEED SOME TIME
=========================================== */

timeBtn.onclick = function () {

    // Original Thank You Message ফিরিয়ে আনবে
    finalMessage.innerHTML = `
        <p>

            No matter what your answer is...

            <br><br>

            Thank you for reading this.

            <br><br>

            Your smile is already
            one of the most beautiful things
            I've ever known.

            <br><br>

            Take your time.

            <br><br><br>

            With Love,

            <br><br>

            <span class="signature">
                Ratul ❤️
            </span>

        </p>
    `;

    showPage(5);

};


/* ===========================================
   FLOATING HEARTS
=========================================== */

const heartContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 30) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heartContainer.appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 700);


/* ===========================================
   HEART RAIN
=========================================== */

function createHeartRain() {

    for (let i = 0; i < 80; i++) {

        setTimeout(function () {

            createHeart();

        }, i * 60);

    }

}


/* ===========================================
   START PAGE
=========================================== */

showPage(0);
