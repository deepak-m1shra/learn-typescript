import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";


let myCircle = new Circle(1, 1, 10);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0, 0, 10, 20);
console.log(myRectangle.getInfo());

let shapes : Shape[] = [myCircle, myRectangle];

console.log("\n\nIn the for loop\n\n");

for(let shape of shapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea())
}