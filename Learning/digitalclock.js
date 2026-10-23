
function showTime()
{
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let session = "AM"

    if(h==0) //displaying 00 as 12
    h=12;

    if (h>12)//converting to 12h clock
    h=h-12;
    session = "PM";

    if (h<10)//adding 0 to the front of single digit hrs
    h = "0"+h;

    if (m<10)//adding 0 to the front of single digit minutes
    m = "0"+m;
    
    if (s<10)//adding 0 to the front of single digit seconds
    s = "0"+s;


    let day = date.getDate();
    let mon = date.getMonth()+1;
    let year = date.getFullYear();

    let time = h +":"+ m +":"+ s+" "+session;
    document.getElementById("dc").innerText = time;
    let today = day +"-"+ mon +"-"+ year;
    document.getElementById("dd").innerText = today;
    setTimeout(showTime,1000);
}

showTime();