class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    getNewDirections()
    {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewDirections()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x >= 0 && x<matrix[0].length && y >=0 && y<matrix.length)
            {
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        }
        return found;
    }
    
    mult() {
        this.multiply++;
        var empty = random(this.chooseCell(0));
        if (empty && this.multiply > 6) {
           
            var x = empty[0];
            var y = empty[1];
            matrix[y][x] = 1;

            var gr = new Grass(x, y, 1)
            grassArr.push(gr)
        }
    }
}

class Xotaker {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    getNewDirections()
    {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) { 
        this.getNewDirections()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x >= 0 && x<matrix[0].length && y >=0 && y<matrix.length)
            {
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        }
        return found;
    }
    
    mult() {
        this.multiply++;
        var empty = random(this.chooseCell(0));
        if (empty && this.multiply > 6) {
           
            var x = empty[0];
            var y = empty[1];
            matrix[y][x] = 2;

            var kt = new Xotaker(x, y, 1)
            xotakerArr.push(kt)
        }
    }
    move()
    {
        var empty = random(this.chooseCell(0));
        this.energy--  
        if (empty) {
           
            var x = empty[0];
            var y = empty[1];
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;

        }      
    }
    eat()
    {
        var empty = random(this.chooseCell(1));
        if(empty)
        {
            this.energy++
            var x = empty[0];
            var y = empty[1];
            matrix[y][x] = 2; 
            matrix[this.y][this.x] = 0;   
            for(var i in grassArr)
            {
                if(grassArr[i].x == x && grassArr[i].y == y)
                {
                    grassArr.splice(i,1)
                }
            }
            this.y = y;
            this.x = x;
        }
    }
    die()
    {
        if(this.energy <= 0){
            matrix[this.y][this.x] = 0;
            for(var i in xotakerArr)
            {
                if(xotakerArr[i].x == this.x && xotakerArr[i].y == this.y)
                {
                    xotakerArr.splice(i,1)
                }
            }
        }
    }
}


class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    getNewDirections()
    {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) { 
        this.getNewDirections()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x >= 0 && x<matrix[0].length && y >=0 && y<matrix.length)
            {
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        }
        return found;
    }
    
    mult() {
        this.multiply++;
        var empty = random(this.chooseCell(0));
        if (empty && this.multiply > 6) {
           
            var x = empty[0];
            var y = empty[1];
            matrix[y][x] = 3;

            var gt = new Gishatich(x, y, 1)
            gishatichArr.push(gt)
        }
    }
    move()
    {
        var empty = random(this.chooseCell(0));
        this.energy--  
        if (empty) {
           
            var x = empty[0];
            var y = empty[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;

        }      
    }
    eat()
    {
        var empty = random(this.chooseCell(2));
        if(empty)
        {
            this.energy++
            var x = empty[0];
            var y = empty[1];
            matrix[y][x] = 3; 
            matrix[this.y][this.x] = 0;   
            for(var i in xotakerArr)
            {
                if(xotakerArr[i].x == x && xotakerArr[i].y == y)
                {
                    xotakerArr.splice(i,1)
                }
            }
            this.y = y;
            this.x = x;
        }
    }
    die()
    {
        if(this.energy <= 0){
            matrix[this.y][this.x] = 0;
            for(var i in gishatichArr)
            {
                if(gishatichArr[i].x == this.x && gishatichArr[i].y == this.y)
                {
                    gishatichArr.splice(i,1)
                }
            }
        }
    }
}
class Drakon {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    getNewDirections()
    {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    chooseCell(character) { 
        this.getNewDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x >= 0 && x<matrix[0].length && y >=0 && y<matrix.length)
            {
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        }
        return found;
    }
    mult() {
        this.multiply++;
        var empty = random(this.chooseCell(0));
        if (empty && this.multiply > 6) {
           
            var x = empty[0];
            var y = empty[1];
            matrix[y][x] = 4;

            var dr = new Drakon(x, y, 1)
            drakonArr.push(dr)
        }
    }
    move()
    {
        var empty = random(this.chooseCell(0));
        this.energy--  
        if (empty) {
           
            var x = empty[0];
            var y = empty[1];
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;

        }      
    }
    eat()
    {
        var empty = random(this.chooseCell(3));
        var empty = random(this.chooseCell(2));
        if(empty)
        {
            this.energy++
            var x = empty[0];
            var y = empty[1];
            matrix[y][x] = 4; 
            matrix[this.y][this.x] = 0;   

            for(var i in gishatichArr)
            {
                if(gishatichArr[i].x == x && gishatichArr[i].y == y)
                {
                    gishatichArr.splice(i,1)
                }

            }
            for(var i in xotakerArr)
            {
                if(xotakerArr[i].x == x && xotakerArr[i].y == y)
                {
                    xotakerArr.splice(i,1)
                }

            }            
            this.y = y;
            this.x = x;
        }
    }
    die()
    {
        if(this.energy <= 0){
            matrix[this.y][this.x] = 0;
            for(var i in drakonArr)
            {
                if(drakonArr[i].x == this.x && drakonArr[i].y == this.y)
                {
                    drakonArr.splice(i,1)
                }
            }
        }
    }
}


class Ararich {
    constructor(x,y){
            this.x = x;
            this.y = y;
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

        chooseCell() {
           var found = [];
           for (var i in this.directions) {
             var x = this.directions[i][0];
             var y = this.directions[i][1];
                 if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                        found.push(this.directions[i]);
             }
           }
           return random(found);
        }

    create() {
      var norVandak = this.chooseCell();
      var x = norVandak[0];
      var y = norVandak[1];
      if (matrix[y][x] == 0) {
        matrix[y][x] = 2;
        var kt = new Xotaker(y, x);
        xotakerArr.push(kt);
      }
      else if (matrix[y][x] == 1) {
        var kt = new Xotaker(x, y);
        xotakerArr.push(kt);
        matrix[x][y] = 2;
        for (var i in grassArr) {
          if (grassArr[i].x == x && grassArr[i].y == y) {
            grassArr.splice(i, 1);
            break;
          }
        }
      }
    
}

}
    


