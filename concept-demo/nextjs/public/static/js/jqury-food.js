(function() {
    'use-strict';

    function setVisibility(id) {
        let visibility = document.getElementById(id).style.display;
        switch (visibility.value) {
            case 'none':
                visibility.value = 'inline';
            case 'inline':
                visibility.value = 'none';
        }
        document.getElementById(id).style.display = visibility.value;
    }
    let veg = document.getElementById('veg');
    let carbs = document.getElementById('carbs');
    let meat = document.getElementById('meat');

    setVisibility(carbs);
    setVisibility(meat);
    veg.addEventListener('click', () => {
        setVisibility('veg');
    })
    carbs.addEventListener('click', () => {
        setVisibility('carbs');
    })
    meat.addEventListener('click', () => {
        setVisibility('meat');
    })
})