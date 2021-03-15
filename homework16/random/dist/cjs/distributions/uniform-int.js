"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("../validation");
exports.default = (random, min = 0, max = 1) => {
    if (max === undefined) {
        max = min === undefined ? 1 : min;
        min = 0;
    }
    validation_1.numberValidator(min).isInt();
    validation_1.numberValidator(max).isInt();
    return () => {
        return (random.next() * (max - min + 1) + min) | 0;
    };
};
//# sourceMappingURL=uniform-int.js.map