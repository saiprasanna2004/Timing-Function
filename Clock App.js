function showTime(){
    const date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    h=(h<10)?"0"+h:h;
    m=(m<10)?"0"+m:m;
    s=(s<10)?"0"+s:s;
    const time=h+":"+m+":"+s;
    document.getElementById("clock").innerText=time;
    document.getElementById("clock").textContent=time;
}
setInterval(showTime,1000);
showTime();