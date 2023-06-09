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
exports.PartialDriveToJSON = exports.PartialDriveFromJSONTyped = exports.PartialDriveFromJSON = exports.instanceOfPartialDrive = void 0;
const runtime_1 = require("../runtime");
const RateLimiter_1 = require("./RateLimiter");
/**
 * Check if a given object implements the PartialDrive interface.
 */
function instanceOfPartialDrive(value) {
    let isInstance = true;
    isInstance = isInstance && "driveId" in value;
    return isInstance;
}
exports.instanceOfPartialDrive = instanceOfPartialDrive;
function PartialDriveFromJSON(json) {
    return PartialDriveFromJSONTyped(json, false);
}
exports.PartialDriveFromJSON = PartialDriveFromJSON;
function PartialDriveFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'driveId': json['drive_id'],
        'pathOnHost': !(0, runtime_1.exists)(json, 'path_on_host') ? undefined : json['path_on_host'],
        'rateLimiter': !(0, runtime_1.exists)(json, 'rate_limiter') ? undefined : (0, RateLimiter_1.RateLimiterFromJSON)(json['rate_limiter']),
    };
}
exports.PartialDriveFromJSONTyped = PartialDriveFromJSONTyped;
function PartialDriveToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'drive_id': value.driveId,
        'path_on_host': value.pathOnHost,
        'rate_limiter': (0, RateLimiter_1.RateLimiterToJSON)(value.rateLimiter),
    };
}
exports.PartialDriveToJSON = PartialDriveToJSON;
