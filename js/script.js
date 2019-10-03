$(function () {
    $.getScript('js/lang.js');
    $('header').load('header.html');
    $('footer').load('footer.html'); 
});

$('.fa.fa-chevron-down.fa-5x').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

let path = window.location.hash.substr(1);
if (path.search('About') != -1) {
    InitChange(1);
} else if (path.search('Profile') != -1) {
    InitChange(2);
} else if (path.search('Skill') != -1) {
    InitChange(3);
/*} else if (path.search('Todo') != -1) {
    InitChange(4);*/
} else {
    InitChange(0);
}

function InitChange(pageNumber) {
    let page;
    document.getElementById('index').classList.add('d-none');
    document.getElementById('about').classList.add('d-none');
    document.getElementById('profile').classList.add('d-none');
    document.getElementById('skill').classList.add('d-none');
    //document.getElementById('todo').classList.add('d-none');
    if (pageNumber == 0) {
        page = 'Index';
        document.getElementById('index').classList.remove('d-none');
    }
    if (pageNumber == 1) {
        page = 'About';
        document.getElementById('about').classList.remove('d-none');
    }
    if (pageNumber == 2) {
        page = 'Profile';
        document.getElementById('profile').classList.remove('d-none');
    }
    if (pageNumber == 3) {
        page = 'Skill';
        document.getElementById('skill').classList.remove('d-none');
    }
    /*if (pageNumber == 4) {
        page = 'Todo';
        document.getElementById('todo').classList.remove('d-none');
    }*/
    setTimeout(() => {
        location.href = '#' + page;
    }, 10);
}

$('.card-flip').click(function() {
    if (isMobileBool) $(this).toggleClass('hover');
});
$('.skill-box').click(function() {
    if (isMobileBool) $(this).toggleClass('hover');
});
function SearchClick() {
    if (isMobileBool) $('#search').toggleClass('hover');
};
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

function SearchClear() {
    $('input[type=text]').val('');
}