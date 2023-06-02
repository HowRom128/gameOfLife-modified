let season = "Summer";
let create = "Virus";

function changeSeasonWinter(){
    season = "Winter";
}

function changeSeasonSpring(){
    season = "Spring";
}

function changeSeasonSummer(){
    season = "Summer";
}

function changeSeasonFall(){
    season = "Fall";
}

function createVirus(){
    create = "Virus";
    console.log(create);
}

function createFire(){
    create = "Fire";
    console.log(create);
}

function createBoom(){
    create = "Boom";
    console.log(create);
}

let winter = document.getElementById("Winter");
winter.addEventListener("click", changeSeasonWinter);

let spring = document.getElementById("Spring");
spring.addEventListener("click", changeSeasonSpring);

let summer = document.getElementById("Summer");
summer.addEventListener("click", changeSeasonSummer);

let fall = document.getElementById("Fall");
fall.addEventListener("click", changeSeasonFall);

let virus = document.getElementById("Virus");
virus.addEventListener("click", createVirus);

let fire = document.getElementById("Fire");
fire.addEventListener("click", createFire);

let boom = document.getElementById("Boom");
boom.addEventListener("click", createBoom);