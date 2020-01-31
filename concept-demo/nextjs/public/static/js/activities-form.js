(function () {
    'use strict';   
    var age = 0;
    var date = document.querySelector('input[name=date]');

    date.max = new Date().toISOString().split('T')[0];
    $('#age').change(function(){
        console.log("test2");
        age = $('#age').val();
        var maxrate = 220  - age;
        var moderate = maxrate * 0.7;
        var vigorous = maxrate * 0.85;
        document.querySelector('#heartrate').innerHTML = 'Your max heart rate is '+ maxrate + ' bpm'
        document.querySelector('#mintensity').innerHTML = 'Heart rate during moderate intensity exercises is up to ' + moderate.toFixed(0) + ' bpm' 
        document.querySelector('#vintensity').innerHTML = 'Heart rate during vigorous intensity exercises is up to ' + vigorous.toFixed(0) + ' bpm';
    })
    $('.heartrateform').submit(function(e){
        e.preventDefault(e);
    })

    const form = document.querySelector('form');
    function checkFormValidity() {
        form.querySelectorAll('input, select').forEach(x => {
            if (!x.checkValidity()) return false;
            return true;
        })
    }

    document.querySelector('button[type=button]').addEventListener('click', e => {
        e.preventDefault();
        // exerciseInterval();
        // if (checkFormValidity()) {
            document.querySelector('#result').innerHTML = 'Thank you for responses';
        // }
    }, false);
}());