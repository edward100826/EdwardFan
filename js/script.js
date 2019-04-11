$(function () {
    $('header').load('header.html');
    $('footer').load('footer.html');
    $.getScript('js/lang.js');
});

$('.fa.fa-chevron-down.fa-5x').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

function InitChange(pageNumber) {
    let page;
    document.getElementById('index').classList.add('hide-page');
    document.getElementById('about').classList.add('hide-page');
    document.getElementById('profile').classList.add('hide-page');
    document.getElementById('skill').classList.add('hide-page');
    document.getElementById('todo').classList.add('hide-page');
    if (pageNumber == 0) {
        page = 'Index';
        document.getElementById('index').classList.remove('hide-page');
    }
    if (pageNumber == 1) {
        page = 'About';
        document.getElementById('about').classList.remove('hide-page');
    }
    if (pageNumber == 2) {
        page = 'Profile';
        document.getElementById('profile').classList.remove('hide-page');
    }
    if (pageNumber == 3) {
        page = 'Skill';
        document.getElementById('skill').classList.remove('hide-page');
    }
    if (pageNumber == 4) {
        page = 'Todo';
        document.getElementById('todo').classList.remove('hide-page');
    }
    setTimeout(() => {
        location.href = '#' + page;
    }, 200);
}

let path = window.location.hash.substr(1);
if (path.search('About') != -1) {
    InitChange(1);
} else if (path.search('Profile') != -1) {
    InitChange(2);
} else if (path.search('Skill') != -1) {
    InitChange(3);
} else if (path.search('Todo') != -1) {
    InitChange(4);
} else {
    InitChange(0);
}