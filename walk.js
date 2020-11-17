class Walk{
constructor() {
this.pos = createVector(200, 200)
this.vel;
}
update() {
this.vel = createVector(random(-3, 3), random(-3, 3))
this.pos.add(this.vel)

}
show() {
noFill()

strokeWeight(4)
stroke(255);
point(this.pos.x, this.pos.y, 200, 200)
}
}