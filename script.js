/* ==========================================================
   ECONO WASH LAUNDROMAT
   Website Interactions
========================================================== */


/* ---------- PAGE LOADER ---------- */


window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);

    }

});



/* ---------- SCROLL PROGRESS ---------- */


window.addEventListener("scroll",()=>{

    const scrollTop =
    document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;


    const progress =
    (scrollTop / height) * 100;


    const bar =
    document.getElementById("progress-bar");


    if(bar){

        bar.style.width = progress + "%";

    }

});



/* ---------- NAVBAR EFFECT ---------- */


const nav = document.querySelector("nav");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        nav.style.background =
        "rgba(255,255,255,.95)";

        nav.style.boxShadow =
        "0 10px 40px rgba(0,0,0,.08)";

    }

    else{

        nav.style.background =
        "rgba(255,255,255,.75)";

        nav.style.boxShadow =
        "none";

    }


});



/* ---------- SCROLL REVEAL ---------- */


const revealElements =
document.querySelectorAll(
"section, .stat-card, .service-card, .review-card"
);



const revealObserver =
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{


    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }


});


},
{
    threshold:.15
}
);



revealElements.forEach(el=>{

    el.classList.add("fade-up");

    revealObserver.observe(el);

});



/* ---------- FAQ ACCORDION ---------- */


const questions =
document.querySelectorAll(".question");



questions.forEach(question=>{


    question.addEventListener("click",()=>{


        question.classList.toggle("active");


        const answer =
        question.querySelector("p");


        if(answer.style.maxHeight){


            answer.style.maxHeight=null;


        }

        else{


            answer.style.maxHeight =
            answer.scrollHeight + "px";


        }


    });


});



/* ---------- BACK TO TOP ---------- */


const topButton =
document.getElementById("topBtn");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){

        topButton.classList.add("show");

    }

    else{

        topButton.classList.remove("show");

    }


});



if(topButton){

    topButton.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}



/* ---------- IMAGE LIGHTBOX ---------- */


const galleryImages =
document.querySelectorAll(".gallery-grid img");



galleryImages.forEach(image=>{


    image.addEventListener("click",()=>{


        const overlay =
        document.createElement("div");


        overlay.className =
        "image-overlay";


        overlay.innerHTML =
        `
        <img src="${image.src}">
        `;


        document.body.appendChild(overlay);



        overlay.addEventListener("click",()=>{

            overlay.remove();

        });


    });


});



/* ---------- SMOOTH ANCHOR SCROLL ---------- */


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


    link.addEventListener("click",(e)=>{


        const target =
        document.querySelector(
        link.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});



/* ---------- MOBILE MENU READY ---------- */


function createMobileMenu(){


    const nav =
    document.querySelector("nav");


    const button =
    document.createElement("button");


    button.innerHTML =
    "☰";


    button.className =
    "mobile-menu-btn";


    nav.appendChild(button);



    button.addEventListener("click",()=>{


        document.querySelector("nav ul")
        .classList.toggle("open");


    });


}



if(window.innerWidth <= 768){

    createMobileMenu();

}
