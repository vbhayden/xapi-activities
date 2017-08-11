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
var testValues_1 = require("../../../utils/testValues");
var httpCodes_1 = require("../../utils/httpCodes");
var createTextProfile_1 = require("../utils/createTextProfile");
var setRequestEtags_1 = require("../utils/setRequestEtags");
var setup_1 = require("../utils/setup");
describe('expressPresenter.putProfile with etags', function () {
    var _a = setup_1.default(), service = _a.service, supertest = _a.supertest;
    var overwriteProfileWithEtag = function (_a) {
        var ifMatch = _a.ifMatch, ifNoneMatch = _a.ifNoneMatch;
        var request = supertest.put('/xAPI/activities/profile');
        setRequestEtags_1.default(request, ifMatch, ifNoneMatch);
        return request
            .set('Content-Type', testValues_1.TEXT_CONTENT_TYPE)
            .query({
            activityId: testValues_1.TEST_ACTIVITY_ID,
            profileId: testValues_1.TEST_PROFILE_ID,
        })
            .send(testValues_1.TEST_CONTENT);
    };
    it('should allow overwrites when using a correct etag', function () { return __awaiter(_this, void 0, void 0, function () {
        var getProfileResult, opts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextProfile_1.default()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, service.getProfile({
                            activityId: testValues_1.TEST_ACTIVITY_ID,
                            client: testValues_1.TEST_CLIENT,
                            profileId: testValues_1.TEST_PROFILE_ID,
                        })];
                case 2:
                    getProfileResult = _a.sent();
                    opts = { ifMatch: getProfileResult.etag };
                    return [4 /*yield*/, overwriteProfileWithEtag(opts).expect(httpCodes_1.NO_CONTENT_204_HTTP_CODE)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should throw precondition error when using an incorrect ifMatch', function () { return __awaiter(_this, void 0, void 0, function () {
        var opts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextProfile_1.default()];
                case 1:
                    _a.sent();
                    opts = { ifMatch: 'incorrect_etag' };
                    return [4 /*yield*/, overwriteProfileWithEtag(opts).expect(httpCodes_1.PRECONDITION_FAILED_412_HTTP_CODE)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should throw precondition error when using an incorrect ifNoneMatch', function () { return __awaiter(_this, void 0, void 0, function () {
        var opts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextProfile_1.default()];
                case 1:
                    _a.sent();
                    opts = { ifNoneMatch: '*' };
                    return [4 /*yield*/, overwriteProfileWithEtag(opts).expect(httpCodes_1.PRECONDITION_FAILED_412_HTTP_CODE)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should throw conflict error when not using ifMatch or ifNoneMatch', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextProfile_1.default()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, overwriteProfileWithEtag({}).expect(httpCodes_1.CONFLICT_409_HTTP_CODE)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should throw max etag error when using ifMatch and ifNoneMatch', function () { return __awaiter(_this, void 0, void 0, function () {
        var opts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextProfile_1.default()];
                case 1:
                    _a.sent();
                    opts = { ifMatch: 'incorrect_etag', ifNoneMatch: '*' };
                    return [4 /*yield*/, overwriteProfileWithEtag(opts).expect(httpCodes_1.CLIENT_ERROR_400_HTTP_CODE)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=overwriteWithEtags.test.js.map