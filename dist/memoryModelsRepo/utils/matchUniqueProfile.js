"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var matchProfileIdentifier_1 = require("./matchProfileIdentifier");
exports.default = function (_a) {
    var client = _a.client, activityId = _a.activityId, profile = _a.profile, profileId = _a.profileId;
    return (matchProfileIdentifier_1.default({ client: client, activityId: activityId, profile: profile }) &&
        profile.profileId === profileId);
};
//# sourceMappingURL=matchUniqueProfile.js.map