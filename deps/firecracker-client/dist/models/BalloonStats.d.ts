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
 * Describes the balloon device statistics.
 * @export
 * @interface BalloonStats
 */
export interface BalloonStats {
    /**
     * Target number of pages the device aims to hold.
     * @type {number}
     * @memberof BalloonStats
     */
    targetPages: number;
    /**
     * Actual number of pages the device is holding.
     * @type {number}
     * @memberof BalloonStats
     */
    actualPages: number;
    /**
     * Target amount of memory (in MiB) the device aims to hold.
     * @type {number}
     * @memberof BalloonStats
     */
    targetMib: number;
    /**
     * Actual amount of memory (in MiB) the device is holding.
     * @type {number}
     * @memberof BalloonStats
     */
    actualMib: number;
    /**
     * The amount of memory that has been swapped in (in bytes).
     * @type {number}
     * @memberof BalloonStats
     */
    swapIn?: number;
    /**
     * The amount of memory that has been swapped out to disk (in bytes).
     * @type {number}
     * @memberof BalloonStats
     */
    swapOut?: number;
    /**
     * The number of major page faults that have occurred.
     * @type {number}
     * @memberof BalloonStats
     */
    majorFaults?: number;
    /**
     * The number of minor page faults that have occurred.
     * @type {number}
     * @memberof BalloonStats
     */
    minorFaults?: number;
    /**
     * The amount of memory not being used for any purpose (in bytes).
     * @type {number}
     * @memberof BalloonStats
     */
    freeMemory?: number;
    /**
     * The total amount of memory available (in bytes).
     * @type {number}
     * @memberof BalloonStats
     */
    totalMemory?: number;
    /**
     * An estimate of how much memory is available (in bytes) for starting new applications, without pushing the system to swap.
     * @type {number}
     * @memberof BalloonStats
     */
    availableMemory?: number;
    /**
     * The amount of memory, in bytes, that can be quickly reclaimed without additional I/O. Typically these pages are used for caching files from disk.
     * @type {number}
     * @memberof BalloonStats
     */
    diskCaches?: number;
    /**
     * The number of successful hugetlb page allocations in the guest.
     * @type {number}
     * @memberof BalloonStats
     */
    hugetlbAllocations?: number;
    /**
     * The number of failed hugetlb page allocations in the guest.
     * @type {number}
     * @memberof BalloonStats
     */
    hugetlbFailures?: number;
}
/**
 * Check if a given object implements the BalloonStats interface.
 */
export declare function instanceOfBalloonStats(value: object): boolean;
export declare function BalloonStatsFromJSON(json: any): BalloonStats;
export declare function BalloonStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BalloonStats;
export declare function BalloonStatsToJSON(value?: BalloonStats | null): any;
