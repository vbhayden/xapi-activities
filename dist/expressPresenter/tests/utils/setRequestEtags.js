"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (request, ifMatch, ifNoneMatch) {
    if (ifMatch !== undefined) {
        request.set('If-Match', "\"" + ifMatch + "\"");
    }
    if (ifNoneMatch !== undefined) {
        request.set('If-None-Match', "\"" + ifNoneMatch + "\"");
    }
    return request;
};
//# sourceMappingURL=setRequestEtags.js.map