"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Firecracker API
 * RESTful public-facing API. The API is accessible through HTTP calls on specific URLs carrying JSON modeled data. The transport medium is a Unix Domain Socket.
 *
 * The version of the OpenAPI document: 1.1.2
 * Contact: compute-capsule@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimiterToJSON = exports.RateLimiterFromJSONTyped = exports.RateLimiterFromJSON = exports.instanceOfRateLimiter = void 0;
const runtime_1 = require("../runtime");
const TokenBucket_1 = require("./TokenBucket");
/**
 * Check if a given object implements the RateLimiter interface.
 */
function instanceOfRateLimiter(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRateLimiter = instanceOfRateLimiter;
function RateLimiterFromJSON(json) {
    return RateLimiterFromJSONTyped(json, false);
}
exports.RateLimiterFromJSON = RateLimiterFromJSON;
function RateLimiterFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bandwidth': !(0, runtime_1.exists)(json, 'bandwidth') ? undefined : (0, TokenBucket_1.TokenBucketFromJSON)(json['bandwidth']),
        'ops': !(0, runtime_1.exists)(json, 'ops') ? undefined : (0, TokenBucket_1.TokenBucketFromJSON)(json['ops']),
    };
}
exports.RateLimiterFromJSONTyped = RateLimiterFromJSONTyped;
function RateLimiterToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bandwidth': (0, TokenBucket_1.TokenBucketToJSON)(value.bandwidth),
        'ops': (0, TokenBucket_1.TokenBucketToJSON)(value.ops),
    };
}
exports.RateLimiterToJSON = RateLimiterToJSON;
