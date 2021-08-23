class CA {
    constructor() {
        this.w = 10;
        this.grid = [];
        for (let i = 0; i < width / this.w; i++) {
            this.grid[i] = 0;
        }
        this.ruleSet = [0, 0, 0, 1, 1, 1, 1, 0];
        //this.ruleSet = [0, 1, 1, 0, 1, 1, 1, 0];
        this.grid[this.grid.length / 2] = 1;
        this.generation = 0;
    }

    display() {
        
        noStroke();
        for (let i = 0; i < this.grid.length; i++) {
            if (this.grid[i] == 1) {
                fill(255);
                rect(i * this.w, this.w * this.generation, this.w, this.w);
            }else{
                fill(0);
                rect(i * this.w, this.w * this.generation, this.w, this.w);
            }
        }
    }

    generate() {
        let nextGen = [];
        for (let i = 0; i < this.grid.length;i++) {nextGen[i] = 0;}
        for (let i = 1; i < this.grid.length - 1; i++) {
            let a = this.grid[i - 1];
            let b = this.grid[i];
            let c = this.grid[i + 1];
            nextGen[i] = this.evolve(a, b, c);
        }
        this.grid = nextGen; 
        this.generation++;
    }

    evolve(a, b, c) {
        //111	110	101	100	011	010	001	000
        if (a == 1 & b == 1 & c == 1) return this.ruleSet[0];
        if (a == 1 & b == 1 & c == 0) return this.ruleSet[1];
        if (a == 1 & b == 0 & c == 1) return this.ruleSet[2];
        if (a == 1 & b == 0 & c == 0) return this.ruleSet[3];
        if (a == 0 & b == 1 & c == 1) return this.ruleSet[4];
        if (a == 0 & b == 1 & c == 0) return this.ruleSet[5];
        if (a == 0 & b == 0 & c == 1) return this.ruleSet[6];
        if (a == 0 & b == 0 & c == 0) return this.ruleSet[7];
        return 0;
    }

    check(){
        if (this.generation*this.w > height){
            this.generation = 0;
        }
    }
}