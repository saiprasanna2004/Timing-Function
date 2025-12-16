let counter=10;
let intervalId;

function startCountdown() {
    intervalId=setInterval(()=> {
        document.getElementById("numbers").innerText=counter;
        if(counter<=5){
            clearInterval(intervalId);
            document.getElementById("numbers").innerText+="(Stopped)";
                }
                counter--;
    },1000);
}