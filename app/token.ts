/* eslint-disable filename-rules/match */

import type { valueof } from "./types/utils";

/**
 * Injection tokens
 */
export type Token = valueof<typeof Token>;
export const Token = {
  Config: "ConfigT",
  Logger: "LoggerT",
  UserService: "UserServiceT",
  GoogleAnalyticsService: "GoogleAnalyticsServiceT",
  TaskService: "TaskServiceT",
  SendGAEventTaskRunnerService: "SendGAEventTaskRunnerServiceT",
  FirecrackerService: "FirecrackerServiceT",
  StorageService: "StorageServiceT",
  LowLevelStorageService: "LowLevelStorageServiceT",
} as const;
