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
var en_1 = require("jscommons/dist/translatorFactory/en");
var stringPath_1 = require("jscommons/dist/translatorFactory/utils/stringPath");
var translator = __assign({ conflictError: function () { return ('Get the profile to retrieve the Etag, then set the If-Match header to the Etag'); }, ifMatchError: function () { return ('IfMatch does not match Etag because a modification has been made since it was retrieved'); }, ifNoneMatchError: function () { return ('IfNoneMatch was used to detect that the resource was already present'); }, invalidContentTypeError: function (err) { return ("Content type (" + err.contentType + ") is invalid for alternate request syntax"); }, invalidMethodError: function (err) { return ("Method (" + err.method + ") is invalid for alternate request syntax"); }, maxEtagsError: function () { return ('IfMatch and IfNoneMatch cannot be used at the same time'); }, nonJsonObjectError: function () { return ('Expected a JSON object to be provided and stored (if it exists)'); }, xapiTypeWarning: function (warning) {
        var path = stringPath_1.default(warning.path);
        return "Expected " + warning.typeName + " in " + path;
    } }, en_1.default);
exports.default = translator;
//# sourceMappingURL=en.js.map