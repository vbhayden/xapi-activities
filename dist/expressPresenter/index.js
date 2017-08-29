"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expressPresenter_1 = require("jscommons/dist/expressPresenter");
var deleteProfile_1 = require("./deleteProfile");
var getProfiles_1 = require("./getProfiles");
var postProfile_1 = require("./postProfile");
var putProfile_1 = require("./putProfile");
exports.default = function (config) {
    var router = expressPresenter_1.default(config);
    router.delete('/xAPI/activities/profile', deleteProfile_1.default(config));
    router.get('/xAPI/activities/profile', getProfiles_1.default(config));
    router.put('/xAPI/activities/profile', putProfile_1.default(config));
    router.post('/xAPI/activities/profile', postProfile_1.default(config));
    return router;
};
//# sourceMappingURL=index.js.map