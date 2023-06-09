import { withActivityHeartbeat } from "../utils";

import type { CreateActivity } from "~/agent/activities/types";
import { Token } from "~/token";

export type CleanUpWorkspaceInstanceLocalActivity = (args: {
  workspaceId: bigint;
  /** Used if there is no workspace instance associated with the workspace */
  vmInstanceId?: string;
}) => Promise<void>;
export const cleanUpWorkspaceInstanceLocal: CreateActivity<
  CleanUpWorkspaceInstanceLocalActivity
> = ({ injector, db }) =>
  withActivityHeartbeat({ intervalMs: 5000 }, async (args) => {
    const logger = injector.resolve(Token.Logger);
    const workspace = await db.workspace.findUniqueOrThrow({
      where: { id: args.workspaceId },
      include: {
        activeInstance: true,
      },
    });
    const vmInstanceId = workspace.activeInstance?.firecrackerInstanceId ?? args.vmInstanceId;
    if (vmInstanceId == null) {
      logger.warn(
        `No VM instance id found for workspace with id ${workspace.id}. Skipping local cleanup.`,
      );
      return;
    }
    const firecrackerService = injector.resolve(Token.FirecrackerService)(vmInstanceId);
    await firecrackerService.cleanup();
  });

export type CleanUpWorkspaceInstanceDbActivity = (args: {
  workspaceId: bigint;
  latestError: string;
}) => Promise<void>;
export const cleanUpWorkspaceInstanceDb: CreateActivity<CleanUpWorkspaceInstanceDbActivity> = ({
  injector,
  db,
}) =>
  withActivityHeartbeat({ intervalMs: 5000 }, async (args) => {
    const workspaceAgentService = injector.resolve(Token.WorkspaceAgentService);
    await db.$transaction((tdb) =>
      workspaceAgentService.cleanUpWorkspaceAfterErrorDb(tdb, args.workspaceId, args.latestError),
    );
  });
