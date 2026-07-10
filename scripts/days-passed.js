/******************************************************************************
 *  Copyright (c) 2026 Janne Järvenpää <jarvenja@gmail.com>
 * 
 ******************************************************************************/
// => reloads since July 9, 2026

const started = new Date(2026, 6, 9); // US

function getDays(start, end) {
    let ms = end.getTime() - start.getTime();
    return Math.floor(ms / (1000 * 60 * 60 * 24));
}

function formatShort(date) {
    return date.toLocaleDateString('en-FI');
}

function updateDays() {
    let arr = [];
    arr.push(getDays(started, new Date()));
    arr.push(" days since ");
    arr.push(formatShort(started));
    let span = document.getElementById("Days");
    let txt = document.createTextNode(arr.join(""));
    span.appendChild(txt);
}

document.addEventListener('DOMContentLoaded', updateDays, false);
