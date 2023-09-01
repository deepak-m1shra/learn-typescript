import { Shape } from "./Shape";


export class Rectangle extends Shape {

    calculateArea(): number {
        return this._length * this._width;
    }

    constructor(private _xx : number,
                private _yy :number,
                private _length: number,
                private _width: number) {
                    super(_xx, _yy);
                }

    public get width(): number {
        return this._width;
    }

    public set width(value: number) {
        this._width = value;
    }

    public get length(): number {
        return this._length;
    }

    public set length(value: number) {
        this._length = value;
    }

    getInfo(): string {
        return super.getInfo() + `, width= ${this._width}, height=${this._length}`;
    }

}