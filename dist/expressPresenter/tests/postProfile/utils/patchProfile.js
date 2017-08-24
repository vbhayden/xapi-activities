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
var constants_1 = require("../../../../utils/constants");
var testValues_1 = require("../../../../utils/testValues");
var supertest_1 = require("../../utils/supertest");
exports.default = function (optsOverrides, content, contentType) {
    if (optsOverrides === void 0) { optsOverrides = {}; }
    if (content === void 0) { content = testValues_1.TEST_OBJECT_CONTENT; }
    if (contentType === void 0) { contentType = testValues_1.JSON_CONTENT_TYPE; }
    return supertest_1.default
        .post('/xAPI/activities/profile')
        .set('Content-Type', contentType)
        .set('X-Experience-API-Version', constants_1.xapiHeaderVersion)
        .query(__assign({ activityId: testValues_1.TEST_ACTIVITY_ID, profileId: testValues_1.TEST_PROFILE_ID }, optsOverrides))
        .send(content);
};
//# sourceMappingURL=patchProfile.js.map