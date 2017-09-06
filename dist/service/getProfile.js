"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var stringToStream = require("string-to-stream");
var checkProfileReadScopes_1 = require("./utils/checkProfileReadScopes");
var validateActivityId_1 = require("./utils/validateActivityId");
exports.default = function (config) {
    return function (opts) { return __awaiter(_this, void 0, void 0, function () {
        var profile, profileContentResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    checkProfileReadScopes_1.default(opts.client.scopes);
                    validateActivityId_1.default(opts.activityId);
                    return [4 /*yield*/, config.repo.getProfile({
                            activityId: opts.activityId,
                            client: opts.client,
                            profileId: opts.profileId,
                        })];
                case 1:
                    profile = _a.sent();
                    if (profile.content !== undefined) {
                        return [2 /*return*/, {
                                content: stringToStream(JSON.stringify(profile.content)),
                                contentType: profile.contentType,
                                etag: profile.etag,
                                updatedAt: profile.updatedAt,
                            }];
                    }
                    return [4 /*yield*/, config.repo.getProfileContent({
                            key: profile.id + "." + profile.extension,
                            lrs_id: opts.client.lrs_id,
                        })];
                case 2:
                    profileContentResult = _a.sent();
                    return [2 /*return*/, {
                            content: profileContentResult.content,
                            contentType: profile.contentType,
                            etag: profile.etag,
                            updatedAt: profile.updatedAt,
                        }];
            }
        });
    }); };
};
//# sourceMappingURL=getProfile.js.map