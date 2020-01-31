(function () {
    const targets = document.querySelectorAll('*[data-styckr]');

    targets.forEach(x => {
        window.addEventListener('scroll', () => {
            const prevPosition = x.style.position;
            const prevTop = x.style.top
            if (window.pageYOffset > x.offsetTop) {
                x.style.position = "fixed";
                x.style.top = "0";
            } else {
                x.style.position = prevPosition;
                x.style.top = prevTop;
            }
        })
    });
}());
