let timerId;

function startTimer() {
    document.getElementById("message").innerText="Timer started for 3 seconds...";
    timerId=setTimeout(()=>{
        document.getElementById("message").innerText="Timeout function executed!";
    },3000);
}

function stopTimer(){
    clearTimeout(timerId);
    document.getElementById("message").innerText="Timeout function stopped";

}