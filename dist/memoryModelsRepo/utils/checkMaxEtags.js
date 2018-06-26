"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MaxEtags_1 = require("../../errors/MaxEtags");
exports.default = (function (ifMatch, ifNoneMatch) {
    if (ifMatch !== undefined && ifNoneMatch !== undefined) {
        throw new MaxEtags_1.default();
    }
});
//# sourceMappingURL=checkMaxEtags.js.map