import { Events } from "./Events/Events.js";
import { Modes } from "./Modes/Modes.js";
export class Interactivity {
    constructor(engine, container) {
        this.detectsOn = "window";
        this.events = new Events();
        this.modes = new Modes(engine, container);
    }
    load(data) {
        if (!data) {
            return;
        }
        const detectsOn = data.detectsOn;
        if (detectsOn !== undefined) {
            this.detectsOn = detectsOn;
        }
        this.events.load(data.events);
        this.modes.load(data.modes);
    }
}
