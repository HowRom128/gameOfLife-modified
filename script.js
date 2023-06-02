//пофиксить спавн вируса во время старта игры



let matrix_width = 60;
let matrix_height = 40;
let variants = [1, 1, 2, 0, 2, 0, 1, 2, 3, 2, 2, 1, 2, 3, 0, 0, 1, 2, 3, 1, 0, 1, 2, 3, 4, 1, 0, 2, 1, 3, 0];
let matrix = [];
for(let i = 0; i < matrix_height; i++){
    let item = [];
    for(let i = 0; i < matrix_width; i++){
        item.push(variants[Math.floor(Math.random() * variants.length)]);
    }
    matrix.push(item);
}

  
 let side = 16;
 let grassArr = [];
 let grassEaterArr = [];
 let predatorArr = [];
 let omnivoreArr = [];
 let virusArr = [];
 let fireArr = [];
 let burntGrassArr = [];

 function mouseClicked(){
    if(mouseX < side * matrix_width && mouseY < side * matrix_height && mouseX > 0 && mouseY > 0){
        console.log(mouseX, mouseY);
        let indexY = parseInt(mouseY/side);
        console.log(indexY);
        let indexX = parseInt(mouseX/side);
        console.log(indexX);
        if (matrix[indexY][indexX] == 1){
            grassArr.splice(grassArr.findIndex(item => item.x === indexX && item.y === indexY), 1);
        }
        else if (matrix[indexY][indexX] == 2){
            grassEaterArr.splice(grassEaterArr.findIndex(item => item.x === indexX && item.y === indexY), 1);
        }
        else if (matrix[indexY][indexX] == 3){
            predatorArr.splice(predatorArr.findIndex(item => item.x === indexX && item.y === indexY), 1);
        }
        else if (matrix[indexY][indexX] == 4){
            omnivoreArr.splice(omnivoreArr.findIndex(item => item.x === indexX && item.y === indexY), 1);
        }
        else if (matrix[indexY][indexX] == 5){
            virusArr.splice(virusArr.findIndex(item => item.x === indexX && item.y === indexY), 1);
        }

        if(create == "Virus"){
            matrix[indexY][indexX] = 5;
            let virus1 = new Virus(indexX,indexY, 8, 5);
            virusArr.push(virus1);
        }
        else if(create == "Fire"){
            matrix[indexY][indexX] = 6;
            let fire1 = new Fire(indexX,indexY, 2, 6);
            fireArr.push(fire1);
        }
        else if(create =="Boom"){
            for (let y = indexY-5; y < indexY+5; y++){
                for(let x = indexX-5; x < indexX+5; x++){
                    thisCell = matrix[y][x];
                    if(thisCell == 1){
                        grassArr.splice(grassArr.findIndex(item => item.x === thisCell[0] && item.y === thisCell[1]), 1);
                    }
                    else if(thisCell == 2){
                        grassEaterArr.splice(grassEaterArr.findIndex(item => item.x === thisCell[0] && item.y === thisCell[1]), 1);
                    }
                    else if(thisCell == 3){
                        predatorArr.splice(predatorArr.findIndex(item => item.x === thisCell[0] && item.y === thisCell[1]), 1);
                    }
                    else if(thisCell == 4){
                        omnivoreArr.splice(omnivoreArr.findIndex(item => item.x === thisCell[0] && item.y === thisCell[1]), 1);
                    }
                    else if(thisCell == 5){
                        virusArr.splice(virusArr.findIndex(item => item.x === thisCell[0] && item.y === thisCell[1]), 1);
                    }
                    else if(thisCell == 6){
                        fireArr.splice(fireArr.findIndex(item => item.x === thisCell[0] && item.y === thisCell[1]), 1);
                    }
                    matrix[y][x] = 7;
                    let boom1 = new BurntGrass(x,y, 8, 7);
                    burntGrassArr.push(boom1);
                }
            }
        }
    }
 }

 function draw() {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                if(season == "Summer"){
                    fill("#21ac5a");
                }
                else if(season == "Winter"){
                    fill("white");
                }
                else if(season == "Spring"){
                    fill("#CAFE69");
                }
                else if(season == "Fall"){
                    fill("#FF8866");
                }
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if(matrix[y][x] == 2){
                fill('#FAFF7F');
            }
            else if(matrix[y][x] == 3){
                fill('#FF8833');
            }
            else if(matrix[y][x] == 4){
                fill('#7F96FF');
            }
            else if(matrix[y][x] == 5){
                fill('#E56399');
            }
            else if(matrix[y][x] == 6){
                fill('#db4320');
            }
            else if(matrix[y][x] == 7){
                fill('#370000');
            }
            rect(x*side, y*side, side, side);   
        }
    }
         for(let i in grassEaterArr){
            grassEaterArr[i].mult();
            if(grassEaterArr[i].energy==0){
                matrix[grassEaterArr[i].y][grassEaterArr[i].x] = 0;
                grassEaterArr.splice(i, 1);
            }
            else{
                if(grassEaterArr[i].eat() == true){
                    grassEaterArr.splice(i, 1);
                }
                else if(grassEaterArr[i].move() == true){
                    grassEaterArr.splice(i, 1);
                } 
            }
         }
         for(let i in predatorArr){
            predatorArr[i].mult();
            if(predatorArr[i].energy==0){
                matrix[predatorArr[i].y][predatorArr[i].x] = 0;
                predatorArr.splice(i, 1);
            }
            else{
                if(predatorArr[i].eat() == true){
                    predatorArr.splice(i, 1);
                }
                else if(predatorArr[i].move() == true){
                    predatorArr.splice(i, 1);
                } 
            }
         }
         for(let i in omnivoreArr){
            omnivoreArr[i].mult();
            if(omnivoreArr[i].energy==0){
                matrix[omnivoreArr[i].y][omnivoreArr[i].x] = 0;
                omnivoreArr.splice(i, 1);
            }
            else{
                if(omnivoreArr[i].eat() == true){
                    omnivoreArr.splice(i, 1);
                }
                else if(omnivoreArr[i].move() == true){
                    omnivoreArr.splice(i, 1);
                } 
            }
         }
         for(let i in virusArr){
            virusArr[i].mult();
            if(virusArr[i].energy==0){
                matrix[virusArr[i].y][virusArr[i].x] = 0;
                virusArr.splice(i, 1);
            }
            else{
                if(virusArr[i].eat() == true){
                    virusArr.splice(i, 1);
                }
                else if(virusArr[i].move() == true){
                    virusArr.splice(i, 1);
                } 
            }
         }
         for(let i in fireArr){
            fireArr[i].mult();
            if(fireArr[i].energy==0){
                matrix[fireArr[i].y][fireArr[i].x] = 0;
                fireArr.splice(i, 1);
            }
            else{
                if(fireArr[i].eat() == true){
                    fireArr.splice(i, 1);
                }
                else if(fireArr[i].move() == true){
                    fireArr.splice(i, 1);
                } 
            }
         }
         for(let i in burntGrassArr){
            console.log("OKKKKKK")
            burntGrassArr[i].loseEnergy();
            if(burntGrassArr[i].energy==0){
                matrix[burntGrassArr[i].y][burntGrassArr[i].x] = 0;
                burntGrassArr.splice(i, 1);
            }
         }
         for(let i in grassArr){
            if(season == "Winter"){
                grassArr[i].mulInWinter();
            }
            else{
                grassArr[i].mul();
            }
         }
         
         
 }

 function setup() {   
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for(let y = 0; y < matrix.length; y++){
        for(let x = 0; x < matrix[y].length; x++){
           if(matrix[y][x]==1){
               let gr1 = new Grass(x,y);
               grassArr.push(gr1);
            }
           else if(matrix[y][x] == 2){
               let grEat1 = new GrassEater(x,y, 8);
               grassEaterArr.push(grEat1);
            }
            else if(matrix[y][x] == 3){
                let pred1 = new Predator(x,y, 8);
                predatorArr.push(pred1);
             }
             else if(matrix[y][x] == 4){
                let omni1 = new Omnivore(x,y, 8);   
                omnivoreArr.push(omni1);
             }
        }
    }
 }

 setInterval(()=> {
    fetch("http://localhost:3000/", {
        method: "POST",
        body: `Кол-во травы: ${grassArr.length}, Кол-во травоядных: ${grassEaterArr.length}, Кол-во хищников: ${predatorArr.length}, Кол-во всеядных: ${omnivoreArr.length}, Кол-во вирусов: ${virusArr.length}, Кол-во огня: ${fireArr.length}, Кол-во выжженой земли: ${burntGrassArr.length}`
    })
 }, 10000)

 function endFire(){
    for(let i in fireArr){
        matrix[fireArr[i].y][fireArr[i].x] = 0;
        fireArr.splice(i, 1);
     }
 }