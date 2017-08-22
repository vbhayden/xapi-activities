"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var getHeader = function (req, name, defaultVal) {
    if (defaultVal === void 0) { defaultVal = undefined; }
    return lodash_1.defaultTo(req.body[name], lodash_1.defaultTo(req.header(name), defaultVal));
};
exports.default = getHeader;
//# sourceMappingURL=getHeader.js.map