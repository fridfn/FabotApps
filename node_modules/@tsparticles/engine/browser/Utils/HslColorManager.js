import { getRangeValue, parseAlpha } from "./NumberUtils.js";
import { hslToRgb, hslaToRgba } from "./ColorUtils.js";
export class HslColorManager {
    constructor() {
        this.key = "hsl";
        this.stringPrefix = "hsl";
    }
    handleColor(color) {
        const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
        if (hslColor.h !== undefined && hslColor.s !== undefined && hslColor.l !== undefined) {
            return hslToRgb(hslColor);
        }
    }
    handleRangeColor(color) {
        const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
        if (hslColor.h !== undefined && hslColor.l !== undefined) {
            return hslToRgb({
                h: getRangeValue(hslColor.h),
                l: getRangeValue(hslColor.l),
                s: getRangeValue(hslColor.s),
            });
        }
    }
    parseString(input) {
        if (!input.startsWith("hsl")) {
            return;
        }
        const regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i, result = regex.exec(input), minLength = 4, defaultAlpha = 1, radix = 10;
        return result
            ? hslaToRgba({
                a: result.length > minLength ? parseAlpha(result[5]) : defaultAlpha,
                h: parseInt(result[1], radix),
                l: parseInt(result[3], radix),
                s: parseInt(result[2], radix),
            })
            : undefined;
    }
}
