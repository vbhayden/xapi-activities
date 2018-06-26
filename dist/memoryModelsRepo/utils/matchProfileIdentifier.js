"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (_a) {
    var client = _a.client, activityId = _a.activityId, profile = _a.profile;
    return (profile.organisation === client.organisation &&
        profile.lrs === client.lrs_id &&
        profile.activityId === activityId);
});
//# sourceMappingURL=matchProfileIdentifier.js.map