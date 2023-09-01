import { Shape } from "./Shape";

export class Circle extends Shape {
    
    calculateArea(): number {
        return 2 * Math.PI * this._radius;
    }

    constructor(private _xx : number,
                private _yy : number,
                private _radius: number){
        super(_xx, _yy);
    }

    public get radius(): number {
        return this._radius;
    }

    public set radius(value: number) {
        this._radius = value;
    }

    getInfo(): string {
        return super.getInfo() +`, radius=${this._radius}`;
    }

}