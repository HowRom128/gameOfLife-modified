class Virus extends LivingCreature{
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
            
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 5;
            this.x = newX
            this.y = newY
            this.energy--
            let newVirus = new Virus(newX, newY, this.energy, 5);
            virusArr.push(newVirus);
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
            matrix[newY][newX] = 5;
            this.x = newX
            this.y = newY
            this.energy+=2
            let newVirus = new Virus(newX, newY, this.energy, 5);
            virusArr.push(newVirus);

            grassArr.splice(grassArr.findIndex(item => item.x === grCell[0] && item.y === grCell[1]), 1);
            return true;
        }
        else{
            let grEatCell = random(this.chooseCell(2));
            if(grEatCell){
                let newX = grEatCell[0];
                let newY = grEatCell[1];
                
                matrix[this.y][this.x] = 0;
                matrix[newY][newX] = 5;
                this.x = newX
                this.y = newY
                this.energy+=2
                let newVirus = new Virus(newX, newY, this.energy, 5);
                virusArr.push(newVirus);
    
                grassEaterArr.splice(grassEaterArr.findIndex(item => item.x === grEatCell[0] && item.y === grEatCell[1]), 1);
                return true;
            }
            else{
                let predCell = random(this.chooseCell(3));
                if(predCell){
                    let newX = predCell[0];
                    let newY = predCell[1];
                    
                    matrix[this.y][this.x] = 0;
                    matrix[newY][newX] = 5;
                    this.x = newX
                    this.y = newY
                    this.energy+=2
                    let newVirus = new Virus(newX, newY, this.energy, 5);
                    virusArr.push(newVirus);
        
                    predatorArr.splice(predatorArr.findIndex(item => item.x === predCell[0] && item.y === predCell[1]), 1);
                    return true;
                }
                else{
                    let omniCell = random(this.chooseCell(4));
                    if(omniCell){
                            let newX = omniCell[0];
                            let newY = omniCell[1];
                    
                            matrix[this.y][this.x] = 0;
                            matrix[newY][newX] = 5;
                            this.x = newX
                            this.y = newY
                            this.energy+=2
                            let newVirus = new Virus(newX, newY, this.energy, 5);
                            virusArr.push(newVirus);
        
                            omnivoreArr.splice(omnivoreArr.findIndex(item => item.x === omniCell[0] && item.y === omniCell[1]), 1);
                    return true;
                    }
                    else{
                        return false;
                    }
                
                }
            }
        }
}
    mult(){
        if(this.energy>=20){
            this.getNewCoordinates()
            let emptyCells = [...this.chooseCell(1), ...this.chooseCell(2), ...this.chooseCell(3)]
            let newCell = random(emptyCells);
            if(newCell){
                let newX = newCell[0];
                let newY = newCell[1];
            
                matrix[newY][newX] = 5;
                let newVirus = new Virus(newX, newY, this.energy, 5);
                virusArr.push(newVirus);
            }
            this.energy = 10
        }
    }
}