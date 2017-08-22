"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (etagHeader) {
    if (etagHeader === undefined) {
        return undefined;
    }
    console.log(etagHeader);
    return etagHeader.replace(/\"/g, '');
};
//# sourceMappingURL=getEtag.js.map