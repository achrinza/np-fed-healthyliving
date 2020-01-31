document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    let name = document.getElementById('feedname');
    document.getElementById('reply').innerHTML = "Thank You For Your Response, " + name.value;
})