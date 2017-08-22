"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../../../utils/constants");
var testValues_1 = require("../../../../utils/testValues");
var supertest_1 = require("../../utils/supertest");
exports.default = function (content, contentType) {
    return supertest_1.default
        .post('/xAPI/activities/profile')
        .set('Content-Type', contentType)
        .set('X-Experience-API-Version', constants_1.xapiHeaderVersion)
        .query({
        activityId: testValues_1.TEST_ACTIVITY_ID,
        profileId: testValues_1.TEST_PROFILE_ID,
    })
        .send(content);
};
//# sourceMappingURL=patchContent.js.map