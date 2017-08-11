"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
/* tslint:disable:no-let */
var lodash_1 = require("lodash");
var NonJsonObject_1 = require("../errors/NonJsonObject");
var checkEtag_1 = require("./utils/checkEtag");
var checkMaxEtags_1 = require("./utils/checkMaxEtags");
var createProfile_1 = require("./utils/createProfile");
var matchUniqueProfile_1 = require("./utils/matchUniqueProfile");
exports.default = function (config) {
    return function (opts) { return __awaiter(_this, void 0, void 0, function () {
        var isExistingProfile, activityId, profileId, client, ifMatch, ifNoneMatch;
        return __generator(this, function (_a) {
            isExistingProfile = false;
            activityId = opts.activityId, profileId = opts.profileId, client = opts.client, ifMatch = opts.ifMatch, ifNoneMatch = opts.ifNoneMatch;
            checkMaxEtags_1.default(ifMatch, ifNoneMatch);
            config.state.activityProfiles = config.state.activityProfiles.map(function (profile) {
                var isMatch = matchUniqueProfile_1.default({ client: client, activityId: activityId, profile: profile, profileId: profileId });
                var isJson = (isMatch &&
                    profile.contentType === 'application/json' &&
                    lodash_1.isPlainObject(profile.content));
                if (!isMatch) {
                    return profile;
                }
                checkEtag_1.default({ profile: profile, ifMatch: ifMatch, ifNoneMatch: ifNoneMatch });
                isExistingProfile = true;
                if (!isJson) {
                    throw new NonJsonObject_1.default();
                }
                return __assign({}, profile, { 
                    // Merges top-level properties in content.
                    content: __assign({}, profile.content, opts.content), etag: opts.etag, 
                    // Updates updatedAt time.
                    updatedAt: new Date() });
            });
            // Creates the Profile if the profile doesn't already exist.
            if (!isExistingProfile) {
                createProfile_1.default(config, opts);
            }
            return [2 /*return*/];
        });
    }); };
};
//# sourceMappingURL=patchProfile.js.map