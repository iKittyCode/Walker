var walk;
function setup() {
walk = new Walk()
createCanvas(400, 400)
background(0)
}
function draw() {

walk.show()
walk.update()
}