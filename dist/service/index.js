"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = require("jscommons/dist/service");
var deleteProfile_1 = require("./deleteProfile");
var getClient_1 = require("./getClient");
var getProfile_1 = require("./getProfile");
var getProfiles_1 = require("./getProfiles");
var overwriteProfile_1 = require("./overwriteProfile");
var patchProfile_1 = require("./patchProfile");
exports.default = (function (config) {
    return __assign({}, service_1.default(config), { deleteProfile: deleteProfile_1.default(config), getClient: getClient_1.default(config), getProfile: getProfile_1.default(config), getProfiles: getProfiles_1.default(config), overwriteProfile: overwriteProfile_1.default(config), patchProfile: patchProfile_1.default(config) });
});
//# sourceMappingURL=index.js.map