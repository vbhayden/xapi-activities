"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IfMatch_1 = require("../../errors/IfMatch");
var IfNoneMatch_1 = require("../../errors/IfNoneMatch");
exports.default = function (_a) {
    var profile = _a.profile, ifMatch = _a.ifMatch, ifNoneMatch = _a.ifNoneMatch;
    if (ifMatch !== undefined && profile.etag !== ifMatch) {
        throw new IfMatch_1.default();
    }
    if (ifNoneMatch !== undefined && ifNoneMatch === '*') {
        throw new IfNoneMatch_1.default();
    }
};
//# sourceMappingURL=checkEtag.js.map