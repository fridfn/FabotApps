import { getRangeValue, parseAlpha } from "./NumberUtils.js";
export class RgbColorManager {
    constructor() {
        this.key = "rgb";
        this.stringPrefix = "rgb";
    }
    handleColor(color) {
        const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
        if (rgbColor.r !== undefined) {
            return rgbColor;
        }
    }
    handleRangeColor(color) {
        const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
        if (rgbColor.r !== undefined) {
            return {
                r: getRangeValue(rgbColor.r),
                g: getRangeValue(rgbColor.g),
                b: getRangeValue(rgbColor.b),
            };
        }
    }
    parseString(input) {
        if (!input.startsWith(this.stringPrefix)) {
            return;
        }
        const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i, result = regex.exec(input), radix = 10, minLength = 4, defaultAlpha = 1;
        return result
            ? {
                a: result.length > minLength ? parseAlpha(result[5]) : defaultAlpha,
                b: parseInt(result[3], radix),
                g: parseInt(result[2], radix),
                r: parseInt(result[1], radix),
            }
            : undefined;
    }
}
