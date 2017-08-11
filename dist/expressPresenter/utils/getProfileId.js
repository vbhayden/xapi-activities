"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
exports.default = function (profileIdParam) {
    if (profileIdParam === undefined) {
        var warnings = [rulr_1.createRequiredWarning(profileIdParam, ['query', 'profileId'])];
        throw new rulr_1.Warnings({}, ['query'], warnings);
    }
    return profileIdParam;
};
//# sourceMappingURL=getProfileId.js.map