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
exports.SnapshotCreateParamsToJSON = exports.SnapshotCreateParamsFromJSONTyped = exports.SnapshotCreateParamsFromJSON = exports.instanceOfSnapshotCreateParams = exports.SnapshotCreateParamsSnapshotTypeEnum = void 0;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.SnapshotCreateParamsSnapshotTypeEnum = {
    Full: 'Full',
    Diff: 'Diff'
};
/**
 * Check if a given object implements the SnapshotCreateParams interface.
 */
function instanceOfSnapshotCreateParams(value) {
    let isInstance = true;
    isInstance = isInstance && "memFilePath" in value;
    isInstance = isInstance && "snapshotPath" in value;
    return isInstance;
}
exports.instanceOfSnapshotCreateParams = instanceOfSnapshotCreateParams;
function SnapshotCreateParamsFromJSON(json) {
    return SnapshotCreateParamsFromJSONTyped(json, false);
}
exports.SnapshotCreateParamsFromJSON = SnapshotCreateParamsFromJSON;
function SnapshotCreateParamsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'memFilePath': json['mem_file_path'],
        'snapshotPath': json['snapshot_path'],
        'snapshotType': !(0, runtime_1.exists)(json, 'snapshot_type') ? undefined : json['snapshot_type'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.SnapshotCreateParamsFromJSONTyped = SnapshotCreateParamsFromJSONTyped;
function SnapshotCreateParamsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mem_file_path': value.memFilePath,
        'snapshot_path': value.snapshotPath,
        'snapshot_type': value.snapshotType,
        'version': value.version,
    };
}
exports.SnapshotCreateParamsToJSON = SnapshotCreateParamsToJSON;