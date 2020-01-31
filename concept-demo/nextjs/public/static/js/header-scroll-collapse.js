(function() {
    'use strict';

    let windowLastYOffset = window.pageYOffset;
    let header = document.querySelector('.block-page-header');
    let hero = document.querySelector('.hero');

    window.addEventListener('scroll', () => {
        let windowCurrentYOffset = window.pageYOffset;
        
        if (windowCurrentYOffset > hero.clientHeight) {
            header.classList.add('block-page-header--is-flattened');

            if (windowCurrentYOffset > windowLastYOffset + 200) {
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
