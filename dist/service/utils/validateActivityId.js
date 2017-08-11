"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr = require("rulr");
var xapi = require("xapi-validation/dist/factory");
exports.default = function (data) {
    return rulr.maybe(xapi.iri)(data, ['activityId']);
};
//# sourceMappingURL=validateActivityId.js.map