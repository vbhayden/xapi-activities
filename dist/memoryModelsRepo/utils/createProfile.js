"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
exports.default = (function (config, opts) {
    var profile = {
        activityId: opts.activityId,
        content: opts.content,
        contentType: opts.contentType,
        etag: opts.etag,
        extension: opts.extension,
        id: uuid_1.v4(),
        lrs: opts.client.lrs_id,
        organisation: opts.client.organisation,
        profileId: opts.profileId,
        updatedAt: new Date(),
    };
    config.state.activityProfiles = config.state.activityProfiles.concat([
        profile,
    ]);
    return profile;
});
//# sourceMappingURL=createProfile.js.map