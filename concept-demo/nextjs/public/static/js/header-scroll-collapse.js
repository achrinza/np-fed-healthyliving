(function() {
    'use strict';

    let windowLastYOffset = window.pageYOffset;
    let header = document.querySelector('.block-page-header');
    let headerOffset = document.querySelector('.block-page-header-height-offset');
    let hero = document.querySelector('.hero-img');

    window.addEventListener('scroll', () => {
        let windowCurrentYOffset = window.pageYOffset;
        
        if (windowCurrentYOffset > hero.clientHeight) {
            header.classList.add('block-page-header--is-flattened');

            if (windowCurrentYOffset > windowLastYOffset + 300) {
                header.classList.add('block-page-header--is-collapsed');
                windowLastYOffset = window.pageYOffset;
            }
            else if (windowCurrentYOffset < windowLastYOffset) {
                header.classList.remove('block-page-header--is-collapsed');
                windowLastYOffset = window.pageYOffset;
            }
        }
        else {
            header.classList.remove('block-page-header--is-flattened');
        }
    });

    // headerOffset.style.height = `${header.clientHeight}px`;
}());
