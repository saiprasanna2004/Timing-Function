const lights=['red','yellow','green'];
let currentLightIndex=0;

function changeLight(){
    lights.forEach(id=>document.getElementById(id).classList.remove('active'));

    const currentLightId=lights[currentLightIndex];
    document.getElementById(currentLightId).classList.add('active');
    currentLightIndex=(currentLightIndex+1)%lights.length;
}
setInterval(changeLight,3000);
changeLight();