$(function () {
    $('header').load('header.html');
    $('footer').load('footer.html');
});

$("[data-toggle=popover]").popover();

$('.fa.fa-chevron-down.fa-5x').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

$('.card-flip').click(function() {
    if (isMobileBool) $(this).toggleClass('hover');
});
$('.skill-box').click(function() {
    if (isMobileBool) $(this).toggleClass('hover');
});
function detectmob() {
if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
) {
    return true;
} else {
    return false;
}
}
var isMobileBool = detectmob();
console.log(isMobileBool);

let path = window.location.hash.substr(1);
if (path.search('About') != -1) {
    InitChange(1);
} else if (path.search('Profile') != -1) {
    InitChange(2);
} else if (path.search('Skill') != -1) {
    InitChange(3);
} else {
    InitChange(0);
}

function InitChange(class_index) {
    $('#nav-fullscreen').removeClass('open');
    $('#nav-overlay').removeClass('open');
    $('#mobile-nav-button').removeClass('open');
    $('#mobile-nav').removeClass('open');
    ChangePageFunction(class_index);
}

function ChangePageFunction(pageNumber) {
    let page;
    document.getElementById('index').classList.add('hide-page');
    document.getElementById('about').classList.add('hide-page');
    document.getElementById('profile').classList.add('hide-page');
    document.getElementById('skill').classList.add('hide-page');
    if (pageNumber == 0) {
        page = 'Index';
        document.getElementById('index').classList.remove('hide-page');
    }
    if (pageNumber == 1) {
        page = 'About';
        document.getElementById('about').classList.remove('hide-page');
    }
    if (pageNumber == 5 || pageNumber == 2) {
        page = 'Profile';
        document.getElementById('profile').classList.remove('hide-page');
    }
    if (pageNumber == 6 || pageNumber == 3) {
        page = 'Skill';
        document.getElementById('skill').classList.remove('hide-page');
    }
    setTimeout(() => {
        location.href = '#' + page;
    }, 200);
    }
    function mobileNavOnclick() {
    $('#nav-fullscreen').toggleClass('open');
    $('#nav-overlay').toggleClass('open');
    $('#mobile-nav-button').toggleClass('open');
    $('#mobile-nav').toggleClass('open');
    }
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});