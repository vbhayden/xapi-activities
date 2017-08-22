"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../../../utils/constants");
var testValues_1 = require("../../../../utils/testValues");
var supertest_1 = require("../../utils/supertest");
exports.default = function (activityId) {
    var profileId = testValues_1.TEST_PROFILE_ID;
    return supertest_1.default
        .delete('/xAPI/activities/profile')
        .set('X-Experience-API-Version', constants_1.xapiHeaderVersion)
        .query({ activityId: activityId, profileId: profileId });
};
//# sourceMappingURL=deleteProfile.js.map