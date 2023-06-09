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
/**
 * Describes the Firecracker version.
 * @export
 * @interface FirecrackerVersion
 */
export interface FirecrackerVersion {
    /**
     * Firecracker build version.
     * @type {string}
     * @memberof FirecrackerVersion
     */
    firecrackerVersion: string;
}
/**
 * Check if a given object implements the FirecrackerVersion interface.
 */
export declare function instanceOfFirecrackerVersion(value: object): boolean;
export declare function FirecrackerVersionFromJSON(json: any): FirecrackerVersion;
export declare function FirecrackerVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): FirecrackerVersion;
export declare function FirecrackerVersionToJSON(value?: FirecrackerVersion | null): any;
