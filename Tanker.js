class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
     this.x= x;
     this.y= y;
    };

    display(){
      var pos =this.body.position;
      fill(225)
      rect(this.body.position.x,this.body.position.y, this.width, this.height);
    }
  }