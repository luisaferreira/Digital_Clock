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
