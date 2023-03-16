let name = prompt("Adınızı Giriniz")
let myName = document.querySelector('#myName')

myName.innerHTML = name;

function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let days= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

    if (h<10) {
        h = "0" + h;
    } else {
        h;
    }
    if (m<10) {
        m = "0" + m;
    } else {
        m;
    }
    if (s<10) {
        s = "0" + s;
    } else {
        s;
    }

    let time = `${h}:${m}:${s} ${days[date.getDay()]}`
    document.querySelector('#myClock').innerHTML = time;
    

    setTimeout(showTime, 1000);
}

showTime();