"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
exports.default = function (opts) {
    return path_1.join(opts.subfolder, opts.lrs_id, 'activityProfiles');
};
//# sourceMappingURL=getStorageDir.js.map