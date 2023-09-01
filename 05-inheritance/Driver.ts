import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape = new Shape(0, 0);
console.log(myShape.getInfo());

let myCircle = new Circle(1, 1, 10);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0, 0, 10, 20);
console.log(myRectangle.getInfo());

let shapes : Shape[] = [myShape, myCircle, myRectangle];

console.log("\n\nIn the for loop\n\n");

for(let shape of shapes) {
    console.log(shape.getInfo());
}