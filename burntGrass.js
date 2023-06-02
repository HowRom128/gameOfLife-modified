class BurntGrass extends LivingCreature{
    constructor(x,y,index) {
        super(x, y, index)
        this.energy = 5;
    }
    loseEnergy(){
        this.energy--;
        console.log("Lose")
    }
}
