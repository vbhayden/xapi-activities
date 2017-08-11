"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkScopes_1 = require("jscommons/dist/service/utils/checkScopes");
var scopes_1 = require("../../utils/scopes");
exports.default = function (scopes) {
    checkScopes_1.default(scopes_1.PROFILE_READ_SCOPES, scopes);
};
//# sourceMappingURL=checkProfileReadScopes.js.map