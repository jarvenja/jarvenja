/*****************************************************************************
 *  Copyright (c) 2026 Janne Järvenpää <jarvenja@gmail.com>
 * 
 *****************************************************************************/
const started = new Date(2026, 6, 9); // zero based

function getDaysDiff(start, end) {
    let ms = end.getTime() - start.getTime();
    return Math.floor(ms / (1000 * 60 * 60 * 24));
}

function getSimpleStr(date) {
    return date.toLocaleDateString('en-FI');
}

function reportDays() {
    let arr = [];
    arr.push("reloads and ")
    arr.push(getDaysDiff(started, new Date()));
    arr.push(" days since ");
    arr.push(getSimpleStr(started));
    let txt = document.createTextNode(arr.join(""));
    let div = document.getElementById("Counter");
    div.appendChild(txt);
}

document.addEventListener('DOMContentLoaded', reportDays, false);

// <b>reloads</b>
// <span>&nbsp;and&nbsp;</span>
