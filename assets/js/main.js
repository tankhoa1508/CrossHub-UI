// handle toggle navbar
function openNav() {
    let navEl = document.getElementById("nav");

    if (navEl.style.display == "block") {
        navEl.style.display = "none";
        document.body.classList.remove("openNav");
    } else {
        navEl.style.display = "block";
        document.body.classList.add("openNav");
    }
  }

function closeNav() {
    let x = window.innerWidth;

    if (x < 769) {
        document.getElementById("nav").style.display = "none";
        document.body.classList.remove("openNav");
    }
}

// Change Language
let x = window.innerWidth;
if (x < 769) {
    document.getElementById("english").innerHTML = "EN";
    document.getElementById("korean").innerHTML = "KR";
    document.getElementById("vietnamese").innerHTML = "VN";
} else {
    document.getElementById("english").innerHTML = "English";
    document.getElementById("korean").innerHTML = "Korean";
    document.getElementById("vietnamese").innerHTML = "Vietnamese";
}

if (x < 769) {
    document.getElementById("process-img").src="./assets/images/process_mo.png";
    document.getElementById("iddata-process-img").src="./assets/images/iddata_process_mo.png";

    document.getElementById("tech-item").style.display = "none";
}

// active navbar
const navLinkEls = document.querySelectorAll('.nav__link');
    navLinkEls.forEach(navLinkEl => {
        navLinkEl.addEventListener('click', () => {
            document.querySelector('.active')?.classList.remove('active')
            navLinkEl.classList.add('active')
        })
    })


// active navbar when scroll
    var header = document.querySelector("header");
        // var links = document.querySelectorAll(".nav__link");
        var sections = document.querySelectorAll('.section');
        window.onscroll = function(){
            // if(window.scrollY >  header.offsetHeight){
            //     header.style.background = 'rgba(0,0,0,0.8)';
            // }
            // else{
            //     header.style.background = 'black';
            // }
            var current = 'home';
            sections.forEach((section)=>{
                const sectionTop =  section.offsetTop;
                if(scrollY >= sectionTop){
                    current = section.getAttribute('id');
                }
            })
            navLinkEls.forEach((item)=>{
                item.classList.remove('active');
                if(item.href.includes(current)){
                    item.classList.add("active")
                }
                else{
                    item.classList.remove("active")
                }


            })
        }
