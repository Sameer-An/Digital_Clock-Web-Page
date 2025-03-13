let Hdiv = document.querySelector(".hour");
let Mdiv = document.querySelector(".minute");
let Sdiv = document.querySelector(".second");

let date = document.querySelector(".content");

setInterval(() => {
    let Htime = new Date().getHours();
    let Mtime = new Date().getMinutes();
    let Stime = new Date().getSeconds();

    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    Hdiv.innerText = `${Htime}`;
    Mdiv.innerText = `${Mtime}`;
    Sdiv.innerText = `${Stime}`;

    date.innerText = `${day}  /  ${month}  /  ${year}`;

}, 1000);