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


        // Scroll to id
        let _smooth = $('a[href^="#"]');
        _smooth.click(function () {
            let speed = 400;
            let href = $(this).attr("href");
            let target = $(href === '#top' || href === '#' || href === '' ? 'html' : href);
            let header = $('header').outerHeight();
            let position = target.offset().top - header;
            if (!$('body html').is(':animated')) {
                $('body,html').stop().animate({ scrollTop: position }, speed, 'swing');
            }
            return false;
        });

$(document).ready(function () {
    function getNestedProperty(obj, path) {
        return path.split('.').reduce((o, key) => (o ? o[key] : null), obj);
    }

    // Hàm tải ngôn ngữ từ file JSON
    function loadLanguage(language) {
        $.getJSON(`assets/json/${language}.json`, function (data) {
            $('[data-i18n]').each(function () {
                const path = $(this).data('i18n'); // Lấy đường dẫn từ thuộc tính `data-i18n`
                const translation = getNestedProperty(data, path); // Lấy giá trị từ JSON
                if (translation) {
                    $(this).html(translation);
                }
            });
        });
    }

    // Lấy ngôn ngữ hiện tại từ localStorage (hoặc mặc định là 'en')
    const currentLanguage = localStorage.getItem('language') || 'en';

    // Đặt giá trị cho dropdown và tải ngôn ngữ
    $('#language-select').val(currentLanguage);
    loadLanguage(currentLanguage);

    // Sự kiện thay đổi ngôn ngữ
    $('#language-select').change(function () {
        const selectedLanguage = $(this).val();
        localStorage.setItem('language', selectedLanguage); // Lưu ngôn ngữ vào localStorage
        loadLanguage(selectedLanguage); // Tải ngôn ngữ mới
    });
});