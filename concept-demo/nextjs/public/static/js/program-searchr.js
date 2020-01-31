(function() {
    const searcherTarget = document.querySelector('.block-programme-search__textbox');
    const possibleResultsTarget = document.querySelectorAll('.block-programme');

    searcherTarget.addEventListener('input', () => {
        possibleResultsTarget.forEach(x => {
            if (searcherTarget.value == "") {
                x.style.display = "block";
            } else if (
                x.querySelector('h2').innerHTML.toLowerCase().replace(/[,.'" ]/g, '').includes(searcherTarget.value.toLowerCase().replace(/[,.'" ]/g, '')) ||
                x.querySelector('p').innerHTML.toLowerCase().replace(/[,.'" ]/g, '').includes(searcherTarget.value.toLowerCase().replace(/[,.'" ]/g, ''))
            ) {
                x.style.display = "block";
                x.classList.add('animatr-triggered');
            } else {
                x.style.display = "none";
            }
        })
    });
}());
