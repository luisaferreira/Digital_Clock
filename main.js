const button = document.querySelector('[data-button]');

button.addEventListener('click', switchMode());


function time() {
    today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();

    document.querySelector('[data-hours]').innerHTML = h;
    document.querySelector('[data-minutes]').innerHTML = m;
    document.querySelector('[data-seconds]').innerHTML = s;
    
    setTimeout('time()', 500);
}

function switchMode() {
    const body = document.querySelector('[data-body]');
    body.classList.toggle('darkMode');
}
