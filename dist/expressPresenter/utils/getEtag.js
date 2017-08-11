"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (etagHeader) {
    if (etagHeader === undefined) {
        return undefined;
    }
    return etagHeader.replace(/\"/g, '');
};
//# sourceMappingURL=getEtag.js.map