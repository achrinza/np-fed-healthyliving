(function () {
    'use strict';

    const targets = document.querySelectorAll('*[data-animatr]');

    function applyAnimSwipeUp(target) {
        window.addEventListener('scroll', () => {
            if (((target.getBoundingClientRect().top + target.offsetHeight / 2) / window.innerHeight < .6)) {
                target.classList.add('animatr-triggered');
            }
        });
    }

    targets.forEach(x => {
        const animType = x.getAttribute('data-animatr');
        applyAnimSwipeUp(x);

        // switch (animType) {
        //     case 'swipe-up':
        //         break;
        // }
    });
}());
