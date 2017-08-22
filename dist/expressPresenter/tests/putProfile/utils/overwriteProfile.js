"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../../../utils/constants");
var testValues_1 = require("../../../../utils/testValues");
var supertest_1 = require("../../utils/supertest");
exports.default = function (activityId, content) {
    var profileId = testValues_1.TEST_PROFILE_ID;
    return supertest_1.default
        .put('/xAPI/activities/profile')
        .set('X-Experience-API-Version', constants_1.xapiHeaderVersion)
        .set('Content-Type', testValues_1.TEXT_CONTENT_TYPE)
        .query({ activityId: activityId, profileId: profileId })
        .send(content);
};
//# sourceMappingURL=overwriteProfile.js.map