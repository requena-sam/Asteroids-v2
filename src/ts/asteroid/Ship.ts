import {Triangle} from "../framework25/shapes/Triangle";
import {iPosition} from "../framework25/types/iPosition";
import {iColor} from "../framework25/types/iColor";
import {settings} from "./settings";

export class Ship extends Triangle {
    private canvas: HTMLCanvasElement;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        super(ctx, {
            x: canvas.width / 2,
            y: canvas.height / 2,
        }, settings.ship.color, settings.ship.width, settings.ship.height, 0);
        this.canvas = canvas;
    }

}