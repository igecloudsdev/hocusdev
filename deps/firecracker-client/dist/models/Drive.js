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
exports.DriveToJSON = exports.DriveFromJSONTyped = exports.DriveFromJSON = exports.instanceOfDrive = exports.DriveIoEngineEnum = exports.DriveCacheTypeEnum = void 0;
const runtime_1 = require("../runtime");
const RateLimiter_1 = require("./RateLimiter");
/**
 * @export
 */
exports.DriveCacheTypeEnum = {
    Unsafe: 'Unsafe',
    Writeback: 'Writeback'
};
/**
 * @export
 */
exports.DriveIoEngineEnum = {
    Sync: 'Sync',
    Async: 'Async'
};
/**
 * Check if a given object implements the Drive interface.
 */
function instanceOfDrive(value) {
    let isInstance = true;
    isInstance = isInstance && "driveId" in value;
    isInstance = isInstance && "isReadOnly" in value;
    isInstance = isInstance && "isRootDevice" in value;
    isInstance = isInstance && "pathOnHost" in value;
    return isInstance;
}
exports.instanceOfDrive = instanceOfDrive;
function DriveFromJSON(json) {
    return DriveFromJSONTyped(json, false);
}
exports.DriveFromJSON = DriveFromJSON;
function DriveFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'driveId': json['drive_id'],
        'cacheType': !(0, runtime_1.exists)(json, 'cache_type') ? undefined : json['cache_type'],
        'isReadOnly': json['is_read_only'],
        'isRootDevice': json['is_root_device'],
        'partuuid': !(0, runtime_1.exists)(json, 'partuuid') ? undefined : json['partuuid'],
        'pathOnHost': json['path_on_host'],
        'rateLimiter': !(0, runtime_1.exists)(json, 'rate_limiter') ? undefined : (0, RateLimiter_1.RateLimiterFromJSON)(json['rate_limiter']),
        'ioEngine': !(0, runtime_1.exists)(json, 'io_engine') ? undefined : json['io_engine'],
    };
}
exports.DriveFromJSONTyped = DriveFromJSONTyped;
function DriveToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'drive_id': value.driveId,
        'cache_type': value.cacheType,
        'is_read_only': value.isReadOnly,
        'is_root_device': value.isRootDevice,
        'partuuid': value.partuuid,
        'path_on_host': value.pathOnHost,
        'rate_limiter': (0, RateLimiter_1.RateLimiterToJSON)(value.rateLimiter),
        'io_engine': value.ioEngine,
    };
}
exports.DriveToJSON = DriveToJSON;
