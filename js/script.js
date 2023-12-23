document.addEventListener('DOMContentLoaded', function () {
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navber');

    menu.addEventListener('click', function () {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    });

    // إغلاق القائمة عند بدء تحميل الصفحة
    navbar.classList.remove('open');

    // إضافة رمز لإغلاق القائمة عند النقر على رابط داخل القائمة
    document.querySelectorAll('.navber a').forEach(function (link) {
        link.addEventListener('click', function () {
            menu.classList.remove('bx-x');
            navbar.classList.remove('open');
        });
    });
});


sr.reveal('.logo',{delay:200, origin: 'lift'});
sr.reveal('.navber',{delay:400, origin: 'top'});
sr.reveal('.main-btn',{delay:520, origin: 'right'});

sr.reveal('.home-text span',{delay:600, origin: 'right'});
sr.reveal('.home-text h1',{delay:680, origin: 'left'});
sr.reveal('.home-text p',{delay:750, origin: 'right'});
sr.reveal('.main-btn',{delay:860, origin: 'lift'});

sr.reveal('.share',{delay:950, origin: 'bottom'});

sr.reveal('.home-img',{delay:1000, origin: 'right'});