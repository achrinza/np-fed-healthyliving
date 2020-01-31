(function() {
    'use strict';

    const target = document.querySelector('.block-site-navbar');
    const toggler = document.querySelector('.block-site-navbar-toggler');
    let collapsed = true;
    toggler.addEventListener('click', () => {
        if (!collapsed) {
            target.classList.add('block-site-navbar--is-collapsed');
            toggler.innerHTML = "menu";
            collapsed = true;
        } else {
            target.classList.remove('block-site-navbar--is-collapsed');
            toggler.innerHTML = "cancel";
            collapsed = false;
        }
    });
}());
