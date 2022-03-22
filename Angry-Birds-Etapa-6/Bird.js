class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage= loadImage("sprites/smoke.png");
    this.trayecotrie = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    console.log(this.body.position);
    if ( this.body.velocity.x > 1 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
    this.trayecotrie.push(position);
    }
    for (var h = 0; h < this.trayecotrie.length; h++){
      image(this.smokeimage,this.trayecotrie[h][0], this.trayecotrie [h][1]);

    }
  }
}
