 class Grass extends LivingCreature{
    constructor(x, y, index, directions) {
        super(x, y, index, directions);
        this.multiply = 0;
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

    mul () {
        this.multiply++;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if(newCell && this.multiply >= 5){
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 1;
            let newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }

    mulInWinter () {
        this.multiply++;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if(newCell && this.multiply >= 10){
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 1;
            let newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }
}
