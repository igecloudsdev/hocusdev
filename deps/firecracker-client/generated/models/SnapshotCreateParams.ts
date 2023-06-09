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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SnapshotCreateParams
 */
export interface SnapshotCreateParams {
    /**
     * Path to the file that will contain the guest memory.
     * @type {string}
     * @memberof SnapshotCreateParams
     */
    memFilePath: string;
    /**
     * Path to the file that will contain the microVM state.
     * @type {string}
     * @memberof SnapshotCreateParams
     */
    snapshotPath: string;
    /**
     * Type of snapshot to create. It is optional and by default, a full snapshot is created.
     * @type {string}
     * @memberof SnapshotCreateParams
     */
    snapshotType?: SnapshotCreateParamsSnapshotTypeEnum;
    /**
     * The microVM version for which we want to create the snapshot. It is optional and it defaults to the current version.
     * @type {string}
     * @memberof SnapshotCreateParams
     */
    version?: string;
}


/**
 * @export
 */
export const SnapshotCreateParamsSnapshotTypeEnum = {
    Full: 'Full',
    Diff: 'Diff'
} as const;
export type SnapshotCreateParamsSnapshotTypeEnum = typeof SnapshotCreateParamsSnapshotTypeEnum[keyof typeof SnapshotCreateParamsSnapshotTypeEnum];


/**
 * Check if a given object implements the SnapshotCreateParams interface.
 */
export function instanceOfSnapshotCreateParams(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "memFilePath" in value;
    isInstance = isInstance && "snapshotPath" in value;

    return isInstance;
}

export function SnapshotCreateParamsFromJSON(json: any): SnapshotCreateParams {
    return SnapshotCreateParamsFromJSONTyped(json, false);
}

export function SnapshotCreateParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SnapshotCreateParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'memFilePath': json['mem_file_path'],
        'snapshotPath': json['snapshot_path'],
        'snapshotType': !exists(json, 'snapshot_type') ? undefined : json['snapshot_type'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function SnapshotCreateParamsToJSON(value?: SnapshotCreateParams | null): any {
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

