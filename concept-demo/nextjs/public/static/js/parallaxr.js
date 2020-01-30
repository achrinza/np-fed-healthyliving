(function() {
    'use strict';

   const targets = document.querySelectorAll('*[data-parallaxr]');

   targets.forEach(x => {
        const pixelDrift = x.getAttribute('data-parallaxr-drift');
        const startFrom = x.getAttribute('data-parallaxr-startfrom');

        x.style.position = 'relative';

        window.addEventListener('scroll', () => {
            const screenPosPercentage = (x.getBoundingClientRect().top +
                (startFrom == 'top' ? 0 : x.offsetHeight / 2))
                / window.innerHeight * (pixelDrift / 100);
            x.style.transform = `translateY(${screenPosPercentage * 100}%)`;
            console.log(screenPosPercentage);
            console.log(pixelDrift)
        });
   });
}());
