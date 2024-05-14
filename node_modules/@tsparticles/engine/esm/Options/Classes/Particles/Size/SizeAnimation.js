import { RangedAnimationOptions } from "../../AnimationOptions.js";
export class SizeAnimation extends RangedAnimationOptions {
    constructor() {
        super();
        this.destroy = "none";
        this.speed = 5;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        if (data.destroy !== undefined) {
            this.destroy = data.destroy;
        }
    }
}
