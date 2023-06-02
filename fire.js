class Fire extends LivingCreature{
    constructor(x,y,energy,index, directions) {
        super(x, y, index, directions);
        this.energy = energy;
        this.directions = [];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    getNewCoordinates(){
            this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    move(){
        this.getNewCoordinates()
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if(newCell && this.energy>=1){
            let newX = newCell[0];
            let newY = newCell[1];
            
            matrix[this.y][this.x] = 7;
            matrix[newY][newX] = 6;
            let newBurnt = new BurntGrass(this.x, this.y, 7);
            burntGrassArr.push(newBurnt);
            this.x = newX
            this.y = newY
            this.energy--
            let newFire = new Fire(newX, newY, this.energy, 6);
            fireArr.push(newFire);
            return true
        }else{
            return false
        }
    }
    eat(){
        this.getNewCoordinates()
        let grCell = random(this.chooseCell(1));
        if(grCell){
            let newX = grCell[0];
            let newY = grCell[1];
            
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 6;
            this.x = newX
            this.y = newY
            this.energy++
            let newFire = new Fire(newX, newY, this.energy, 6);
            fireArr.push(newFire);

            grassArr.splice(grassArr.findIndex(item => item.x === grCell[0] && item.y === grCell[1]), 1);
            return true;
        }
        else{
            let grEatCell = random(this.chooseCell(2));
            if(grEatCell){
                let newX = grEatCell[0];
                let newY = grEatCell[1];
                
                matrix[this.y][this.x] = 0;
                matrix[newY][newX] = 6;
                this.x = newX
                this.y = newY
                this.energy++
                let newFire = new Fire(newX, newY, this.energy, 6);
                fireArr.push(newFire);
    
                grassEaterArr.splice(grassEaterArr.findIndex(item => item.x === grEatCell[0] && item.y === grEatCell[1]), 1);
                return true;
            }
            else{
                let predCell = random(this.chooseCell(3));
                if(predCell){
                    let newX = predCell[0];
                    let newY = predCell[1];
                    
                    matrix[this.y][this.x] = 0;
                    matrix[newY][newX] = 6;
                    this.x = newX
                    this.y = newY
                    this.energy++
                    let newFire = new Fire(newX, newY, this.energy, 6);
                    fireArr.push(newFire);
        
                    predatorArr.splice(predatorArr.findIndex(item => item.x === predCell[0] && item.y === predCell[1]), 1);
                    return true;
                }
                else{
                    let omniCell = random(this.chooseCell(4));
                    if(omniCell){
                            let newX = omniCell[0];
                            let newY = omniCell[1];
                    
                            matrix[this.y][this.x] = 0;
                            matrix[newY][newX] = 6;
                            this.x = newX
                            this.y = newY
                            this.energy++
                            let newFire = new Fire(newX, newY, this.energy, 6);
                            fireArr.push(newFire);
        
                            omnivoreArr.splice(omnivoreArr.findIndex(item => item.x === omniCell[0] && item.y === omniCell[1]), 1);
                            return true;
                    }
                    else{
                            let virusCell = random(this.chooseCell(5));
                            if(virusCell){
                                let newX = virusCell[0];
                                let newY = virusCell[1];
                    
                                matrix[this.y][this.x] = 0;
                                matrix[newY][newX] = 6;
                                this.x = newX
                                this.y = newY
                                this.energy++
                                let newFire = new Fire(newX, newY, this.energy, 6);
                                fireArr.push(newFire);
        
                                virusArr.splice(virusArr.findIndex(item => item.x === virusCell[0] && item.y === virusCell[1]), 1);
                                return true;
                            }
                            else{
                                return false;
                            }
                    }
                
                }
            }
        }
}
    mult(){
        if(this.energy>=40){
            this.getNewCoordinates()
            let emptyCells = [...this.chooseCell(1)]
            let newCell = random(emptyCells);
            if(newCell){
                let newX = newCell[0];
                let newY = newCell[1];
            
                matrix[newY][newX] = 6;
                let newFire = new Fire(newX, newY, this.energy, 6);
                fireArr.push(newFire);
            }
            this.energy = 5;
        }
    }
}