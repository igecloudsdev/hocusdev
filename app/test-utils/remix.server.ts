/* eslint-disable @typescript-eslint/no-explicit-any */
import type { LoaderArgs, ActionArgs, TypedResponse } from "@remix-run/node";

import { provideDb } from "./db.server";

const provideArgs = (
  testFn: (args: LoaderArgs | ActionArgs) => Promise<void>,
): (() => Promise<void>) => {
  return provideDb(async (db) => {
    const args: LoaderArgs | ActionArgs = {
      context: { db, req: {} as any, res: {} as any, app: {} as any, user: undefined },
    };
    await testFn(args);
  });
};

export const provideLoaderArgs: (
  testFn: (args: LoaderArgs) => Promise<void>,
) => () => Promise<void> = provideArgs;
export const provideActionArgs: (
  testFn: (args: ActionArgs) => Promise<void>,
) => () => Promise<void> = provideArgs;

export const parseRemixData = async <T>(response: Promise<TypedResponse<T>>): Promise<T> => {
  return JSON.parse(await (await response).text());
};
