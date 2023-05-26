let season = "Summer";

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

let winter = document.getElementById("Winter");
winter.addEventListener("click", changeSeasonWinter);

let spring = document.getElementById("Spring");
spring.addEventListener("click", changeSeasonSpring);

let summer = document.getElementById("Summer");
summer.addEventListener("click", changeSeasonSummer);

let fall = document.getElementById("Fall");
fall.addEventListener("click", changeSeasonFall);